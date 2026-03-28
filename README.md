# Bornara AI Documentation System

## Comprehensive documentation for Bornara AI company and all projects

This repository contains technical documentation for Bornara AI, using a monorepo structure that
manages both company-wide documentation and individual project documentation in a unified system.

## 📋 Structure

### Parent-Level Documentation (Company-Wide)

- **00_Company_Overview** - Vision, mission, organizational structure
- **01_Portfolio_Management** - Project registry, lifecycle management
- **02_Standards_and_Governance** - Company standards all projects must follow
- **03_Operations** - Cross-project operational procedures
- **04_Technology_Stack** - Approved technologies and frameworks

### Business Planning & Strategy

- **06_Business_Planning** - Business plan, tax strategy, CRA compliance, expansion plans

### Child-Level Documentation (Projects)

- **05_Projects/** - Individual project documentation
  - Each project has consistent structure (00-04 sections)
  - Projects reference parent standards
  - Managed via automated tooling

## 🚀 Getting Started

### Installation

```powershell
# Clone the repository
git clone https://github.com/Bornara-AI/bornara-ai-docs.git
cd bornara-ai-docs

# Install dependencies
npm install
```

### Quick Commands

```bash
# Lint all documentation
npm run lint:md

# Auto-fix markdown issues
npm run lint:md:fix

# Check if README needs updating
npm run check:readme

# Validate cross-references
npm run check:cross-refs

# List all projects
npm run project:list

# Create new project
npm run project:create -- --name "Project Name" --id "project-id" --owner "Your Name"

# Update project registry
npm run registry:update
```

## 📁 Creating a New Project

```powershell
# Create project structure
npm run project:create -- --name "Customer Portal" --id "customer-portal" --owner "John Doe"

# This creates:
# - docs/05_Projects/customer-portal/
# - All required section folders (00-04)
# - project.json metadata file
# - README and section READMEs with templates
```

## 📝 Documentation Standards

All documentation must follow
[Company Documentation Standards](docs/02_Standards_and_Governance/documentation-standards.md).

### Required Front Matter

```text
**Owner:** [Name] **Status:** Draft | Reviewed | Approved **Version:** [X.Y.Z] **Last Updated:**
YYYY-MM-DD **Applies To:** [Project or Company]
```

### Quality Automation

- ✅ **Pre-commit hooks**: Validate markdown before commit
- ✅ **Guardian workflow**: CI/CD validation on PRs
- ✅ **README checker**: Warns when README needs updating
- ✅ **Cross-ref validator**: Catches broken links
- ✅ **Copilot agents**: AI assistance for documentation tasks

## 🤖 Autonomous AI System

This repository includes a self-evolving AI agent system that acts as an operating system for the
business. The AI automatically routes questions to the right domain, challenges outdated
information, suggests improvements, and proposes new agents when gaps are detected.

### Agent Architecture

```
instructions.md (Always loaded — The Brain)
    │
    ├── @orchestrator          Cross-domain planning and prioritization
    ├── @agent-creator         Proposes and designs new agents
    │
    ├── @business-advisor      Strategy, finance, CRA compliance, growth
    ├── @shopify-ops           Giftifye + cookie Shopify operations
    ├── @ai-platform           AI Agent Platform development
    ├── @cra-tax               Tax filing, deductions, audit readiness
    │
    ├── @doc-updater           Documentation maintenance
    ├── @standards-checker     Standards validation
    └── @cross-ref             Link management
```

### How It Works

- **Auto-routing:** `instructions.md` is loaded on every conversation and contains routing logic
  to apply the right domain expertise automatically
- **Proactive:** Every agent suggests improvements, flags risks, and proposes options
- **Self-evolving:** `@agent-creator` proposes new agents when it detects gaps
- **Nothing is concrete:** All business data is treated as living estimates that AI should challenge
- **PR workflow:** All changes go through pull requests — AI never pushes to `main` directly

### Using Agents

```text
@orchestrator what should I focus on this week?
@shopify-ops help me pick products for Mother's Day bundles
@cra-tax can I deduct my new monitor?
@business-advisor should I raise prices on Giftifye?
@ai-platform what should the MVP include?
@agent-creator I keep asking about cookie business — should that be its own agent?
```

### Governance

See [AI Governance Policy](docs/02_Standards_and_Governance/ai-governance.md) for mutation policy,
agent lifecycle, and quality standards.

See [Copilot Instructions](.github/copilot/instructions.md) for the full orchestration brain.

## 📊 Project Portfolio

View [Project Registry](docs/01_Portfolio_Management/project-registry.md) for complete list of all
projects.

Quick view:

```bash
npm run project:list
```

## 🔒 Standards and Governance

All projects must comply with:

- [Documentation Standards](docs/02_Standards_and_Governance/documentation-standards.md)
- [Architecture Principles](docs/02_Standards_and_Governance/architecture-principles.md)
- [Security Policies](docs/02_Standards_and_Governance/security-policies.md)

## 🔄 SharePoint Integration

Sync documentation to SharePoint via OneDrive:

```powershell
scripts\sync-to-sharepoint.cmd
```

Configure SharePoint path in the script before first use.

## 🛠️ Development Workflow

### Making Changes (PR-Only)

All changes go through pull requests. Direct pushes to `main` are blocked.

1. Start from main:

   ```bash
   git checkout main && git pull origin main
   ```

2. Create a feature branch:

   ```bash
   git checkout -b feat/your-change
   ```

3. Make your changes and run checks:

   ```bash
   npm run lint:md:fix
   npm run check:cross-refs
   ```

4. Commit and push:

   ```bash
   git add .
   git commit -m "docs: description of change"
   git push origin feat/your-change
   ```

5. Create PR on GitHub — Guardian workflow validates automatically
6. Review and merge. Delete the feature branch after

### Setting Up Branch Protection

See [Branch Protection Setup Guide](BRANCH_PROTECTION_SETUP.md) for step-by-step instructions.

### PR Process

- Guardian workflow validates front matter and markdown
- Copilot Doc Assistant comments with suggestions
- Get approval from document owner
- Merge to main

## 📖 Key Documents

### For Company Leadership

- [Vision and Mission](docs/00_Company_Overview/vision-mission.md)
- [Organizational Structure](docs/00_Company_Overview/organizational-structure.md)
- [Project Registry](docs/01_Portfolio_Management/project-registry.md)

### For Engineering Teams

- [Architecture Principles](docs/02_Standards_and_Governance/architecture-principles.md)
- [Documentation Standards](docs/02_Standards_and_Governance/documentation-standards.md)
- [Project creation process](#-creating-a-new-project)

### For Operations

- [Security Policies](docs/02_Standards_and_Governance/security-policies.md)
- Operations procedures (TBD)

## 🆘 Support

- **Documentation Issues**: Open an issue in this repository
- **Standards Questions**: See
  [Documentation Standards](docs/02_Standards_and_Governance/documentation-standards.md)
- **Technical Support**: Contact engineering team

## 📄 License

This documentation is proprietary to Bornara AI.

---

**Last Updated:** 2026-03-17 **Repository:** <https://github.com/Bornara-AI/bornara-ai-docs>
