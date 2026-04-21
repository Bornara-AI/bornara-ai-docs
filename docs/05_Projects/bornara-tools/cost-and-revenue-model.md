# Bornara Tools — Cost & Revenue Model

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 0.1.0
**Last Updated:** 2026-04-17
**Applies To:** Bornara Tools

---

## 1. Cost Breakdown (2026: May–December = 8 Months)

### 1.1 One-Time Costs

| Item | Amount | Month | CRA Deductible | T2125 Line |
|------|--------|-------|---------------|-----------|
| Domain (tools.bornara.com subdomain) | $0 | May | No (already owned) | — |
| Narjes: Logo design (3–5 hours × $20/hr) | $60–$100 | May | Yes | 9270 |
| Narjes: UI mockups (homepage + tool page template, 5–10h × $20/hr) | $100–$200 | May | Yes | 9270 |
| Narjes: Social media launch graphics (2–3h × $20/hr) | $40–$60 | May–Jun | Yes | 9270 |
| **Total one-time** | **$200–$375** | | | |

### 1.2 Monthly Recurring Costs by Phase

| Cost Item | Phase 1–2 (May–Jun) | Phase 3 (Jul) | Phase 4 (Aug) | Phase 5 (Sep) | Phase 6 (Oct) | Nov–Dec |
|-----------|-------------------|--------------|--------------|--------------|--------------|---------|
| Vercel hosting | $0 | $0 | $0 | $0 | $0 | $0–$20 |
| OpenAI API | $0 | $11.50 | $27.50 | $31.50 | $50.50 | $35–$50 |
| Upstash Redis (rate limiting) | $0 | $0 (free tier) | $0 | $0 | $0 | $0 |
| GA4 | $0 | $0 | $0 | $0 | $0 | $0 |
| UptimeRobot | $0 | $0 (free) | $0 | $0 | $0 | $0 |
| **Total monthly** | **$0** | **$11.50** | **$27.50** | **$31.50** | **$50.50** | **$35–$70** |

### 1.3 AI API Cost Detail (Per Tool)

| AI Tool | Phase | Avg Tokens/Request | Cost/Request | Est. Daily Requests | Monthly Cost |
|---------|-------|-------------------|-------------|-------------------|-------------|
| AI Ad Copy Generator | 3 | ~400 (in) + 300 (out) | $0.000135 | 30–50 | $0.12–$0.20 |
| AI Product Description Writer | 3 | ~300 + 250 | $0.000115 | 20–30 | $0.07–$0.10 |
| AI Code Explainer | 3 | ~500 + 300 | $0.000155 | 30–50 | $0.14–$0.23 |
| Cron Expression Generator | 3 | ~100 + 100 | $0.000040 | 10–20 | $0.01–$0.02 |
| AI Roast My Website | 4 | ~800 + 400 | $0.000220 | 50–200* | $0.33–$1.32 |
| AI Text Detector | 4 | ~500 + 200 | $0.000130 | 50–100 | $0.20–$0.39 |
| AI Tone Rewriter | 4 | ~400 + 400 | $0.000160 | 30–50 | $0.14–$0.24 |
| "What AI Thinks of Your Code" | 4 | ~600 + 300 | $0.000170 | 30–80 | $0.15–$0.41 |
| AI Email Subject Line Gen | 5 | ~200 + 150 | $0.000065 | 15–30 | $0.03–$0.06 |
| AI Hashtag Generator | 5 | ~150 + 100 | $0.000050 | 20–40 | $0.03–$0.06 |
| AI Commit Message Generator | 5 | ~400 + 100 | $0.000105 | 10–20 | $0.03–$0.06 |
| AI Grammar & Style Checker | 6 | ~600 + 500 | $0.000205 | 50–150 | $0.31–$0.92 |
| AI "Explain Like I'm 5" | 6 | ~300 + 300 | $0.000120 | 20–50 | $0.07–$0.18 |
| AI Career Path Advisor | 6 | ~400 + 400 | $0.000160 | 20–50 | $0.10–$0.24 |
| AI Changelog Writer | 6 | ~500 + 300 | $0.000155 | 10–20 | $0.05–$0.09 |
| AI Meeting Notes Summarizer | 6 | ~800 + 400 | $0.000220 | 15–30 | $0.10–$0.20 |

*"Roast My Website" has highest variance — could spike significantly if viral.

**GPT-4o-mini pricing used:** $0.15/1M input tokens, $0.60/1M output tokens.

**Note:** The "Monthly Cost" column above reflects per-tool API cost only. The totals in
Section 1.2 include buffer for retries, errors, and higher-than-expected usage.

### 1.4 Cost Safety Mechanisms

| Mechanism | Threshold | Action |
|-----------|-----------|--------|
| Per-IP rate limit | 3 AI requests/hour | Returns 429 with retry-after header |
| Daily global AI cap | 500 requests total (Phase 3–4), 800 (Phase 5–6) | Shows "AI tools at capacity" message |
| OpenAI spending alert | $1/day (Phase 3), $2/day (Phase 5+) | Email notification to Mahdi |
| OpenAI hard limit | $60/month | API returns 429, all AI tools show "maintenance" |
| Weekly cost review | Every Sunday | Mahdi checks OpenAI dashboard, adjusts limits |

### 1.5 Total 2026 Cost Projection (May–Dec)

| Scenario | One-Time | Monthly Avg | 8-Month Total | Annual Cost |
|----------|----------|------------|---------------|-------------|
| **Conservative** (low traffic, minimal AI usage) | $200 | $12 | $296 | $296 |
| **Realistic** (moderate traffic, steady AI usage) | $275 | $25 | $475 | $475 |
| **High usage** (viral spike, all tools used daily) | $375 | $50 | $775 | $775 |

---

## 2. Revenue Projections

### 2.1 Ad Revenue Model

**Formula:** Monthly Revenue = Monthly Visits × (RPM / 1,000)

RPM (Revenue Per Mille) varies by:

- Audience type (developer = $6–$15, general = $2–$4)
- Geography (US/CA = highest, rest of world = lower)
- Season (Q4 = 20–30% higher due to holiday ad spend)
- Ad placement quality (above fold = higher, below fold = lower)
- Pages per session (more pages = more impressions = higher effective RPM)

**Blended RPM assumption for Bornara Tools:** $5–$10 (developer + AI audience, North American primary traffic, 2.5 pages/session avg)

### 2.2 Monthly Revenue Projection

| Month | Phase | Tools Live | Est. Visits | RPM | Ad Revenue | API Cost | Net |
|-------|-------|-----------|------------|-----|-----------|---------|-----|
| May 2026 | 1 | 8 | 50–200 | — | $0 (no AdSense yet) | $0 | -$250* |
| Jun 2026 | 2 | 14 | 200–800 | — | $0 (applying) | $0 | $0 |
| Jul 2026 | 3 | 19 | 500–2,000 | $4–$7 | $2–$14 | $11.50 | -$10 to +$3 |
| Aug 2026 | 4 | 24 | 1,500–5,000 | $5–$8 | $7.50–$40 | $27.50 | -$20 to +$13 |
| Sep 2026 | 5 | 30 | 3,000–10,000 | $5–$9 | $15–$90 | $31.50 | -$17 to +$59 |
| Oct 2026 | 6 | 35 | 5,000–15,000 | $6–$10 | $30–$150 | $50.50 | -$21 to +$100 |
| Nov 2026 | — | 35 | 7,000–20,000 | $7–$12** | $49–$240 | $40 | +$9 to +$200 |
| Dec 2026 | — | 35 | 10,000–25,000 | $8–$13** | $80–$325 | $40 | +$40 to +$285 |

*May includes one-time costs (domain + Narjes design work).
**Q4 seasonal RPM uplift (holiday advertising spend increases).

### 2.3 Annual Summary (2026, 8 Months)

| Scenario | Total Revenue | Total Cost | Net Profit/Loss | Break-Even Month |
|----------|-------------|-----------|----------------|-----------------|
| **Conservative** | $100–$200 | $296 | -$96 to -$196 | Not in 2026 |
| **Realistic** | $300–$600 | $475 | -$175 to +$125 | Oct–Nov 2026 |
| **Optimistic** | $600–$1,200 | $775 | -$175 to +$425 | Sep–Oct 2026 |

### 2.4 Year 2 Projection (2027) — SEO Compounding

| Quarter | Est. Monthly Visits | Est. Monthly Revenue | Est. Monthly Cost | Monthly Net |
|---------|-------------------|--------------------|--------------------|-------------|
| Q1 2027 | 15,000–40,000 | $100–$500 | $40–$60 | +$40 to +$440 |
| Q2 2027 | 25,000–60,000 | $175–$750 | $40–$60 | +$115 to +$690 |
| Q3 2027 | 40,000–80,000 | $300–$1,000 | $50–$80 | +$220 to +$920 |
| Q4 2027 | 50,000–120,000 | $400–$1,500 | $50–$80 | +$320 to +$1,420 |

**Year 2 total (realistic):** $3,000–$8,000 revenue, $500–$800 cost = **$2,200–$7,200 profit**

---

## 3. Break-Even Analysis

### 3.1 Monthly Break-Even Threshold

| Phase | Monthly API Cost | RPM Needed | Visits Needed at $6 RPM | Visits Needed at $10 RPM |
|-------|-----------------|-----------|------------------------|-------------------------|
| Phase 3 (Jul) | $11.50 | — | 1,917 | 1,150 |
| Phase 4 (Aug) | $27.50 | — | 4,583 | 2,750 |
| Phase 5 (Sep) | $31.50 | — | 5,250 | 3,150 |
| Phase 6 (Oct) | $50.50 | — | 8,417 | 5,050 |
| Steady state | $35 (avg) | — | 5,833 | 3,500 |

**Key insight:** At a realistic $7 RPM, the site needs ~5,000 visits/month to cover ongoing
API costs. This is achievable by Month 6–8 of operation.

### 3.2 Total Investment Recovery

| Investment Type | Amount | Revenue Needed | Months to Recover (at $100/mo net) |
|----------------|--------|---------------|-----------------------------------|
| One-time setup | $200–$375 | $200–$375 | 2–4 months after break-even |
| API costs before break-even | $50–$120 | $50–$120 | 1–2 months after break-even |
| Mahdi's time (100h × $0 cash cost) | $0 cash | $0 | Already free (sweat equity) |
| **Total cash to recover** | **$250–$495** | | **3–6 months after break-even** |

---

## 4. Scenario Modelling

### 4.1 Best Case: Viral Tool + Strong SEO

**Trigger:** "Roast My Website" goes viral on Twitter/Reddit in August 2026.

| Month | Visits | Revenue | Cost | Net |
|-------|--------|---------|------|-----|
| Aug spike | 50,000 | $350 | $90* | +$260 |
| Sep (afterglow) | 25,000 | $175 | $50 | +$125 |
| Oct (normalise) | 15,000 | $120 | $50 | +$70 |

*Includes emergency API cost spike from viral usage.

**Year 1 total in this scenario:** $1,200–$2,000

### 4.2 Worst Case: Slow SEO, No Viral, AdSense Delayed

**Trigger:** Google takes 6+ months to rank pages. AdSense application rejected once.

| Month | Visits | Revenue | Cost | Net |
|-------|--------|---------|------|-----|
| May–Aug | 50–500 | $0 | $40 (API) + $250 (setup) | -$290 |
| Sep–Oct | 500–2,000 | $0 (AdSense pending) | $60 | -$60 |
| Nov–Dec | 2,000–5,000 | $15–$40 | $70 | -$30 to -$55 |

**Year 1 total in this scenario:** $15–$40 revenue, $420 cost = **-$380 loss**

**This is still acceptable because:**

1. $380 loss is 100% CRA-deductible on T2125
2. The asset (35 tools, SEO, backlinks) carries forward to Year 2
3. Year 2 revenue projection is $2,000+ even in this scenario
4. Tax savings from the loss (~$100–$150 at marginal rate) reduce real cost to ~$230

### 4.3 Most Likely Scenario

| Month | Visits | Revenue | Cost | Net |
|-------|--------|---------|------|-----|
| May–Jun | 100–500 | $0 | $275 (setup) | -$275 |
| Jul–Aug | 1,000–4,000 | $5–$30 | $39 | -$9 to -$34 |
| Sep–Oct | 4,000–12,000 | $25–$120 | $82 | -$57 to +$38 |
| Nov–Dec | 8,000–20,000 | $60–$250 | $80 | -$20 to +$170 |
| **Year 1 total** | | **$90–$400** | **$476** | **-$386 to -$76** |

**Realistic Year 1 outcome:** Small loss ($76–$386), fully deductible, with an asset generating
$200–$500/month by mid-2027.

---

## 5. CRA Tax Impact

### 5.1 Deductible Expenses (2026)

| Expense Category | Amount Range | T2125 Line | Notes |
|-----------------|-------------|-----------|-------|
| OpenAI API | $80–$300 | 8810 | Software/subscriptions |
| Domain registration | $0–$15 | 8810 | Software/subscriptions |
| Vercel Pro (if needed) | $0–$160 | 8810 | Software/subscriptions |
| Narjes wages (design) | $200–$360 | 9270 | Subcontracts — document hours + pay via e-transfer |
| Children wages (testing) | $50–$100 | 9270 | Age-appropriate tasks — document work performed |
| **Total deductible** | **$330–$935** | | |

### 5.2 Revenue Reporting

| Revenue Source | Expected Amount | T2125 Line | Notes |
|---------------|----------------|-----------|-------|
| AdSense payments | $90–$400 | 8299 | Google pays via wire; keep monthly statements |
| Premium subscriptions (Phase 2) | $0 | 8299 | Not expected in 2026 |

### 5.3 Net Tax Impact

| Scenario | Revenue | Deductions | Net Loss | Tax Savings (at ~30% marginal) |
|----------|---------|-----------|---------|-------------------------------|
| Conservative | $90 | $330 | -$240 | ~$72 saved |
| Realistic | $250 | $475 | -$225 | ~$68 saved |
| Optimistic | $600 | $935 | -$335 | ~$101 saved |

**Important:** This loss adds to the overall Bornara AI T2125 net loss ($10,000–$20,000
target for 2026), which is CRA-defensible given the business is in its growth phase with
documented revenue-generating intent across all streams.

---

## 6. Revenue Optimisation Levers

Once the site is live, these actions increase revenue without increasing traffic:

| Lever | Action | Expected Impact | When to Use |
|-------|--------|----------------|-------------|
| **Increase pages/session** | Better internal linking, tool combos, related tools | +30–50% revenue | Always |
| **Improve RPM** | Test ad placement positions, try auto ads | +10–25% RPM | After 3 months of data |
| **Q4 seasonal boost** | Publish holiday-themed tools/content | +20–30% RPM in Nov–Dec | Q4 |
| **Upgrade ad network** | Switch from AdSense to Ezoic (at 10K sessions) | +50–100% RPM | When eligible |
| **Add premium tier** | $5/month "no ads + unlimited AI" | +$50–$200/month | When >10K visits/month |
| **Affiliate links** | Link to Vercel, Shopify, OpenAI with affiliate codes | +$10–$50/month | When relevant tools exist |
| **Reduce AI cost** | Tighten rate limits, cache common outputs, use cheaper models | -20–40% API cost | Ongoing |
| **Add more tools** | Each new tool = new landing page = new keyword | +3–5% traffic per tool | Ongoing |
