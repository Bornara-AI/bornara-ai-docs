#!/usr/bin/env node

/**
 * Generate project registry markdown from project.json files
 * Usage: node scripts/generate-project-registry.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function generateRegistry() {
    log('\n📋 Generating Project Registry', 'cyan');
    log('━'.repeat(60), 'cyan');

    // Find all project.json files
    const projectFiles = glob.sync('docs/05_Projects/*/project.json');

    if (projectFiles.length === 0) {
        log('\n⚠️  No projects found\n', 'reset');
        return;
    }

    const projects = [];

    for (const file of projectFiles) {
        try {
            const content = fs.readFileSync(file, 'utf-8');
            const project = JSON.parse(content);
            projects.push(project);
            log(`   ✓ Found: ${project.name}`, 'green');
        } catch (error) {
            log(`   ✗ Error reading ${file}: ${error.message}`, 'reset');
        }
    }

    // Sort by name
    projects.sort((a, b) => a.name.localeCompare(b.name));

    // Generate markdown
    const today = new Date().toISOString().split('T')[0];
    const markdown = `# Project Registry

**Owner:** Portfolio Management Team
**Status:** Approved
**Version:** 1.0.0
**Last Updated:** ${today}
**Applies To:** Bornara AI

## Overview

This document provides a comprehensive list of all projects in the Bornara AI portfolio, their
current status, and ownership.

## Active Projects

| Project | Owner | Status | Phase | Technologies |
|---------|-------|--------|-------|--------------|
${projects
            .filter((p) => p.status === 'active')
            .map(
                (p) =>
                    `| [${p.name}](../05_Projects/${p.id}/README.md) | ${p.owner} | ${p.status} | ${p.phase} | ${p.technologies.slice(0, 3).join(', ') || 'TBD'} |`
            )
            .join('\n') || '| _No active projects_ | | | | |'}

## Planned Projects

| Project | Owner | Status | Phase | Start Date |
|---------|-------|--------|-------|------------|
${projects
            .filter((p) => p.status === 'planned')
            .map(
                (p) =>
                    `| [${p.name}](../05_Projects/${p.id}/README.md) | ${p.owner} | ${p.status} | ${p.phase} | ${p.startDate || 'TBD'} |`
            )
            .join('\n') || '| _No planned projects_ | | | | |'}

## Completed Projects

| Project | Owner | Status | Completion Date |
|---------|-------|--------|-----------------|
${projects
            .filter((p) => p.status === 'completed')
            .map((p) => `| [${p.name}](../05_Projects/${p.id}/README.md) | ${p.owner} | ${p.status} | ${p.endDate || 'TBD'} |`)
            .join('\n') || '| _No completed projects_ | | | |'}

## On Hold Projects

| Project | Owner | Status | Reason |
|---------|-------|--------|--------|
${projects
            .filter((p) => p.status === 'on-hold')
            .map(
                (p) => `| [${p.name}](../05_Projects/${p.id}/README.md) | ${p.owner} | ${p.status} | ${p.holdReason || 'TBD'} |`
            )
            .join('\n') || '| _No on-hold projects_ | | | |'}

## Portfolio Statistics

- **Total Projects:** ${projects.length}
- **Active:** ${projects.filter((p) => p.status === 'active').length}
- **Planned:** ${projects.filter((p) => p.status === 'planned').length}
- **Completed:** ${projects.filter((p) => p.status === 'completed').length}
- **On Hold:** ${projects.filter((p) => p.status === 'on-hold').length}

## Project Details

${projects
            .map(
                (p) => `### ${p.name}

- **ID:** \`${p.id}\`
- **Description:** ${p.description}
- **Owner:** ${p.owner}
- **Status:** ${p.status}
- **Phase:** ${p.phase}
- **Technologies:** ${p.technologies.join(', ') || 'TBD'}
- **Repository:** ${p.repository || 'TBD'}
- **Documentation:** [View Docs](../05_Projects/${p.id}/README.md)
`
            )
            .join('\n')}

## Standards and Governance

All projects must adhere to:

- [Documentation Standards](../02_Standards_and_Governance/documentation-standards.md)
- [Architecture Principles](../02_Standards_and_Governance/architecture-principles.md)
- [Security Policies](../02_Standards_and_Governance/security-policies.md)

## Adding a New Project

To add a new project to the portfolio:

1. Run: \`npm run project:create -- --name "Project Name" --id "project-id" --owner "Your Name"\`
2. Update the generated \`project.json\` with accurate details
3. Fill in project documentation
4. Run: \`npm run registry:update\` to regenerate this file

## Support

For questions about the project portfolio, contact the Portfolio Management Team.
`;

    // Write to file
    const outputPath = path.join('docs', '01_Portfolio_Management', 'project-registry.md');
    fs.writeFileSync(outputPath, markdown);

    log(`\n✅ Project registry generated: ${outputPath}`, 'green');
    log(`   ${projects.length} projects documented\n`, 'reset');
}

generateRegistry();
