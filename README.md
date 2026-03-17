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

## 🤖 GitHub Copilot Integration

This repository includes configured Copilot agents to assist with documentation:

### Available Agents

- **@doc-updater** - Suggests doc updates when code/config changes
- **@standards-check** - Validates adherence to company standards
- **@cross-ref** - Manages links between documents

### Using Copilot

In pull requests or while editing:

```text
@doc-updater help me update docs after adding OAuth
@standards-check review this architecture doc
@cross-ref check links in this file
```

See [Copilot Instructions](.github/copilot/instructions.md) for details.

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

### Making Changes

1. Create a branch:

   ```bash
   git checkout -b docs/your-change
   ```

2. Make your changes
3. Run checks:

   ```bash
   npm run lint:md:fix
   npm run check:cross-refs
   ```

4. Commit (pre-commit hooks run automatically):

   ```bash
   git commit -m "docs: update architecture"
   ```

5. Push and create PR:

   ```bash
   git push origin docs/your-change
   ```

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

**Last Updated:** 2026-03-16 **Repository:** <https://github.com/Bornara-AI/bornara-ai-docs>
