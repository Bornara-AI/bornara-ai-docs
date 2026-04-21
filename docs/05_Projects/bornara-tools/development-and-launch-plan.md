# Bornara Tools — Development & Launch Plan

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 0.1.0
**Last Updated:** 2026-04-17
**Applies To:** Bornara Tools

---

## 1. Technology Stack (Locked In)

| Layer | Technology | Version | Why |
|-------|-----------|---------|-----|
| Framework | **Next.js** | 15 (App Router) | Turbopack (fast dev), partial prerendering, React 19 Server Components, `after()` API for analytics |
| Runtime | **Node.js** | 20 LTS | Vercel default, stable, long-term support |
| Language | **TypeScript** | 5.x (strict mode) | Catch bugs at compile time, better DX |
| Package manager | **pnpm** | 9.x | Fastest installs, strictest deps, Vercel-native support, saves disk space |
| Styling | **Tailwind CSS** | 4.x | Utility-first, no runtime CSS, dark mode via `class` strategy |
| Component library | **shadcn/ui** | Latest | Copy-paste Radix primitives, Tailwind-native, zero runtime cost, accessible out of the box |
| Testing | **Vitest** + React Testing Library | Latest | Fast, Vite-native, covers unit + component tests |
| E2E Testing | **Playwright** | Latest | Deferred to Phase 2+ — full tool flow testing on CI |
| Error monitoring | **Sentry** | Free tier (5K errors/mo) | Client + server error tracking with source maps |
| Analytics | **Google Analytics 4** | — | Free, integrates with AdSense, tracks user flows |
| AI provider | **OpenAI GPT-4o-mini** | — | $0.15/1M in, $0.60/1M out — with provider-agnostic abstraction |
| Rate limiting | **Upstash Redis** | Free tier | Serverless Redis, no connection pooling needed |
| Image processing | **Sharp.js** | Server-side | Image compression/resize in serverless functions |
| PDF generation | **pdf-lib** | Client-side | Invoice generator — no server cost |
| Token counting | **tiktoken WASM** | Client-side | LLM token counter — no API call needed |
| Linting | **ESLint** + **Prettier** | Latest | Consistent code style, auto-format on save |
| Git hooks | **Husky** + **lint-staged** | Latest | Pre-commit lint + format on staged files only |

### Hosting & Infrastructure

| Resource | Provider | Tier | Limit | Monthly Cost |
|----------|----------|------|-------|--------------|
| Hosting + CDN + SSL | **Vercel** | Hobby (free) | 100GB bandwidth, 100 GB-hrs serverless, 10 concurrent functions | $0 |
| DNS | **Vercel** (or existing registrar) | — | CNAME: `tools` → `cname.vercel-dns.com` | $0 |
| Error tracking | **Sentry** | Free | 5,000 errors/month | $0 |
| Uptime monitoring | **UptimeRobot** | Free | 50 monitors, 5-min checks | $0 |
| AI API | **OpenAI** | Pay-as-you-go | Hard cap $60/month | $5–$50 |
| Redis (rate limiting) | **Upstash** | Free | 10K commands/day | $0 |
| **Total fixed cost** | | | | **$0/month** |

**Domain:** `tools.bornara.com` (subdomain of existing `bornara.com` — free, builds parent domain SEO authority)

### Vercel Free Tier Risk Assessment

| Resource | Limit | When You'll Hit It | Mitigation |
|----------|-------|--------------------|------------|
| Bandwidth | 100 GB/month | ~500K page views | Unlikely in Year 1 |
| Serverless concurrency | 10 concurrent | AI viral spike (200+ concurrent) | Edge runtime for non-AI routes, client-side retry queue |
| Serverless execution | 100 GB-hours/month | Sustained high AI traffic | Timeout AI routes at 10s, cache common prompts |
| Image Optimization | 1,000 source images/month | Only if user-uploaded images are optimised via Vercel | Use Sharp.js in serverless instead |
| Build time | 6,000 min/month | Never (weekly deploys) | — |

---

## 2. Development Principles

| Principle | Rule |
|-----------|------|
| Client-side first | If a tool can run in the browser, it must. Server = only for AI API proxy. |
| One tool = one page | Each tool is a standalone, SEO-optimised landing page. |
| Ship weekly | Deploy at least 1–2 tools per week during active phases. |
| No premature abstraction | Build each tool independently; extract shared components only after patterns emerge. |
| Performance budget | Initial JS bundle < 200KB, LCP < 2.5s, CLS < 0.1 on every page. |
| Mobile-first | Every tool must work on mobile. Developer audience increasingly uses tablets/phones. |

---

## 3. Project Setup (Week 1 — May 2026)

### Day 1–2: Repository & Infrastructure

```text
Tasks:
□ Create GitHub repository: Bornara-AI/bornara-tools
□ Initialize Next.js 15 with App Router (pnpm create next-app@latest --use-pnpm)
□ Install shadcn/ui (pnpm dlx shadcn@latest init) — select: New York style, Tailwind CSS, dark mode class
□ Install dev dependencies: vitest, @testing-library/react, @sentry/nextjs, husky, lint-staged
□ Configure Tailwind CSS 4 + dark mode (class-based toggle)
□ Set up Vercel project connected to GitHub (auto-deploy on push to main)
□ Configure DNS: tools.bornara.com → Vercel (CNAME record)
□ Create .env.local with OPENAI_API_KEY placeholder (Phase 3)
□ Set up ESLint + Prettier + Husky pre-commit hook
□ Initialize Sentry (pnpm dlx @sentry/wizard@latest -i nextjs)
□ Create initial folder structure (see below)
```

### Folder Structure

```text
bornara-tools/
├── app/
│   ├── layout.tsx              — Root layout (nav, footer, dark mode, AdSense script)
│   ├── page.tsx                — Homepage (tool categories, search, featured)
│   ├── tools/
│   │   ├── page.tsx            — All tools directory
│   │   ├── developer/
│   │   │   ├── json-formatter/
│   │   │   │   ├── page.tsx    — Static page with metadata + SEO
│   │   │   │   └── _components/
│   │   │   │       └── JsonFormatterClient.tsx  — 'use client' tool logic
│   │   │   ├── base64/
│   │   │   ├── jwt-decoder/
│   │   │   └── ...
│   │   ├── ai/
│   │   │   ├── ad-copy-generator/
│   │   │   └── ...
│   │   ├── design/
│   │   ├── business/
│   │   └── ai-detection/
│   ├── api/
│   │   └── tools/
│   │       ├── ad-copy/
│   │       │   └── route.ts    — Server-side AI proxy (never expose API key)
│   │       └── ...
│   ├── privacy/
│   │   └── page.tsx            — Privacy Policy (required for AdSense)
│   └── terms/
│       └── page.tsx            — Terms of Service
├── components/
│   ├── ui/                     — shadcn/ui components (Button, Input, Textarea, Tabs, etc.)
│   ├── layout/
│   │   ├── Navbar.tsx          — Navigation with category links + dark mode toggle
│   │   ├── Footer.tsx          — Footer with links, copyright, Bornara branding
│   │   └── Sidebar.tsx         — Related tools sidebar (desktop)
│   ├── shared/
│   │   ├── ToolPageShell.tsx   — Shared wrapper: H1, description, how-to, FAQ, ads, related
│   │   ├── CopyButton.tsx      — Universal copy-to-clipboard (uses shadcn Button)
│   │   ├── FileUpload.tsx      — Drag-and-drop file input (image tools)
│   │   ├── AdUnit.tsx          — Lazy-loaded AdSense ad unit wrapper
│   │   └── RelatedTools.tsx    — "You might also need..." component
│   └── tools/                  — Tool-specific components (if shared between tools)
├── lib/
│   ├── ai/
│   │   ├── provider.ts         — Provider-agnostic AI interface (swap OpenAI/Groq later)
│   │   ├── openai.ts           — OpenAI GPT-4o-mini implementation
│   │   └── rate-limit.ts       — IP-based rate limiting logic
│   ├── tools-registry.ts       — Metadata for all tools (name, slug, category, related)
│   └── seo.ts                  — Shared metadata generation helpers
├── public/
│   ├── images/
│   │   ├── og/                 — Open Graph images per tool (auto-generated)
│   │   └── icons/              — Tool category icons
│   └── ads.txt                 — AdSense ads.txt verification file
├── styles/
│   └── globals.css             — Tailwind base + custom utilities
├── .env.local                  — API keys (never committed)
├── .env.example                — Template for env vars
├── __tests__/                  — Vitest unit + component tests
│   ├── lib/                    — Tool logic tests (formatters, encoders, generators)
│   └── components/             — Component render tests
├── sentry.client.config.ts     — Sentry browser-side config
├── sentry.server.config.ts     — Sentry server-side config
├── next.config.js
├── tailwind.config.ts
├── vitest.config.ts
├── tsconfig.json
├── pnpm-lock.yaml
└── package.json
```

### Day 3: Shared Components

```text
Tasks:
□ Install shadcn/ui components: button, input, textarea, tabs, toast, tooltip, dropdown-menu, dialog
□ Build ToolPageShell component:
  - Props: title, description, howToContent, faqItems, relatedTools, children
  - Renders: H1, meta, breadcrumb, tool area, "How to use" section, FAQ schema, ad slots, related tools
□ Build Navbar with:
  - Logo (Bornara Tools)
  - Category links: Developer | AI | Design | Business
  - Dark mode toggle (persist in localStorage)
  - Search icon (opens search overlay)
□ Build Footer with:
  - Bornara AI branding
  - Links: Privacy, Terms, All Tools, GitHub
  - "Built by Mahdi Moradi in Calgary, Canada"
□ Build CopyButton (one-click copy with "Copied!" feedback)
□ Build RelatedTools sidebar component
□ Build AdUnit wrapper (lazy-load, placeholder until AdSense approved)
□ Create tools-registry.ts with metadata for Phase 1 tools
□ Create SEO helpers: generateToolMetadata(), generateFaqSchema()
```

### Day 4–5: First 3 Tools (Validate the Pattern)

Build the first 3 tools to validate the ToolPageShell pattern works:

1. **JSON Formatter** — textarea input → formatted output, syntax highlighting
2. **Base64 Encoder/Decoder** — input → encode/decode toggle → output
3. **UUID Generator** — click to generate, copy button, bulk generate option

Each tool follows the exact same pattern:

```text
page.tsx (server) → static metadata + ToolPageShell + ClientComponent
ClientComponent.tsx (client) → 'use client', all interactive logic
```

---

## 4. Phase-by-Phase Development Schedule

### Phase 1: Foundation Launch (May 1–31, 2026)

**Allocation:** 18–22 hours total (extra 3–4h for shadcn/ui setup + Sentry + Vitest config)

| Week | Days | Tasks | Hours |
|------|------|-------|-------|
| Week 1 (May 1–7) | Day 1–5 | Repo setup, shared components, first 3 tools | 8h |
| Week 2 (May 8–14) | Day 6–9 | 5 more tools: JWT, Unix timestamp, Hash gen, Colour contrast, Case converter | 6h |
| Week 3 (May 15–21) | — | SEO: submit sitemap to Google Search Console, add FAQ schema to all pages | 2h |
| Week 4 (May 22–31) | — | Privacy/Terms pages, README, soft launch on Reddit r/webdev | 2h |

**Deliverables:**

- 8 live tools at tools.bornara.com
- All tools indexed in Google (sitemap submitted)
- Privacy Policy + Terms of Service pages live
- First Reddit post published
- Dark mode working
- Mobile responsive confirmed

**Launch Checklist:**

- [ ] All 8 tools functional on desktop + mobile
- [ ] Dark mode toggle works and persists
- [ ] Each tool page has: H1, meta description, 300+ word how-to, FAQ schema
- [ ] Internal links: each tool links to 3+ related tools
- [ ] Privacy Policy page live
- [ ] Terms of Service page live
- [ ] Google Search Console verified + sitemap submitted
- [ ] GA4 tracking installed and verified
- [ ] ads.txt placeholder ready (for AdSense)
- [ ] Open Graph images for sharing
- [ ] Lighthouse score > 90 on every tool page
- [ ] Reddit post drafted for r/webdev

### Phase 2: Content & Image Tools (June 1–30, 2026)

**Allocation:** 17 hours total

| Week | Tasks | Hours |
|------|-------|-------|
| Week 1 | Image Compressor (Sharp.js server-side), Image Resizer (client Canvas API) | 6h |
| Week 2 | Colour Palette Generator, Word/Character Counter | 4h |
| Week 3 | Regex Tester (with syntax highlighting), CORS Proxy Tester | 4h |
| Week 4 | SEO: add how-to content to all 14 pages, submit new URLs to Google, prep AdSense application | 3h |

**Deliverables:**

- 14 live tools
- AdSense application submitted (requires 20+ pages — include Privacy, Terms, About)
- All tool pages have comprehensive how-to content

### Phase 3: AI Tools Launch (July 1–31, 2026)

**Allocation:** 21 hours total

| Week | Tasks | Hours |
|------|-------|-------|
| Week 1 | AI provider abstraction layer, rate limiting (Upstash Redis), /api route pattern | 5h |
| Week 2 | AI Ad Copy Generator, AI Product Description Writer | 8h |
| Week 3 | AI Code Explainer, LLM Token Counter (tiktoken WASM, no API) | 5h |
| Week 4 | Cron Expression Generator, cost monitoring setup, test rate limits | 3h |

**Deliverables:**

- 19 live tools (5 AI-powered)
- Rate limiting active on all AI endpoints
- OpenAI spending alerts configured
- AdSense approval (expected by mid-July)
- First ad units placed

### Phase 4: Viral & Engagement Tools (August 1–31, 2026)

**Allocation:** 25 hours total

| Week | Tasks | Hours |
|------|-------|-------|
| Week 1 | "AI Roast My Website" (URL scraping + AI analysis, shareable result URLs) | 8h |
| Week 2 | AI Text Detector, AI Tone Rewriter | 8h |
| Week 3 | "What AI Thinks of Your Code", API Response Formatter | 5h |
| Week 4 | ProductHunt launch, Reddit campaign (AI subs), backlink submissions | 4h |

**Deliverables:**

- 24 live tools
- Shareable result URLs for viral tools
- ProductHunt listing live
- Posted to 5+ tool directories
- First backlinks acquired

### Phase 5: Business & Speciality Tools (September 1–30, 2026)

**Allocation:** 25 hours total

| Week | Tasks | Hours |
|------|-------|-------|
| Week 1 | Invoice Generator (client-side pdf-lib, HST/GST-aware) | 6h |
| Week 2 | Shopify Liquid Previewer, AI Email Subject Line Generator | 7h |
| Week 3 | AI Hashtag Generator, AI Commit Message Generator | 4h |
| Week 4 | .env Validator, cross-promotion CTAs ("Need Shopify help? → Giftifye/Consulting") | 5h |
| Week 4+ | Analytics deep-dive: which tools get traffic, which don't, where to optimise | 3h |

**Deliverables:**

- 30 live tools
- Cross-promotion CTAs on relevant tool pages
- Analytics report: top 5 tools by traffic, top 5 by engagement
- Consulting lead CTA on business tools

### Phase 6: Depth & Premium Assessment (October 1–31, 2026)

**Allocation:** 26 hours total

| Week | Tasks | Hours |
|------|-------|-------|
| Week 1 | AI Grammar & Style Checker (most complex AI tool) | 8h |
| Week 2 | AI "Explain Like I'm 5", AI Career Path Advisor | 6h |
| Week 3 | AI Changelog Writer, AI Meeting Notes Summarizer | 6h |
| Week 4 | Premium tier assessment: build or defer? SEO refinement on top pages | 6h |

**Deliverables:**

- 35 live tools
- Decision document: launch premium tier or defer to Q1 2027
- Year-end performance report
- 2027 roadmap draft

---

## 5. Deployment Pipeline

### Git Workflow

```text
main (production) ← PR from feature branches
  └── feat/json-formatter     — one branch per tool
  └── feat/shared-components  — shared infrastructure
  └── fix/rate-limiting       — bug fixes
```

- All PRs require Lighthouse CI check (score > 90)
- Vercel auto-deploys preview URLs on PR creation
- Merge to main = auto-deploy to production

### Environment Variables

```env
# .env.local (never committed)
OPENAI_API_KEY=sk-...
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
NEXT_PUBLIC_GA_ID=G-...
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-...
```

### Monitoring & Alerts

| What | Tool | Alert Threshold |
|------|------|----------------|
| OpenAI spend | OpenAI dashboard | > $1/day (Phase 3), > $2/day (Phase 5+) |
| Vercel bandwidth | Vercel dashboard | > 80% of free tier |
| Site uptime | UptimeRobot (free) | Any downtime > 5 minutes |
| Core Web Vitals | Google Search Console | LCP > 3s, CLS > 0.15 |
| Error rate | Vercel logs | > 5 errors/hour |

---

## 6. Quality Checklist (Every Tool)

Before merging any tool to main, verify:

### Functionality

- [ ] Tool works correctly with expected inputs
- [ ] Tool handles edge cases (empty input, very large input, special characters)
- [ ] Copy-to-clipboard works
- [ ] Download/export works (if applicable)
- [ ] Keyboard shortcuts work (Ctrl+Enter to run)

### SEO

- [ ] H1 follows pattern: "[Tool Name] — Free Online [Tool]"
- [ ] Meta description includes "free", "online", "no signup"
- [ ] URL follows pattern: /tools/[category]/[tool-slug]
- [ ] "How to use" section is 300+ words
- [ ] FAQ schema markup with 5 questions
- [ ] Open Graph image set
- [ ] Internal links to 3–5 related tools

### Performance

- [ ] Lighthouse Performance score > 90
- [ ] Lighthouse Accessibility score > 90
- [ ] Lighthouse SEO score > 95
- [ ] JS bundle for the page < 50KB (tool-specific)
- [ ] No layout shift when ads load

### UX

- [ ] Works on mobile (iPhone SE viewport minimum)
- [ ] Dark mode renders correctly
- [ ] Loading states shown for any async operation
- [ ] Error messages are helpful (not "Something went wrong")
- [ ] Ad placement does not interfere with tool usage

### Security (AI tools only)

- [ ] API key is NOT in client-side code
- [ ] Rate limiting is active on the /api route
- [ ] User input is sanitised before passing to AI
- [ ] max_tokens cap is set (300)
- [ ] Error from AI provider returns graceful message, not raw error

---

## 7. AI Integration Pattern

Every AI tool follows this exact pattern:

### Client Component (app/tools/ai/[tool]/\_components/ToolClient.tsx)

```text
User input → validate → show loading → POST /api/tools/[tool] → display result → copy button
```

### API Route (app/api/tools/[tool]/route.ts)

```text
Receive request → rate-limit check → sanitise input → call AI provider → return response
```

### Provider Abstraction (lib/ai/provider.ts)

```typescript
// This interface allows swapping OpenAI for Groq/Cloudflare/Anthropic later
interface AIProvider {
  generate(prompt: string, options: AIOptions): Promise<string>
}
```

### Rate Limiting Rules

| Endpoint Type | Limit | Window | Graceful Message |
|--------------|-------|--------|-----------------|
| AI tools | 3 requests | Per IP per hour | "AI tools are limited to 3 uses per hour. Try again at {time}." |
| Non-AI tools | No limit | — | — |
| Global AI daily | 500 requests | Per day total | "AI tools are at capacity for today. Try again tomorrow." |

---

## 8. Testing Strategy

### Unit Tests (Vitest — from Day 1)

Every **pure logic** tool gets a test file. These are trivially testable and prevent regressions:

```typescript
// __tests__/lib/json-formatter.test.ts
import { formatJson } from '@/lib/tools/json-formatter'

test('formats valid JSON', () => {
  expect(formatJson('{"a":1}')).toBe('{\n  "a": 1\n}')
})

test('throws on invalid JSON', () => {
  expect(() => formatJson('not json')).toThrow()
})
```

**What to test per phase:**

| Phase | Tests |
|-------|-------|
| Phase 1 | JSON format/validate, Base64 encode/decode, UUID generation, hash generation, case conversion, colour contrast calculation |
| Phase 2 | Word/char counter logic, regex validation, colour palette generation |
| Phase 3 | Rate limiter logic, AI provider abstraction (mock OpenAI), input sanitisation |
| Phase 4+ | Add tests as tools are built |

### Component Tests (React Testing Library)

Test that shared components render correctly:

```typescript
// __tests__/components/copy-button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { CopyButton } from '@/components/shared/CopyButton'

test('shows "Copied!" after click', async () => {
  render(<CopyButton text="hello" />)
  fireEvent.click(screen.getByRole('button'))
  expect(await screen.findByText('Copied!')).toBeInTheDocument()
})
```

### CI Integration

```yaml
# .github/workflows/test.yml (runs on every PR)
- pnpm install --frozen-lockfile
- pnpm test              # vitest run
- pnpm build             # verify build succeeds
- pnpm dlx @lhci/cli autorun  # Lighthouse CI (score > 90)
```

### Coverage Target

| Layer | Target | Enforced |
|-------|--------|----------|
| Tool logic (lib/) | 90%+ | Yes — pure functions are easy |
| Shared components | 70%+ | Soft target |
| API routes | 50%+ | Test rate limiting + input validation |
| E2E (Playwright) | Key flows only | Deferred to Phase 2+ |

---

## 9. AdSense Integration Plan

### Pre-Application Checklist (Target: July 2026)

- [ ] 20+ content pages (14 tools + Privacy + Terms + About + 3 blog posts)
- [ ] Each page has substantial content (not just a widget)
- [ ] Navigation is clear and intuitive
- [ ] No prohibited content
- [ ] GA4 tracking active with 30+ days of data
- [ ] ads.txt file in /public root
- [ ] Site loads fast (Lighthouse > 90)

### Ad Placement Strategy

```text
┌─────────────────────────────────────────┐
│  Navbar                                  │
├─────────────────────────────────────────┤
│  [Leaderboard Ad - 728x90]              │  ← Top banner (desktop only)
├────────────────────────┬────────────────┤
│                        │                │
│   Tool Input Area      │  Sidebar       │
│                        │  [Ad 300x250]  │  ← Sidebar ad (desktop only)
│   Tool Output Area     │                │
│                        │  Related Tools │
│                        │                │
├────────────────────────┴────────────────┤
│  "How to Use" Section                    │
├─────────────────────────────────────────┤
│  [In-article Ad - responsive]            │  ← Between content sections
├─────────────────────────────────────────┤
│  FAQ Section                             │
├─────────────────────────────────────────┤
│  Footer                                  │
└─────────────────────────────────────────┘
```

**Mobile:** Only in-article ad (between tool output and how-to section). No sidebar.

### Ad Loading Rules

1. Ads load asynchronously — never block tool rendering
2. Ad containers have fixed height to prevent CLS
3. Maximum 3 ad units per page
4. No ads inside the tool interaction area
5. No interstitial or popup ads (violates AdSense policy and ruins UX)
