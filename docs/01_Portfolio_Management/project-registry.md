# Project Registry

**Owner:** Portfolio Management Team
**Status:** Approved
**Version:** 1.0.0
**Last Updated:** 2026-03-16
**Applies To:** Bornara AI

## Overview

This document provides a comprehensive list of all projects in the Bornara AI portfolio, their
current status, and ownership.

## Active Projects

| Project                                                              | Owner        | Status | Phase  | Technologies             |
|----------------------------------------------------------------------|--------------|--------|--------|-------------------------|
| [Agentic AI Platform](../05_Projects/agentic-ai-platform/README.md) | Mahdi Moradi | active | design | Azure, Python, LangChain |

## Planned Projects

| Project               | Owner | Status | Phase | Start Date |
|-----------------------|-------|--------|-------|------------|
| _No planned projects_ |       |        |       |            |

## Completed Projects

| Project                 | Owner | Status | Completion Date |
|-------------------------|-------|--------|----------------- |
| _No completed projects_ |       |        |                 |

## On Hold Projects

| Project               | Owner | Status | Reason |
|-----------------------|-------|--------|--------|
| _No on-hold projects_ |       |        |        |

## Portfolio Statistics

- **Total Projects:** 1
- **Active:** 1
- **Planned:** 0
- **Completed:** 0
- **On Hold:** 0

## Project Details

### Agentic AI Platform

- **ID:** `agentic-ai-platform`
- **Description:** Enterprise AI agent orchestration platform for building, deploying, and managing intelligent autonomous agents
- **Owner:** Mahdi Moradi
- **Status:** active
- **Phase:** design
- **Technologies:** Azure, Python, LangChain, FastAPI, CosmosDB, Service Bus
- **Repository:** <https://github.com/Bornara-AI/agentic-ai-platform>
- **Documentation:** [View Docs](../05_Projects/agentic-ai-platform/README.md)

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
