# Steps 3 & 4 Implementation Guide

**Owner:** GitHub Copilot Assistant **Status:** Approved **Version:** 1.0.0 **Last Updated:**
2026-03-16 **Applies To:** Bornara AI Documentation System Setup

## ✅ What's Already Done

Good news! **Steps 3 and 4 are mostly complete**. Here's what has been set up for you:

### Step 3: Copilot Setup ✅

All Copilot configuration files have been created:

- ✅ `.github/copilot/instructions.md` - Complete Copilot instructions
- ✅ `.github/copilot/agents/doc-updater.json` - Documentation updater agent
- ✅ `.github/copilot/agents/standards-checker.json` - Standards validation agent
- ✅ `.github/copilot/agents/cross-reference.json` - Link validation agent
- ✅ `.github/workflows/guardian.yml` - Front matter and markdown validation
- ✅ `.github/workflows/copilot-doc-assist.yml` - PR automation workflow

### Step 4: Parent Documentation ✅

Essential parent documentation has been created:

- ✅ `docs/00_Company_Overview/vision-mission.md`
- ✅ `docs/00_Company_Overview/organizational-structure.md`
- ✅ `docs/02_Standards_and_Governance/documentation-standards.md`
- ✅ `docs/02_Standards_and_Governance/architecture-principles.md`
- ✅ `docs/02_Standards_and_Governance/security-policies.md`
- ✅ `docs/01_Portfolio_Management/project-registry.md` (auto-generated)
- ✅ Project tooling scripts installed and working
- ✅ README.md for parent repository

## 🚀 What You Need to Do

### Step 3A: Enable GitHub Copilot (15 minutes)

Since the configuration files are ready, you just need to enable Copilot in GitHub:

#### 1. Enable Copilot for Business

1. Go to your GitHub Organization settings
2. Navigate to **Copilot** → **Policies**
3. Enable **Copilot for Business** for your organization
4. Add your repository to allowed repositories

#### 2. Configure Custom Instructions (in GitHub UI)

1. Go to repository: `https://github.com/Bornara-AI/bornara-ai-docs`
2. Navigate to **Settings** → **Copilot** → **Custom Instructions**
3. Click **Add custom instructions**
4. Copy content from `.github/copilot/instructions.md` and paste it
5. Click **Save**

#### 3. Test Copilot Agents

After configuring, test in a few ways:

**Option A: Test in VS Code**

1. Open any markdown file
2. Start typing a comment: `<!-- @doc-updater`
3. Copilot should offer suggestions based on custom instructions

**Option B: Test in a PR**

1. Make a small change to any doc file
2. Create a PR
3. The `copilot-doc-assist.yml` workflow will run and comment
4. Try asking: `@doc-updater help me with this`

**Option C: Test via GitHub Chat**

1. Open GitHub Copilot Chat in VS Code
2. Ask: `@workspace following documentation standards?`
3. Copilot should reference the custom instructions

### Step 3B: Verify Workflows (5 minutes)

Push your changes to GitHub and verify workflows are configured:

```powershell
cd E:\Projects\Bornara\bornara-ai-docs
git add .
git commit -m "feat: set up parent documentation system"
git push origin main
```

Then:

1. Go to GitHub → **Actions** tab
2. Verify these workflows appear:
   - Documentation Guardian
   - Copilot Documentation Assistant
3. They should run on subsequent PRs

### Step 4A: Fill in Company Documentation (1-2 hours)

The structure is created, but you need to fill in your actual company details:

#### 1. Update Vision and Mission

Edit `docs/00_Company_Overview/vision-mission.md`:

```powershell
code docs\00_Company_Overview\vision-mission.md
```

Replace placeholders with:

- Your company's actual vision statement
- Mission statement
- Core values
- Strategic objectives
- Business model description

#### 2. Update Organizational Structure

Edit `docs/00_Company_Overview/organizational-structure.md`:

```powershell
code docs\00_Company_Overview\organizational-structure.md
```

Fill in:

- Real names for leadership team
- Actual department heads
- Team sizes and structure
- Communication channels you use

#### 3. Review and Customize Standards

The standards docs are comprehensive templates. Review and adjust:

**Documentation Standards** (`docs/02_Standards_and_Governance/documentation-standards.md`):

- Already comprehensive, just review and approve
- Adjust if you have specific needs

**Architecture Principles** (`docs/02_Standards_and_Governance/architecture-principles.md`):

- Review the 10 principles
- Adjust priorities based on your business
- Add/remove principles as needed

**Security Policies** (`docs/02_Standards_and_Governance/security-policies.md`):

- Review security requirements
- Adjust based on your regulatory needs
- Update contact emails

### Step 4B: Create Additional Documentation (As Needed)

You may want to add:

#### Technology Stack Document

```powershell
code docs\04_Technology_Stack\approved-technologies.md
```

Example content:

```markdown
# Approved Technologies

**Owner:** CTO **Status:** Approved **Version:** 1.0.0 **Last Updated:** 2026-03-16 **Applies To:**
Bornara AI

## Programming Languages

- **Python** - Primary language for AI/ML
- **JavaScript/TypeScript** - Web applications
- **C#** - Azure integration

## Cloud Platforms

- **Azure** - Primary cloud provider
- **Services:** App Service, Functions, CosmosDB, Service Bus

## Data Storage

- **CosmosDB** - NoSQL database
- **Azure SQL** - Relational data
- **Blob Storage** - File storage

## AI/ML Frameworks

- **LangChain** - LLM orchestration
- **OpenAI API** - Language models
- **Azure OpenAI** - Enterprise AI

[Add more based on your stack]
```

#### Operations Documents

Create operational procedures in `docs/03_Operations/`:

```powershell
# Example: Deployment procedures
code docs\03_Operations\deployment-procedures.md

# Example: Incident management
code docs\03_Operations\incident-management.md
```

## 🧪 Testing Everything Works

### Test 1: Run All npm Scripts

```powershell
cd E:\Projects\Bornara\bornara-ai-docs

# List projects (should show Agentic AI Platform)
npm run project:list

# Check markdown
npm run lint:md

# Auto-fix any issues
npm run lint:md:fix

# Check cross-references
npm run check:cross-refs

# Update project registry
npm run registry:update
```

### Test 2: Create a Test Project

```powershell
# Create a dummy project to test the tooling
npm run project:create -- --name "Test Project" --id "test-project" --owner "Your Name"

# Verify it was created
npm run project:list

# Check the registry updated
code docs\01_Portfolio_Management\project-registry.md

# Clean up test project (optional)
Remove-Item -Recurse docs\05_Projects\test-project
npm run registry:update
```

### Test 3: Pre-commit Hooks

```powershell
# Make a change to a doc
echo "`n## Test Section`n" >> docs\00_Company_Overview\vision-mission.md

# Stage and commit (hooks should run)
git add docs\00_Company_Overview\vision-mission.md
git commit -m "test: verify pre-commit hooks"

# You should see:
# 1. README check running
# 2. Markdown lint running
# 3. Commit succeeding
```

### Test 4: Cross-Reference Validation

```powershell
# This should report no broken links (or list any that were found)
npm run check:cross-refs
```

## 📋 Checklist: Are You Done?

Go through this checklist to confirm everything is set up:

### Copilot Setup ✓

- [ ] GitHub Copilot for Business enabled for organization
- [ ] Custom instructions configured in GitHub repository settings
- [ ] Tested Copilot in VS Code or GitHub Chat
- [ ] Workflows visible in GitHub Actions tab
- [ ] Created a test PR to verify Copilot Doc Assistant comments

### Parent Documentation ✓

- [ ] vision-mission.md filled with real company information
- [ ] organizational-structure.md filled with real names and structure
- [ ] documentation-standards.md reviewed and approved
- [ ] architecture-principles.md reviewed and customized
- [ ] security-policies.md reviewed and adjusted for your needs
- [ ] project-registry.md auto-generated and displays correctly
- [ ] README.md reviewed

### Tooling ✓

- [ ] `npm run project:list` works
- [ ] `npm run project:create` tested
- [ ] `npm run registry:update` works
- [ ] `npm run check:cross-refs` runs
- [ ] `npm run lint:md` runs successfully
- [ ] Pre-commit hooks working (test with a commit)

### Git Repository ✓

- [ ] All changes committed to main branch
- [ ] Pushed to GitHub
- [ ] Workflows appear in Actions tab
- [ ] Repository README renders correctly on GitHub

## 🎯 Next Steps After Completion

Once Steps 3 & 4 are complete, you can:

### 1. Start Using the System

```powershell
# Create your next project
npm run project:create -- --name "Customer Portal" --id "customer-portal" --owner "Your Name"

# Start documenting
code docs\05_Projects\customer-portal\README.md
```

### 2. Train Your Team

- Share the README.md
- Walk through the documentation standards
- Show how to use npm scripts
- Demonstrate Copilot assistance

### 3. Establish Workflows

- Create PR template
- Set up branch protection rules
- Define review process
- Schedule regular documentation reviews

### 4. Monitor and Improve

- Track documentation coverage
- Collect feedback on processes
- Update standards based on lessons learned
- Refine Copilot instructions based on usage

## 🆘 Troubleshooting

### Copilot Not Responding

**Problem:** Copilot doesn't use custom instructions

**Solutions:**

1. Verify custom instructions saved in GitHub repo settings
2. Reload VS Code window
3. Check Copilot is enabled for current workspace
4. Try explicit prompts: `@workspace check documentation standards`

### Workflows Not Running

**Problem:** GitHub Actions workflows don't trigger

**Solutions:**

1. Check workflows are in `.github/workflows/` folder
2. Verify YAML syntax is valid
3. Check branch protection rules
4. Ensure GitHub Actions enabled for repository

### npm Scripts Failing

**Problem:** `npm run X` commands failing

**Solutions:**

```powershell
# Reinstall dependencies
rm -rf node_modules
rm package-lock.json
npm install

# Verify Node.js version
node --version  # Should be v16+

# Check script exists
npm run  # Lists all available scripts
```

### Cross-References Broken

**Problem:** `npm run check:cross-refs` shows broken links

**Solutions:**

1. Check file paths are relative from current file
2. Ensure `.md` extension included
3. Verify target files exist
4. Use forward slashes `/` not backslashes `\`

## 📚 Reference Documentation

### Key Files to Understand

- `.github/copilot/instructions.md` - How Copilot should behave
- `.github/workflows/guardian.yml` - PR validation rules
- `scripts/create-new-project.js` - Project scaffolding logic
- `docs/02_Standards_and_Governance/documentation-standards.md` - The rules

### Useful Commands Reference

```powershell
# Project Management
npm run project:create -- --name "Name" --id "id" --owner "Owner"
npm run project:list
npm run registry:update

# Quality Checks
npm run lint:md
npm run lint:md:fix
npm run check:readme
npm run check:cross-refs

# Testing
npm test  # (not yet implemented)

# Sync to SharePoint
scripts\sync-to-sharepoint.cmd
```

## ✨ Success Criteria

You've successfully completed Steps 3 & 4 when:

1. ✅ Copilot responds to documentation questions with context from your standards
2. ✅ Guardian workflow blocks PRs with missing front matter
3. ✅ You can create new projects with one command
4. ✅ Project registry auto-generates and is accurate
5. ✅ Your team understands the documentation structure
6. ✅ Pre-commit hooks prevent bad commits
7. ✅ Company documentation is filled in with real information

## 🎉 You're Ready!

Once this checklist is complete, you have a production-ready documentation system that:

- Scales across multiple projects
- Enforces quality automatically
- Leverages AI assistance via Copilot
- Maintains consistency company-wide
- Reduces manual documentation burden

**Time to start documenting your projects!** 🚀

---

**Need Help?**

- Review [MIGRATION_PLAN.md](../MIGRATION_PLAN.md) for broader context
- Check [README.md](../README.md) for usage examples
- See [Documentation Standards](docs/02_Standards_and_Governance/documentation-standards.md)
