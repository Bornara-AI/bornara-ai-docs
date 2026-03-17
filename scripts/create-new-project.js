#!/usr/bin/env node

/**
 * Create a new project in the Bornara AI documentation system
 * Usage: node scripts/create-new-project.js --name "Project Name" --id "project-id"
 */

const fs = require('fs');
const path = require('path');

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function parseArgs() {
    const args = process.argv.slice(2);
    const parsed = {};

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--name' && args[i + 1]) {
            parsed.name = args[i + 1];
            i++;
        } else if (args[i] === '--id' && args[i + 1]) {
            parsed.id = args[i + 1];
            i++;
        } else if (args[i] === '--owner' && args[i + 1]) {
            parsed.owner = args[i + 1];
            i++;
        }
    }

    return parsed;
}

function createProjectStructure(projectId, projectName, owner) {
    const projectPath = path.join('docs', '05_Projects', projectId);
    const today = new Date().toISOString().split('T')[0];

    log(`\n📁 Creating project structure for: ${projectName}`, 'cyan');
    log('━'.repeat(60), 'cyan');

    // Create folder structure
    const folders = [
        projectPath,
        path.join(projectPath, '00_Project_Overview'),
        path.join(projectPath, '01_Architecture'),
        path.join(projectPath, '02_Data_and_Messaging'),
        path.join(projectPath, '03_Platform_Services'),
        path.join(projectPath, '04_Operations'),
    ];

    for (const folder of folders) {
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
            log(`   ✓ Created ${folder}`, 'green');
        }
    }

    // Create project.json
    const projectJson = {
        id: projectId,
        name: projectName,
        description: `${projectName} project documentation`,
        status: 'planned',
        phase: 'initiation',
        owner: owner || 'TBD',
        team: [],
        startDate: today,
        technologies: [],
        repository: `https://github.com/Bornara-AI/${projectId}`,
        documentation: `/docs/05_Projects/${projectId}/`,
        parentStandards: [
            '/docs/02_Standards_and_Governance/documentation-standards.md',
            '/docs/02_Standards_and_Governance/architecture-principles.md',
        ],
    };

    const projectJsonPath = path.join(projectPath, 'project.json');
    fs.writeFileSync(projectJsonPath, JSON.stringify(projectJson, null, 2));
    log(`   ✓ Created ${projectJsonPath}`, 'green');

    // Create README.md
    const readmeContent = `# ${projectName}

**Owner:** ${owner || 'TBD'}
**Status:** Draft
**Version:** 0.1.0
**Last Updated:** ${today}
**Applies To:** ${projectName}

## Overview

[Brief description of the project]

## Documentation Structure

- [Project Overview](00_Project_Overview/README.md) - Vision, goals, and scope
- [Architecture](01_Architecture/README.md) - System design and architecture
- [Data and Messaging](02_Data_and_Messaging/README.md) - Data models and messaging patterns
- [Platform Services](03_Platform_Services/README.md) - Core platform services
- [Operations](04_Operations/README.md) - Operations and maintenance

## Quick Links

- [Company Standards](../../02_Standards_and_Governance/)
- [Project Registry](../../01_Portfolio_Management/project-registry.md)
- [Technology Stack](../../04_Technology_Stack/)

## Status

**Current Phase:** Initiation
**Last Review:** ${today}

## Team

- **Project Owner:** ${owner || 'TBD'}
- **Technical Lead:** TBD
- **Team Members:** TBD
`;

    const readmePath = path.join(projectPath, 'README.md');
    fs.writeFileSync(readmePath, readmeContent);
    log(`   ✓ Created ${readmePath}`, 'green');

    // Create section READMEs
    const sections = [
        {
            folder: '00_Project_Overview',
            title: 'Project Overview',
            description: 'High-level project information, vision, and goals',
        },
        {
            folder: '01_Architecture',
            title: 'Architecture',
            description: 'System architecture, design decisions, and technical overview',
        },
        {
            folder: '02_Data_and_Messaging',
            title: 'Data and Messaging',
            description: 'Data models, schemas, and messaging patterns',
        },
        {
            folder: '03_Platform_Services',
            title: 'Platform Services',
            description: 'Core platform services and APIs',
        },
        {
            folder: '04_Operations',
            title: 'Operations',
            description: 'Operations, monitoring, and maintenance procedures',
        },
    ];

    for (const section of sections) {
        const sectionReadme = `# ${section.title}

**Owner:** ${owner || 'TBD'}
**Status:** Draft
**Version:** 0.1.0
**Last Updated:** ${today}
**Applies To:** ${projectName}

## Overview

${section.description}

## Contents

[Add links to documents in this section]

## Standards

This documentation follows [Company Documentation Standards](../../../02_Standards_and_Governance/documentation-standards.md).
`;

        const sectionPath = path.join(projectPath, section.folder, 'README.md');
        fs.writeFileSync(sectionPath, sectionReadme);
        log(`   ✓ Created ${sectionPath}`, 'green');
    }

    log('\n✅ Project structure created successfully!', 'green');
    log('\n📋 Next steps:', 'cyan');
    log('   1. Update project.json with correct details', 'reset');
    log('   2. Fill in README.md with project overview', 'reset');
    log('   3. Run: npm run registry:update', 'reset');
    log('   4. Start documenting in each section folder', 'reset');
    log(`\n📂 Project location: ${projectPath}\n`, 'yellow');
}

function main() {
    const args = parseArgs();

    if (!args.name || !args.id) {
        log('\n❌ Error: Missing required arguments\n', 'yellow');
        log('Usage: node scripts/create-new-project.js --name "Project Name" --id "project-id" [--owner "Name"]\n', 'reset');
        log('Example: node scripts/create-new-project.js --name "Customer Portal" --id "customer-portal" --owner "John Doe"\n', 'reset');
        process.exit(1);
    }

    // Validate project ID format
    if (!/^[a-z0-9-]+$/.test(args.id)) {
        log('\n❌ Error: Project ID must be lowercase with hyphens only (e.g., "customer-portal")\n', 'yellow');
        process.exit(1);
    }

    // Check if project already exists
    const projectPath = path.join('docs', '05_Projects', args.id);
    if (fs.existsSync(projectPath)) {
        log(`\n❌ Error: Project "${args.id}" already exists at ${projectPath}\n`, 'yellow');
        process.exit(1);
    }

    createProjectStructure(args.id, args.name, args.owner);
}

main();
