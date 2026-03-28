# Documentation Standards

**Owner:** Mahdi Moradi
**Status:** Approved
**Version:** 1.0.0
**Last Updated:** 2026-03-16
**Applies To:** Bornara AI

## Overview

This document defines the mandatory documentation standards for all Bornara AI projects. All project
documentation must adhere to these guidelines to ensure consistency, quality, and maintainability
across the portfolio.

## Required Front Matter

Every markdown file MUST begin with the following front matter:

```markdown
**Owner:** [Full Name] **Status:** Draft | Reviewed | Approved **Version:** [X.Y.Z] **Last
Updated:** YYYY-MM-DD **Applies To:** [Project Name or "Bornara AI"]
```

### Field Definitions

- **Owner:** Individual responsible for maintaining the document
- **Status:**
  - `Draft` - Work in progress, not yet reviewed
  - `Reviewed` - Peer-reviewed but not formally approved
  - `Approved` - Formally approved for official use
- **Version:** Semantic versioning (major.minor.patch)
- **Last Updated:** ISO date format (YYYY-MM-DD)
- **Applies To:** Scope of the document (project name or company)

## File Naming Conventions

### Markdown Files

- Use lowercase with hyphens: `architecture-overview.md`
- Be descriptive: `database-schema.md` not `db.md`
- Avoid abbreviations unless widely understood
- No spaces in filenames

### Folder Structure

- Use numbered prefixes for ordering: `01_Architecture/`
- Use title case for folder names: `Platform_Services/`
- Group related content logically

## Required Sections

### Architecture Documents

Must include:

1. Overview
2. System Context
3. Architecture Decisions
4. Component Details
5. Dependencies
6. Standards Compliance (reference parent standards)

### API Documentation

Must include:

1. Overview
2. Authentication
3. Endpoints
4. Request/Response Examples
5. Error Handling
6. Rate Limiting

### Operations Documents

Must include:

1. Overview
2. Prerequisites
3. Step-by-Step Procedures
4. Troubleshooting
5. Rollback Procedures

## Markdown Standards

### mandated by Linter

- ✅ First line MUST be `# Title` (level-1 heading)
- ✅ Files MUST end with single newline
- ✅ UTF-8 encoding only
- ✅ No trailing whitespace

### Best Practices

- Use clear, descriptive headings
- Include code examples where applicable
- Add diagrams for complex concepts
- Link to related documentation
- Keep paragraphs concise (3-5 sentences)

## Cross-Referencing

### Internal Links

Use relative paths from current file:

```markdown
[Related Doc](../section/related-doc.md)
```

### Parent Standards (from Child Projects)

Projects MUST reference applicable parent standards:

```markdown
This follows [Company Security Standards](../../../02_Standards_and_Governance/security-policies.md)
```

## Code Examples

- Use appropriate syntax highlighting
- Include comments for clarity
- Show both good and bad examples when relevant
- Provide complete, runnable examples when possible

````markdown
```python
# Good example
def calculate_total(items):
    """Calculate total price with tax."""
    subtotal = sum(item.price for item in items)
    return subtotal * 1.1
```
````

## Diagrams

- Use Mermaid for code-based diagrams
- Use PlantUML for UML diagrams
- Include both source and rendered versions
- Provide alt text for accessibility

## Version Control

### When to Update Version

- **Major (X.0.0):** Breaking changes or complete rewrites
- **Minor (0.X.0):** New sections or significant additions
- **Patch (0.0.X):** Corrections, clarifications, minor updates

### Git Commit Messages

Follow conventional commits:

```text
docs: add authentication flow diagram
docs: update API endpoint documentation
docs(security): clarify encryption requirements
```

## Quality Checklist

Before marking a document as "Reviewed" or "Approved":

- [ ] All required front matter present and valid
- [ ] First line is level-1 heading
- [ ] No markdown linting errors
- [ ] All links work (internal and external)
- [ ] Code examples are tested
- [ ] Diagrams are up to date
- [ ] Cross-references to parent standards included (if project doc)
- [ ] Spelling and grammar checked
- [ ] Technical accuracy verified

## Automation and Tooling

### Pre-commit Hooks

- Markdown linting runs automatically
- README update checker warns of potential documentation gaps
- Cross-reference validator checks for broken links

### CI/CD Validation

Guardian workflow validates:

- Required front matter presence
- Valid Status values
- Markdown compliance

### npm Scripts

```bash
# Check all documentation
npm run lint:md

# Auto-fix issues
npm run lint:md:fix

# Check cross-references
npm run check:cross-refs

# Update project registry
npm run registry:update
```

## Templates

Use provided templates from `/shared/templates/`:

- `_doc-template.md` - Standard documentation
- `_project-README-template.md` - Project overview
- `_architecture-template.md` - Architecture documents

## Exceptions and Waivers

Exceptions to these standards require:

1. Written justification
2. Approval from technical lead
3. Documentation in project README

## Review and Updates

These standards will be reviewed:

- Quarterly
- When significant pain points identified
- When new tooling/capabilities become available

**Next Review:** 2026-06-16

## Support

Questions about documentation standards:

- Open an issue in the repository
- Contact documentation team
- Reference this document in discussions
