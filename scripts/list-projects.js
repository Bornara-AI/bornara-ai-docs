#!/usr/bin/env node

/**
 * List all projects in the portfolio
 * Usage: node scripts/list-projects.js
 */

const fs = require('fs');
const { globSync } = require('glob');

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    red: '\x1b[31m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function getStatusColor(status) {
    switch (status) {
        case 'active':
            return 'green';
        case 'planned':
            return 'cyan';
        case 'completed':
            return 'yellow';
        case 'on-hold':
            return 'red';
        default:
            return 'reset';
    }
}

function listProjects() {
    log('\n📁 Bornara AI Project Portfolio', 'cyan');
    log('━'.repeat(80), 'cyan');

    // Find all project.json files
    const projectFiles = globSync('docs/05_Projects/*/project.json');

    if (projectFiles.length === 0) {
        log('\n⚠️  No projects found\n', 'yellow');
        return;
    }

    const projects = [];

    for (const file of projectFiles) {
        try {
            const content = fs.readFileSync(file, 'utf-8');
            const project = JSON.parse(content);
            projects.push(project);
        } catch (error) {
            log(`   ✗ Error reading ${file}: ${error.message}`, 'red');
        }
    }

    // Sort by status then name
    const statusOrder = { active: 1, planned: 2, 'on-hold': 3, completed: 4 };
    projects.sort((a, b) => {
        const statusDiff = (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
        return statusDiff || a.name.localeCompare(b.name);
    });

    // Group by status
    const grouped = {};
    for (const project of projects) {
        const status = project.status || 'unknown';
        if (!grouped[status]) {
            grouped[status] = [];
        }
        grouped[status].push(project);
    }

    // Display by status
    for (const [status, projectList] of Object.entries(grouped)) {
        const statusText = status.toUpperCase();
        log(`\n${statusText} (${projectList.length})`, getStatusColor(status));
        log('─'.repeat(80), getStatusColor(status));

        for (const project of projectList) {
            log(`\n  ${project.name}`, 'reset');
            log(`    ID:          ${project.id}`, 'reset');
            log(`    Owner:       ${project.owner}`, 'reset');
            log(`    Phase:       ${project.phase}`, 'reset');
            log(`    Start Date:  ${project.startDate || 'TBD'}`, 'reset');
            if (project.technologies && project.technologies.length > 0) {
                log(`    Tech Stack:  ${project.technologies.join(', ')}`, 'reset');
            }
            log(`    Location:    docs/05_Projects/${project.id}/`, 'cyan');
        }
    }

    // Summary
    log('\n━'.repeat(80), 'cyan');
    log(`📊 Total Projects: ${projects.length}`, 'cyan');
    for (const [status, projectList] of Object.entries(grouped)) {
        log(`   ${status}: ${projectList.length}`, getStatusColor(status));
    }
    log('');
}

listProjects();
