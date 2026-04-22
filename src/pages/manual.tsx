import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

/* ── Section Component ── */
function Section({ id, icon, title, children }: { id: string; icon: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="manual-section">
      <h2 className="manual-section__title">{icon} {title}</h2>
      {children}
    </section>
  );
}

/* ── Code Block ── */
function Cmd({ children }: { children: string }) {
  return <code className="manual-cmd">{children}</code>;
}

/* ── Table of Contents ── */
const TOC = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'quick-start', label: 'Quick Start' },
  { id: 'scripts', label: 'All npm Scripts' },
  { id: 'agents', label: 'AI Agents (14)' },
  { id: 'prompts', label: 'Prompt Templates (9)' },
  { id: 'task-board', label: 'Task Board & Tracking' },
  { id: 'docs-site', label: 'Documentation Site' },
  { id: 'docs-structure', label: 'Docs Folder Structure' },
  { id: 'ci-cd', label: 'CI/CD & GitHub Actions' },
  { id: 'standards', label: 'Documentation Standards' },
  { id: 'projects', label: 'Project Management' },
  { id: 'git-workflow', label: 'Git & PR Workflow' },
  { id: 'architecture', label: 'Architecture & FAQ' },
];

export default function ManualPage(): React.JSX.Element {
  return (
    <Layout
      title="Project Manual — Bornara AI"
      description="Complete reference manual for the Bornara AI documentation system: scripts, agents, prompts, task tracking, CI/CD, and more."
    >
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: 960 }}>
        {/* Hero */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>📖 Bornara AI — Project Manual</h1>
          <p style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.95rem', margin: 0 }}>
            Everything you can do in this project. Scripts, agents, prompts, task tracking, CI/CD, documentation standards, and architecture — all in one place.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="manual-toc">
          <strong>Contents</strong>
          <ul>
            {TOC.map(item => (
              <li key={item.id}><a href={'#' + item.id}>{item.label}</a></li>
            ))}
          </ul>
        </nav>

        {/* ─── OVERVIEW ─── */}
        <Section id="overview" icon="🏢" title="Project Overview">
          <p>
            This repository is the <strong>AI operating system</strong> for Bornara AI — a Canadian sole proprietorship run by Mahdi Moradi in Calgary, Alberta.
            It manages <strong>2 active revenue streams</strong> (Bornara Tools + Cookies), <strong>2 deferred streams</strong> (Giftifye, AI Platform),
            CRA tax compliance, operations, and technical architecture.
          </p>
          <p>It is <strong>not</strong> just documentation — it is a complete business operating system with:</p>
          <ul>
            <li><strong>14 AI agents</strong> for domain-specific expertise (tax, strategy, code review, docs, etc.)</li>
            <li><strong>9 prompt templates</strong> for deep-dive sessions</li>
            <li><strong>7 automation scripts</strong> (doc fixing, issue generation, project scaffolding, validation)</li>
            <li><strong>3 CI/CD workflows</strong> (PR validation, doc assistance, GitHub Pages deploy)</li>
            <li><strong>Interactive task board</strong> with filtering and local progress tracking</li>
            <li><strong>Full Docusaurus site</strong> with auto-sidebar, dark mode, and search</li>
          </ul>
        </Section>

        {/* ─── QUICK START ─── */}
        <Section id="quick-start" icon="🚀" title="Quick Start">
          <div className="manual-steps">
            <div className="manual-step">
              <div className="manual-step__number">1</div>
              <div>
                <strong>Install dependencies</strong>
                <pre><code>npm install</code></pre>
              </div>
            </div>
            <div className="manual-step">
              <div className="manual-step__number">2</div>
              <div>
                <strong>Start dev server</strong> (exports tasks + starts Docusaurus)
                <pre><code>npm run docs:start</code></pre>
              </div>
            </div>
            <div className="manual-step">
              <div className="manual-step__number">3</div>
              <div>
                <strong>Production build</strong>
                <pre><code>npm run docs:build{'\n'}npm run docs:serve</code></pre>
              </div>
            </div>
            <div className="manual-step">
              <div className="manual-step__number">4</div>
              <div>
                <strong>Fix docs before commit</strong>
                <pre><code>npm run lint:md:fix     # auto-fix markdown{'\n'}npm run doc:fix         # fix front-matter (interactive)</code></pre>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── SCRIPTS ─── */}
        <Section id="scripts" icon="⚙️" title="All npm Scripts">
          <p>Every command available in <Cmd>package.json</Cmd>:</p>

          <h3>Documentation Site</h3>
          <table className="manual-table">
            <thead><tr><th>Command</th><th>What It Does</th></tr></thead>
            <tbody>
              <tr><td><Cmd>npm run docs:start</Cmd></td><td>Exports tasks JSON + starts Docusaurus dev server with hot reload</td></tr>
              <tr><td><Cmd>npm run docs:build</Cmd></td><td>Exports tasks JSON + builds static production site in <Cmd>build/</Cmd></td></tr>
              <tr><td><Cmd>npm run docs:serve</Cmd></td><td>Serves the pre-built <Cmd>build/</Cmd> folder locally</td></tr>
              <tr><td><Cmd>npm run docs:deploy</Cmd></td><td>Deploys to GitHub Pages (uses Docusaurus deploy command)</td></tr>
            </tbody>
          </table>

          <h3>Linting & Validation</h3>
          <table className="manual-table">
            <thead><tr><th>Command</th><th>What It Does</th></tr></thead>
            <tbody>
              <tr><td><Cmd>npm run lint:md</Cmd></td><td>Check markdown lint issues (no changes)</td></tr>
              <tr><td><Cmd>npm run lint:md:fix</Cmd></td><td>Auto-fix all markdown lint issues silently</td></tr>
              <tr><td><Cmd>npm run doc:fix</Cmd></td><td>Interactive front-matter fixer — shows proposed changes, asks y/n for each file</td></tr>
              <tr><td><Cmd>npm run doc:fix:staged</Cmd></td><td>Same as above, but only for git-staged files</td></tr>
              <tr><td><Cmd>npm run check:cross-refs</Cmd></td><td>Validate all internal markdown links; reports broken links, orphaned docs</td></tr>
              <tr><td><Cmd>npm run check:readme</Cmd></td><td>Pre-commit hook: warns if README needs updating based on changed files</td></tr>
            </tbody>
          </table>

          <h3>Project Management</h3>
          <table className="manual-table">
            <thead><tr><th>Command</th><th>What It Does</th></tr></thead>
            <tbody>
              <tr>
                <td><Cmd>npm run project:create -- --name "Name" --id "slug"</Cmd></td>
                <td>Scaffolds a new project under <Cmd>docs/05_Projects/</Cmd> with folders, templates, <Cmd>project.json</Cmd>, and README</td>
              </tr>
              <tr><td><Cmd>npm run project:list</Cmd></td><td>Lists all projects with color-coded status (active/planned/on-hold/completed)</td></tr>
              <tr><td><Cmd>npm run registry:update</Cmd></td><td>Auto-generates project registry markdown from all <Cmd>project.json</Cmd> files</td></tr>
            </tbody>
          </table>

          <h3>Task / Issue Management</h3>
          <table className="manual-table">
            <thead><tr><th>Command</th><th>What It Does</th></tr></thead>
            <tbody>
              <tr><td><Cmd>npm run issues:preview</Cmd></td><td>Dry-run: preview all 69 issues that would be created</td></tr>
              <tr><td><Cmd>npm run issues:create</Cmd></td><td>Create issues on GitHub via GitHub CLI (requires <Cmd>gh</Cmd> authenticated)</td></tr>
              <tr><td><Cmd>npm run issues:export</Cmd></td><td>Export issues to <Cmd>static/tasks.json</Cmd> for the task board</td></tr>
            </tbody>
          </table>

          <h3>Script-Level Arguments</h3>
          <p>Some scripts accept extra flags:</p>
          <table className="manual-table">
            <thead><tr><th>Script</th><th>Flags</th></tr></thead>
            <tbody>
              <tr>
                <td><Cmd>generate-github-issues.js</Cmd></td>
                <td>
                  <Cmd>--dry-run</Cmd> preview only |{' '}
                  <Cmd>--create</Cmd> create on GitHub |{' '}
                  <Cmd>--export-json [path]</Cmd> export to file |{' '}
                  <Cmd>--phase 1</Cmd> filter by phase |{' '}
                  <Cmd>--category cookies</Cmd> filter by category |{' '}
                  <Cmd>--assignee mahdi</Cmd> filter by person
                </td>
              </tr>
              <tr>
                <td><Cmd>doc-autofix.js</Cmd></td>
                <td>
                  <Cmd>--staged</Cmd> staged files only |{' '}
                  <Cmd>--yes</Cmd> auto-approve all fixes
                </td>
              </tr>
              <tr>
                <td><Cmd>create-new-project.js</Cmd></td>
                <td>
                  <Cmd>--name "Name"</Cmd> (required) |{' '}
                  <Cmd>--id "slug"</Cmd> (required) |{' '}
                  <Cmd>--owner "Name"</Cmd> (optional, defaults to Mahdi Moradi)
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        {/* ─── AGENTS ─── */}
        <Section id="agents" icon="🤖" title="AI Agents (14)">
          <p>
            Agents are defined in <Cmd>.github/copilot/agents/</Cmd>. Use them in VS Code Copilot Chat by typing <Cmd>@agent-name</Cmd> or Copilot auto-routes based on your question.
          </p>

          <h3>Strategy & Planning</h3>
          <table className="manual-table">
            <thead><tr><th>Agent</th><th>Trigger Phrases</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><Cmd>@orchestrator</Cmd></td><td>"what should I do", planning, priorities</td><td>Meta-router across all domains. Checks roadmap, synthesizes cross-domain priorities, presents 2–3 options with trade-offs.</td></tr>
              <tr><td><Cmd>@business-advisor</Cmd></td><td>strategy, pricing, growth, revenue</td><td>Business strategy, financial planning, growth decisions. Challenges unrealistic targets.</td></tr>
              <tr><td><Cmd>@business-reviewer</Cmd></td><td>"review business plan", "is this realistic"</td><td>CFO-lens quality gate: validates revenue assumptions, flags what banks/grants would reject.</td></tr>
            </tbody>
          </table>

          <h3>Tax & Compliance</h3>
          <table className="manual-table">
            <thead><tr><th>Agent</th><th>Trigger Phrases</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><Cmd>@cra-tax</Cmd></td><td>tax, CRA, T2125, deduction, filing, audit</td><td>CRA compliance for sole proprietorship. Maps expenses to T2125 lines, flags deadlines, suggests missing deductions.</td></tr>
            </tbody>
          </table>

          <h3>Product & Operations</h3>
          <table className="manual-table">
            <thead><tr><th>Agent</th><th>Trigger Phrases</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><Cmd>@shopify-ops</Cmd></td><td>Shopify, Giftifye, cookies, products</td><td>Shopify ops for cookie business (active) and Giftifye (on hold until criteria met).</td></tr>
              <tr><td><Cmd>@toolbox-planner</Cmd></td><td>toolbox website, market research, SEO, ad revenue</td><td>Market research, tool selection, SEO strategy, ad revenue projections for Bornara Tools.</td></tr>
              <tr><td><Cmd>@toolbox-dev</Cmd></td><td>build the toolbox, Next.js, implement a tool</td><td>Technical dev advisor: Next.js, Vercel, Tailwind, client-side-first, rate limiting, AdSense.</td></tr>
              <tr><td><Cmd>@ai-platform</Cmd></td><td>AI platform, SaaS, Azure, architecture</td><td>AI Agent Platform advisor (deferred to Q1 2027). Challenges any attempt to start early.</td></tr>
            </tbody>
          </table>

          <h3>Code & Documentation</h3>
          <table className="manual-table">
            <thead><tr><th>Agent</th><th>Trigger Phrases</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><Cmd>@code-reviewer</Cmd></td><td>review code, find bugs, security review</td><td>Senior code review: severity classification (CRITICAL → STYLE), exact corrected code, 8 check categories.</td></tr>
              <tr><td><Cmd>@doc-autofix</Cmd></td><td>fix front matter, fix markdown, repair docs</td><td>Detects and repairs front-matter/lint issues. Auto-fixes formatting; asks permission for content.</td></tr>
              <tr><td><Cmd>@standards-checker</Cmd></td><td>validate docs, check compliance</td><td>Validates docs against Bornara AI templates: front-matter, structure, naming conventions.</td></tr>
              <tr><td><Cmd>@cross-ref</Cmd></td><td>check links, broken references</td><td>Validates internal links, finds orphaned docs, suggests bidirectional cross-references.</td></tr>
              <tr><td><Cmd>@doc-updater</Cmd></td><td>update documentation, help me document</td><td>Keeps docs current after code/config changes. Identifies affected sections, checks cross-refs.</td></tr>
            </tbody>
          </table>

          <h3>Meta</h3>
          <table className="manual-table">
            <thead><tr><th>Agent</th><th>Trigger Phrases</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><Cmd>@agent-creator</Cmd></td><td>propose new agent, agent gap</td><td>Designs new agents, merges overlapping ones, splits overgrown ones, updates routing table.</td></tr>
            </tbody>
          </table>
        </Section>

        {/* ─── PROMPTS ─── */}
        <Section id="prompts" icon="💬" title="Prompt Templates (9)">
          <p>
            Prompt templates live in <Cmd>.github/prompts/</Cmd>. Each encodes an expert persona with structured review criteria and a mandatory self-critique loop.
            In VS Code Copilot Chat, type <Cmd>/</Cmd> to select a prompt, or type <Cmd>#prompt-name</Cmd> to attach it.
          </p>
          <table className="manual-table">
            <thead><tr><th>Prompt</th><th>Use When</th><th>Key Features</th></tr></thead>
            <tbody>
              <tr><td><Cmd>#strategic-overview</Cmd></td><td>"What should I do next?" / cross-domain health check</td><td>Checks current month roadmap, synthesizes all domains, mandatory self-critique</td></tr>
              <tr><td><Cmd>#business-plan-review</Cmd></td><td>Full quality gate on any business planning doc</td><td>7 criteria: revenue realism, expense coverage, go-to-market, risk — confidence scoring</td></tr>
              <tr><td><Cmd>#code-review</Cmd></td><td>Senior review of scripts/workflows/configs</td><td>6 dimensions: correctness, security, robustness, maintainability — severity levels</td></tr>
              <tr><td><Cmd>#cra-tax-advisor</Cmd></td><td>Deep CRA compliance and tax analysis</td><td>T2125 mapping, deduction analysis, family wage justification, audit readiness</td></tr>
              <tr><td><Cmd>#shopify-growth-advisor</Cmd></td><td>Giftifye/cookie strategy and optimization</td><td>Product strategy, supplier vetting, conversion, seasonal planning, A/B tests</td></tr>
              <tr><td><Cmd>#ai-platform-advisor</Cmd></td><td>SaaS architecture and platform planning</td><td>Feature scoping, MVP definition, Azure cost modeling, subscription pricing</td></tr>
              <tr><td><Cmd>#doc-quality-review</Cmd></td><td>Documentation structural and content review</td><td>Front-matter validation, completeness, cross-references, style adherence</td></tr>
              <tr><td><Cmd>#toolbox-website-planner</Cmd></td><td>Toolbox website market research and planning</td><td>Niche analysis, tool prioritization, SEO strategy, ad revenue projections</td></tr>
              <tr><td><Cmd>#weekly-memo</Cmd></td><td>Weekly business memo and status report</td><td>Cross-domain status, highlights, risks, next-week priorities, doc updates</td></tr>
            </tbody>
          </table>
        </Section>

        {/* ─── TASK BOARD ─── */}
        <Section id="task-board" icon="✅" title="Task Board & Tracking">
          <p>The <Link to="/tasks">Task Board</Link> is an interactive React page that displays all 69 tasks across 8 milestones with filtering, progress tracking, and checkboxes.</p>

          <h3>How It Works</h3>
          <div className="manual-steps">
            <div className="manual-step">
              <div className="manual-step__number">1</div>
              <div>
                <strong>Generate:</strong> <Cmd>npm run issues:export</Cmd> runs <Cmd>scripts/generate-github-issues.js</Cmd> which creates <Cmd>static/tasks.json</Cmd> with all task data (titles, labels, milestones, hours).
              </div>
            </div>
            <div className="manual-step">
              <div className="manual-step__number">2</div>
              <div>
                <strong>Display:</strong> The React page fetches <Cmd>/tasks.json</Cmd> on load and renders the interactive board with person/priority filters and milestone grouping.
              </div>
            </div>
            <div className="manual-step">
              <div className="manual-step__number">3</div>
              <div>
                <strong>Persist:</strong> Checkbox state (which tasks are done) is saved in your browser's <Cmd>localStorage</Cmd> under the key <Cmd>bornara-task-done</Cmd>.
              </div>
            </div>
          </div>

          <h3>Do I Need a Database?</h3>
          <div className="manual-callout manual-callout--info">
            <strong>Short answer: No</strong> — not right now. The current setup is designed for a solo founder / small team where:
            <ul>
              <li>Tasks are defined in the script (69 tasks, 8 milestones) and exported as static JSON</li>
              <li>Done/undone checkmarks are stored in your browser's <Cmd>localStorage</Cmd></li>
              <li>Each device has its own independent checklist</li>
              <li>Task data refreshes on every deploy via GitHub Actions</li>
            </ul>
          </div>

          <h3>When Would You Need a Database?</h3>
          <table className="manual-table">
            <thead><tr><th>Scenario</th><th>Solution</th></tr></thead>
            <tbody>
              <tr><td>Multiple users need shared checklist</td><td>Add a lightweight backend (e.g., Supabase, Firebase) for shared state</td></tr>
              <tr><td>Sync with real GitHub Issues</td><td>Use GitHub API to fetch live issue status instead of static JSON</td></tr>
              <tr><td>Users should add/edit tasks from UI</td><td>Add a CRUD backend with authentication</td></tr>
              <tr><td>Audit trail (who did what, when)</td><td>Database with timestamped records</td></tr>
            </tbody>
          </table>

          <h3>Current Limitations</h3>
          <ul>
            <li>Clearing browser data resets your checklist</li>
            <li>No sync between devices (laptop vs phone have separate checklists)</li>
            <li>Cannot add/edit tasks from the UI — edit <Cmd>scripts/generate-github-issues.js</Cmd> and re-export</li>
            <li>Task list is hardcoded in the script (69 tasks) — add new ones by editing the <Cmd>ISSUES</Cmd> array</li>
          </ul>

          <h3>How to Add New Tasks</h3>
          <ol>
            <li>Edit <Cmd>scripts/generate-github-issues.js</Cmd> — add entries to the <Cmd>ISSUES</Cmd> array</li>
            <li>Run <Cmd>npm run issues:export</Cmd> to regenerate <Cmd>static/tasks.json</Cmd></li>
            <li>Rebuild the site: <Cmd>npm run docs:build</Cmd></li>
          </ol>
        </Section>

        {/* ─── DOCS SITE ─── */}
        <Section id="docs-site" icon="📚" title="Documentation Site">
          <p>The site is built with <strong>Docusaurus 3</strong> and deployed to GitHub Pages at <Cmd>https://bornara-ai.github.io/bornara-ai-docs/</Cmd>.</p>

          <h3>Key Features</h3>
          <ul>
            <li><strong>Auto-generated sidebar</strong> from folder structure (no manual config)</li>
            <li><strong>Dark mode</strong> with system preference detection</li>
            <li><strong>Last Updated timestamps</strong> on every doc page</li>
            <li><strong>Custom homepage</strong> with stats, revenue streams, quick links, weekly schedule</li>
            <li><strong>Interactive task board</strong> at <Cmd>/tasks</Cmd></li>
            <li><strong>This manual</strong> at <Cmd>/manual</Cmd></li>
          </ul>

          <h3>URL Pattern</h3>
          <p>Docusaurus strips numeric folder prefixes. <Cmd>06_Business_Planning</Cmd> becomes <Cmd>/docs/Business_Planning/</Cmd>. Filenames like <Cmd>12-month-roadmap.md</Cmd> become <Cmd>/docs/Business_Planning/month-roadmap</Cmd> (leading numbers stripped).</p>

          <h3>Dev vs Production</h3>
          <table className="manual-table">
            <thead><tr><th>Mode</th><th>Command</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Development</td><td><Cmd>npm run docs:start</Cmd></td><td>Hot reload, faster, uses dev server</td></tr>
              <tr><td>Production build</td><td><Cmd>npm run docs:build</Cmd></td><td>Full static build, SSR + client JS, output in <Cmd>build/</Cmd></td></tr>
              <tr><td>Production preview</td><td><Cmd>npm run docs:serve</Cmd></td><td>Serves <Cmd>build/</Cmd> locally to test before deploy</td></tr>
            </tbody>
          </table>
        </Section>

        {/* ─── DOCS STRUCTURE ─── */}
        <Section id="docs-structure" icon="📁" title="Docs Folder Structure">
          <table className="manual-table">
            <thead><tr><th>Folder</th><th>Purpose</th><th>Key Files</th></tr></thead>
            <tbody>
              <tr><td><Cmd>00_Company_Overview</Cmd></td><td>Business fundamentals</td><td>master-business-context.md, vision-mission.md, organizational-structure.md</td></tr>
              <tr><td><Cmd>01_Portfolio_Management</Cmd></td><td>All projects tracker</td><td>project-registry.md (auto-generated from project.json files)</td></tr>
              <tr><td><Cmd>02_Standards_and_Governance</Cmd></td><td>Company standards</td><td>documentation-standards.md, architecture-principles.md, security-policies.md, ai-governance.md, code-quality-standards.md</td></tr>
              <tr><td><Cmd>03_Operations</Cmd></td><td>Operational procedures</td><td>Cross-project procedures</td></tr>
              <tr><td><Cmd>04_Technology_Stack</Cmd></td><td>Tech stack decisions</td><td>approved-technologies.md</td></tr>
              <tr><td><Cmd>05_Projects</Cmd></td><td>Individual projects</td><td>bornara-tools/ (active), agentic-ai-platform/ (deferred)</td></tr>
              <tr><td><Cmd>06_Business_Planning</Cmd></td><td>Strategy, finance, tax</td><td>business-plan.md, revenue-model.md, 12-month-roadmap.md, cra-compliance-guide.md, t2125-filing-guides.md, expense-tracking-guide.md, + 13 more</td></tr>
            </tbody>
          </table>
          <p>The sidebar auto-generates from this folder structure. Numeric prefixes (<Cmd>00_</Cmd>, <Cmd>01_</Cmd>, etc.) control ordering but are stripped from URLs.</p>
        </Section>

        {/* ─── CI/CD ─── */}
        <Section id="ci-cd" icon="🔄" title="CI/CD & GitHub Actions">
          <p>Three workflows in <Cmd>.github/workflows/</Cmd>:</p>

          <h3>1. guardian.yml — PR Validation</h3>
          <ul>
            <li><strong>Trigger:</strong> PRs to <Cmd>main</Cmd> with <Cmd>docs/**/*.md</Cmd> changes</li>
            <li><strong>Checks:</strong> Front-matter validation (Owner, Status, Version, Last Updated, Applies To) + markdown lint</li>
            <li><strong>Blocks merge</strong> if any check fails</li>
          </ul>

          <h3>2. copilot-doc-assist.yml — PR Assistance</h3>
          <ul>
            <li><strong>Trigger:</strong> PRs with changes to docs, scripts, workflows, package.json, or project.json</li>
            <li><strong>Action:</strong> Comments on PR suggesting README updates or registry regeneration</li>
            <li><strong>Non-blocking</strong> — informational only</li>
          </ul>

          <h3>3. deploy-docs.yml — GitHub Pages Deploy</h3>
          <ul>
            <li><strong>Trigger:</strong> Push to <Cmd>main</Cmd> or manual dispatch</li>
            <li><strong>Flow:</strong> Checkout → Install → Export tasks JSON → Build Docusaurus → Deploy to Pages</li>
            <li><strong>Concurrency:</strong> Cancels previous deploy if new push arrives</li>
          </ul>
        </Section>

        {/* ─── STANDARDS ─── */}
        <Section id="standards" icon="📏" title="Documentation Standards">
          <p>Every <Cmd>.md</Cmd> file in <Cmd>docs/</Cmd> must have this front-matter (one field per line):</p>
          <pre><code>{`# Document Title

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 0.1.0
**Last Updated:** 2026-04-22
**Applies To:** Bornara AI`}</code></pre>

          <h3>Rules</h3>
          <ul>
            <li>Valid <Cmd>Status</Cmd> values: <strong>Draft</strong>, <strong>Reviewed</strong>, <strong>Approved</strong></li>
            <li>One field per line (CI checker does plain-text search)</li>
            <li><Cmd>_template.md</Cmd> files and anything under <Cmd>shared/</Cmd> are excluded</li>
          </ul>

          <h3>Auto-Fix Behaviour</h3>
          <table className="manual-table">
            <thead><tr><th>Issue Type</th><th>Behaviour</th></tr></thead>
            <tbody>
              <tr><td>Markdown lint (blank lines, trailing spaces, headings)</td><td>Auto-fixed silently by <Cmd>npm run lint:md:fix</Cmd></td></tr>
              <tr><td>Missing front-matter fields</td><td>Ask permission — <Cmd>npm run doc:fix</Cmd> shows proposed defaults, waits for y/n</td></tr>
              <tr><td>Existing field values</td><td>Never overwritten without explicit confirmation</td></tr>
              <tr><td>Body / content changes</td><td>Always require explicit user approval</td></tr>
            </tbody>
          </table>
        </Section>

        {/* ─── PROJECTS ─── */}
        <Section id="projects" icon="🗂️" title="Project Management">
          <h3>Create a New Project</h3>
          <pre><code>{`npm run project:create -- --name "My Project" --id "my-project"`}</code></pre>
          <p>This creates under <Cmd>docs/05_Projects/my-project/</Cmd>:</p>
          <ul>
            <li><Cmd>project.json</Cmd> — metadata (id, name, status, phase, owner, tech stack)</li>
            <li><Cmd>README.md</Cmd> — project overview</li>
            <li>5 section folders with templates: Overview, Architecture, Data, Platform Services, Operations</li>
          </ul>

          <h3>List Projects</h3>
          <pre><code>npm run project:list</code></pre>
          <p>Displays all projects grouped by status (Active, Planned, On-Hold, Completed) with color coding.</p>

          <h3>Update Registry</h3>
          <pre><code>npm run registry:update</code></pre>
          <p>Scans all <Cmd>project.json</Cmd> files and regenerates <Cmd>docs/01_Portfolio_Management/project-registry.md</Cmd> with tables grouped by status.</p>
        </Section>

        {/* ─── GIT WORKFLOW ─── */}
        <Section id="git-workflow" icon="🌿" title="Git & PR Workflow">
          <div className="manual-callout manual-callout--warning">
            <strong>main is protected.</strong> Never push directly to main. All changes go through feature branches + PR.
          </div>

          <h3>Branch Naming</h3>
          <table className="manual-table">
            <thead><tr><th>Prefix</th><th>Use For</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><Cmd>feat/</Cmd></td><td>New features or pages</td><td><Cmd>feat/docusaurus-docs-site</Cmd></td></tr>
              <tr><td><Cmd>fix/</Cmd></td><td>Bug fixes</td><td><Cmd>fix/task-board-crash</Cmd></td></tr>
              <tr><td><Cmd>docs/</Cmd></td><td>Documentation-only changes</td><td><Cmd>docs/update-roadmap</Cmd></td></tr>
            </tbody>
          </table>

          <h3>Commit Format</h3>
          <p>Use conventional commits: <Cmd>docs: ...</Cmd>, <Cmd>feat: ...</Cmd>, <Cmd>fix: ...</Cmd></p>

          <h3>PR Flow</h3>
          <ol>
            <li>Create feature branch from <Cmd>main</Cmd></li>
            <li>Make changes, commit with conventional format</li>
            <li>Push branch, open PR</li>
            <li><Cmd>guardian.yml</Cmd> runs: validates front-matter + markdown lint</li>
            <li><Cmd>copilot-doc-assist.yml</Cmd> comments with suggestions</li>
            <li>Merge to <Cmd>main</Cmd> → <Cmd>deploy-docs.yml</Cmd> auto-deploys to GitHub Pages</li>
          </ol>
        </Section>

        {/* ─── ARCHITECTURE ─── */}
        <Section id="architecture" icon="🏗️" title="Architecture & FAQ">
          <h3>Tech Stack</h3>
          <ul>
            <li><strong>Site:</strong> Docusaurus 3 (React 18 + TypeScript)</li>
            <li><strong>Styling:</strong> Custom CSS (no Tailwind in docs site)</li>
            <li><strong>Build:</strong> Babel (Docusaurus preset) + webpack 5.97.1</li>
            <li><strong>Deploy:</strong> GitHub Pages via GitHub Actions</li>
            <li><strong>Linting:</strong> markdownlint-cli2 + custom validation scripts</li>
            <li><strong>Git hooks:</strong> Husky + lint-staged (auto-lint on commit)</li>
          </ul>

          <h3>FAQ</h3>

          <h4>How do I add a new doc page?</h4>
          <p>Create a <Cmd>.md</Cmd> file in the appropriate <Cmd>docs/</Cmd> subfolder with the required front-matter. The sidebar auto-updates.</p>

          <h4>How do I add a new standalone page (not in sidebar)?</h4>
          <p>Create a <Cmd>.tsx</Cmd> file in <Cmd>src/pages/</Cmd>. It will be available at <Cmd>/filename</Cmd>.</p>

          <h4>How do I change the navbar or footer?</h4>
          <p>Edit <Cmd>docusaurus.config.js</Cmd> — the <Cmd>themeConfig.navbar</Cmd> and <Cmd>themeConfig.footer</Cmd> sections.</p>

          <h4>How do I export data from the project?</h4>
          <table className="manual-table">
            <thead><tr><th>What</th><th>Command</th><th>Output</th></tr></thead>
            <tbody>
              <tr><td>Tasks as JSON</td><td><Cmd>npm run issues:export</Cmd></td><td><Cmd>static/tasks.json</Cmd></td></tr>
              <tr><td>Project registry</td><td><Cmd>npm run registry:update</Cmd></td><td><Cmd>docs/01_Portfolio_Management/project-registry.md</Cmd></td></tr>
              <tr><td>Cross-ref report</td><td><Cmd>npm run check:cross-refs</Cmd></td><td>Console output with broken links + suggestions</td></tr>
              <tr><td>Project list</td><td><Cmd>npm run project:list</Cmd></td><td>Console table with all projects by status</td></tr>
              <tr><td>Full static site</td><td><Cmd>npm run docs:build</Cmd></td><td><Cmd>build/</Cmd> folder — ready to deploy anywhere</td></tr>
            </tbody>
          </table>

          <h4>Where are the immutable constants?</h4>
          <p>Never change without explicit confirmation:</p>
          <ul>
            <li><strong>Owner:</strong> Mahdi Moradi</li>
            <li><strong>Location:</strong> Calgary, Alberta, Canada</li>
            <li><strong>Business:</strong> Bornara AI (Sole Proprietorship)</li>
            <li><strong>CRA rules:</strong> Facts — never invent or guess</li>
          </ul>

          <h4>What is "living data" (can be changed)?</h4>
          <p>Revenue targets, expenses, timelines, pricing, tech choices, agent definitions, task lists — all can be updated via docs and scripts.</p>
        </Section>

      </div>
    </Layout>
  );
}
