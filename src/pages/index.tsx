import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const STATS = [
  { number: '69', label: 'Total Tasks' },
  { number: '35', label: 'Tools to Build' },
  { number: '228', label: 'Hours Planned' },
  { number: '8', label: 'Milestones' },
  { number: '2', label: 'Active Streams' },
  { number: '2026', label: 'Launch Year' },
];

const QUICK_LINKS = [
  {
    icon: '🗺️',
    title: '12-Month Roadmap',
    desc: 'Full year plan: Q2 build, Q3 scale, Q4 harvest',
    href: '/docs/Business_Planning/month-roadmap',
  },
  {
    icon: '✅',
    title: 'Task Board',
    desc: '69 tasks across 8 milestones — interactive, checkable',
    href: '/tasks',
  },
  {
    icon: '🛠️',
    title: 'Bornara Tools',
    desc: 'Free dev toolbox — 35 tools, ad revenue model',
    href: '/docs/Projects/bornara-tools/',
  },
  {
    icon: '🍪',
    title: 'Cookie Business',
    desc: 'Narjes leads — recipes, Instagram, local sales',
    href: '/docs/Business_Planning/giftifye-operations-guide',
  },
  {
    icon: '🇨🇦',
    title: 'CRA Compliance',
    desc: 'T2125 guide, activity log, Narjes deductions',
    href: '/docs/Business_Planning/cra-compliance-guide',
  },
  {
    icon: '💰',
    title: 'Revenue Model',
    desc: 'Ad RPM projections, cookie pricing, 2026 targets',
    href: '/docs/Business_Planning/revenue-model',
  },
  {
    icon: '⏰',
    title: 'Time Management',
    desc: '17–20 hrs/week schedule — morning blocks, evenings',
    href: '/docs/Business_Planning/time-management-plan',
  },
  {
    icon: '📅',
    title: 'April Action Plan',
    desc: 'This week\'s tasks — AHS ruling, CRA setup, tech prep',
    href: '/docs/Business_Planning/april-2026-action-plan',
  },
];

const STREAMS = [
  { name: 'Bornara Tools', status: 'active', owner: 'Mahdi', desc: 'Free toolbox → ad revenue. Build starts May 1.' },
  { name: 'Cookie Business', status: 'active', owner: 'Narjes', desc: 'Recipe testing, Instagram, local sales.' },
  { name: 'Giftifye', status: 'onhold', owner: 'Deferred', desc: 'On hold until Tools is stable (Q4 2026 / Q1 2027).' },
  { name: 'AI Platform', status: 'deferred', owner: 'Deferred', desc: 'Full SaaS platform deferred to Q1 2027.' },
];

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Bornara AI — Business OS"
      description="Bornara AI business operating system — roadmap, tasks, CRA compliance, Bornara Tools build plan."
    >
      {/* Hero */}
      <header className="hero hero--primary">
        <div className="container">
          <p className="hero__subtitle" style={{ marginBottom: '0.25rem', fontSize: '0.9rem', opacity: 0.75 }}>
            Mahdi Moradi · Calgary, Alberta · Sole Proprietorship
          </p>
          <h1 className="hero__title">Bornara AI</h1>
          <p className="hero__subtitle">Business Operating System</p>
          <p style={{ opacity: 0.8, maxWidth: 520, margin: '0.75rem auto 1.5rem' }}>
            All your docs, plans, tasks, and schedules — in one place.
            Last pivot: <strong>April 20, 2026</strong> → 2 active streams.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="button button--secondary button--lg" to="/tasks">
              📋 Open Task Board
            </Link>
            <Link className="button button--outline button--lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }} to="/docs/Business_Planning/month-roadmap">
              🗺️ View Roadmap
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="container" style={{ padding: '2.5rem 1rem' }}>

          {/* Stats row */}
          <div className="stat-cards">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-card__number">{s.number}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Revenue streams */}
          <section style={{ margin: '2rem 0' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Revenue Streams</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {STREAMS.map((s) => (
                <div
                  key={s.name}
                  style={{
                    background: 'var(--ifm-card-background-color)',
                    border: '1px solid var(--ifm-color-emphasis-200)',
                    borderRadius: 10,
                    padding: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <strong style={{ fontSize: '0.95rem' }}>{s.name}</strong>
                    <span className={`stream-badge stream-badge--${s.status}`}>
                      {s.status === 'active' ? 'Active' : s.status === 'onhold' ? 'On Hold' : 'Deferred'}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--ifm-color-emphasis-600)', margin: 0 }}>{s.desc}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ifm-color-emphasis-500)', marginTop: '0.3rem', marginBottom: 0 }}>
                    Owner: {s.owner}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick links */}
          <section style={{ margin: '2rem 0' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Access</h2>
            <div className="feature-grid">
              {QUICK_LINKS.map((l) => (
                <Link key={l.href} className="feature-card" to={l.href}>
                  <span className="feature-card__icon">{l.icon}</span>
                  <p className="feature-card__title">{l.title}</p>
                  <p className="feature-card__desc">{l.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Weekly schedule preview */}
          <section style={{ margin: '2rem 0' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Weekly Schedule</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
              17–20 hrs/week available outside 9-5 job + kitchen job.{' '}
              <Link to="/docs/Business_Planning/time-management-plan">Full plan →</Link>
            </p>
            <div className="timetable">
              <div className="timetable__header">Time</div>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d) => (
                <div key={d} className="timetable__header">{d}</div>
              ))}
              <div className="timetable__time">6:00–7:30 AM</div>
              <div className="timetable__cell timetable__cell--tools">Tools coding</div>
              <div className="timetable__cell timetable__cell--tools">Tools coding</div>
              <div className="timetable__cell timetable__cell--tools">Tools coding</div>
              <div className="timetable__cell timetable__cell--tools">Tools coding</div>
              <div className="timetable__cell timetable__cell--tools">Tools / planning</div>
              <div className="timetable__time">8:00–10:00 PM</div>
              <div className="timetable__cell timetable__cell--tools">SEO content</div>
              <div className="timetable__cell timetable__cell--tools">Testing / fixes</div>
              <div className="timetable__cell timetable__cell--cookies">Cookie support</div>
              <div className="timetable__cell timetable__cell--tools">Analytics</div>
              <div className="timetable__cell timetable__cell--admin">Admin / CRA</div>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--ifm-color-emphasis-500)', marginTop: '0.5rem' }}>
              Sat–Sun: kitchen shift 10 AM–6 PM. Business work 8–10 PM only.
            </p>
          </section>

        </div>
      </main>
    </Layout>
  );
}
