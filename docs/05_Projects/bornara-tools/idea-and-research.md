# Bornara Tools — Toolbox Website Idea & Research Page

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 0.1.0
**Last Updated:** 2026-04-17
**Applies To:** Bornara Tools

---

## 1. Project Concept

**Name:** Bornara Tools
**URL:** `tools.bornara.com` (subdomain of existing bornara.com — free, builds domain authority)
**Tagline:** "Tools that cost $0. Built by a developer, for everyone."
**Type:** Free online toolbox website with ad-supported revenue model

**Positioning:** The free toolbox for developers, creators, and small business owners who use AI daily — where every tool is either free forever, powered by AI, or both.

---

## 2. Niche Selection: "Free AI & Developer Tools"

### Why This Niche

1. **Developer/AI audience RPM:** $6–$15 (vs $1–$3 for generic consumer tools)
2. **SaaS advertisers actively bid** on developer audience inventory (Vercel, Supabase, DigitalOcean, cloud providers)
3. **Mahdi's authentic credibility:** Working full-stack engineer building AI — not fake authority
4. **Cross-sells Tech Consulting:** "I built these tools — I can build custom ones for your business"
5. **AI is the trend of 2025–2027:** People search for free AI alternatives to $49/month tools
6. **Developer tools have insane search volume with low content competition** (e.g., JSON formatter = 1.2M searches, most results are ugly single-page sites)

### RPM by Audience Type

| Audience | Typical AdSense RPM | Why |
|----------|--------------------|----|
| Generic consumer (convert PDF, resize image) | $1.50–$3.00 | Low-value advertisers, high competition |
| Small business / Shopify / marketers | $4.00–$10.00 | High-intent commercial audience |
| Developers / AI practitioners | $6.00–$15.00 | SaaS ads pay premium CPM |
| Finance / legal | $10.00–$25.00 | Extremely competitive, doesn't match Mahdi's expertise |

---

## 3. Competitive Landscape

### Free Tools Website Landscape (2024–2026)

| Site | Monthly Visits | Primary Revenue | Niche |
|------|---------------|-----------------|-------|
| ilovepdf.com | ~100M | Ads + Premium ($6/mo) | PDF |
| smallpdf.com | ~30M | Premium-first ($12/mo) | PDF |
| tinypng.com | ~5M | API credits | Image compression |
| remove.bg | ~15M | Credits ($0.20/image) | AI background removal |
| convertio.co | ~20M | Ads + Premium | File conversion |
| ezgif.com | ~10M | AdSense only | GIF/video tools |
| tools.pdf24.org | ~5M | Free/donate model | PDF |

### "Expensive Elsewhere" Gap — Tools People Search Free Alternatives For

| Expensive Tool | Price | What People Search For | Monthly Search Volume |
|---------------|-------|----------------------|---------------------|
| Grammarly Premium | $12/mo | "free grammar checker" | 550K+ |
| Canva Pro | $13/mo | "free social media image resizer" | 90K+ |
| Jasper AI | $49/mo | "free AI copywriter" | 110K+ |
| Copy.ai | $49/mo | "free ad copy generator" | 40K+ |
| Semrush / Ahrefs | $99–$199/mo | "free SEO checker", "free keyword tool" | 300K+ |
| JSON formatter (paid IDEs) | $10–$50 | "json formatter online free" | 1.2M+ |
| Regex testers (paid tools) | bundled | "regex tester online" | 450K+ |
| API testing (Postman Pro) | $12/mo | "free api tester online" | 80K+ |
| JWT decoder (auth0) | gated | "jwt decoder online" | 200K+ |
| Colour contrast checker | bundled | "colour contrast checker free" | 120K+ |

---

## 4. Tool Selection (35 Tools Across 5 Categories)

### Category 1: Free Alternatives to Expensive Tools (Traffic Magnets)

| # | Tool | Replaces What | Search Vol (est.) | Build Time | API Cost |
|---|------|--------------|-------------------|-----------|---------|
| 1 | JSON Formatter & Validator | IDE plugins, jsonlint.com | 1.2M/mo | 2h | $0 (client-side) |
| 2 | Regex Tester with AI Explanation | regex101 (limited), paid IDE plugins | 450K/mo | 4h | ~$0.50/mo AI |
| 3 | AI Ad Copy Generator (Facebook, Google, TikTok) | Jasper ($49), Copy.ai ($49) | 110K/mo | 6h | ~$5/mo |
| 4 | AI Grammar & Style Checker | Grammarly Premium ($12/mo) | 550K/mo | 8h | ~$8/mo |
| 5 | SEO Meta Tag Analyzer | Semrush ($99/mo), Ahrefs ($99/mo) | 90K/mo | 4h | $0 (client-side parse) |
| 6 | Image Compressor (PNG/JPG/WebP) | TinyPNG (API credits), Squoosh | 300K/mo | 3h | $0 (Sharp.js) |
| 7 | Social Media Image Resizer (presets for every platform) | Canva Pro ($13/mo) | 90K/mo | 3h | $0 (client-side canvas) |
| 8 | Colour Contrast Checker (WCAG AA/AAA) | WebAIM (limited), paid design tools | 120K/mo | 2h | $0 |
| 9 | AI Product Description Writer | Shopify Magic (limited), Jasper | 40K/mo | 5h | ~$3/mo |
| 10 | Free Invoice Generator (Canadian HST-aware) | Wave (requires account), FreshBooks ($15/mo) | 60K/mo | 6h | $0 (client-side PDF) |

### Category 2: Tools That Don't Exist Yet (Blue Ocean)

| # | Tool | Why It's Missing | Who Needs It | Build Time | API Cost |
|---|------|-----------------|-------------|-----------|---------|
| 11 | AI Code Explainer — paste code, get plain-English explanation | ChatGPT requires account + context switching | Junior devs, students, code reviewers | 5h | ~$3/mo |
| 12 | Prompt Engineering Playground — test prompts against multiple AI models side-by-side | No free tool does multi-model comparison | AI practitioners, prompt engineers | 10h | ~$10/mo |
| 13 | AI Commit Message Generator — paste a diff, get a conventional commit message | Doesn't exist as standalone web tool | Developers, open-source contributors | 3h | ~$1/mo |
| 14 | CORS Proxy Tester — test URL CORS headers, generate correct headers | Existing tools ugly, outdated, no explanation | Frontend developers | 3h | $0 |
| 15 | AI Changelog Writer — paste git log, get human-readable changelog | Nothing does this well as free web tool | Developers, product managers | 4h | ~$2/mo |
| 16 | Cron Expression Generator & Explainer — visual cron builder with AI plain-English explanation | crontab.guru is limited, no AI explanation | DevOps, backend developers | 3h | ~$0.50/mo |
| 17 | `.env` File Validator — paste .env, check for common security issues | Nobody has built this as web tool | All developers | 3h | $0 (regex-based) |
| 18 | Shopify Liquid Template Previewer — paste Liquid code, preview rendered output | No free standalone tool exists | Shopify developers (direct Giftifye synergy) | 6h | $0 |

### Category 3: AI Trend-Keeper Tools (2025–2027 Wave)

| # | Tool | Trend It Rides | Search Trajectory | Build Time | API Cost |
|---|------|---------------|-------------------|-----------|---------|
| 19 | AI Text Detector — paste text, score AI vs human probability | Teachers, editors, publishers need this; paid tools charge $10+/mo | Skyrocketing (200K+/mo) | 6h | ~$5/mo |
| 20 | AI Image Detector — upload image, score AI-generated probability | Same trend for visual content | Rising fast | 8h | ~$5/mo (vision API) |
| 21 | AI Prompt Library & Search — searchable database of proven prompts | "best ChatGPT prompts for X" searched millions of times | Massive and growing | 8h | $0 (static DB) |
| 22 | LLM Token Counter — paste text, see token count for GPT-4, Claude, Gemini, Llama | Developers estimate API costs | Growing with AI adoption | 2h | $0 (tiktoken WASM) |
| 23 | AI Tone Rewriter — paste text, rewrite in formal/casual/funny/professional/Gen-Z | Everyone uses AI text and needs to "humanize" it | Explosive | 4h | ~$3/mo |
| 24 | AI Meeting Notes Summarizer — paste transcript, get action items and summary | Otter.ai $10/mo; Fireflies $10/mo | Strong demand, high CPM | 5h | ~$4/mo |

### Category 4: AI Tools That Change Perception (Viral Potential)

| # | Tool | Why It's Mind-Changing | Viral Potential | Build Time | API Cost |
|---|------|----------------------|----------------|-----------|---------|
| 25 | AI Roast My Website — enter URL, AI gives brutally honest UX/SEO/design feedback | Entertaining + genuinely useful; people share results | Very High (shareable) | 8h | ~$5/mo |
| 26 | AI "Explain Like I'm 5" — paste technical text, get 5-year-old explanation | Unique, fun, useful for non-tech people | High | 3h | ~$2/mo |
| 27 | AI Career Path Advisor — answer 5 questions, get personalised tech career recommendations | High emotional engagement; shareable like personality tests | Very High | 6h | ~$3/mo |
| 28 | "What AI Thinks of Your Code" — paste code, get opinionated review with rating | Developers share results; competitive element ("I got 9/10") | Very High | 5h | ~$3/mo |

### Category 5: Developer Utilities for the AI Era (High CPM, Sticky)

| # | Tool | Daily Use Case | Stickiness | Build Time | API Cost |
|---|------|---------------|-----------|-----------|---------|
| 29 | JWT Decoder & Inspector | Debug auth tokens | Very High (daily use) | 2h | $0 |
| 30 | Base64 Encoder/Decoder | Encode/decode data for APIs | Very High | 1h | $0 |
| 31 | UUID/ULID Generator | Generate unique IDs for databases | High | 1h | $0 |
| 32 | Unix Timestamp Converter | Convert between dates and timestamps | Very High | 1h | $0 |
| 33 | API Response Formatter (JSON/XML/YAML pretty-print) | Debug API responses | Very High | 2h | $0 |
| 34 | HTTP Status Code Reference (interactive + AI explanation) | Look up status codes with real-world context | Medium (great SEO) | 2h | ~$0.50/mo |
| 35 | Hash Generator (MD5, SHA-1, SHA-256, bcrypt) | Security, verification | High | 2h | $0 |

---

## 5. Tool Prioritisation Framework

| Criterion | Weight | What It Means |
|-----------|--------|---------------|
| Search volume | 30% | Does the keyword "X online free" get searched? |
| Build cost | 25% | Hours to build + ongoing API cost |
| CPM quality | 20% | Does the tool attract high-CPM advertisers? |
| Differentiation | 15% | Can we be notably better than top 3 results? |
| Synergy | 10% | Does it cross-promote other Bornara products? |

---

## 6. Website Structure

```text
tools.bornara.ai/
├── /                           → Homepage: featured tools, categories, search
├── /tools/                     → All tools directory
│   ├── /developer/             → Category: Developer Utilities
│   │   ├── /json-formatter
│   │   ├── /regex-tester
│   │   ├── /jwt-decoder
│   │   ├── /base64
│   │   ├── /uuid-generator
│   │   ├── /unix-timestamp
│   │   ├── /hash-generator
│   │   ├── /cors-tester
│   │   ├── /cron-generator
│   │   ├── /env-validator
│   │   └── /http-status-codes
│   ├── /ai/                    → Category: AI-Powered Tools
│   │   ├── /ad-copy-generator
│   │   ├── /product-description-writer
│   │   ├── /code-explainer
│   │   ├── /grammar-checker
│   │   ├── /tone-rewriter
│   │   ├── /commit-message-generator
│   │   ├── /changelog-writer
│   │   ├── /meeting-summarizer
│   │   ├── /explain-like-5
│   │   ├── /roast-my-website
│   │   ├── /code-reviewer
│   │   └── /career-advisor
│   ├── /ai-detection/          → Category: AI Detection
│   │   ├── /text-detector
│   │   └── /image-detector
│   ├── /design/                → Category: Design & Media
│   │   ├── /image-compressor
│   │   ├── /image-resizer
│   │   ├── /colour-contrast
│   │   └── /colour-palette
│   ├── /seo/                   → Category: SEO Tools
│   │   ├── /meta-analyzer
│   │   └── /prompt-library
│   └── /business/              → Category: Business Tools
│       ├── /invoice-generator
│       └── /shopify-liquid-preview
├── /blog/                      → (Phase 2) How-to articles for SEO
└── /pricing/                   → (Phase 2) Premium plan page
```

### Homepage Design Principles

- Hero: "35+ Free Tools for Developers, Creators & Business Owners"
- Categories displayed as cards with tool count
- "Most Popular" row — top 5 by usage (dynamic, social proof)
- "New" badge on tools added in last 30 days
- Search bar — instant filter across all tools
- No login required — ever, for any free tool
- Dark mode toggle — developer audience expects this

---

## 7. Tech Stack (Locked In — April 2026)

| Layer | Choice | Why | Cost |
|-------|--------|-----|------|
| Framework | **Next.js 15** (App Router) | Turbopack, partial prerendering, React 19 Server Components | $0 |
| Runtime | **Node.js 20 LTS** | Vercel default, long-term support | $0 |
| Language | **TypeScript** (strict mode) | Catch bugs at compile time | $0 |
| Package manager | **pnpm** | Fastest installs, strictest deps, Vercel-native | $0 |
| Hosting | **Vercel** Free Tier | Serverless functions, CDN, free SSL, auto-deploy | $0/month |
| Styling | **Tailwind CSS 4** | Utility-first, dark mode via `class` strategy | $0 |
| Component library | **shadcn/ui** | Copy-paste Radix primitives, Tailwind-native, zero runtime | $0 |
| Icons | **Lucide React** | Clean, lightweight, tree-shakable | $0 |
| Image processing | **Sharp.js** in Vercel Functions | No external service | $0 |
| PDF (invoice tool) | **pdf-lib** (client-side) | No server round-trip | $0 |
| AI tools | **OpenAI GPT-4o-mini** | Cheapest capable model ($0.15/1M input tokens) | ~$5–$50/month |
| Rate limiting | **Upstash Redis** Free Tier | Serverless Redis, 10K commands/day | $0 |
| Analytics | **GA4** | AdSense requires analytics, tracks user flows | $0 |
| Ads | **Google AdSense** | Lowest barrier to entry | $0 (rev share) |
| Testing | **Vitest** + React Testing Library | Fast, Vite-native unit + component tests | $0 |
| Error monitoring | **Sentry** Free Tier | 5K errors/month, source maps, client + server | $0 |
| Linting | **ESLint** + **Prettier** + **Husky** | Auto-format on save, pre-commit hooks | $0 |
| Payments (Phase 2) | Stripe or Paddle | CRA-friendly invoicing | 2.9% + 30¢ |
| Domain | **tools.bornara.com** (subdomain) | Existing domain, builds parent SEO authority | $0 |

**Cost to launch: $0 (subdomain of existing bornara.com).** Running cost Year 1: $0–$50/month.

> **Full tech stack details:** See [development-and-launch-plan.md](./development-and-launch-plan.md) Section 1.

### AI Cost Controls

- Rate-limit AI endpoints: max 3 requests/IP/hour
- Use GPT-4o-mini, not GPT-4o (10x cheaper)
- Set max_tokens hard cap: 300 per response
- Cache popular outputs
- Hard daily cap: 500 AI requests/day total across all tools
- Per-IP rate limiting
- Graceful degradation: "AI tools temporarily at capacity"
- Weekly cost monitoring alert via OpenAI usage dashboard

---

## 8. Monetisation Strategy

### Phase 1 (Launch → 10,000 visits/month): Google AdSense Only

- Apply for AdSense when site has 20+ pages
- Place ads: top banner, between tool sections, sidebar on desktop
- Expected: $0–$75/month in 2026

### Phase 2 (10,000–50,000 visits/month): AdSense + Soft Premium

- "No ads" tier at $4–$7/month (Stripe or Paddle)
- Usage limits on AI tools (3 free/day, unlimited for premium)
- Expected: $75–$300/month

### Phase 3 (50,000+ visits/month): Upgrade Ad Network

- Apply for Ezoic (automated ad optimisation, 2–4x RPM over AdSense)
- Or Mediavine (requires 50K sessions/month)
- Annual plan discount (2 months free)
- Expected: $300–$1,500/month

### Cross-Revenue Synergies

- AI tools that generate Shopify content → link to Giftifye.com
- Invoice generator → "Need help setting up your business? [Tech Consulting]"
- Ad copy generator → "Run a Shopify store? See Giftifye.com for gift products"
- "Roast My Website" → "Need help fixing these issues? Book a consultation"
- Prompt Library → cross-promote AI Agent Platform

---

## 9. SEO Strategy

### On-Page SEO

- Every tool page H1: "[Tool Name] — Free Online [Tool]"
- Meta description: "Use our free [tool] online. No signup required. No watermarks."
- URL structure: `tools.bornara.com/tools/qr-code-generator`
- "How to use" section (300–500 words) on every tool page
- FAQ schema markup (5 questions per tool)
- Target long-tail keywords

### Backlink Acquisition

- Submit to ProductHunt, BetaList, Hacker News "Show HN"
- List on: alternativeto.net, toolify.ai, futurepedia.io
- Reddit: r/webtools, r/entrepreneur, r/shopify, r/webdev, r/programming
- Twitter/X: mini tutorial per tool

### Internal Linking

- Every tool links to 3–5 related tools
- Homepage: "Most Popular", "New Tools", category pages
- Blog/articles about use cases (Phase 2)

---

## 10. Build Roadmap

| Month | Focus | Tools to Ship | Hours |
|-------|-------|--------------|-------|
| May 2026 | Domain + scaffold + 6 dev utilities ($0 API) | JSON formatter, Base64, UUID, Unix timestamp, JWT decoder, hash generator | 15h |
| Jun 2026 | +4 zero-cost tools + SEO foundation | Regex tester, image compressor, image resizer, colour contrast | 15h |
| Jul 2026 | First AI tools + AdSense application | AI code explainer, AI ad copy generator, LLM token counter | 20h |
| Aug 2026 | Viral-potential tools + backlink push | Roast My Website, AI text detector, prompt library | 20h |
| Sep 2026 | Business tools + cross-promotion | Invoice generator, Shopify Liquid previewer, product description writer | 15h |
| Oct 2026 | Analytics review, SEO refinement, iterate | Tone rewriter, grammar checker + optimise top 5 pages | 15h |

**Total: ~100 hours** across 6 months = ~17h/month = ~4h/week

---

## 11. Revenue Projections

| Scenario | Year 1 Traffic | Year 1 Ad Revenue | What Has to Be True |
|----------|---------------|-------------------|---------------------|
| Conservative | 3,000–8,000/month by Dec 2026 | $5–$40/month | 15+ tools, basic SEO, no viral hits |
| Realistic | 10,000–25,000/month by Dec 2026 | $60–$250/month | 20+ tools, 2–3 get ProductHunt/Reddit traction |
| Optimistic | 40,000–80,000/month by Dec 2026 | $300–$800/month | Viral tool hits, strong backlinks |

### Ad Revenue Benchmarks

| Monthly Visits | Typical AdSense RPM | Monthly Ad Revenue |
|----------------|--------------------|--------------------|
| 5,000 | $1.50–$4.00 | $7–$20 |
| 15,000 | $2.00–$5.00 | $30–$75 |
| 50,000 | $2.50–$6.00 | $125–$300 |
| 100,000 | $3.00–$8.00 | $300–$800 |
| 500,000 | $4.00–$10.00 | $2,000–$5,000 |

---

## 12. CRA / Tax Implications

| Expense | Amount | T2125 Line |
|---------|--------|------------|
| Domain registration | ~$15/yr | 8810 (Software/subscriptions) |
| OpenAI API costs | $5–$25/month | 8810 |
| Vercel Pro (if needed) | $20/month | 8810 |
| Narjes design work | $300–$600 | 9270 (Wages) |
| Stock images/assets | $0–$50 | 8810 |
| Advertising (if any) | Any amount | 8520 |

- Ad revenue from AdSense = business income on T2125
- HST registration triggers at $30,000 — not a Year 1 concern
- This becomes the **5th revenue stream** for Bornara AI in 2026

---

## 13. Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| SEO takes longer than 12 months | High | Medium | Launch early, focus on long-tail |
| Google HCU penalises thin tool pages | Medium | High | 300+ word "how to" on every page |
| AI API cost exceeds ad revenue | Medium | High | Rate limiting + GPT-4o-mini + caching |
| Ad blockers reduce revenue | High (40%) | Medium | Accept; focus on premium later |
| Competitor copies niche | Low Year 1 | Low | First-mover advantage in CA SMB niche |
| Time overrun on dev | High | Medium | Use open-source libraries, not custom |
| Viral tool spikes API cost | Medium | High | Hard daily caps, graceful degradation |

---

## 14. What to Defer

- PDF tools — ilovepdf owns this space
- Background remover — remove.bg dominant, high API cost
- AI image generator — extremely expensive, no differentiation
- Video tools — complex, ezgif owns it
- User accounts / login — not in Year 1
- Mobile app — web-first, responsive design enough
- Premium tier — wait until 10K visits/month proves audience

---

## 15. AI Infrastructure Decision — RESOLVED

**Decision: Use OpenAI GPT-4o-mini API. Do not self-host.**

**Rationale (analysed April 17, 2026):**

1. **Hardware limitation:** Desktop has NVIDIA GPU with ≤6GB VRAM — can only run Llama 3.1 8B quantized (Q4), which produces noticeably worse output than GPT-4o-mini
2. **Cost comparison:** Electricity to run PC 24/7 ($15–$25/month) ≈ OpenAI API cost ($5–$25/month) — no savings
3. **Speed:** Local = ~6-10 tok/s (3–5 second responses) vs API = <1 second. Slow responses hurt Core Web Vitals and SEO ranking.
4. **Scalability:** Local GPU handles 1 request at a time; 2 concurrent users = one waits
5. **Security:** Self-hosting requires exposing home network (port forwarding)
6. **Uptime:** PC must be on 24/7; power outage = site down

**Future-proofing:** Design API routes with provider-agnostic interface. If Groq or Cloudflare Workers AI offers competitive free Llama hosting, swap one file.

**Revisit triggers:**

- API costs exceed $100/month consistently → consider GPU upgrade (RTX 4090) + self-hosting
- 500K+ visits/month → evaluate Groq API (free tier) or Together.ai
- A free hosted Llama API becomes production-viable → swap endpoint
