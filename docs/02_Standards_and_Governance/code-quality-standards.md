# Code Quality Standards

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 0.1.0
**Last Updated:** 2026-03-19
**Applies To:** Bornara AI

## Overview

This document defines the code quality standards, practices, and tooling requirements for
all Bornara AI projects. These standards ensure consistency, maintainability, and reliability
across the codebase.

## General Principles

1. **Readability first** — Code is read far more than it is written
2. **Explicit over implicit** — Prefer clear, descriptive naming
3. **Single responsibility** — Each function/module does one thing well
4. **Fail fast** — Validate inputs early, throw meaningful errors
5. **No dead code** — Remove unused code; don't comment it out

## Linting & Formatting

| Language | Linter | Formatter | Config File |
|----------|--------|-----------|-------------|
| JavaScript/TypeScript | ESLint | Prettier | `.eslintrc`, `.prettierrc` |
| Python | Ruff | Ruff (format) | `pyproject.toml` |
| Markdown | markdownlint-cli2 | — | `.markdownlint-cli2.yaml` |

## Code Review Requirements

All code changes must go through pull request review before merging to `main`:

- **Minimum 1 approval** required
- **CI checks must pass** (lint, test, build)
- **No force-push** to `main`
- **Descriptive commit messages** following conventional commits (`feat:`, `fix:`, `docs:`)

## Testing Standards

- **Unit tests** for all business logic
- **Integration tests** for API endpoints
- **Minimum 80% coverage** target for new code
- **Test naming:** `test_<function>_<scenario>_<expected_result>`

## Security Practices

- Never commit secrets or credentials
- Use environment variables for configuration
- Pin dependencies to exact versions or commit SHAs
- Run `npm audit` / `pip audit` in CI

## Documentation Requirements

- All public functions must have docstrings
- README required for every project directory
- Architecture Decision Records (ADRs) for significant decisions

## Related Documents

- [Architecture Principles](architecture-principles.md)
- [Documentation Standards](documentation-standards.md)
- [Security Policies](security-policies.md)
