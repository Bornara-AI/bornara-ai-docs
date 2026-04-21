# Project Registry

**Owner:** Mahdi Moradi
**Status:** Approved
**Version:** 2.0.0
**Last Updated:** 2026-04-20
**Applies To:** Bornara AI

## Overview

This document provides a comprehensive list of all projects in the Bornara AI portfolio, their
current status, and ownership.

> **Updated April 20, 2026:** Strategic pivot to 2-stream focus. AI Platform deferred to 2027.
> Giftifye on hold until Bornara Tools is stable.

## Active Projects

| Project                                                              | Owner        | Status | Phase    | Technologies             |
|----------------------------------------------------------------------|--------------|--------|----------|-------------------------|
| [Bornara Tools](../05_Projects/bornara-tools/README.md) | Mahdi Moradi | active | planning → building May | Next.js, Vercel, OpenAI |

## On Hold Projects

| Project               | Owner | Status | Reason |
|-----------------------|-------|--------|--------|
| Giftifye.com | Mahdi Moradi | on-hold | Deferred until Bornara Tools is stable (est. Q4 2026 / Q1 2027) |

## Deferred Projects

| Project               | Owner | Status | Target Start |
|-----------------------|-------|--------|-------------|
| [Agentic AI Platform](../05_Projects/agentic-ai-platform/README.md) | Mahdi Moradi | deferred | Q1 2027 |

## Planned Projects

| Project               | Owner | Status | Phase | Start Date |
|-----------------------|-------|--------|-------|------------|
| _No planned projects_ |       |        |       |            |

## Completed Projects

| Project                 | Owner | Status | Completion Date |
|-------------------------|-------|--------|----------------- |
| _No completed projects_ |       |        |                 |

## Portfolio Statistics

- **Total Projects:** 3
- **Active:** 1 (Bornara Tools)
- **On Hold:** 1 (Giftifye)
- **Deferred:** 1 (AI Platform)
- **Planned:** 0
- **Completed:** 0

## Project Details

### Bornara Tools — ACTIVE

- **ID:** `bornara-tools`
- **Description:** Free ad-supported online toolbox for developers, AI practitioners, creators, and small business owners — 35+ tools including AI-powered utilities
- **Owner:** Mahdi Moradi
- **Status:** active
- **Phase:** planning → building May 2026
- **Technologies:** Next.js 15, Vercel, Tailwind CSS 4, shadcn/ui, OpenAI GPT-4o-mini, Sharp.js, pnpm, Vitest, Sentry
- **URL:** <https://tools.bornara.com>
- **Repository:** <https://github.com/Bornara-AI/bornara-tools>
- **Documentation:** [View Docs](../05_Projects/bornara-tools/README.md)

### Agentic AI Platform — DEFERRED

- **ID:** `agentic-ai-platform`
- **Description:** Enterprise AI agent orchestration platform for building, deploying, and managing intelligent autonomous agents
- **Owner:** Mahdi Moradi
- **Status:** deferred
- **Phase:** design (paused)
- **Technologies:** Azure, Python, LangChain, FastAPI, CosmosDB, Service Bus
- **Repository:** <https://github.com/Bornara-AI/agentic-ai-platform>
- **Documentation:** [View Docs](../05_Projects/agentic-ai-platform/README.md)
- **Deferred reason:** Focus on Bornara Tools first. Tools development teaches transferable patterns. Target restart: Q1 2027.

## Standards and Governance

All projects must adhere to:

- [Documentation Standards](../02_Standards_and_Governance/documentation-standards.md)
- [Architecture Principles](../02_Standards_and_Governance/architecture-principles.md)
- [Security Policies](../02_Standards_and_Governance/security-policies.md)

## Adding a New Project

To add a new project to the portfolio:

1. Run: `npm run project:create -- --name "Project Name" --id "project-id" --owner "Your Name"`
2. Update the generated `project.json` with accurate details
3. Fill in project documentation
4. Run: `npm run registry:update` to regenerate this file

## Support

For questions about the project portfolio, contact the Portfolio Management Team.
