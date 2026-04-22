import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

/* ── Types ── */
interface Issue {
  id: number;
  title: string;
  labels: string[];
  milestone: string | null;
  hours: number;
}

interface TasksData {
  generated: string;
  issues: Issue[];
}

type Person = 'all' | 'mahdi' | 'narjes';
type Priority = 'all' | 'P0-critical' | 'P1-high' | 'P2-medium' | 'P3-low';

/* ── Constants ── */
const PRIORITY_LABELS: Record<string, { label: string; cls: string }> = {
  'P0-critical': { label: '🔴 Critical', cls: 'priority-0' },
  'P1-high':     { label: '🟡 High',     cls: 'priority-1' },
  'P2-medium':   { label: '🟢 Medium',   cls: 'priority-2' },
  'P3-low':      { label: '⚪ Low',      cls: '' },
};

const SKIP_LABELS = new Set([
  'P0-critical','P1-high','P2-medium','P3-low',
  'mahdi','narjes','recurring',
]);

const STORAGE_KEY = 'bornara-task-done';

/* ── Helpers ── */
function getPriority(labels: string[]): string {
  if (labels.includes('P0-critical')) return 'P0-critical';
  if (labels.includes('P1-high'))     return 'P1-high';
  if (labels.includes('P2-medium'))   return 'P2-medium';
  return 'P3-low';
}

function getLabelClass(label: string): string {
  if (label === 'P0-critical') return 'task-label--priority-0';
  if (label === 'P1-high')     return 'task-label--priority-1';
  if (label === 'P2-medium')   return 'task-label--priority-2';
  if (label === 'mahdi')       return 'task-label--mahdi';
  if (label === 'narjes')      return 'task-label--narjes';
  if (label === 'cookies')     return 'task-label--cookies';
  if (label.includes('ai'))    return 'task-label--ai-tool';
  if (label === 'viral')       return 'task-label--viral';
  if (label === 'tax' || label === 'admin') return 'task-label--tax';
  if (label === 'legal')       return 'task-label--legal';
  if (label === 'dev' || label === 'setup') return 'task-label--dev';
  return '';
}

function loadDone(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw) as number[]) : new Set();
  } catch { return new Set(); }
}

function saveDone(done: Set<number>): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(done))); }
  catch { /* ignore */ }
}

/* ── Page ── */
export default function TasksPage(): React.JSX.Element {
  const [data, setData] = useState<TasksData | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const url = useBaseUrl('/tasks.json');

  useEffect(() => {
    fetch(url)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(setData)
      .catch(e => setErr(e.message));
  }, [url]);

  return (
    <Layout
      title="Task Board — Bornara AI"
      description="Interactive task board for all Bornara AI projects."
    >
      <div className="container" style={{ padding: '2rem 1rem' }}>
        {err && <p style={{ textAlign: 'center', color: 'red', padding: '2rem' }}>Failed to load tasks: {err}</p>}
        {!data && !err && <p style={{ textAlign: 'center', padding: '3rem', color: 'var(--ifm-color-emphasis-500)' }}>Loading Task Board…</p>}
        {data && <TaskBoard data={data} />}
      </div>
    </Layout>
  );
}

/* ── Task Board (fully inlined, zero external component imports) ── */
function TaskBoard({ data }: { data: TasksData }): React.JSX.Element {
  const [person, setPerson] = useState<Person>('all');
  const [priority, setPriority] = useState<Priority>('all');
  const [done, setDone] = useState<Set<number>>(new Set());
  const [hideDone, setHideDone] = useState(false);

  useEffect(() => { setDone(loadDone()); }, []);

  const toggle = useCallback((id: number) => {
    setDone(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      saveDone(next);
      return next;
    });
  }, []);

  const issues = data.issues;
  const visible = issues.filter(i => {
    if (person !== 'all' && !i.labels.includes(person)) return false;
    if (priority !== 'all' && !i.labels.includes(priority)) return false;
    if (hideDone && done.has(i.id)) return false;
    return true;
  });

  const groups: Record<string, Issue[]> = {};
  visible.forEach(issue => {
    const ms = issue.milestone ?? 'No Milestone / Recurring';
    if (!groups[ms]) groups[ms] = [];
    groups[ms].push(issue);
  });
  const groupKeys = Object.keys(groups);

  const totalHours = visible.reduce((s, i) => s + (i.hours ?? 0), 0);
  const doneCount = visible.filter(i => done.has(i.id)).length;

  return (
    <>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '0.3rem' }}>📋 Task Board</h1>
        <p style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem', margin: 0 }}>
          All {issues.length} tasks across 8 milestones — check off as you go.
          Generated: {data.generated}.
        </p>
      </div>

      <div className="task-board">
        {/* Filters */}
        <div className="task-board__filters">
          <div className="task-board__filter-group">
            <span style={{ fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-500)', alignSelf: 'center', marginRight: 4 }}>Person:</span>
            {(['all', 'mahdi', 'narjes'] as Person[]).map(p => (
              <button key={p} className={`filter-btn${person === p ? ' filter-btn--active' : ''}`} onClick={() => setPerson(p)}>
                {p === 'all' ? 'Everyone' : p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
          <div className="task-board__filter-group">
            <span style={{ fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-500)', alignSelf: 'center', marginRight: 4 }}>Priority:</span>
            {(['all', 'P0-critical', 'P1-high', 'P2-medium'] as Priority[]).map(p => (
              <button key={p} className={`filter-btn${priority === p ? ' filter-btn--active' : ''}`} onClick={() => setPriority(p)}>
                {p === 'all' ? 'All' : PRIORITY_LABELS[p]?.label ?? p}
              </button>
            ))}
          </div>
          <div className="task-board__filter-group">
            <button className={`filter-btn${hideDone ? ' filter-btn--active' : ''}`} onClick={() => setHideDone(v => !v)}>
              Hide done
            </button>
          </div>
          <div className="task-board__stats">{doneCount} / {visible.length} done · {totalHours}h</div>
        </div>

        {/* Progress bar */}
        {visible.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ height: 6, background: 'var(--ifm-color-emphasis-200)', borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${Math.round((doneCount / visible.length) * 100)}%`, background: 'var(--ifm-color-primary)', borderRadius: 999, transition: 'width 0.3s ease' }} />
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--ifm-color-emphasis-500)', margin: '0.3rem 0 0' }}>
              {Math.round((doneCount / visible.length) * 100)}% complete
            </p>
          </div>
        )}

        {/* Milestone groups */}
        {groupKeys.map(ms => {
          const msIssues = groups[ms];
          const msTotal = msIssues.length;
          const msDone = msIssues.filter(i => done.has(i.id)).length;
          const pct = msTotal > 0 ? Math.round((msDone / msTotal) * 100) : 0;
          return (
            <div key={ms} className="task-milestone">
              <div className="task-milestone__header">
                <h3 className="task-milestone__title">📅 {ms}</h3>
                <div className="task-milestone__bar-track">
                  <div className="task-milestone__bar-fill" style={{ width: `${pct}%` }} />
                </div>
                <span className="task-milestone__progress">{msDone}/{msTotal}</span>
              </div>
              {msIssues.map(issue => {
                const isDone = done.has(issue.id);
                const pLabel = getPriority(issue.labels);
                const displayLabels = issue.labels.filter(l => !SKIP_LABELS.has(l)).slice(0, 3);
                return (
                  <div key={issue.id} className={`task-item${isDone ? ' task-item--done' : ''}`} onClick={() => toggle(issue.id)} style={{ cursor: 'pointer' }}>
                    <input type="checkbox" className="task-item__check" checked={isDone} onChange={() => toggle(issue.id)} onClick={e => e.stopPropagation()} />
                    <div className="task-item__body">
                      <p className="task-item__title">{issue.title}</p>
                      <div className="task-item__meta">
                        {PRIORITY_LABELS[pLabel] && <span className={`task-label task-label--${PRIORITY_LABELS[pLabel].cls}`}>{PRIORITY_LABELS[pLabel].label}</span>}
                        {issue.labels.includes('mahdi') && <span className="task-label task-label--mahdi">Mahdi</span>}
                        {issue.labels.includes('narjes') && <span className="task-label task-label--narjes">Narjes</span>}
                        {displayLabels.map(l => <span key={l} className={`task-label ${getLabelClass(l)}`}>{l}</span>)}
                        {issue.hours > 0 && <span className="task-item__hours">{issue.hours}h</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {visible.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--ifm-color-emphasis-500)' }}>
            No tasks match your filters.
          </div>
        )}
      </div>
    </>
  );
}
