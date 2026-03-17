#!/usr/bin/env node

/**
 * Pre-commit hook to check if README needs updating based on staged changes
 * Runs before each commit to ensure documentation stays current
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Get list of staged files
 */
function getStagedFiles() {
    try {
        const output = execSync('git diff --cached --name-only', { encoding: 'utf-8' });
        return output.trim().split('\n').filter(Boolean);
    } catch (error) {
        return [];
    }
}

/**
 * Check if README needs attention based on changed files
 */
function checkReadmeNeeded(stagedFiles) {
    const triggers = {
        'package.json': 'npm scripts or dependencies changed',
        '.github/workflows/': 'CI/CD workflow modified',
        'scripts/': 'utility scripts added or modified',
        '.markdownlint.json': 'markdown lint rules changed',
        '.prettierrc.json': 'prettier configuration changed',
        '.gitignore': 'git ignore rules changed',
        'CONTRIBUTING.md': 'contribution guidelines changed',
        '.husky/': 'git hooks modified',
    };

    const reasons = [];

    for (const file of stagedFiles) {
        for (const [pattern, reason] of Object.entries(triggers)) {
            if (file.includes(pattern) && !file.includes('README.md')) {
                reasons.push({ file, reason });
            }
        }
    }

    // Check for new folders in docs/
    const newDocsFolders = stagedFiles.filter(f =>
        f.startsWith('docs/') &&
        f.split('/').length >= 2 &&
        !f.includes('_template.md')
    );

    if (newDocsFolders.length > 0) {
        const uniqueFolders = [...new Set(newDocsFolders.map(f => {
            const parts = f.split('/');
            return parts.slice(0, 2).join('/');
        }))];

        for (const folder of uniqueFolders) {
            reasons.push({
                file: folder,
                reason: 'new documentation section added'
            });
        }
    }

    return reasons;
}

/**
 * Check if README was already updated in this commit
 */
function isReadmeStaged(stagedFiles) {
    return stagedFiles.some(f => f === 'README.md');
}

/**
 * Main execution
 */
function main() {
    const stagedFiles = getStagedFiles();

    if (stagedFiles.length === 0) {
        log('✅ No staged files to check', 'green');
        return 0;
    }

    const reasons = checkReadmeNeeded(stagedFiles);

    if (reasons.length === 0) {
        log('✅ No README updates needed for these changes', 'green');
        return 0;
    }

    const readmeStaged = isReadmeStaged(stagedFiles);

    log('\n📝 README Update Check', 'cyan');
    log('━'.repeat(50), 'cyan');
    log('\nThe following changes may require README updates:\n', 'yellow');

    for (const { file, reason } of reasons) {
        log(`  • ${file}`, 'yellow');
        log(`    → ${reason}`, 'reset');
    }

    if (readmeStaged) {
        log('\n✅ README.md is already staged in this commit', 'green');
        log('Proceeding with commit...', 'green');
        return 0;
    }

    log('\n⚠️  Consider updating README.md to reflect these changes:', 'yellow');
    log('  1. Review the changed files above', 'reset');
    log('  2. Update README.md if needed', 'reset');
    log('  3. Stage README.md: git add README.md', 'reset');
    log('  4. Commit again', 'reset');

    log('\n💡 Or continue without README update (not recommended):', 'cyan');
    log('  git commit --no-verify', 'reset');

    // Don't block the commit, just warn
    log('\nℹ️  Continuing with commit (warning only)...', 'cyan');
    return 0;
}

process.exit(main());
