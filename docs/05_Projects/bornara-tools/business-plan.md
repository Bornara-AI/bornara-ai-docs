# Bornara Tools — Business Plan

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 0.1.0
**Last Updated:** 2026-04-17
**Applies To:** Bornara Tools

---

## 1. Executive Summary

Bornara Tools is a free, ad-supported online toolbox website that provides developer utilities,
AI-powered content tools, and small-business productivity tools — all with zero login required.
It monetises through display advertising (Google AdSense), with a premium ad-free tier planned
for Phase 2.

| Attribute | Detail |
|-----------|--------|
| Product | Free online tool suite (35+ tools planned) |
| URL | `tools.bornara.com` |
| Target audience | Developers, AI practitioners, small business owners, creators |
| Revenue model | Display ads (Phase 1), Premium subscriptions (Phase 2) |
| Year 1 revenue target | $60–$800 (realistic: $150–$300 by Dec 2026) |
| Year 1 investment | ~$200–$600 total (domain + API + design) |
| Break-even target | Month 8–14 (when ad revenue exceeds API cost) |
| Owner/Developer | Mahdi Moradi (part-time, ~4–5h/week) |
| Designer | Narjes Moradi (logo, UI mockups, social media graphics) |

### Why This Project

1. **Near-zero startup cost** — $0 hosting (Vercel free tier), ~$15 domain
2. **Passive income asset** — once tools rank in Google, traffic compounds without ongoing work
3. **Synergy multiplier** — cross-promotes Giftifye, AI Platform, and Tech Consulting
4. **Developer credibility** — Mahdi is a full-stack engineer; building dev tools is authentic
5. **CRA-deductible** — all costs (API, domain, design wages) reduce taxable income

---

## 2. Problem Statement

### Problems We Solve

**For developers:**

- Scattered bookmarks for basic utilities (JSON formatting, Base64, JWT decoding)
- No single place with modern, fast, ad-light developer tools
- Existing sites (jsonlint.com, jwt.io) are outdated, slow, or cluttered with ads

**For AI practitioners:**

- AI tools like Jasper ($49/mo), Copy.ai ($49/mo), Grammarly ($12/mo) are expensive
- People search "free AI copywriter" 110K+ times/month and get gated/limited tools
- No good free LLM token counter, prompt playground, or AI text detector exists

**For small business owners:**

- Canva Pro ($13/mo) just for image resizing, when they only need presets
- Invoice generators require signup (Wave, FreshBooks $15/mo)
- Shopify sellers need product descriptions but can't afford AI writing tools

### Evidence of Demand (Search Volume)

| Tool Need | Monthly Google Searches | Existing Free Options Quality |
|-----------|----------------------|------------------------------|
| "json formatter online" | 1.2M | OK but outdated/slow |
| "free grammar checker" | 550K | Grammarly free is limited |
| "regex tester online" | 450K | regex101 decent but niche |
| "free image compressor" | 300K | TinyPNG limited to 20/day |
| "jwt decoder online" | 200K | jwt.io is OK, not great UX |
| "free AI text detector" | 200K | Most charge after 3 checks |
| "free AI copywriter" | 110K | All gated behind signups |

---

## 3. Target Market

### Primary Audience Segments

| Segment | Size | Behaviour | Value to Us |
|---------|------|-----------|-------------|
| **Web developers** (junior–mid) | ~27M worldwide | Google tools daily, bookmark useful ones, share on Reddit/X | Highest RPM ($8–$15), daily repeat visits |
| **AI practitioners / prompt engineers** | ~5M and growing | Search for AI utilities, compare models, estimate costs | High RPM ($6–$12), growing audience |
| **Indie makers / solopreneurs** | ~10M+ | Need ad copy, product descriptions, invoices — price-sensitive | Medium RPM ($4–$8), convert to consulting |
| **Small business / Shopify sellers** | ~4M on Shopify alone | Need marketing tools, image editing, SEO help | Medium RPM ($4–$10), Giftifye synergy |
| **Students / junior devs** | Large | Learning tools, code explainer, career advisor | Lower RPM ($2–$4), but very high volume |

### Geographic Focus

- **Primary:** North America (US + Canada) — highest ad RPM
- **Secondary:** UK, Australia, Western Europe
- **Language:** English only (Year 1)

---

## 4. Competitive Analysis

### Direct Competitors (Free Tool Aggregators)

| Competitor | Tools | Monthly Traffic | Strength | Weakness |
|-----------|-------|----------------|----------|----------|
| 10015.io | 100+ misc tools | ~2M | Breadth of tools | No AI tools, generic audience, low RPM |
| smalldev.tools | 25+ dev tools | ~500K | Developer focus | Minimal SEO, no AI tools |
| it-tools.tech | 40+ dev tools | ~1M | Open source, clean UI | No AI, no ads (no revenue model) |
| transform.tools | 20+ converters | ~300K | Good UX | Very narrow (data transforms only) |
| tinywow.com | 50+ tools | ~5M | Fast growth | Generic, thin pages, HCU risk |

### Indirect Competitors (Paid Tools We Replace)

| Tool | Price | What We Offer Free |
|------|-------|--------------------|
| Jasper AI | $49/mo | AI ad copy generator, product description writer |
| Grammarly Premium | $12/mo | AI grammar & style checker |
| Canva Pro | $13/mo | Social media image resizer (presets) |
| FreshBooks | $15/mo | Invoice generator (HST-aware) |
| GPTZero | $10/mo | AI text detector |

### Our Competitive Advantages

1. **AI + Developer tools in one place** — no competitor does both well
2. **AI-powered developer tools** — regex with AI explanation, code explainer, commit message generator
3. **Canadian SMB angle** — HST-aware invoice generator, Canadian tax context
4. **Modern stack** — Next.js, fast, dark mode, mobile-responsive (most dev tools are desktop-only legacy)
5. **Zero-friction** — no signup, no watermarks, no "3 free then pay" walls on basic tools

---

## 5. Product Strategy

### Core Principles

1. **Client-side first** — if a tool can run in the browser, it must. Zero server cost.
2. **No login ever** for free tools — login only for premium features (Phase 2)
3. **Speed above all** — Core Web Vitals > 90 on every page (critical for SEO + ads)
4. **Each tool is a landing page** — optimised H1, meta description, FAQ schema, 300+ word how-to
5. **Internal linking web** — every tool links to 3–5 related tools (increases session duration)

### User Retention Design

The #1 challenge for tool sites is **single-use bounce** — users come for one tool and leave.
Here is how we keep them:

| Strategy | Implementation | Expected Impact |
|----------|---------------|----------------|
| **Related tools sidebar** | Every tool shows "You might also need..." with 5 related tools | +15–25% pages/session |
| **"Toolbox" bookmark prompt** | After 2nd tool use, suggest "Bookmark your toolbox" (no account needed) | +10% return visits |
| **Tool combos** | "Compress image → Resize for Instagram → Generate caption" as guided workflow | +20% pages/session |
| **Weekly new tool badge** | Homepage "New" badge drives curiosity on return visits | +5–10% return rate |
| **Dark mode default detection** | Auto-detect OS preference — developers notice and appreciate this | Brand trust |
| **Keyboard shortcuts** | Ctrl+Enter to run, Ctrl+S to download — power users love this | Stickiness |
| **Copy-to-clipboard everywhere** | One-click copy output — reduces friction, increases satisfaction | UX quality signal |
| **Session history** | localStorage remembers last 10 tool uses (no account) — "Recent tools" on homepage | +15% return visits |
| **Share results** | "Share this [roast/code review/career path]" generates a unique URL | Viral acquisition |

### Session Duration Targets

| Metric | Target | Why It Matters |
|--------|--------|---------------|
| Avg pages per session | 2.5–3.5 | More pages = more ad impressions = more revenue |
| Avg session duration | 2–4 minutes | AdSense RPM increases with engagement |
| Bounce rate | < 55% | Below 50% is excellent for tool sites |
| Return visitor rate | 20–30% | Developer utilities should become daily habits |

---

## 6. Phased Tool Delivery (Summary)

> Detailed tool-by-tool analysis: [Tool Phasing Analysis](tool-phasing-analysis.md)

### Phase 1: Foundation Launch (May 2026) — 8 Tools

**Goal:** Prove the site works, get indexed by Google, establish page templates.
**Theme:** Zero-cost developer utilities that people use daily.

| Tool | Category | API Cost | Build Time | Search Vol |
|------|----------|---------|-----------|-----------|
| JSON Formatter & Validator | Developer | $0 | 2h | 1.2M |
| Base64 Encoder/Decoder | Developer | $0 | 1h | 150K |
| JWT Decoder & Inspector | Developer | $0 | 2h | 200K |
| UUID/ULID Generator | Developer | $0 | 1h | 80K |
| Unix Timestamp Converter | Developer | $0 | 1h | 120K |
| Hash Generator (MD5, SHA-256, bcrypt) | Developer | $0 | 2h | 100K |
| Colour Contrast Checker (WCAG) | Design | $0 | 2h | 120K |
| Case Converter (UPPER/lower/Title) | Developer | $0 | 1h | 60K |

**Phase 1 totals:** 12h build, $0/month running cost, ~2M combined search volume

### Phase 2: Content & Image Tools (June 2026) — +6 Tools (14 Total)

**Goal:** Add visual tools and first SEO content, apply for AdSense.
**Theme:** Image and text processing tools that attract broader audiences.

| Tool | Category | API Cost | Build Time | Search Vol |
|------|----------|---------|-----------|-----------|
| Image Compressor (PNG/JPG/WebP) | Design | $0 | 3h | 300K |
| Social Media Image Resizer | Design | $0 | 3h | 90K |
| Colour Palette Generator | Design | $0 | 3h | 80K |
| Word/Character Counter | Developer | $0 | 1h | 150K |
| Regex Tester (with syntax highlight) | Developer | $0 | 4h | 450K |
| CORS Proxy Tester | Developer | $0 | 3h | 30K |

**Phase 2 totals:** 17h build, $0/month running cost, ~1.1M combined search volume

### Phase 3: AI Tools Launch (July 2026) — +5 Tools (19 Total)

**Goal:** Introduce AI-powered tools, differentiate from competitors, apply for AdSense.
**Theme:** AI tools that replace $49/month competitors.

| Tool | Category | API Cost | Build Time | Search Vol |
|------|----------|---------|-----------|-----------|
| AI Ad Copy Generator | AI/Business | ~$5/mo | 6h | 110K |
| AI Product Description Writer | AI/Business | ~$3/mo | 5h | 40K |
| AI Code Explainer | AI/Developer | ~$3/mo | 5h | 60K |
| LLM Token Counter | AI/Developer | $0 | 2h | 30K |
| Cron Expression Generator | Developer | ~$0.50/mo | 3h | 50K |

**Phase 3 totals:** 21h build, ~$11.50/month running cost, ~290K combined search volume

### Phase 4: Viral & Engagement Tools (August 2026) — +5 Tools (24 Total)

**Goal:** Create shareable tools that drive backlinks, social traffic, and virality.
**Theme:** Tools people share, screenshot, and tweet about.

| Tool | Category | API Cost | Build Time | Search Vol |
|------|----------|---------|-----------|-----------|
| AI Roast My Website | AI/Viral | ~$5/mo | 8h | New (viral) |
| AI Text Detector | AI/Detection | ~$5/mo | 6h | 200K |
| AI Tone Rewriter | AI/Content | ~$3/mo | 4h | 50K |
| "What AI Thinks of Your Code" | AI/Viral | ~$3/mo | 5h | New (viral) |
| API Response Formatter | Developer | $0 | 2h | 40K |

**Phase 4 totals:** 25h build, ~$16/month running cost, ~290K+ combined search volume

### Phase 5: Business & Speciality Tools (September 2026) — +6 Tools (30 Total)

**Goal:** Business tools that convert users to consulting clients and cross-promote Giftifye.
**Theme:** Tools for entrepreneurs and Shopify sellers.

| Tool | Category | API Cost | Build Time | Search Vol |
|------|----------|---------|-----------|-----------|
| Free Invoice Generator (HST-aware) | Business | $0 | 6h | 60K |
| Shopify Liquid Template Previewer | Business | $0 | 6h | 10K |
| AI Email Subject Line Generator | AI/Business | ~$2/mo | 4h | 30K |
| AI Hashtag Generator | AI/Business | ~$1/mo | 3h | 40K |
| AI Commit Message Generator | AI/Developer | ~$1/mo | 3h | 15K |
| `.env` File Validator | Developer | $0 | 3h | 10K |

**Phase 5 totals:** 25h build, ~$4/month running cost, ~165K combined search volume

### Phase 6: Depth & Premium (October 2026) — +5 Tools (35 Total)

**Goal:** Round out the toolbox, launch premium tier if traffic justifies it.
**Theme:** Advanced tools and quality-of-life improvements.

| Tool | Category | API Cost | Build Time | Search Vol |
|------|----------|---------|-----------|-----------|
| AI Grammar & Style Checker | AI/Content | ~$8/mo | 8h | 550K |
| AI "Explain Like I'm 5" | AI/Viral | ~$2/mo | 3h | 20K |
| AI Career Path Advisor | AI/Viral | ~$3/mo | 6h | New |
| AI Changelog Writer | AI/Developer | ~$2/mo | 4h | 10K |
| AI Meeting Notes Summarizer | AI/Business | ~$4/mo | 5h | 30K |

**Phase 6 totals:** 26h build, ~$19/month running cost, ~610K combined search volume

---

## 7. Revenue Model

> Detailed calculations: [Cost & Revenue Model](cost-and-revenue-model.md)

### Revenue Streams

| Stream | Phase | Expected Start | Year 1 Projection |
|--------|-------|---------------|-------------------|
| Google AdSense display ads | Phase 1 | Jul–Aug 2026 (after AdSense approval) | $50–$800 |
| Premium "no ads" tier ($5/mo) | Phase 2 | When traffic > 10K/month | $0 (Year 1) |
| Affiliate links (Vercel, Shopify) | Phase 2 | When relevant tools exist | $0–$100 |
| Consulting lead generation | Phase 1 | Immediately via CTAs | Hard to attribute, estimated $200–$500 |

### Ad Revenue Projection (Monthly)

| Month | Tools Live | Est. Monthly Visits | Est. RPM | Est. Ad Revenue |
|-------|-----------|-------------------|---------|----------------|
| May 2026 | 8 | 0–100 (indexing) | — | $0 |
| Jun 2026 | 14 | 100–500 | — | $0 |
| Jul 2026 | 19 | 500–1,500 | $3–$6 | $1.50–$9 |
| Aug 2026 | 24 | 1,500–5,000 | $4–$8 | $6–$40 |
| Sep 2026 | 30 | 3,000–10,000 | $5–$9 | $15–$90 |
| Oct 2026 | 35 | 5,000–15,000 | $5–$10 | $25–$150 |
| Nov 2026 | 35 | 8,000–20,000 | $6–$10 | $48–$200 |
| Dec 2026 | 35 | 10,000–25,000 | $6–$12 | $60–$300 |

**Year 1 total ad revenue (realistic):** $150–$500
**Year 2 projection (with SEO compounding):** $1,200–$6,000

### Revenue as Bornara AI's 5th Stream

| Stream | 2026 Target | Status |
|--------|------------|--------|
| Giftifye.com | $3,000–$5,000 | In development |
| AI Agent Platform | $500–$1,500 | Architecture |
| Tech Consulting | $500–$2,000 | Active |
| Cookie Business | $500–$1,500 | Planning |
| **Bornara Tools** | **$150–$500** | **Planning** |
| **Updated Total** | **$5,150–$10,500** | |

---

## 8. Cost Structure

### One-Time Costs

| Item | Cost | When | CRA Line |
|------|------|------|----------|
| Domain (tools.bornara.com subdomain) | $0 | May 2026 | — |
| Narjes: Logo design | $60–$100 (3–5h × $20/hr) | May 2026 | 9270 |
| Narjes: Homepage & tool page UI mockups | $100–$200 (5–10h × $20/hr) | May 2026 | 9270 |
| Narjes: Social media launch graphics | $40–$60 (2–3h × $20/hr) | May–Jun 2026 | 9270 |
| **Total one-time** | **$200–$375** | | |

### Monthly Recurring Costs

| Item | Phase 1–2 | Phase 3–4 | Phase 5–6 | CRA Line |
|------|-----------|-----------|-----------|----------|
| Vercel hosting | $0 (free tier) | $0 (free tier) | $0–$20 (if exceeded) | 8810 |
| OpenAI API (GPT-4o-mini) | $0 | $11.50/mo | $31.50/mo | 8810 |
| Domain renewal | $0 | $0 | $0 (annual) | 8810 |
| GA4 analytics | $0 | $0 | $0 | — |
| **Total monthly** | **$0** | **$11.50** | **$31.50** | |

### Annual Cost Summary (2026, May–Dec = 8 months)

| Category | Amount | CRA Deductible |
|----------|--------|---------------|
| Domain | $0–$15 | Yes (8810) |
| OpenAI API (8 months, ramping) | $80–$180 | Yes (8810) |
| Narjes design wages | $200–$360 | Yes (9270) |
| Vercel (likely free) | $0–$40 | Yes (8810) |
| **Total 2026 cost** | **$280–$595** | **100% deductible** |

### Break-Even Analysis

| Scenario | Monthly Costs at Full Build | Monthly Traffic Needed (at $6 RPM) | When |
|----------|---------------------------|-----------------------------------|------|
| Conservative | $31.50/mo | 5,250 visits/month | Month 10–14 |
| Realistic | $25/mo (some tools unused) | 4,167 visits/month | Month 8–12 |
| Optimistic | $20/mo (caching reduces API) | 3,333 visits/month | Month 6–10 |

---

## 9. Marketing Strategy

> Full details: [Marketing & Growth Strategy](marketing-and-growth-strategy.md)

### Phase 1: Launch (May–Jun 2026) — $0 Budget

| Channel | Action | Expected Impact |
|---------|--------|----------------|
| Google (SEO) | On-page optimisation for every tool page | Long-term organic traffic (3–6 month lag) |
| Reddit | Post "Show r/webdev: I built 8 free dev tools" | 500–2,000 visits spike |
| Twitter/X | Thread: "I'm building a free dev toolbox — here's tool #1" | 100–500 visits, backlinks |
| Hacker News | "Show HN: Bornara Tools — 8 free dev utilities, zero login" | High variance: 0 or 5,000 visits |

### Phase 2: Growth (Jul–Aug 2026)

| Channel | Action | Expected Impact |
|---------|--------|----------------|
| ProductHunt | Launch "Bornara Tools" as a product | 1,000–5,000 visits in 48 hours |
| Reddit (AI subs) | Post AI tools to r/ChatGPT, r/artificial, r/LocalLLaMA | 500–3,000 visits |
| Tool directories | Submit to alternativeto.net, toolify.ai, futurepedia.io | Backlinks + steady referral |
| Dev.to / Hashnode | "I built a free AI ad copy generator" tutorial | Backlinks + developer credibility |

### Phase 3: Viral Push (Aug–Oct 2026)

| Channel | Action | Expected Impact |
|---------|--------|----------------|
| "Roast My Website" campaign | Tweet "I'll roast your website for free" + link to tool | Viral potential, shareable results |
| Content sharing | "What AI Thinks of Your Code" with shareable result URLs | Organic social sharing |
| SEO compound | By now 20+ pages indexed, long-tail keywords ranking | Organic growth accelerating |

---

## 10. Technical Architecture

### Stack Decision Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 14+ (App Router) | SSR for SEO, Mahdi knows React, Vercel-native |
| Hosting | Vercel free tier | Serverless, CDN, SSL, $0 |
| AI Provider | OpenAI GPT-4o-mini via API | Best quality/$, provider-agnostic route design |
| Image processing | Sharp.js (server) + Canvas API (client) | No external dependency |
| PDF generation | pdf-lib (client-side) | Zero server cost |
| Styling | Tailwind CSS | Rapid development, dark mode built-in |
| Analytics | GA4 | Required for AdSense, free |
| Ads | Google AdSense | Lowest entry barrier |
| Rate limiting | Upstash Redis (free tier) or in-memory | Protect AI endpoints |

### Architecture Principles

1. **Client-side by default** — tools that can run in the browser MUST run client-side
2. **Server only for AI** — Vercel serverless functions only for OpenAI API proxy
3. **No database Year 1** — localStorage for user preferences, no user accounts
4. **Static generation** — tool pages are statically generated or ISR, never SSR
5. **Provider-agnostic AI** — abstract OpenAI behind an interface; swap to Groq/Cloudflare later

### Security Requirements

| Requirement | Implementation |
|-------------|---------------|
| API key protection | OpenAI key never in client-side code; always via /api route |
| Rate limiting | 3 AI req/IP/hour, 10 non-AI req/IP/minute |
| Input sanitisation | Strip script tags, prompt injection patterns before AI calls |
| CSP headers | Content Security Policy compatible with AdSense |
| File upload limits | Type whitelist, max 10MB, client-side processing only |

---

## 11. Team & Roles

| Person | Role | Hours/Week | Tasks | Pay |
|--------|------|-----------|-------|-----|
| Mahdi | Developer, SEO, deployment, marketing | 4–5h | Build tools, write how-to content, deploy, post on Reddit/HN | Business income |
| Narjes | Designer | 1–2h (Phase 1), then ad-hoc | Logo, UI mockups, social media graphics, tool page layouts | $20/hr |
| Child 1 (12) | Tester | 0.5h/week | Test tools on mobile, report bugs, screenshot issues | $12/hr |
| Child 2 (8) | Tester | 0.5h/week | "Try to break it" testing on tablet | $12/hr |

### Wage Documentation (CRA Compliance)

- Narjes: Track hours in time log, pay via e-transfer from business account, keep receipts
- Children: Age-appropriate tasks only, document hours and work performed
- All wages are T2125 deductible (Line 9270 for Narjes, Line 9270 for children)

---

## 12. Risk Register

| # | Risk | Probability | Impact | Mitigation | Owner |
|---|------|------------|--------|------------|-------|
| R1 | SEO takes 12+ months to produce meaningful traffic | High | Medium | Launch early (May), focus on long-tail keywords, supplement with Reddit/HN/ProductHunt | Mahdi |
| R2 | Google Helpful Content Update penalises thin tool pages | Medium | High | Every tool page has 300+ word "How to use" section + FAQ schema | Mahdi |
| R3 | AI API costs exceed ad revenue for 6+ months | Medium | High | Hard daily cap (500 AI req/day), rate limiting, cache popular outputs, monitor weekly | Mahdi |
| R4 | Ad blockers reduce effective ad revenue by 40% | High | Medium | Accept it; plan for premium tier in Phase 2 | Mahdi |
| R5 | Viral tool spikes API cost unexpectedly ($100+ in a day) | Low–Med | High | OpenAI spending alerts, hard daily budget cap, graceful "at capacity" message | Mahdi |
| R6 | Time conflict with other Bornara projects (Giftifye, AI Platform) | High | Medium | Fixed 4–5h/week allocation; defer Phase 6 if needed | Mahdi |
| R7 | Vercel free tier bandwidth exceeded | Low | Low | Monitor usage; upgrade to Pro ($20/mo) only if traffic justifies | Mahdi |
| R8 | Competitor copies our niche AI+developer tools mix | Low (Year 1) | Low | First-mover advantage, authentic developer brand, fast iteration | Mahdi |
| R9 | AdSense application rejected | Medium | Medium | Ensure 20+ pages, quality content, privacy/terms pages before applying | Mahdi |
| R10 | OpenAI API changes pricing or deprecates GPT-4o-mini | Low | Medium | Provider-agnostic design; can swap to Groq (free Llama) or Anthropic | Mahdi |

---

## 13. Success Metrics & KPIs

### Monthly Dashboard (Track from Day 1)

| KPI | Target (Month 3) | Target (Month 6) | Target (Month 12) |
|-----|------------------|------------------|-------------------|
| Tools live | 19 | 35 | 35+ |
| Monthly unique visitors | 1,000–3,000 | 5,000–15,000 | 15,000–50,000 |
| Pages per session | 2.0+ | 2.5+ | 3.0+ |
| Avg session duration | 1.5 min+ | 2.5 min+ | 3.0 min+ |
| Bounce rate | < 65% | < 55% | < 50% |
| Return visitor rate | 10%+ | 20%+ | 25%+ |
| Monthly ad revenue | $0 (indexing) | $25–$150 | $100–$500 |
| Monthly API cost | $0 | $12–$20 | $20–$32 |
| Google indexed pages | 10+ | 30+ | 40+ |
| Backlinks (referring domains) | 5+ | 15+ | 30+ |

### Go/No-Go Decision Points

| Decision Point | Date | Criteria | Action if NOT Met |
|---------------|------|----------|------------------|
| Continue Phase 3 (AI tools)? | Jul 1, 2026 | Phase 1–2 tools indexed, >500 visits/month | Delay AI tools, focus on SEO content |
| Apply for AdSense? | Jul 15, 2026 | 20+ pages live, privacy/terms published | Wait until 20 pages reached |
| Continue Phase 4 (viral tools)? | Aug 1, 2026 | At least 1 tool getting >100 visits/week | Reduce Phase 4 scope, focus on what works |
| Launch premium tier? | Oct 2026 | >10K monthly visits, >$50/month ad revenue | Defer premium to 2027 |
| Invest in Vercel Pro? | When free tier exceeded | Bandwidth alerts from Vercel | Upgrade only if ROI positive |

---

## 14. Legal & Compliance

| Requirement | Status | Action |
|-------------|--------|--------|
| Privacy Policy | Needed (May 2026) | Required for AdSense; use free generator, customize for Canadian law |
| Terms of Service | Needed (May 2026) | Standard "use at your own risk" for tool outputs |
| Cookie Consent | Needed (May 2026) | Required for AdSense; simple banner |
| PIPEDA Compliance (Canadian) | Needed | No PII collected (no accounts), but ad cookies require disclosure |
| AdSense TOS | Ongoing | No click encouragement, no misleading ad placement, content policy |
| CASL (Canadian Anti-Spam) | Phase 2 | Only needed if we add email newsletter |
| HST Registration | Not needed until $30K revenue | Monitor; unlikely in Year 1 |
| T2125 Reporting | Annual | Report ad revenue as business income, all costs as deductions |

---

## 15. Timeline Summary

```text
2026
Apr 17 — Project kickoff, planning docs complete ✓
May     — Phase 1: 8 developer tools live, SEO foundation, Reddit launch
Jun     — Phase 2: 14 tools, image/text tools, AdSense application prep
Jul     — Phase 3: 19 tools, first AI tools live, AdSense approved (target)
Aug     — Phase 4: 24 tools, viral tools, ProductHunt launch, backlink push
Sep     — Phase 5: 30 tools, business tools, cross-promotion CTAs
Oct     — Phase 6: 35 tools, advanced AI tools, premium tier assessment
Nov–Dec — Optimise: SEO refinement, double down on top performers, Year 2 planning

2027
Q1      — Premium tier launch (if justified), target 30K–50K visits/month
Q2      — Ezoic/Mediavine application, target $300–$1,000/month revenue
```

---

## 16. Dependencies & Assumptions

### Dependencies

| Dependency | Impact if Delayed | Mitigation |
|-----------|------------------|------------|
| bornara.ai domain ownership | Can't use subdomain | Use bornaratools.com as fallback ($15) |
| OpenAI API access | No AI tools in Phase 3+ | Groq (free Llama) as backup |
| AdSense approval | No ad revenue | Alternative: Ezoic (lower threshold) or affiliate links |
| Vercel free tier availability | Hosting cost goes from $0 to $20/mo | Budget already accounts for this |
| Mahdi's 4–5h/week availability | Phases delayed by 2–4 weeks each | Defer Phase 6 if needed |

### Assumptions

1. Google will index tool pages within 2–4 weeks of launch (typical for new sites with sitemap submission)
2. AdSense will approve the site within 2–4 weeks of application (with 20+ quality pages)
3. OpenAI GPT-4o-mini pricing remains stable through 2026 (trend is prices decreasing)
4. Mahdi can sustain 4–5h/week on this project alongside other Bornara commitments
5. No major Google algorithm update penalises tool/utility sites (monitoring HCU updates)
