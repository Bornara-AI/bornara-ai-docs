# Bornara Tools — Tool Phasing Analysis

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 0.1.0
**Last Updated:** 2026-04-17
**Applies To:** Bornara Tools

---

## 1. Scoring Methodology

Every tool is scored on 5 criteria (total = 100 points):

| Criterion | Weight | Scoring Guide |
|-----------|--------|---------------|
| **Search Volume** | 30 pts | 30 = 500K+, 25 = 100K–500K, 20 = 50K–100K, 15 = 10K–50K, 10 = <10K |
| **Build Cost** (inverse) | 25 pts | 25 = <2h/$0, 20 = 2–4h/$0, 15 = 4–6h/<$3, 10 = 6–8h/<$5, 5 = 8h+/>$5 |
| **CPM Quality** | 20 pts | 20 = developer/SaaS audience, 15 = business audience, 10 = general, 5 = student |
| **Differentiation** | 15 pts | 15 = nothing like it exists free, 10 = exists but poor UX, 5 = strong competitors |
| **Synergy** | 10 pts | 10 = directly promotes another Bornara product, 5 = indirect, 0 = standalone |

**Phase assignment rule:** Highest scores go to earliest phases. Within a phase, non-AI tools
go before AI tools (zero cost proves the site works before paying for API).

---

## 2. Full Tool Scoring Matrix

### Phase 1 Tools (Score ≥ 75, $0 API cost)

| # | Tool | Search Vol | Build Cost | CPM | Diff | Synergy | **Total** | Phase |
|---|------|-----------|-----------|-----|------|---------|-----------|-------|
| 1 | JSON Formatter & Validator | 30 | 25 | 20 | 10 | 0 | **85** | 1 |
| 2 | Base64 Encoder/Decoder | 25 | 25 | 20 | 5 | 0 | **75** | 1 |
| 3 | JWT Decoder & Inspector | 25 | 20 | 20 | 10 | 0 | **75** | 1 |
| 4 | Unix Timestamp Converter | 20 | 25 | 20 | 5 | 0 | **70** | 1* |
| 5 | Hash Generator | 20 | 20 | 20 | 5 | 0 | **65** | 1* |
| 6 | UUID/ULID Generator | 15 | 25 | 20 | 5 | 0 | **65** | 1* |
| 7 | Colour Contrast Checker | 20 | 20 | 15 | 10 | 0 | **65** | 1* |
| 8 | Case Converter | 15 | 25 | 15 | 5 | 0 | **60** | 1* |

*Included in Phase 1 despite lower scores because they're trivial to build (<2h each) and
fill out the tool count needed for credibility and internal linking.

**Phase 1 rationale:** These 8 tools take a total of ~12 hours, cost $0/month, and target
a combined search volume of ~2M/month. They prove the tech stack, establish the URL pattern,
and give Google 8 pages to index immediately. Developers who find one of these tools bookmark
the site and discover others through internal linking.

**User retention role:** These are "daily driver" tools. A developer who bookmarks the JSON
formatter comes back multiple times per week. Each return visit increases ad impressions and
discovers new tools via "Related tools" sidebar.

---

### Phase 2 Tools (Score ≥ 60, $0 API cost, broader audience)

| # | Tool | Search Vol | Build Cost | CPM | Diff | Synergy | **Total** | Phase |
|---|------|-----------|-----------|-----|------|---------|-----------|-------|
| 9 | Image Compressor | 30 | 20 | 10 | 10 | 0 | **70** | 2 |
| 10 | Regex Tester | 30 | 15 | 20 | 10 | 0 | **75** | 2 |
| 11 | Social Media Image Resizer | 20 | 20 | 15 | 10 | 5 | **70** | 2 |
| 12 | Word/Character Counter | 25 | 25 | 10 | 5 | 0 | **65** | 2 |
| 13 | Colour Palette Generator | 15 | 20 | 15 | 10 | 5 | **65** | 2 |
| 14 | CORS Proxy Tester | 10 | 20 | 20 | 15 | 0 | **65** | 2 |

**Phase 2 rationale:** Adds visual/design tools to attract non-developer users (designers,
marketers). Image Compressor and Social Media Resizer broaden the audience while maintaining
$0 API cost. Regex Tester actually scores highest in Phase 2 but is placed here because its
syntax highlighting takes more build time. The 14-tool count is the minimum for AdSense
application (with Privacy + Terms + About = 17+ pages).

**User retention role:** Image tools create "tool chains" — compress → resize → download.
This multi-step usage increases pages per session from 1 to 2–3.

---

### Phase 3 Tools (First AI tools — controlled API cost)

| # | Tool | Search Vol | Build Cost | CPM | Diff | Synergy | **Total** | Phase |
|---|------|-----------|-----------|-----|------|---------|-----------|-------|
| 15 | AI Ad Copy Generator | 25 | 10 | 20 | 15 | 10 | **80** | 3 |
| 16 | AI Product Description Writer | 15 | 10 | 15 | 15 | 10 | **65** | 3 |
| 17 | AI Code Explainer | 15 | 10 | 20 | 15 | 5 | **65** | 3 |
| 18 | LLM Token Counter | 10 | 20 | 20 | 15 | 5 | **70** | 3 |
| 19 | Cron Expression Generator | 15 | 20 | 20 | 10 | 0 | **65** | 3 |

**Phase 3 rationale:** AI Ad Copy Generator scores 80 (highest of any AI tool) and is the
core differentiator for the site. It replaces $49/month tools. Paired with Product Description
Writer, it creates a "Shopify seller" tool chain that directly cross-promotes Giftifye. AI Code
Explainer serves the developer audience. LLM Token Counter costs $0 (runs tiktoken in WASM) and
is placed here because it's AI-adjacent in branding. Cron generator has a tiny AI component
(explain in plain English) but is mostly client-side.

**User retention role:** AI tools are the "wow factor" that gets users to come back. Ad Copy
Generator is something marketers use weekly (not just once). Token Counter is used every time
a developer estimates API costs. The 3 requests/hour limit also brings users back later.

**API cost control:** Phase 3 introduces the rate limiting infrastructure. Total projected
cost: ~$11.50/month at expected usage. The daily cap of 500 AI requests prevents surprise
bills.

---

### Phase 4 Tools (Viral potential — shareable outputs)

| # | Tool | Search Vol | Build Cost | CPM | Diff | Synergy | **Total** | Phase |
|---|------|-----------|-----------|-----|------|---------|-----------|-------|
| 20 | AI Roast My Website | N/A (viral) | 5 | 20 | 15 | 10 | **50+viral** | 4 |
| 21 | AI Text Detector | 25 | 10 | 15 | 10 | 0 | **60** | 4 |
| 22 | AI Tone Rewriter | 15 | 15 | 15 | 10 | 0 | **55** | 4 |
| 23 | "What AI Thinks of Your Code" | N/A (viral) | 10 | 20 | 15 | 5 | **50+viral** | 4 |
| 24 | API Response Formatter | 15 | 20 | 20 | 5 | 0 | **60** | 4 |

**Phase 4 rationale:** "Roast My Website" and "What AI Thinks of Your Code" score lower on
pure search volume but have massive viral potential. These are the tools that get tweeted,
shared on Reddit, and generate organic backlinks. Paired with the ProductHunt launch, Phase 4
is the marketing-driven phase. AI Text Detector rides the hottest search trend (AI detection).
API Response Formatter costs $0 and rounds out the developer toolkit.

**User retention role:** Viral tools drive DISCOVERY — a user arrives for the website roast,
but discovers the developer tools. Shareable result URLs create unique pages that attract
social traffic. "Code review" creates a competitive element ("I got 9/10") that drives sharing.

**Critical risk:** Viral tools are the highest API cost risk. If "Roast My Website" gets
10,000 requests in a day:

- At ~$0.002/request = $20 in one day
- **Mitigation:** 500 daily AI request cap + per-IP limit + queue system for overflow

---

### Phase 5 Tools (Business-focused — consulting lead gen)

| # | Tool | Search Vol | Build Cost | CPM | Diff | Synergy | **Total** | Phase |
|---|------|-----------|-----------|-----|------|---------|-----------|-------|
| 25 | Invoice Generator (HST-aware) | 15 | 10 | 15 | 15 | 10 | **65** | 5 |
| 26 | Shopify Liquid Previewer | 10 | 10 | 20 | 15 | 10 | **65** | 5 |
| 27 | AI Email Subject Line Gen | 10 | 15 | 15 | 10 | 5 | **55** | 5 |
| 28 | AI Hashtag Generator | 15 | 20 | 10 | 5 | 5 | **55** | 5 |
| 29 | AI Commit Message Generator | 10 | 20 | 20 | 15 | 0 | **65** | 5 |
| 30 | .env File Validator | 10 | 20 | 20 | 15 | 0 | **65** | 5 |

**Phase 5 rationale:** Business tools have the highest cross-promotion potential. Invoice
Generator with Canadian HST awareness is a unique differentiator that no competitor offers.
Shopify Liquid Previewer directly links to Giftifye and consulting services. Every business
tool includes a CTA: "Need professional help? Bornara AI offers tech consulting."

**User retention role:** Invoice Generator creates long-term users — a small business owner
generates invoices monthly. Shopify Liquid Previewer creates sticky developer usage. These
tools have the highest consulting conversion potential.

---

### Phase 6 Tools (Advanced AI — premium assessment)

| # | Tool | Search Vol | Build Cost | CPM | Diff | Synergy | **Total** | Phase |
|---|------|-----------|-----------|-----|------|---------|-----------|-------|
| 31 | AI Grammar & Style Checker | 30 | 5 | 10 | 10 | 0 | **55** | 6 |
| 32 | AI "Explain Like I'm 5" | 10 | 20 | 10 | 15 | 0 | **55** | 6 |
| 33 | AI Career Path Advisor | N/A (viral) | 10 | 15 | 15 | 5 | **45+viral** | 6 |
| 34 | AI Changelog Writer | 10 | 15 | 20 | 15 | 5 | **65** | 6 |
| 35 | AI Meeting Notes Summarizer | 10 | 10 | 15 | 10 | 5 | **50** | 6 |

**Phase 6 rationale:** Grammar Checker has the highest search volume of any tool (550K) but
scores lower because: (a) Grammarly free is a strong competitor, (b) it's the most expensive
AI tool to run (~$8/month), and (c) quality must be excellent or users won't return. By Phase 6,
we know our traffic patterns and can justify the API cost. Career Path Advisor is another viral
tool with sharing potential. Meeting Summarizer targets business users with high CPM.

**User retention role:** Grammar Checker could become a weekly habit for writers and students.
Career Advisor creates emotional engagement and social sharing. These tools are best launched
when the site already has traffic — they retain existing users rather than acquiring new ones.

---

## 3. Cumulative Impact by Phase

| Phase | Tools | Total Live | Monthly API Cost | Combined Search Vol | Target Monthly Visits |
|-------|-------|-----------|-----------------|--------------------|--------------------|
| 1 (May) | 8 | 8 | $0 | ~2.0M | 0–500 (indexing) |
| 2 (Jun) | +6 | 14 | $0 | ~3.1M | 100–1,500 |
| 3 (Jul) | +5 | 19 | $11.50 | ~3.4M | 500–3,000 |
| 4 (Aug) | +5 | 24 | $27.50 | ~3.7M+ | 1,500–8,000 |
| 5 (Sep) | +6 | 30 | $31.50 | ~3.9M+ | 3,000–12,000 |
| 6 (Oct) | +5 | 35 | $50.50 | ~4.5M+ | 5,000–20,000 |

---

## 4. User Session Flow Design

### First-Time Visitor Journey

```text
Google search "json formatter online"
    → Land on /tools/developer/json-formatter
    → Use the tool (paste JSON, format it)
    → See "Related tools" sidebar: Base64, JWT Decoder, Regex Tester
    → Click JWT Decoder (2nd page view)
    → See "Bookmark your toolbox — tools.bornara.com" prompt
    → Leave (but tool is now in browser history)
    → 3 days later: Google "jwt decoder" → clicks our result (recognises the site)
    → Return visitor established
```

### Tool Chain Journeys (Multi-Page Sessions)

| Journey | Tools Used | Pages | Session Time |
|---------|-----------|-------|-------------|
| "Image workflow" | Compressor → Resizer → Colour Palette | 3 | 4–6 min |
| "API debugging" | JSON Formatter → JWT Decoder → Base64 → API Formatter | 4 | 5–8 min |
| "Content creation" | Ad Copy Gen → Tone Rewriter → Hashtag Gen | 3 | 3–5 min |
| "Code review" | Code Explainer → "AI Thinks of Your Code" → Commit Message Gen | 3 | 4–6 min |
| "Shopify seller" | Product Description → Ad Copy → Image Resizer → Invoice Gen | 4 | 6–10 min |
| "Curiosity viral" | Roast My Website → AI Text Detector → Explain Like I'm 5 | 3 | 3–5 min |

### Session Duration Impact on Ad Revenue

| Pages/Session | Avg Session Duration | Ad Impressions/Visit | Revenue Multiplier |
|--------------|---------------------|--------------------|--------------------|
| 1 page | 30–60 sec | 2–3 | 1x (baseline) |
| 2 pages | 1.5–3 min | 5–6 | 2x |
| 3 pages | 3–5 min | 8–9 | 3x |
| 4+ pages | 5–8 min | 11–12 | 4x |

**This is why internal linking and tool chains are critical** — doubling pages per session
doubles ad revenue without increasing traffic.

---

## 5. Phase Gate Criteria

Before starting each new phase, the previous phase must meet these minimums:

| Gate | Criteria | If Not Met |
|------|----------|-----------|
| Phase 1 → 2 | All 8 tools functional, sitemap submitted, Lighthouse > 90 | Fix quality issues before adding more tools |
| Phase 2 → 3 | 14 tools live, AdSense application submitted, > 100 visits/week | Delay AI tools, improve SEO content first |
| Phase 3 → 4 | Rate limiting working, API cost < $15/month, > 300 visits/week | Tighten rate limits, defer viral tools |
| Phase 4 → 5 | ProductHunt launched, > 1,000 visits/week, backlinks acquired | Focus on marketing before adding more tools |
| Phase 5 → 6 | 30 tools live, ad revenue > $0 (AdSense approved), analytics reviewed | Decide: optimise existing tools OR add Phase 6 |
