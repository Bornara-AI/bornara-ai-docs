# Approved Technologies

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 0.1.0
**Last Updated:** 2026-03-19
**Applies To:** Bornara AI

## Overview

This document lists the approved technologies, frameworks, libraries, and services for use
across all Bornara AI projects. Any technology not on this list requires approval through
the architecture review process.

## Core Platform

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| Cloud Provider | Microsoft Azure | — | Primary cloud infrastructure |
| Backend Language | Python | 3.11+ | API services, AI/ML pipelines |
| Backend Framework | FastAPI | 0.100+ | REST API framework |
| Frontend Framework | React / Next.js | 14+ | Web application UI |
| AI Framework | LangChain / LangGraph | Latest | Agent orchestration |
| Database | Azure CosmosDB | — | Primary data store |
| Message Bus | Azure Service Bus | — | Async messaging |
| Auth | Azure AD B2C | — | Identity and access management |

## Development Tools

| Category | Technology | Purpose |
|----------|-----------|---------|
| IDE | VS Code | Primary development environment |
| AI Assistant | GitHub Copilot | Code assistance and review |
| Version Control | Git / GitHub | Source control and collaboration |
| CI/CD | GitHub Actions | Automated testing and deployment |
| Documentation | Markdown + markdownlint | Documentation as code |
| Package Manager | npm / pip | Dependency management |

## Evaluation Criteria

Before adopting a new technology, it must be evaluated against:

1. **Community support** — Active maintenance, documentation quality
2. **Security posture** — Known vulnerabilities, update cadence
3. **Cost** — Licensing, infrastructure, operational cost
4. **Team expertise** — Learning curve vs available time
5. **Vendor lock-in** — Migration path if needed

## Review Process

See [Architecture Principles](../02_Standards_and_Governance/architecture-principles.md)
for the technology evaluation checklist and review process.
