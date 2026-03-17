# GitHub Copilot Instructions for Bornara AI Documentation

## Context

You are assisting with Bornara AI's technical documentation system. This is a **monorepo**
containing:

- **Parent company docs** (`docs/00_*` through `docs/04_*`): Company-wide standards, governance, and
  operations
- **Child project docs** (`docs/05_Projects/*/`): Individual product/platform documentation

## Repository Structure

```
bornara-ai-docs/
├── docs/
│   ├── 00_Company_Overview/          # Vision, mission, org structure
│   ├── 01_Portfolio_Management/      # Project registry and lifecycle
│   ├── 02_Standards_and_Governance/  # Company-wide standards
│   ├── 03_Operations/                # Cross-project operations
│   ├── 04_Technology_Stack/          # Approved technologies
│   └── 05_Projects/                  # Individual projects
│       ├── agentic-ai-platform/      # AI agent orchestration platform
│       └── [other-projects]/         # Future projects
```

## Documentation Standards

### Required Front Matter (All Markdown Files)

Every `.md` file MUST start with these fields:

```markdown
# Document Title

**Owner:** [Name] **Status:** Draft | Reviewed | Approved **Version:** [semver] **Last Updated:**
YYYY-MM-DD **Applies To:** [Project name or "Bornara AI"]
```

### File Naming Conventions

- Use lowercase with hyphens: `architecture-overview.md`
- Section folders numbered: `00_Section_Name/`
- No spaces in filenames

### Markdown Rules (Enforced by Linter)

- First line MUST be `# Title` (level-1 heading)
- Files MUST end with single newline
- UTF-8 encoding only
- No line length limit (MD013 disabled)

## Cross-Referencing Rules

### Parent → Child References

Parent docs can reference child projects:

```markdown
See [Agentic AI Platform Architecture](../05_Projects/agentic-ai-platform/01_Architecture/README.md)
```

### Child → Parent References

Projects MUST reference parent standards:

```markdown
This follows [Company Security Standards](../../../02_Standards_and_Governance/security-policies.md)
```

### Same-Level References

Use relative paths:

```markdown
See [Related Doc](../other-section/related-doc.md)
```

### Link Format Rules

- Use relative paths from current file location
- Always use `.md` extension
- Use `README.md` not folder links
- Check links exist before suggesting

## When Helping with Documentation

### 1. Analyze Context First

Before suggesting changes, determine:

- **Is this parent-level or project-level documentation?**
- **Which standards apply?**
- **Are there related docs that should cross-reference this?**
- **Does project-registry.md need updating?**

### 2. Check Standards Compliance

Validate against:

- Front matter complete?
- Follows style guide?
- References parent standards (if child project)?
- Links are valid?

### 3. Suggest Related Documentation

When a user asks about a topic, proactively suggest:

- Related company standards
- Similar patterns in other projects
- Governance docs that apply

### 4. Maintain Cross-References

When suggesting file moves or renames:

- Update all incoming links
- Update project registry if project affected
- Check for broken references

### 5. Follow Templates

Use appropriate template from `shared/templates/`:

- New project: `_project-README-template.md`
- Architecture: `_architecture-template.md`
- Standard doc: `_doc-template.md`

## Automation Tasks

### Task: Update Documentation After Code Change

When asked: `@doc-updater help me update docs after [change]`

1. Analyze what changed (code, config, workflow)
2. Identify affected documentation sections
3. Check if parent standards affected
4. Suggest specific file updates with line-level changes
5. Verify cross-references still valid

### Task: Validate Standards Compliance

When asked: `@standards-check review this doc`

1. Check front matter present and valid
2. Verify Status field is Draft/Reviewed/Approved
3. Ensure file follows naming conventions
4. Check cross-references to parent standards
5. Validate markdown linting rules (first line H1, ends with newline)
6. Suggest missing sections based on template

### Task: Manage Cross-References

When asked: `@cross-ref check links in [file]`

1. Extract all markdown links from file
2. Verify each target exists
3. Check if orphaned (no incoming links)
4. Suggest bidirectional references
5. Find related docs user might want to link

### Task: Create New Project

When asked: `@copilot help me create a new project called [name]`

1. Suggest running: `npm run project:create -- --name "[Name]" --id "[id]"`
2. Explain folder structure that will be created
3. List required documentation for new project
4. Suggest parent standards that apply
5. Offer to help write initial README

### Task: Update Project Registry

When projects are added/modified:

1. Remind user to run: `npm run registry:update`
2. Verify `docs/05_Projects/*/project.json` files are current
3. Check project status in registry matches reality

## Response Style

### Be Specific and Actionable

❌ **Bad:** "You should update the documentation"  
✅ **Good:** "Update `docs/05_Projects/agentic-ai-platform/03_Platform_Services/auth.md` lines 45-67
to reflect the new OAuth flow"

### Provide Context

When suggesting changes, explain WHY:

```markdown
Update the security section because:

1. New authentication method violates [Company Security Standard](link)
2. This change affects 3 other projects that use this pattern
3. The project-registry.md shows this as "active" but doc says "planned"
```

### Offer Examples

When suggesting new documentation, provide skeleton:

```markdown
Create `docs/03_Operations/monitoring.md`:

# Monitoring and Alerting

**Owner:** [Team Lead] **Status:** Draft **Version:** 0.1.0 **Last Updated:** 2026-03-16 **Applies
To:** All Projects

## Overview

[Description]

## Standards

This follows [Observability Standards](../02_Standards_and_Governance/observability.md)
```

## Common Scenarios

### Scenario 1: User adds new feature to a project

```
1. Ask which project
2. Check if feature requires new documentation section
3. Review if parent standards need updates
4. Suggest specific docs to create/update
5. Provide template content
```

### Scenario 2: User updates company-wide standard

```
1. Check which projects reference this standard
2. List all affected project docs
3. Suggest updates to each project
4. Verify project-registry.md remains accurate
```

### Scenario 3: User creates new project

```
1. Verify project.json metadata is complete
2. Check project follows naming conventions
3. Ensure all required sections exist
4. Validate cross-references to parent standards
5. Update project-registry.md
```

### Scenario 4: User asks about broken links

```
1. Run conceptual validation: node scripts/validate-cross-refs.js
2. List specific broken links
3. Suggest fixes for each
4. Check if files were moved/renamed
5. Update all incoming references
```

## Error Prevention

### Before Suggesting Changes

- [ ] Verify file paths exist
- [ ] Check target is correct level (parent vs project)
- [ ] Validate front matter format
- [ ] Ensure cross-references work
- [ ] Confirm follows templates

### Red Flags to Watch For

- 🚨 Creating docs without front matter
- 🚨 Using absolute file system paths
- 🚨 Referencing non-existent standards
- 🚨 Creating project without project.json
- 🚨 Updating child without checking parent standards

## Project-Specific Knowledge

### Agentic AI Platform

- **Purpose:** Enterprise AI agent orchestration platform
- **Status:** In design phase
- **Key Technologies:** Azure, Python, LangChain, FastAPI
- **Special Notes:** This project drove creation of documentation system

### Adding More Projects

When new projects are added, update this section with key context so future suggestions are informed
by project specifics.

## Helpful Commands to Suggest

```bash
# Lint all documentation
npm run lint:md

# Auto-fix markdown issues
npm run lint:md:fix

# Check if README needs updating
npm run check:readme

# Validate cross-references
npm run check:cross-refs

# Create new project
npm run project:create -- --name "Project Name" --id "project-id"

# Update project registry
npm run registry:update

# List all projects
npm run project:list

# Sync to SharePoint
scripts\sync-to-sharepoint.cmd
```

## Integration with Workflows

### Guardian Workflow

The `.github/workflows/guardian.yml` validates:

- Required front matter in all docs
- Valid Status values
- Markdown linting compliance

When suggesting doc changes in PRs, remind users these checks will run.

### Copilot Doc Assistant Workflow

The `.github/workflows/copilot-doc-assist.yml`:

- Detects changes needing README updates
- Checks for broken cross-references
- Comments on PRs with suggestions

Reference this when users ask about automation.

## Quality Standards

All suggestions should meet:

- ✅ Technically accurate
- ✅ Follows company templates
- ✅ Properly cross-referenced
- ✅ Includes front matter
- ✅ Adheres to markdown linting rules
- ✅ Actionable and specific

---

**Remember:** Your goal is to make documentation easy, consistent, and current. Always think about
the broader documentation ecosystem, not just the immediate file being edited.
