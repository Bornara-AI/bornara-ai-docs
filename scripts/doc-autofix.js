#!/usr/bin/env node
/**
 * doc-autofix.js — Interactive front-matter fixer with permission gates
 *
 * Usage:
 *   npm run doc:fix                 # Scan all docs, interactive prompts
 *   npm run doc:fix:staged          # Only staged .md files, interactive if TTY
 *   node scripts/doc-autofix.js --yes   # Auto-approve all (CI / scripted use only)
 *
 * Permission model:
 *   Markdown / lint issues  →  auto-fixed silently by markdownlint-cli2 --fix (not this script)
 *   Missing front-matter    →  proposes sensible defaults, ASKS PERMISSION before writing
 *   Existing field values   →  NEVER overwritten without explicit 'e' (edit) confirmation
 *   Non-interactive (IDE)   →  warns but does NOT block commit (exit 0)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync, spawnSync } = require('child_process');
const { glob } = require('glob');

// ─── CLI flags ──────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const STAGED_ONLY = args.includes('--staged');
const AUTO_YES = args.includes('--yes');
const IS_TTY = process.stdin.isTTY;

// ─── Defaults ───────────────────────────────────────────────────────────────
const TODAY = new Date().toISOString().slice(0, 10);
const DEFAULT_OWNER = 'Mahdi Moradi';
const DEFAULT_STATUS = 'Draft';
const DEFAULT_VERSION = '0.1.0';

const REQUIRED_FIELDS = [
  'Owner:',
  'Status:',
  'Version:',
  'Last Updated:',
  'Applies To:',
];

const VALID_STATUSES = new Set(['Draft', 'Reviewed', 'Approved']);

// ─── Helpers ────────────────────────────────────────────────────────────────
function inferAppliesTo(filePath) {
  const parts = filePath.replace(/\\/g, '/').split('/');
  const projectIdx = parts.indexOf('05_Projects');
  if (projectIdx !== -1 && parts[projectIdx + 1]) {
    return parts[projectIdx + 1]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return 'Bornara AI';
}

function extractField(text, label) {
  // Handles both bold (**Owner:** value) and plain (Owner: value) formats
  const pattern = new RegExp(
    `\\*{0,2}${label.replace(':', ':\\*{0,2}')}\\s*(.+)`,
    'i'
  );
  const m = text.match(pattern);
  return m ? m[1].trim().replace(/\*+$/, '').trim() : null;
}

function getMissing(text) {
  return REQUIRED_FIELDS.filter((f) => !text.includes(f));
}

function getInvalidStatus(text) {
  const val = extractField(text, 'Status:');
  if (val && !VALID_STATUSES.has(val)) return val;
  return null;
}

function buildProposed(text, filePath) {
  return {
    owner: extractField(text, 'Owner:') || DEFAULT_OWNER,
    status: extractField(text, 'Status:') || DEFAULT_STATUS,
    version: extractField(text, 'Version:') || DEFAULT_VERSION,
    lastUpdated: extractField(text, 'Last Updated:') || TODAY,
    appliesTo: extractField(text, 'Applies To:') || inferAppliesTo(filePath),
  };
}

function buildFrontMatterLines(fields) {
  return [
    `**Owner:** ${fields.owner}`,
    `**Status:** ${fields.status}`,
    `**Version:** ${fields.version}`,
    `**Last Updated:** ${fields.lastUpdated}`,
    `**Applies To:** ${fields.appliesTo}`,
  ].join('\n');
}

/**
 * Rebuilds the file content:
 * - Preserves the # Title line
 * - Removes any previous inline front-matter block (bold-field lines at top)
 * - Inserts clean per-line front-matter block after the title
 * - Appends the rest of the document
 */
function rebuildFile(text, fields) {
  const lines = text.split(/\r?\n/);
  const titleLine = lines[0]; // expected: # Title

  // Strip old front-matter blob: consecutive non-empty lines after the title
  // until we hit a blank line followed by a heading or real content
  let bodyStart = 1;
  // Skip blank lines right after title
  while (bodyStart < lines.length && lines[bodyStart].trim() === '') bodyStart++;
  // Skip front-matter field lines (lines that contain bold **Field:** markers)
  while (
    bodyStart < lines.length &&
    /^\*{0,2}(Owner|Status|Version|Last Updated|Applies To)\*{0,2}:/i.test(
      lines[bodyStart]
    )
  ) {
    bodyStart++;
  }
  // Skip any blank lines after old front-matter
  while (bodyStart < lines.length && lines[bodyStart].trim() === '') bodyStart++;

  const body = lines.slice(bodyStart).join('\n').trimEnd();
  const fm = buildFrontMatterLines(fields);

  return body
    ? `${titleLine}\n\n${fm}\n\n${body}\n`
    : `${titleLine}\n\n${fm}\n`;
}

// ─── File collection ─────────────────────────────────────────────────────────
async function getFiles() {
  if (STAGED_ONLY) {
    try {
      const out = execSync('git diff --name-only --cached --diff-filter=ACM', {
        encoding: 'utf8',
      });
      return out
        .trim()
        .split('\n')
        .filter(
          (f) =>
            f.endsWith('.md') &&
            f.startsWith('docs/') &&
            !f.endsWith('_template.md') &&
            !f.includes('/shared/')
        )
        .map((f) => path.resolve(process.cwd(), f));
    } catch {
      return [];
    }
  }

  const found = await glob('docs/**/*.md', {
    ignore: ['docs/**/_template.md', 'docs/**/shared/**'],
    cwd: process.cwd(),
  });
  return found.map((f) => path.resolve(process.cwd(), f));
}

// ─── Interactive prompt ──────────────────────────────────────────────────────
function question(rl, q) {
  return new Promise((resolve) => rl.question(q, resolve));
}

// ─── Core logic ──────────────────────────────────────────────────────────────
async function main() {
  const files = await getFiles();

  if (files.length === 0) {
    console.log('✅  No docs files to check.');
    process.exit(0);
  }

  // Build issues list
  const issues = [];
  for (const file of files) {
    let text;
    try {
      text = fs.readFileSync(file, 'utf8');
    } catch {
      continue;
    }
    const missing = getMissing(text);
    const badStatus = getInvalidStatus(text);
    if (missing.length > 0 || badStatus) {
      issues.push({
        file,
        text,
        missing,
        badStatus,
        proposed: buildProposed(text, file),
      });
    }
  }

  if (issues.length === 0) {
    console.log(`✅  Front-matter OK in all ${files.length} checked file(s).`);
    process.exit(0);
  }

  // ── Non-interactive (IDE / piped) — warn only, never block ────────────────
  if (!IS_TTY && !AUTO_YES) {
    console.log(
      `\n⚠️   Front-matter issues detected in ${issues.length} file(s):`
    );
    for (const { file, missing, badStatus } of issues) {
      const rel = path.relative(process.cwd(), file);
      const problems = [
        ...missing.map((f) => `missing ${f}`),
        ...(badStatus ? [`invalid Status "${badStatus}"`] : []),
      ].join(', ');
      console.log(`  📄 ${rel} — ${problems}`);
    }
    console.log(
      '\n💡  Run "npm run doc:fix" in a terminal to fix these interactively.\n'
    );
    process.exit(0); // warn only, do not block non-interactive commits
  }

  // ── Interactive / --yes mode ──────────────────────────────────────────────
  console.log(
    `\n🔍  Found front-matter issues in ${issues.length} file(s):\n`
  );
  for (const { file, missing, badStatus } of issues) {
    const rel = path.relative(process.cwd(), file);
    const problems = [
      ...missing.map((f) => `missing ${f}`),
      ...(badStatus ? [`invalid Status "${badStatus}"`] : []),
    ].join(', ');
    console.log(`  📄 ${rel}`);
    console.log(`     ${problems}\n`);
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let applyAll = AUTO_YES;
  let fixedCount = 0;
  let skippedCount = 0;
  let remainingIssues = 0;

  if (!AUTO_YES) {
    const all = await question(
      rl,
      `Fix ALL ${issues.length} file(s) with proposed defaults? (y = yes all / n = ask per file / q = quit) `
    );
    if (all.toLowerCase() === 'q') {
      rl.close();
      console.log('\n👋  Aborted. No files changed.');
      process.exit(0);
    }
    applyAll = all.toLowerCase() === 'y';
  }

  for (const { file, text, proposed, missing, badStatus } of issues) {
    const rel = path.relative(process.cwd(), file);
    let apply = applyAll;
    let fields = { ...proposed };

    if (!applyAll) {
      console.log(`\n${'─'.repeat(60)}`);
      console.log(`📄 ${rel}`);
      if (missing.length) console.log(`   Missing  : ${missing.join(', ')}`);
      if (badStatus) console.log(`   Bad status: "${badStatus}"`);
      console.log('   Proposed:');
      console.log(`     Owner        : ${fields.owner}`);
      console.log(`     Status       : ${fields.status}`);
      console.log(`     Version      : ${fields.version}`);
      console.log(`     Last Updated : ${fields.lastUpdated}`);
      console.log(`     Applies To   : ${fields.appliesTo}`);

      const ans = await question(
        rl,
        '   Apply? (y = yes / n = skip / e = edit fields) '
      );

      if (ans.toLowerCase() === 'e') {
        const o = await question(rl, `   Owner [${fields.owner}]: `);
        if (o.trim()) fields.owner = o.trim();

        let s = '';
        while (!VALID_STATUSES.has(s)) {
          s = await question(
            rl,
            `   Status [${fields.status}] (Draft/Reviewed/Approved): `
          );
          if (!s.trim()) { s = fields.status; break; }
          if (!VALID_STATUSES.has(s)) console.log('   ❌ Must be Draft, Reviewed, or Approved');
        }
        fields.status = s;

        const v = await question(rl, `   Version [${fields.version}]: `);
        if (v.trim()) fields.version = v.trim();

        const d = await question(rl, `   Last Updated [${fields.lastUpdated}]: `);
        if (d.trim()) fields.lastUpdated = d.trim();

        const at = await question(rl, `   Applies To [${fields.appliesTo}]: `);
        if (at.trim()) fields.appliesTo = at.trim();

        apply = true;
      } else {
        apply = ans.toLowerCase() === 'y';
      }
    }

    if (apply) {
      const fixed = rebuildFile(text, fields);
      fs.writeFileSync(file, fixed, 'utf8');
      if (STAGED_ONLY) {
        // Use spawnSync with arg array — no shell involved, no path injection risk
        spawnSync('git', ['add', path.relative(process.cwd(), file)], {
          stdio: 'ignore',
        });
      }
      console.log(`   ✅  Fixed: ${rel}`);
      fixedCount++;
    } else {
      console.log(`   ⏭️   Skipped: ${rel}`);
      skippedCount++;
      remainingIssues++;
    }
  }

  rl.close();

  console.log(`\n${'─'.repeat(60)}`);
  console.log(
    `📊  Summary: ${fixedCount} fixed, ${skippedCount} skipped (${issues.length} total issues)`
  );

  if (remainingIssues > 0) {
    console.log(
      `\n⚠️   ${remainingIssues} file(s) still have front-matter issues.`
    );
    console.log(
      '    These will be caught by the Guardian CI check on your PR.'
    );
    console.log('    Run "npm run doc:fix" again when ready.\n');
    process.exit(1);
  }

  console.log('\n✅  All front-matter issues resolved.\n');
  process.exit(0);
}

main().catch((err) => {
  console.error('\n❌  doc-autofix error:', err.message);
  process.exit(1);
});
