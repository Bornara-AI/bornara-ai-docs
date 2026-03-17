# Branch Protection Setup Guide

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 1.0.0
**Last Updated:** 2026-03-17
**Applies To:** Bornara AI

---

## Purpose

This guide walks through setting up branch protection on GitHub so that all changes to the `main`
branch go through pull requests with automated checks.

## Steps

### 1. Set Default Branch to `main`

1. Go to <https://github.com/Bornara-AI/bornara-ai-docs/settings>
2. Under **Default branch**, click the switch icon
3. Select `main` as the default branch
4. Click **Update**
5. Confirm the change
6. After confirming, you can delete the old `master` branch from the branches page

### 2. Create Branch Protection Rule

1. Go to **Settings** > **Branches** > **Add branch ruleset** (or **Add rule** under classic)
2. Branch name pattern: `main`
3. Enable these protections:

#### Required Settings

| Setting | Value | Why |
|---|---|---|
| Require a pull request before merging | **ON** | No direct pushes to main |
| Required approvals | **1** | You review all changes |
| Dismiss stale PR approvals | **ON** | Re-review after new pushes |
| Require status checks to pass | **ON** | Guardian + lint must pass |
| Require branches to be up to date | **ON** | No merge conflicts |
| Required status checks | `Front-matter Check`, `Markdown Lint` | From guardian.yml |
| Include administrators | **ON** | Rules apply to you too |

#### Optional (Recommended Later)

| Setting | Value | When |
|---|---|---|
| Require signed commits | OFF for now | Turn on when comfortable with GPG |
| Require linear history | ON recommended | Keeps git log clean |
| Allow force pushes | **OFF** | Prevents history rewriting |
| Allow deletions | **OFF** | Prevents deleting main |

### 3. Verify CODEOWNERS

The `.github/CODEOWNERS` file already assigns `@M-Bornara` as the required reviewer for all files.
GitHub will automatically request your review on every PR.

### 4. Test the Setup

After enabling branch protection:

```bash
# This should FAIL (direct push blocked)
git push origin main

# This should WORK (feature branch + PR)
git checkout -b test/verify-protection
echo "test" >> test.md
git add . && git commit -m "test: verify branch protection"
git push origin test/verify-protection
# Then create PR on GitHub and verify checks run
# Delete the test branch after confirming
```

### 5. Delete Old Master Branch

Once `main` is set as default and protected:

1. Go to <https://github.com/Bornara-AI/bornara-ai-docs/branches>
2. Find `master` branch
3. Click the trash icon to delete it

## Daily Workflow After Setup

```bash
# Always start from main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feat/your-change-description

# Make changes, then:
npm run lint:md:fix
npm run check:cross-refs
git add .
git commit -m "docs: description of change"
git push origin feat/your-change-description

# Go to GitHub and create PR
# Review the checks, then merge
# Delete the feature branch after merge

# Back locally:
git checkout main
git pull origin main
git branch -d feat/your-change-description
```

## Troubleshooting

### "Push rejected" Error

This means branch protection is working. Create a feature branch and PR instead.

### Status Checks Not Running

Verify the workflow file names match what you entered in the branch protection settings.
The workflows are:

- `.github/workflows/guardian.yml` — jobs: `frontmatter`, `markdownlint`
- `.github/workflows/copilot-doc-assist.yml` — job: `analyze-changes`

### CODEOWNERS Not Working

- Verify the file is at `.github/CODEOWNERS` (not root)
- Verify your GitHub username matches what is in the file
- CODEOWNERS requires the repo to have the feature enabled (available on all plans)
