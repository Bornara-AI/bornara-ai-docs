#!/usr/bin/env node

/**
 * Validate all internal markdown links in documentation
 * Usage: node scripts/validate-cross-refs.js
 */

const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Strip fenced code blocks from markdown content so links inside
 * code examples are not treated as real cross-references.
 * Replaces code block bodies with blank lines to preserve line numbering.
 */
function stripCodeBlocks(content) {
    return content.replace(/^(`{3,})[^\n]*\n[\s\S]*?^\1\s*$/gm, (match) => {
        // Keep the same number of newlines so line counts stay accurate
        return match.replace(/[^\n]/g, '');
    });
}

/**
 * Extract markdown links from file content
 */
function extractLinks(content, filePath) {
    const safeContent = stripCodeBlocks(content);
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;

    while ((match = linkRegex.exec(safeContent)) !== null) {
        const [fullMatch, text, url] = match;

        // Only process relative markdown links
        if (!url.startsWith('http') && !url.startsWith('mailto:') && !url.startsWith('#')) {
            links.push({
                text,
                url,
                line: safeContent.substring(0, match.index).split('\n').length,
            });
        }
    }

    return links;
}

/**
 * Resolve relative link to absolute file path
 */
function resolveLink(fromFile, linkUrl) {
    // Remove anchor (#section)
    const urlWithoutAnchor = linkUrl.split('#')[0];
    if (!urlWithoutAnchor) return null; // Anchor-only link

    const fromDir = path.dirname(fromFile);
    const resolved = path.resolve(fromDir, urlWithoutAnchor);

    return resolved;
}

/**
 * Check if file or directory exists
 */
function fileExists(filePath) {
    try {
        return fs.existsSync(filePath);
    } catch {
        return false;
    }
}

/**
 * Main validation function
 */
function validateCrossReferences() {
    log('\n🔗 Cross-Reference Validator', 'cyan');
    log('━'.repeat(60), 'cyan');

    // Find all markdown files
    const files = globSync('docs/**/*.md', {
        ignore: ['**/node_modules/**', '**/_template.md'],
    });

    log(`\nScanning ${files.length} markdown files...\n`, 'reset');

    const broken = [];
    const warnings = [];
    let totalLinks = 0;

    for (const file of files) {
        let content;
        try {
            content = fs.readFileSync(file, 'utf-8');
        } catch (err) {
            warnings.push({ file, line: 0, issue: `Could not read file: ${err.message}`, url: '' });
            continue;
        }
        const links = extractLinks(content, file);
        totalLinks += links.length;

        for (const link of links) {
            const targetPath = resolveLink(file, link.url);

            if (targetPath) {
                if (!fileExists(targetPath)) {
                    broken.push({
                        file,
                        line: link.line,
                        text: link.text,
                        url: link.url,
                        resolved: targetPath,
                    });
                }
            }

            // Check for common issues
            if (link.url.includes('\\')) {
                warnings.push({
                    file,
                    line: link.line,
                    issue: 'Backslash in URL (use forward slash)',
                    url: link.url,
                });
            }

            // Warn about missing .md only for links that look like they should be markdown
            // Skip: directory links (ending in /), non-md files (.pdf, .xlsx, .docx, etc.)
            const hasExtension = /\.[a-zA-Z0-9]+$/.test(link.url.split('#')[0]);
            const isDirectoryLink = link.url.endsWith('/');
            if (!link.url.endsWith('.md') && !link.url.includes('#') && !hasExtension && !isDirectoryLink) {
                warnings.push({
                    file,
                    line: link.line,
                    issue: 'Missing .md extension',
                    url: link.url,
                });
            }
        }
    }

    // Report results
    log(`📊 Summary:`, 'cyan');
    log(`   Total links checked: ${totalLinks}`, 'reset');
    log(`   Broken links: ${broken.length}`, broken.length > 0 ? 'red' : 'green');
    log(`   Warnings: ${warnings.length}`, warnings.length > 0 ? 'yellow' : 'green');

    if (broken.length > 0) {
        log('\n❌ Broken Links:', 'red');
        for (const item of broken) {
            log(`\n   ${item.file}:${item.line}`, 'red');
            log(`   → [${item.text}](${item.url})`, 'reset');
            log(`   → Target not found: ${item.resolved}`, 'reset');
        }
    }

    if (warnings.length > 0) {
        log('\n⚠️  Warnings:', 'yellow');
        for (const item of warnings) {
            log(`\n   ${item.file}:${item.line}`, 'yellow');
            log(`   → ${item.issue}: ${item.url}`, 'reset');
        }
    }

    if (broken.length === 0 && warnings.length === 0) {
        log('\n✅ All cross-references are valid!', 'green');
        return 0;
    }

    return broken.length > 0 ? 1 : 0;
}

// Run validation
process.exit(validateCrossReferences());
