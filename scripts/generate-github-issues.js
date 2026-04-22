#!/usr/bin/env node

/**
 * Generate GitHub Issues from Bornara AI roadmap and planning docs
 *
 * Usage:
 *   node scripts/generate-github-issues.js --dry-run          # Preview issues (no GitHub calls)
 *   node scripts/generate-github-issues.js --create           # Create issues via GitHub CLI
 *   node scripts/generate-github-issues.js --create --repo Bornara-AI/bornara-ai-docs
 *   node scripts/generate-github-issues.js --phase 1          # Only Phase 1 issues
 *   node scripts/generate-github-issues.js --category cookies  # Only cookie-related issues
 *   node scripts/generate-github-issues.js --assignee narjes   # Only Narjes's issues
 *
 * Prerequisites:
 *   - GitHub CLI installed: https://cli.github.com/
 *   - Authenticated: gh auth login
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_REPO = 'Bornara-AI/bornara-ai-docs';

const LABELS = [
  // Priority
  { name: 'P0-critical', color: 'b60205', description: 'Must do — blocks other work' },
  { name: 'P1-high', color: 'd93f0b', description: 'Important — do this week/phase' },
  { name: 'P2-medium', color: 'fbca04', description: 'Should do — can wait if needed' },
  { name: 'P3-low', color: '0e8a16', description: 'Nice to have' },
  // Category
  { name: 'dev', color: '1d76db', description: 'Development & coding' },
  { name: 'tool', color: '5319e7', description: 'Individual tool build' },
  { name: 'ai-tool', color: '7057ff', description: 'AI-powered tool (uses API)' },
  { name: 'viral', color: 'ff6fdf', description: 'Viral/shareable tool' },
  { name: 'setup', color: 'c2e0c6', description: 'Infrastructure & project setup' },
  { name: 'seo', color: '006b75', description: 'SEO & search optimization' },
  { name: 'content', color: 'bfdadc', description: 'Content writing' },
  { name: 'marketing', color: 'e4e669', description: 'Marketing & launch' },
  { name: 'monetization', color: 'fef2c0', description: 'AdSense & revenue' },
  { name: 'cookies', color: 'd4a373', description: 'Cookie business' },
  { name: 'design', color: 'f9d0c4', description: 'Design & branding' },
  { name: 'admin', color: 'c5def5', description: 'Admin & documentation' },
  { name: 'tax', color: 'bfd4f2', description: 'CRA / tax compliance' },
  { name: 'qa', color: '0075ca', description: 'Testing & quality' },
  { name: 'analytics', color: 'cfd3d7', description: 'Analytics & monitoring' },
  { name: 'legal', color: 'd73a4a', description: 'Legal & compliance' },
  { name: 'strategic', color: '8b5cf6', description: 'Strategic decision' },
  { name: 'recurring', color: 'ededed', description: 'Recurring task (weekly/monthly)' },
  // Person
  { name: 'mahdi', color: '0052cc', description: 'Assigned to Mahdi' },
  { name: 'narjes', color: 'e99695', description: 'Assigned to Narjes' },
  { name: 'family', color: 'c9b1ff', description: 'Family task (kids)' },
];

const MILESTONES = [
  { title: 'April 2026 — Decision Month', due: '2026-04-30', description: 'Strategic pivot, cottage food ruling, prep for May 1 build start' },
  { title: 'Phase 1 — Foundation (May)', due: '2026-05-31', description: '8 tools live, soft launch, SEO basics, sitemap submitted' },
  { title: 'Phase 2 — Expand (June)', due: '2026-06-30', description: '14 tools live, AdSense submitted, how-to content' },
  { title: 'Phase 3 — AI Launch (July)', due: '2026-07-31', description: '19 tools, AI infrastructure, rate limiting, first ad revenue' },
  { title: 'Phase 4 — Viral (August)', due: '2026-08-31', description: '24 tools, ProductHunt launch, shareable results' },
  { title: 'Phase 5 — Business (September)', due: '2026-09-30', description: '30 tools, consulting cross-promo, analytics review, Giftifye gate' },
  { title: 'Phase 6 — Complete (October)', due: '2026-10-31', description: '35 tools live, premium assessment, year-end planning' },
  { title: 'Q4 Harvest (Nov-Dec)', due: '2026-12-31', description: 'Maintain, optimize, holiday push, CRA year-end, 2027 planning' },
];

// ─────────────────────────────────────────────────────────────────────────────
// TASK DATABASE — extracted from docs
// ─────────────────────────────────────────────────────────────────────────────

const ISSUES = [
  // ══════════════════════════════════════════════════════════════════════════
  // APRIL 2026 — DECISION MONTH
  // ══════════════════════════════════════════════════════════════════════════
  {
    title: 'Call Calgary AHS — cottage food ruling',
    body: `**Goal:** Determine if we can legally sell homemade cookies in Calgary.\n\n**Questions to ask:**\n1. Can you sell cookies baked at home under Alberta's cottage food exemption?\n2. Do you need a food handler's certificate?\n3. Do you need a home kitchen inspection?\n4. Are there labelling requirements (allergens, ingredients)?\n\n**Record:** Name of AHS contact, date of call, answers, next steps.\n\n**Decision branch:**\n- Yes, permitted → proceed with local cookie sales in May\n- Yes, with permit/cert → budget $50–$200, launch in June\n- No → drop cookies from 2026 plan, reallocate Narjes to Tools design\n\n**Due:** April 25, 2026\n**Source:** april-2026-action-plan.md`,
    labels: ['P0-critical', 'legal', 'cookies', 'mahdi'],
    milestone: 'April 2026 — Decision Month',
    hours: 0.5,
  },
  {
    title: 'Start CRA activity log — backfill April entries',
    body: `Create the CRA business activity log and backfill all April activities:\n- Strategic pivot planning (April 1-20)\n- Bornara Tools planning docs created (8 docs)\n- Cookie recipe testing hours\n- Time spent on docs repo\n\n**Format:** Date, Project, Tasks, Time Spent, Outcome\n**Source:** cra-compliance-guide.md Section 4.1`,
    labels: ['P1-high', 'admin', 'tax', 'mahdi'],
    milestone: 'April 2026 — Decision Month',
    hours: 1,
  },
  {
    title: 'Document Narjes hours for April',
    body: `Create Narjes's April timesheet:\n- Recipe testing sessions (dates, hours)\n- Instagram filming and posting\n- Any design work done\n\n**Template:** See cra-compliance-guide.md Section 4.4\n**Payment:** E-transfer, keep confirmation screenshot`,
    labels: ['P1-high', 'admin', 'tax', 'mahdi'],
    milestone: 'April 2026 — Decision Month',
    hours: 1,
  },
  {
    title: 'Set up expense tracking for 2-stream model',
    body: `Create expense tracking system for 2026:\n- Categories: Tools (hosting, domains, API), Cookies (supplies, packaging), Admin (software, home office)\n- Remove: Shopify plan, ad spend, Azure hosting (deferred)\n- Track: receipts, dates, amounts, business purpose\n\n**Source:** expense-tracking-guide.md`,
    labels: ['P1-high', 'admin', 'mahdi'],
    milestone: 'April 2026 — Decision Month',
    hours: 1.5,
  },
  {
    title: 'Research: pnpm + Next.js 15 + shadcn/ui (prep for May 1)',
    body: `Study the tech stack before coding starts May 1:\n- pnpm workspace commands\n- Next.js 15 App Router + Turbopack\n- shadcn/ui component library (New York style)\n- Tailwind CSS 4 changes\n- Vitest setup with React Testing Library\n\n**Goal:** Be ready to scaffold on Day 1 without googling basics.`,
    labels: ['P1-high', 'dev', 'mahdi'],
    milestone: 'April 2026 — Decision Month',
    hours: 4,
  },
  {
    title: 'Review all Bornara Tools planning docs',
    body: `Final review of all 8 planning documents before May 1 build start:\n- [ ] idea-and-research.md\n- [ ] business-plan.md\n- [ ] development-and-launch-plan.md\n- [ ] tool-phasing-analysis.md\n- [ ] marketing-and-growth-strategy.md\n- [ ] cost-and-revenue-model.md\n- [ ] README.md\n- [ ] project.json\n\nFlag any gaps or questions before coding begins.`,
    labels: ['P2-medium', 'strategic', 'mahdi'],
    milestone: 'April 2026 — Decision Month',
    hours: 2,
  },
  {
    title: '[Narjes] Cookie recipe testing — document recipes',
    body: `Continue recipe testing this week:\n- Test at least 2 new recipes\n- Document each recipe for consistency (ingredients, steps, timing)\n- Take photos of results for Instagram\n\n**Hours:** ~4h this week`,
    labels: ['P1-high', 'cookies', 'narjes'],
    milestone: 'April 2026 — Decision Month',
    hours: 4,
  },
  {
    title: '[Narjes] Instagram content — 3+ posts this week',
    body: `Create and post at least 3 Instagram posts:\n- Recipe videos / behind-the-scenes\n- Cookie close-ups\n- Story polls (which flavour next?)\n\n**Goal:** Build follower base before sales start.`,
    labels: ['P1-high', 'cookies', 'marketing', 'narjes'],
    milestone: 'April 2026 — Decision Month',
    hours: 2,
  },
  {
    title: '[Narjes] Fill out April timesheet',
    body: `Complete timesheet for all April work:\n- Recipe testing dates + hours\n- Instagram filming + posting\n- Any design or admin work\n\n**Template:** See cra-compliance-guide.md Section 4.4`,
    labels: ['P1-high', 'admin', 'narjes'],
    milestone: 'April 2026 — Decision Month',
    hours: 1,
  },
  {
    title: '[Narjes] Bornara Tools logo — initial sketches',
    body: `Create 2-3 initial logo concepts for tools.bornara.com:\n- Clean, modern, developer-friendly\n- Works in dark mode and light mode\n- Should feel like a utility/toolbox brand\n\n**Needed by:** May 1 (soft deadline)`,
    labels: ['P2-medium', 'design', 'narjes'],
    milestone: 'April 2026 — Decision Month',
    hours: 1,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 1 — FOUNDATION (MAY 2026)
  // ══════════════════════════════════════════════════════════════════════════

  // --- Setup Day 1-2 ---
  {
    title: 'Create GitHub repo & scaffold Next.js 15 project',
    body: `**Day 1 tasks:**\n- [ ] Create repo: \`Bornara-AI/bornara-tools\`\n- [ ] \`pnpm create next-app@latest --use-pnpm\` (App Router, TypeScript, Tailwind, src/ disabled, import alias @/)\n- [ ] \`pnpm dlx shadcn@latest init\` — New York style, Tailwind CSS, dark mode class\n- [ ] Install dev deps: vitest, @testing-library/react, @sentry/nextjs, husky, lint-staged\n- [ ] Configure Tailwind CSS 4 + dark mode (class-based)\n- [ ] Create \`.env.local\` with OPENAI_API_KEY placeholder\n- [ ] Set up ESLint + Prettier + Husky pre-commit\n\n**Estimated:** 3-4 hours\n**Source:** development-and-launch-plan.md Section 3`,
    labels: ['P0-critical', 'dev', 'setup', 'mahdi'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 4,
  },
  {
    title: 'Deploy to Vercel + configure DNS',
    body: `- [ ] Create Vercel project, connect to GitHub repo\n- [ ] Enable auto-deploy on push to main\n- [ ] Configure DNS: \`tools.bornara.com\` CNAME → \`cname.vercel-dns.com\`\n- [ ] Verify site loads at https://tools.bornara.com\n- [ ] Note Vercel Hobby limits: 100GB bandwidth, 10 concurrent serverless functions\n\n**Source:** development-and-launch-plan.md Section 1`,
    labels: ['P0-critical', 'dev', 'setup', 'mahdi'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 1,
  },
  {
    title: 'Initialize Sentry error tracking',
    body: `- [ ] \`pnpm dlx @sentry/wizard@latest -i nextjs\`\n- [ ] Verify errors captured in Sentry dashboard\n- [ ] Free tier: 5K errors/month\n\n**Source:** development-and-launch-plan.md Section 1`,
    labels: ['P1-high', 'dev', 'setup', 'mahdi'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 0.5,
  },
  {
    title: 'Create folder structure + tools-registry.ts',
    body: `Create the project folder structure:\n\`\`\`\napp/\n  layout.tsx, page.tsx\n  tools/\n    developer/, ai/, design/, business/\ncomponents/\n  ui/ (shadcn), tools/ (shared)\nlib/\n  tools-registry.ts, seo.ts\n\`\`\`\n\n- [ ] Create \`tools-registry.ts\` with metadata for all Phase 1 tools\n- [ ] Create \`generateToolMetadata()\` and \`generateFaqSchema()\` helpers`,
    labels: ['P1-high', 'dev', 'setup', 'mahdi'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 1.5,
  },

  // --- Setup Day 3: Shared Components ---
  {
    title: 'Build shared components: ToolPageShell, Navbar, Footer',
    body: `**ToolPageShell** (the core wrapper every tool uses):\n- [ ] Title, meta description, breadcrumb\n- [ ] Tool area (slot for client component)\n- [ ] How-to section, FAQ schema\n- [ ] Ad unit slots, related tools sidebar\n\n**Navbar:**\n- [ ] Logo, category links (Developer|AI|Design|Business)\n- [ ] Dark mode toggle, search\n\n**Footer:**\n- [ ] Branding, links, copyright\n\n**Also build:**\n- [ ] CopyButton (copy with "Copied!" feedback)\n- [ ] RelatedTools sidebar\n- [ ] AdUnit wrapper (lazy-load, placeholder until AdSense)\n\n**Estimated:** 6-7 hours\n**Source:** development-and-launch-plan.md Day 3`,
    labels: ['P0-critical', 'dev', 'mahdi'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 7,
  },

  // --- Phase 1 Tools ---
  { title: 'Build Tool #1: JSON Formatter & Validator', body: `**Phase 1** | Score: 85 | $0 API cost\n\nClient-side JSON parsing, formatting, validation with error highlighting.\n\n- [ ] page.tsx (server) with metadata + ToolPageShell\n- [ ] ClientComponent.tsx with paste → format → copy flow\n- [ ] Write 300+ word how-to section\n- [ ] Add FAQ schema (3+ questions)\n- [ ] Unit test: format/validate logic\n- [ ] Lighthouse > 90`, labels: ['P0-critical', 'tool', 'mahdi'], milestone: 'Phase 1 — Foundation (May)', hours: 2.5 },
  { title: 'Build Tool #2: Base64 Encoder/Decoder', body: `**Phase 1** | Score: 75 | $0 API cost\n\n- [ ] page.tsx + ClientComponent\n- [ ] Encode and decode with toggle\n- [ ] How-to + FAQ schema\n- [ ] Unit test\n- [ ] Lighthouse > 90`, labels: ['P0-critical', 'tool', 'mahdi'], milestone: 'Phase 1 — Foundation (May)', hours: 1.5 },
  { title: 'Build Tool #3: UUID/ULID Generator', body: `**Phase 1** | Score: 65 | $0 API cost\n\n- [ ] page.tsx + ClientComponent\n- [ ] Generate UUID v4, v7, ULID with bulk generation\n- [ ] How-to + FAQ schema\n- [ ] Unit test\n- [ ] Lighthouse > 90`, labels: ['P0-critical', 'tool', 'mahdi'], milestone: 'Phase 1 — Foundation (May)', hours: 1.5 },
  { title: 'Build Tool #4: JWT Decoder & Inspector', body: `**Phase 1** | Score: 75 | $0 API cost\n\n- [ ] page.tsx + ClientComponent\n- [ ] Decode header, payload, show expiry, flag issues\n- [ ] How-to + FAQ schema\n- [ ] Unit test\n- [ ] Lighthouse > 90`, labels: ['P0-critical', 'tool', 'mahdi'], milestone: 'Phase 1 — Foundation (May)', hours: 2 },
  { title: 'Build Tool #5: Unix Timestamp Converter', body: `**Phase 1** | Score: 70 | $0 API cost\n\n- [ ] page.tsx + ClientComponent\n- [ ] Bidirectional: timestamp ↔ human date, timezone support\n- [ ] How-to + FAQ schema\n- [ ] Unit test\n- [ ] Lighthouse > 90`, labels: ['P0-critical', 'tool', 'mahdi'], milestone: 'Phase 1 — Foundation (May)', hours: 1.5 },
  { title: 'Build Tool #6: Hash Generator', body: `**Phase 1** | Score: 65 | $0 API cost\n\n- [ ] page.tsx + ClientComponent\n- [ ] MD5, SHA-1, SHA-256, SHA-512 with Web Crypto API\n- [ ] How-to + FAQ schema\n- [ ] Unit test\n- [ ] Lighthouse > 90`, labels: ['P0-critical', 'tool', 'mahdi'], milestone: 'Phase 1 — Foundation (May)', hours: 1.5 },
  { title: 'Build Tool #7: Colour Contrast Checker', body: `**Phase 1** | Score: 65 | $0 API cost\n\n- [ ] page.tsx + ClientComponent\n- [ ] WCAG AA/AAA compliance check, live preview\n- [ ] How-to + FAQ schema\n- [ ] Unit test: contrast ratio calculation\n- [ ] Lighthouse > 90`, labels: ['P0-critical', 'tool', 'mahdi'], milestone: 'Phase 1 — Foundation (May)', hours: 2 },
  { title: 'Build Tool #8: Case Converter', body: `**Phase 1** | Score: 60 | $0 API cost\n\n- [ ] page.tsx + ClientComponent\n- [ ] camelCase, PascalCase, snake_case, kebab-case, UPPER, lower, Title\n- [ ] How-to + FAQ schema\n- [ ] Unit test\n- [ ] Lighthouse > 90`, labels: ['P0-critical', 'tool', 'mahdi'], milestone: 'Phase 1 — Foundation (May)', hours: 1.5 },

  // --- Phase 1 SEO & Launch ---
  {
    title: 'SEO setup: Search Console, sitemap, FAQ schema',
    body: `- [ ] Create Google Search Console account\n- [ ] Verify site ownership\n- [ ] Generate XML sitemap (Next.js built-in)\n- [ ] Submit sitemap to Google\n- [ ] Verify FAQ schema on all 8 tool pages\n- [ ] Set up Google Analytics 4\n- [ ] Create ads.txt placeholder`,
    labels: ['P1-high', 'seo', 'mahdi'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 2,
  },
  {
    title: 'Create Privacy Policy + Terms of Service pages',
    body: `Required for AdSense application.\n\n- [ ] Privacy Policy (data collected, cookies, analytics)\n- [ ] Terms of Service (liability, usage)\n- [ ] Link from footer on every page`,
    labels: ['P0-critical', 'legal', 'mahdi'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 2,
  },
  {
    title: 'Soft launch: Reddit r/webdev + community sharing',
    body: `- [ ] Write Reddit post for r/webdev\n- [ ] Post to r/programming, r/SideProject\n- [ ] Share on Twitter/X\n- [ ] Create Open Graph images for sharing\n\n**Tone:** "I built a free toolbox for devs — no login, no ads (yet), feedback welcome"`,
    labels: ['P1-high', 'marketing', 'mahdi'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 2,
  },
  {
    title: 'Phase 1 launch checklist — verification',
    body: `Run before declaring Phase 1 complete:\n\n- [ ] All 8 tools functional on desktop + mobile\n- [ ] Dark mode toggle works and persists\n- [ ] Each page has: H1, meta description, 300+ word how-to, FAQ schema\n- [ ] Internal links: each tool links to 3+ related tools\n- [ ] Privacy Policy + Terms live\n- [ ] Google Search Console verified + sitemap submitted\n- [ ] GA4 tracking installed and verified\n- [ ] ads.txt placeholder ready\n- [ ] Lighthouse score > 90 on every page\n- [ ] README updated in repo`,
    labels: ['P0-critical', 'qa', 'mahdi'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 2,
  },
  {
    title: '[Narjes] May: first local cookie sales + Instagram',
    body: `**Cookie business May targets:**\n- [ ] First local sales (friends, family, neighbours)\n- [ ] Daily Instagram posting\n- [ ] Start taking orders\n- [ ] Document all sales for CRA\n\n**Mahdi support:**\n- [ ] Set up simple ordering system if AHS permits\n- [ ] Pay Narjes for April + May hours`,
    labels: ['P1-high', 'cookies', 'narjes'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 15,
  },
  {
    title: 'Pay Narjes for April+May — document hours + e-transfer',
    body: `- [ ] Review Narjes's April timesheet\n- [ ] Review May timesheet\n- [ ] E-transfer payment\n- [ ] Save e-transfer confirmation screenshot\n- [ ] Get signed receipt\n- [ ] Update business activity log`,
    labels: ['P0-critical', 'admin', 'tax', 'mahdi'],
    milestone: 'Phase 1 — Foundation (May)',
    hours: 1,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 2 — EXPAND (JUNE 2026)
  // ══════════════════════════════════════════════════════════════════════════
  { title: 'Build Tool #9: Image Compressor', body: `**Phase 2** | Score: 70 | $0 API cost | Sharp.js server-side\n\n- [ ] page.tsx + ClientComponent\n- [ ] Upload → compress (quality slider) → download\n- [ ] Server-side processing with Sharp.js\n- [ ] How-to + FAQ schema\n- [ ] Unit test\n- [ ] Lighthouse > 90`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 2 — Expand (June)', hours: 3 },
  { title: 'Build Tool #10: Regex Tester', body: `**Phase 2** | Score: 75 | $0 API cost\n\n- [ ] page.tsx + ClientComponent\n- [ ] Live matching with syntax highlighting, flags (g, i, m)\n- [ ] How-to + FAQ schema\n- [ ] Unit test\n- [ ] Lighthouse > 90`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 2 — Expand (June)', hours: 3 },
  { title: 'Build Tool #11: Social Media Image Resizer', body: `**Phase 2** | Score: 70 | $0 API cost | Client Canvas API\n\n- [ ] Presets: Instagram, Facebook, Twitter, LinkedIn, YouTube\n- [ ] How-to + FAQ schema\n- [ ] Lighthouse > 90`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 2 — Expand (June)', hours: 2 },
  { title: 'Build Tool #12: Word/Character Counter', body: `**Phase 2** | Score: 65 | $0 API cost\n\n- [ ] Words, characters, sentences, paragraphs, reading time\n- [ ] How-to + FAQ schema\n- [ ] Unit test\n- [ ] Lighthouse > 90`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 2 — Expand (June)', hours: 2 },
  { title: 'Build Tool #13: Colour Palette Generator', body: `**Phase 2** | Score: 65 | $0 API cost\n\n- [ ] Random palette, extract from image, complementary/analogous\n- [ ] Export as CSS/Tailwind/hex\n- [ ] How-to + FAQ schema\n- [ ] Unit test\n- [ ] Lighthouse > 90`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 2 — Expand (June)', hours: 2 },
  { title: 'Build Tool #14: CORS Proxy Tester', body: `**Phase 2** | Score: 65 | $0 API cost\n\n- [ ] Check CORS headers, show allowed origins/methods\n- [ ] How-to + FAQ schema\n- [ ] Lighthouse > 90`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 2 — Expand (June)', hours: 2 },
  {
    title: 'Submit AdSense application',
    body: `**Requirements before applying:**\n- [ ] 20+ content pages (14 tools + Privacy + Terms + About + 3 blog posts)\n- [ ] GA4 installed with data\n- [ ] Fast loading (Lighthouse > 90)\n- [ ] Original content on every page\n\n**Steps:**\n- [ ] Create About page\n- [ ] Write 3 blog posts (dev tips, tool guides)\n- [ ] Submit AdSense application\n- [ ] Monitor approval (expect 2-4 weeks)`,
    labels: ['P0-critical', 'monetization', 'mahdi'],
    milestone: 'Phase 2 — Expand (June)',
    hours: 5,
  },
  {
    title: 'Phase 2→3 gate check',
    body: `Before starting Phase 3 AI tools:\n- [ ] 14 tools live and functional\n- [ ] AdSense application submitted\n- [ ] >100 visits/week organic traffic\n- [ ] All unit tests passing\n- [ ] Lighthouse > 90 on all pages`,
    labels: ['P0-critical', 'qa', 'mahdi'],
    milestone: 'Phase 2 — Expand (June)',
    hours: 1,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 3 — AI LAUNCH (JULY 2026)
  // ══════════════════════════════════════════════════════════════════════════
  {
    title: 'Build AI infrastructure: provider abstraction + rate limiting',
    body: `**Critical infrastructure before any AI tool:**\n\n- [ ] Create \`lib/ai/provider.ts\` — provider-agnostic abstraction\n- [ ] Set up Upstash Redis (free tier) for rate limiting\n- [ ] Implement \`/api/tools/[tool]/route.ts\` pattern\n- [ ] Rate limit: 3 requests/hour per IP\n- [ ] Input sanitisation for all AI endpoints\n- [ ] OpenAI cost monitoring + spending alerts ($25 hard cap)\n- [ ] Unit tests: rate limiter, provider abstraction, input sanitisation\n\n**Source:** development-and-launch-plan.md Section 7`,
    labels: ['P0-critical', 'dev', 'setup', 'mahdi'],
    milestone: 'Phase 3 — AI Launch (July)',
    hours: 7,
  },
  { title: 'Build Tool #15: AI Ad Copy Generator', body: `**Phase 3** | Score: 80 | GPT-4o-mini API\n\n- [ ] Input: product name, description, target audience, tone\n- [ ] Output: 3-5 ad copy variations\n- [ ] Rate limited (3/hr per IP)\n- [ ] How-to + FAQ schema\n- [ ] Lighthouse > 90`, labels: ['P0-critical', 'ai-tool', 'mahdi'], milestone: 'Phase 3 — AI Launch (July)', hours: 4 },
  { title: 'Build Tool #16: AI Product Description Writer', body: `**Phase 3** | Score: 65 | GPT-4o-mini API\n\n- [ ] Input: product details, platform (Shopify/Amazon/Etsy)\n- [ ] Output: SEO-optimized description\n- [ ] Rate limited\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 3 — AI Launch (July)', hours: 4 },
  { title: 'Build Tool #17: AI Code Explainer', body: `**Phase 3** | Score: 65 | GPT-4o-mini API\n\n- [ ] Paste code → get plain English explanation\n- [ ] Rate limited\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 3 — AI Launch (July)', hours: 3 },
  { title: 'Build Tool #18: LLM Token Counter', body: `**Phase 3** | Score: 70 | $0 API cost (tiktoken WASM)\n\n- [ ] Count tokens for GPT-3.5, GPT-4, Claude\n- [ ] Show cost estimate per model\n- [ ] How-to + FAQ schema\n- [ ] Unit test`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 3 — AI Launch (July)', hours: 3 },
  { title: 'Build Tool #19: Cron Expression Generator', body: `**Phase 3** | Score: 65 | $0 API cost\n\n- [ ] Visual builder → cron expression\n- [ ] Show next 5 run times\n- [ ] How-to + FAQ schema\n- [ ] Unit test`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 3 — AI Launch (July)', hours: 2 },
  {
    title: 'Place AdSense ad units (when approved)',
    body: `**Expected:** Mid-July approval\n\n- [ ] Leaderboard ad (728x90) — top banner, desktop only\n- [ ] Sidebar ad (300x250) — beside tool, desktop only\n- [ ] In-article ad — between how-to sections\n- [ ] Test CLS (Cumulative Layout Shift) — must stay < 0.1\n- [ ] Verify ads load on all pages`,
    labels: ['P1-high', 'monetization', 'mahdi'],
    milestone: 'Phase 3 — AI Launch (July)',
    hours: 2,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 4 — VIRAL (AUGUST 2026)
  // ══════════════════════════════════════════════════════════════════════════
  { title: 'Build Tool #20: AI Roast My Website', body: `**Phase 4** | VIRAL | GPT-4o-mini + URL scraping\n\n- [ ] Input: URL → scrape metadata, design, performance\n- [ ] Output: Brutally honest AI roast (funny + useful)\n- [ ] Shareable result URL (unique ID, OG image)\n- [ ] This is the #1 viral tool — spend extra time on quality\n- [ ] How-to + FAQ schema`, labels: ['P0-critical', 'ai-tool', 'viral', 'mahdi'], milestone: 'Phase 4 — Viral (August)', hours: 6 },
  { title: 'Build Tool #21: AI Text Detector', body: `**Phase 4** | Score: 60 | GPT-4o-mini\n\n- [ ] Paste text → AI vs human probability\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 4 — Viral (August)', hours: 3 },
  { title: 'Build Tool #22: AI Tone Rewriter', body: `**Phase 4** | Score: 55 | GPT-4o-mini\n\n- [ ] Rewrite text in different tones (professional, casual, formal, friendly)\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 4 — Viral (August)', hours: 4 },
  { title: 'Build Tool #23: What AI Thinks of Your Code', body: `**Phase 4** | VIRAL | GPT-4o-mini\n\n- [ ] Paste code → get personality-driven AI review\n- [ ] Shareable result URL\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'viral', 'mahdi'], milestone: 'Phase 4 — Viral (August)', hours: 4 },
  { title: 'Build Tool #24: API Response Formatter', body: `**Phase 4** | Score: 60 | $0 API cost\n\n- [ ] Format JSON/XML API responses, syntax highlighting\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 4 — Viral (August)', hours: 2 },
  {
    title: 'ProductHunt launch',
    body: `- [ ] Create ProductHunt product listing\n- [ ] Write compelling description + screenshots\n- [ ] Schedule launch (Tuesday/Wednesday, 12:01 AM PT)\n- [ ] Respond to all comments on launch day\n- [ ] Monitor API costs during traffic spike\n- [ ] Post to Reddit: r/programming, r/WebDev, r/learnprogramming, AI subs\n- [ ] Submit to: Hacker News, BetaList, tool directories`,
    labels: ['P0-critical', 'marketing', 'mahdi'],
    milestone: 'Phase 4 — Viral (August)',
    hours: 5,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 5 — BUSINESS (SEPTEMBER 2026)
  // ══════════════════════════════════════════════════════════════════════════
  { title: 'Build Tool #25: Invoice Generator', body: `**Phase 5** | Score: 65 | $0 API cost | pdf-lib\n\n- [ ] Client-side PDF generation with HST/GST calculation\n- [ ] Canadian tax compliant\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 5 — Business (September)', hours: 4 },
  { title: 'Build Tool #26: Shopify Liquid Previewer', body: `**Phase 5** | Score: 65 | $0 API cost\n\n- [ ] Live Liquid template preview\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 5 — Business (September)', hours: 4 },
  { title: 'Build Tool #27: AI Email Subject Line Generator', body: `**Phase 5** | Score: 55 | GPT-4o-mini\n\n- [ ] Input: email topic → output: 5-10 subject lines\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 5 — Business (September)', hours: 4 },
  { title: 'Build Tool #28: AI Hashtag Generator', body: `**Phase 5** | Score: 55 | GPT-4o-mini\n\n- [ ] Input: topic/image description → relevant hashtags\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 5 — Business (September)', hours: 3 },
  { title: 'Build Tool #29: AI Commit Message Generator', body: `**Phase 5** | Score: 65 | GPT-4o-mini\n\n- [ ] Paste diff → conventional commit message\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 5 — Business (September)', hours: 3 },
  { title: 'Build Tool #30: .env File Validator', body: `**Phase 5** | Score: 65 | $0 API cost\n\n- [ ] Validate .env syntax, find duplicates, check for secrets\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'tool', 'mahdi'], milestone: 'Phase 5 — Business (September)', hours: 2 },
  {
    title: 'Giftifye activation decision gate',
    body: `**Check all criteria:**\n- [ ] Bornara Tools has 20+ tools live\n- [ ] Organic traffic: meaningful and growing\n- [ ] Tools is stable (no major bugs or infrastructure issues)\n- [ ] Mahdi has 5+ free hours/week\n- [ ] Narjes agrees to start Giftifye work\n\n**If all yes:** Begin Shopify store setup in October\n**If no:** Defer to Q1 2027`,
    labels: ['P1-high', 'strategic', 'mahdi'],
    milestone: 'Phase 5 — Business (September)',
    hours: 2,
  },
  {
    title: 'Q3 CRA documentation review',
    body: `- [ ] Review all income records (ad revenue, consulting, cookies)\n- [ ] Verify all expense receipts filed\n- [ ] Update Narjes timesheets + payments\n- [ ] Update business activity log\n- [ ] Review wife/kids hours for reasonableness\n- [ ] Screenshot all active websites\n- [ ] Update CRA narrative if needed`,
    labels: ['P0-critical', 'admin', 'tax', 'mahdi'],
    milestone: 'Phase 5 — Business (September)',
    hours: 3,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 6 — COMPLETE (OCTOBER 2026)
  // ══════════════════════════════════════════════════════════════════════════
  { title: 'Build Tool #31: AI Grammar & Style Checker', body: `**Phase 6** | Score: 55 | GPT-4o-mini | Most complex AI tool\n\n- [ ] Full text analysis with suggestions\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 6 — Complete (October)', hours: 6 },
  { title: 'Build Tool #32: AI "Explain Like I\'m 5"', body: `**Phase 6** | Score: 55 | GPT-4o-mini\n\n- [ ] Simplify complex text for any audience level\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 6 — Complete (October)', hours: 4 },
  { title: 'Build Tool #33: AI Career Path Advisor', body: `**Phase 6** | VIRAL | GPT-4o-mini\n\n- [ ] Input skills/interests → career recommendations\n- [ ] Shareable result URL\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'viral', 'mahdi'], milestone: 'Phase 6 — Complete (October)', hours: 4 },
  { title: 'Build Tool #34: AI Changelog Writer', body: `**Phase 6** | Score: 65 | GPT-4o-mini\n\n- [ ] Paste git log → formatted changelog\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 6 — Complete (October)', hours: 3 },
  { title: 'Build Tool #35: AI Meeting Notes Summarizer', body: `**Phase 6** | Score: 50 | GPT-4o-mini\n\n- [ ] Paste notes → structured summary with action items\n- [ ] How-to + FAQ schema`, labels: ['P1-high', 'ai-tool', 'mahdi'], milestone: 'Phase 6 — Complete (October)', hours: 3 },
  {
    title: 'All 35 tools live — premium assessment + year-end report',
    body: `- [ ] Verify all 35 tools are functional\n- [ ] Performance report: traffic, revenue, top tools\n- [ ] Premium tier assessment: build paid features or defer?\n- [ ] SEO refinement on top 5 performing pages\n- [ ] Draft 2027 plan: AI Platform + Giftifye scaling`,
    labels: ['P1-high', 'strategic', 'mahdi'],
    milestone: 'Phase 6 — Complete (October)',
    hours: 5,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // Q4 HARVEST (NOV-DEC 2026)
  // ══════════════════════════════════════════════════════════════════════════
  {
    title: 'Q4: Maintain + optimize all tools for holiday RPM boost',
    body: `- [ ] Monitor ad RPM (should spike Q4 due to holiday ad spend)\n- [ ] Optimize ad placements on top-performing pages\n- [ ] Fix any bugs or performance issues\n- [ ] Monitor API costs`,
    labels: ['P1-high', 'monetization', 'analytics', 'mahdi'],
    milestone: 'Q4 Harvest (Nov-Dec)',
    hours: 6,
  },
  {
    title: '[Narjes] Q4: Holiday cookie push + gift boxes',
    body: `- [ ] Halloween cookies (October)\n- [ ] Christmas pre-orders (November)\n- [ ] Holiday gift boxes\n- [ ] Cookie subscription push\n- [ ] Peak Instagram content`,
    labels: ['P1-high', 'cookies', 'marketing', 'narjes'],
    milestone: 'Q4 Harvest (Nov-Dec)',
    hours: 20,
  },
  {
    title: 'Year-end CRA close: final payments, T2125 prep',
    body: `- [ ] Final Narjes payment (December)\n- [ ] Final kids payments\n- [ ] Complete home office calculation\n- [ ] Calculate CCA for all equipment\n- [ ] Compile T2125 figures\n- [ ] Write year-end CRA narrative\n- [ ] Export Shopify revenue reports (if applicable)\n- [ ] Compile ad spend totals\n- [ ] Back up everything\n\n**Source:** cra-compliance-guide.md Section 7`,
    labels: ['P0-critical', 'admin', 'tax', 'mahdi'],
    milestone: 'Q4 Harvest (Nov-Dec)',
    hours: 5,
  },
  {
    title: 'Draft 2027 business plan',
    body: `Plan the next year:\n- AI Platform restart timeline\n- Giftifye scaling (if launched)\n- Cookie business growth\n- Revenue targets\n- Hiring considerations\n- Possible incorporation`,
    labels: ['P1-high', 'strategic', 'mahdi'],
    milestone: 'Q4 Harvest (Nov-Dec)',
    hours: 6,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // RECURRING (Monthly)
  // ══════════════════════════════════════════════════════════════════════════
  {
    title: '[Monthly] CRA compliance checklist',
    body: `Do at end of every month:\n- [ ] Update income log with all revenue received\n- [ ] File all expense receipts (digital or physical)\n- [ ] Complete Narjes timesheet and make payment\n- [ ] Complete kids timesheets if applicable\n- [ ] Update business activity log\n- [ ] Update travel log\n- [ ] Screenshot Shopify dashboard (if live)\n- [ ] Save software subscription invoices\n- [ ] Update expense tracking spreadsheet\n\n**Source:** cra-compliance-guide.md Section 5`,
    labels: ['P0-critical', 'admin', 'tax', 'recurring', 'mahdi'],
    milestone: null,
    hours: 2,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CLI LOGIC
// ─────────────────────────────────────────────────────────────────────────────

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { dryRun: true, repo: DEFAULT_REPO, phase: null, category: null, assignee: null, exportJson: null };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--create') opts.dryRun = false;
    else if (args[i] === '--dry-run') opts.dryRun = true;
    else if (args[i] === '--repo' && args[i + 1]) { opts.repo = args[++i]; }
    else if (args[i] === '--phase' && args[i + 1]) { opts.phase = args[++i]; }
    else if (args[i] === '--category' && args[i + 1]) { opts.category = args[++i]; }
    else if (args[i] === '--assignee' && args[i + 1]) { opts.assignee = args[++i]; }
    else if (args[i] === '--export-json') {
      opts.exportJson = args[i + 1] && !args[i + 1].startsWith('--')
        ? args[++i]
        : 'static/tasks.json';
    }
  }

  return opts;
}

function filterIssues(issues, opts) {
  let filtered = issues;

  if (opts.phase) {
    const phaseNum = opts.phase;
    filtered = filtered.filter((i) => {
      if (!i.milestone) return false;
      return i.milestone.toLowerCase().includes(`phase ${phaseNum}`) ||
             (phaseNum === '0' && i.milestone.includes('April')) ||
             (phaseNum === '7' && i.milestone.includes('Q4'));
    });
  }

  if (opts.category) {
    filtered = filtered.filter((i) =>
      i.labels.some((l) => l.includes(opts.category))
    );
  }

  if (opts.assignee) {
    filtered = filtered.filter((i) =>
      i.labels.some((l) => l === opts.assignee)
    );
  }

  return filtered;
}

function ghCommand(args) {
  try {
    return execSync(`gh ${args}`, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  } catch (err) {
    return null;
  }
}

function createLabels(repo) {
  log('\n🏷️  Creating labels...', 'cyan');
  for (const label of LABELS) {
    const result = ghCommand(
      `label create "${label.name}" --repo ${repo} --color "${label.color}" --description "${label.description}" --force`
    );
    if (result !== null) {
      log(`   ✓ ${label.name}`, 'green');
    } else {
      log(`   ✗ ${label.name} (may already exist)`, 'yellow');
    }
  }
}

function createMilestones(repo) {
  log('\n📅 Creating milestones...', 'cyan');
  for (const ms of MILESTONES) {
    const result = ghCommand(
      `api repos/${repo}/milestones --method POST -f title="${ms.title}" -f due_on="${ms.due}T23:59:59Z" -f description="${ms.description}"`
    );
    if (result !== null) {
      log(`   ✓ ${ms.title}`, 'green');
    } else {
      log(`   ✗ ${ms.title} (may already exist)`, 'yellow');
    }
  }
}

function createIssues(issues, repo) {
  log(`\n📋 Creating ${issues.length} issues...`, 'cyan');
  let created = 0;
  let failed = 0;

  for (const issue of issues) {
    const labelArgs = issue.labels.map((l) => `-l "${l}"`).join(' ');
    const milestoneArg = issue.milestone ? `-m "${issue.milestone}"` : '';
    const bodyEscaped = issue.body.replace(/"/g, '\\"').replace(/\n/g, '\\n');

    const cmd = `issue create --repo ${repo} --title "${issue.title}" --body "${bodyEscaped}" ${labelArgs} ${milestoneArg}`;

    const result = ghCommand(cmd);
    if (result !== null) {
      log(`   ✓ ${issue.title}`, 'green');
      created++;
    } else {
      log(`   ✗ ${issue.title}`, 'red');
      failed++;
    }
  }

  return { created, failed };
}

function printDryRun(issues) {
  const byMilestone = {};
  for (const issue of issues) {
    const ms = issue.milestone || 'No Milestone';
    if (!byMilestone[ms]) byMilestone[ms] = [];
    byMilestone[ms].push(issue);
  }

  for (const [ms, msIssues] of Object.entries(byMilestone)) {
    log(`\n📅 ${ms}`, 'cyan');
    log('─'.repeat(60), 'cyan');

    for (const issue of msIssues) {
      const labels = issue.labels.join(', ');
      const hours = issue.hours ? `${issue.hours}h` : '';
      log(`  ☐ ${issue.title}`, 'reset');
      log(`    Labels: ${labels}  ${hours}`, 'dim');
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

function exportJson(issues, outPath) {
  const absPath = path.resolve(process.cwd(), outPath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  const data = {
    generated: new Date().toISOString().slice(0, 10),
    issues: issues.map((issue, idx) => ({
      id: idx + 1,
      title: issue.title,
      labels: issue.labels,
      milestone: issue.milestone,
      hours: issue.hours || 0,
    })),
  };
  fs.writeFileSync(absPath, JSON.stringify(data, null, 2), 'utf-8');
  log(`\n✅ Exported ${issues.length} issues to: ${absPath}`, 'green');
}

function main() {
  const opts = parseArgs();
  const filtered = filterIssues(ISSUES, opts);

  log('\n🚀 Bornara AI — GitHub Issues Generator', 'cyan');
  log('━'.repeat(60), 'cyan');
  log(`   Repo:     ${opts.repo}`, 'reset');
  log(`   Mode:     ${opts.dryRun ? 'DRY RUN (preview only)' : '🔴 CREATE (will create issues!)'}`, opts.dryRun ? 'yellow' : 'red');
  log(`   Issues:   ${filtered.length} of ${ISSUES.length}`, 'reset');
  if (opts.phase) log(`   Phase:    ${opts.phase}`, 'reset');
  if (opts.category) log(`   Category: ${opts.category}`, 'reset');
  if (opts.assignee) log(`   Assignee: ${opts.assignee}`, 'reset');

  if (opts.exportJson) {
    exportJson(filtered, opts.exportJson);
    return;
  } else if (opts.dryRun) {
    printDryRun(filtered);
    log(`\n📊 Summary: ${filtered.length} issues would be created`, 'cyan');

    const totalHours = filtered.reduce((sum, i) => sum + (i.hours || 0), 0);
    log(`   Total estimated hours: ${totalHours}h`, 'reset');

    const mahdiIssues = filtered.filter((i) => i.labels.includes('mahdi'));
    const narjesIssues = filtered.filter((i) => i.labels.includes('narjes'));
    log(`   Mahdi: ${mahdiIssues.length} issues`, 'reset');
    log(`   Narjes: ${narjesIssues.length} issues`, 'reset');

    log(`\n💡 To create these issues, run:`, 'green');
    log(`   node scripts/generate-github-issues.js --create`, 'reset');
    if (opts.phase) log(`   node scripts/generate-github-issues.js --create --phase ${opts.phase}`, 'reset');
    log(`\n📦 To export for the docs site, run:`, 'green');
    log(`   node scripts/generate-github-issues.js --export-json`, 'reset');
  } else {
    // Check gh CLI is available
    const ghVersion = ghCommand('--version');
    if (!ghVersion) {
      log('\n❌ GitHub CLI (gh) not found. Install: https://cli.github.com/', 'red');
      process.exit(1);
    }

    // Check auth
    const authStatus = ghCommand('auth status');
    if (!authStatus) {
      log('\n❌ Not authenticated. Run: gh auth login', 'red');
      process.exit(1);
    }

    createLabels(opts.repo);
    createMilestones(opts.repo);
    const { created, failed } = createIssues(filtered, opts.repo);

    log(`\n📊 Done: ${created} created, ${failed} failed`, created > 0 ? 'green' : 'red');
  }

  log('');
}

main();
