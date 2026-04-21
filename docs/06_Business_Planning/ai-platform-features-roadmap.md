# AI Agent Platform — Feature List & Roadmap

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 1.0.0
**Last Updated:** 2026-04-20
**Applies To:** Agentic AI Platform

> **DEFERRED TO Q1 2027.** As of April 20, 2026, all AI Platform development is paused.
> This roadmap is preserved for future reference. The Q2 MVP, Q3 beta, and Q4 launch
> targets below are **cancelled for 2026**. Patterns learned from building Bornara Tools
> will inform future platform architecture.
> See [12-Month Roadmap](../06_Business_Planning/12-month-roadmap.md) for activation criteria.

---

## 1. Platform Overview

A SaaS platform enabling users to build, deploy, and manage custom AI assistants with
subscription-based pricing and a template marketplace.

**Technologies:** Azure, Python, LangChain, FastAPI, CosmosDB, Service Bus

---

## 2. Core Feature List

### User Management

- User registration and authentication (Azure AD B2C)
- User profiles and account management
- Role-based access control
- Team/organization support (Pro+)

### Agent Builder

- Template-based agent creation (drag-and-drop)
- Custom agent builder (advanced)
- Conversation flow designer
- Knowledge base upload (documents, FAQs)
- Personality and tone configuration
- Multi-step task automation

### Pre-Built Agent Templates

| Template                    | Description                              | Tier     |
|-----------------------------|------------------------------------------|----------|
| Email Assistant             | Draft, reply, summarize emails           | Free     |
| Scheduling Assistant        | Calendar management, meeting booking     | Free     |
| Research Assistant          | Web research, summarization              | Pro      |
| Shopify Order Assistant     | Order status, customer queries           | Pro      |
| Customer FAQ Bot            | Answer common questions from knowledge base | Free  |
| Content Writer              | Blog posts, social media, product descriptions | Pro |
| Data Analyzer               | CSV/Excel analysis, chart generation     | Business |
| Sales Outreach Agent        | Lead generation, email sequences         | Business |

### Integrations

- Gmail / Outlook
- Google Calendar / Outlook Calendar
- Shopify
- Notion
- Slack
- Custom API webhooks

### Monetization Features

- Subscription tiers (Free / Pro / Business / Enterprise)
- Template marketplace (buy and sell agent templates)
- Marketplace commissions (70/30 creator split)
- API access for businesses
- Custom development services

---

## 3. 2026-2027 Roadmap

### Q1 2026: Architecture & Design

- Platform architecture design
- Azure environment setup
- Database schema (CosmosDB)
- API scaffolding (FastAPI)
- Authentication system (Azure AD B2C)

### Q2 2026: MVP Development

- Basic agent builder (template-based)
- 3-5 pre-built templates
- Simple conversation interface
- User registration
- Stripe payment integration
- Revenue target: $100-$300

### Q3 2026: Beta Launch

- Limited beta with 10-25 users
- Gather feedback and iterate
- Add subscription tiers
- Improve UX based on feedback
- Add 2-3 more templates
- Revenue target: $200-$500

### Q4 2026: Public Launch

- Public launch on Product Hunt
- Template marketplace (early access)
- LinkedIn and Reddit marketing
- Paid subscriptions active
- Revenue target: $300-$700

### 2027 Enhancements

- Mobile app
- Voice agents
- Automation builder (visual workflow)
- Enterprise features (SSO, audit logs, SLA)
- Marketplace expansion with third-party creators
- Advanced analytics dashboard

---

## 4. Subscription Tiers

| Feature                  | Free       | Pro ($29/mo)  | Business ($79/mo) | Enterprise   |
|--------------------------|------------|---------------|-------------------|--------------|
| Agents                   | 1          | 5             | Unlimited         | Unlimited    |
| Templates                | Basic only | All           | All + custom      | All + custom |
| Integrations             | 1          | 5             | Unlimited         | Unlimited    |
| Support                  | Community  | Email         | Priority          | Dedicated    |
| API Access               | No         | No            | Yes               | Yes          |
| Custom branding          | No         | No            | Yes               | Yes          |
| Template marketplace     | Browse     | Buy + Sell    | Buy + Sell        | Buy + Sell   |

---

## Related Documents

- [Business Plan](../06_Business_Planning/business-plan.md)
- [Revenue Model](../06_Business_Planning/revenue-model.md)
- [Automation & Agent Plan](../06_Business_Planning/automation-agent-plan.md)
- [Agentic AI Platform Project](../05_Projects/agentic-ai-platform/00_Project_Overview/README.md)
