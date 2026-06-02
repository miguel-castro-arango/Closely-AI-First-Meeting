/* global React, Icon, Badge, Button, Container, SectionHeading */
// Closely UI Kit — Agents section with tab switcher + mockups

const { useState: useStateAg } = React;

const AGENTS = [
  { name: 'Watcher', code: 'AGENT.WATCHER', status: 'active', icon: 'shield', body: 'Detects loitering, intrusion, tailgating, open doors and masked persons. Fully configurable per camera with plain-language rules.', tags: ['Intrusion', 'Loitering', 'Tailgating', 'Open door', 'Masks'] },
  { name: 'Investigator', code: 'AGENT.INVESTIGATOR', status: 'active', icon: 'search', body: 'Natural language search across all incidents. Ask: "Show me all tailgating events last week at the back door."', tags: ['Semantic search', 'Timeline', 'Replay'] },
  { name: 'Reporter', code: 'AGENT.REPORTER', status: 'active', icon: 'file-text', body: 'Weekly and monthly AI-generated security reports delivered straight to your inbox. Trends, hotspots, anomalies — ready to present.', tags: ['Weekly', 'Monthly', 'Insights'] },
  { name: 'Supervisor', code: 'AGENT.SUPERVISOR', status: 'active', icon: 'map-pin', body: 'Tracks every guard\u2019s patrol in real time. When an incident hits, Supervisor pings the closest guard and routes them to the scene.', tags: ['Patrol tracking', 'Live location', 'Auto-dispatch', 'Coverage'] },
  { name: 'Gatekeeper', code: 'AGENT.GATEKEEPER', status: 'soon', icon: 'door-open', body: 'Access control for buildings and lobbies. Integration with existing platforms, role-based validation, and full audit trail.', tags: ['Access', 'Visitors', 'Audit log'] },
];

const mockWrap = { width: '100%', borderRadius: 12, border: '1px solid var(--border)', background: '#070811', overflow: 'hidden', position: 'relative' };

function FauxFeed({ topLeft, topRight, bottomRight, gradient }) {
  return (
    <div style={{ ...mockWrap, aspectRatio: '4 / 3' }}>
      <div style={{ position: 'absolute', inset: 0, background: gradient || 'linear-gradient(160deg,#11151f,#070811)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(115deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 22px)' }} />
      {topLeft && <div style={{ position: 'absolute', top: 10, left: 10, borderRadius: 4, background: 'rgba(0,0,0,.6)', padding: '3px 6px', fontFamily: 'var(--font-mono)', fontSize: 9, color: '#fff', textTransform: 'uppercase', letterSpacing: '.06em' }}>{topLeft}</div>}
      {topRight && <div style={{ position: 'absolute', top: 10, right: 10, borderRadius: 4, background: 'var(--danger-soft)', border: '1px solid var(--danger-line)', padding: '3px 6px', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--danger)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{topRight}</div>}
      {bottomRight && <div style={{ position: 'absolute', bottom: 10, right: 10, borderRadius: 4, background: 'var(--success-soft)', border: '1px solid var(--success-line)', padding: '3px 6px', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{bottomRight}</div>}
    </div>
  );
}

function WatcherMock() {
  return (
    <FauxFeed topLeft="● CAM-02 · REC" topRight="⚠ INTRUSION" />
  );
}

function SupervisorMock() {
  return (
    <div style={{ ...mockWrap, aspectRatio: '4 / 3' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 40%, rgba(59,130,246,0.12), transparent 60%), linear-gradient(160deg,#0d1018,#070811)' }} />
      <div className="cl-bg-grid" style={{ position: 'absolute', inset: 0, opacity: .5 }} />
      {/* routes */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 75" preserveAspectRatio="none">
        <path d="M15 60 L40 40 L70 50 L85 20" fill="none" stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.7" />
      </svg>
      {[[15,60],[40,40],[70,50]].map(([x,y],i)=>(
        <div key={i} style={{ position: 'absolute', left: x+'%', top: y+'%', width: 10, height: 10, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 0 4px var(--success-soft)', transform: 'translate(-50%,-50%)' }} />
      ))}
      <div style={{ position: 'absolute', top: 10, left: 10, borderRadius: 4, background: 'rgba(0,0,0,.6)', padding: '3px 6px', fontFamily: 'var(--font-mono)', fontSize: 9, color: '#fff', textTransform: 'uppercase', letterSpacing: '.06em' }}>LIVE · North Sector</div>
      <div style={{ position: 'absolute', bottom: 10, right: 10, borderRadius: 4, background: 'var(--success-soft)', border: '1px solid var(--success-line)', padding: '3px 6px', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '.06em' }}>● 3 ACTIVE</div>
    </div>
  );
}

function InvestigatorMock() {
  const results = [
    { tag: 'Delivery', time: '23:47:32', building: 'Park Tower Residences', cam: 'CAM-04', conf: '96%', thumb: '../../assets/investigator/delivery-1.jpg' },
    { tag: 'Delivery', time: '23:45:12', building: 'Bellavista Building', cam: 'CAM-07', conf: '92%', thumb: '../../assets/investigator/delivery-2.jpg' },
    { tag: 'Delivery', time: '13:32:36', building: 'El Mirador Residences', cam: 'CAM-01', conf: '89%', thumb: '../../assets/investigator/delivery-3.jpg' },
  ];
  return (
    <div style={{ ...mockWrap, padding: 20, display: 'flex', flexDirection: 'column', gap: 12, aspectRatio: '4 / 3' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderRadius: 8, border: '1px solid var(--accent-line)', background: 'rgba(17,19,32,0.8)', padding: '10px 12px' }}>
        <Icon name="search" size={14} strokeWidth={2} style={{ color: 'var(--accent)', flexShrink: 0 }} />
        <span style={{ fontSize: 12, color: 'var(--fg-strong)' }}>Show me delivery riders that entered this week</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)' }}>⌘K</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {results.map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, borderRadius: 8, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.4)', padding: 10 }}>
            <div style={{ width: 64, height: 44, borderRadius: 4, backgroundImage: `url(${r.thumb})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--border)', flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ borderRadius: 4, border: '1px solid var(--warn-line)', background: 'var(--warn-soft)', color: 'var(--warn)', padding: '1px 5px', fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase' }}>{r.tag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)' }}>{r.time}</span>
              </div>
              <span style={{ fontSize: 11.5, color: 'var(--fg-strong)', marginTop: 2 }}>{r.building}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)' }}>{r.cam}</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)' }}>{r.conf}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)' }}>3 results · 0.14s</div>
    </div>
  );
}

const BARS = [40, 65, 30, 80, 55, 90, 45];
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
function ReporterMock() {
  const stats = [{ v: 147, l: 'Events' }, { v: 12, l: 'Alerts' }, { v: 3, l: 'Hotspots' }];
  return (
    <div style={{ ...mockWrap, padding: 20, aspectRatio: '4 / 3' }}>
      <div style={{ height: '100%', borderRadius: 8, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.6)', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--accent)' }}>Weekly report · W42</span>
          <span style={{ borderRadius: 4, border: '1px solid var(--success-line)', background: 'var(--success-soft)', color: 'var(--success)', padding: '1px 5px', fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase' }}>DELIVERED</span>
        </div>
        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: 'var(--fg-strong)' }}>Security summary · North Building</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {stats.map((s) => (
            <div key={s.l} style={{ borderRadius: 8, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.4)', padding: 8 }}>
              <div className="cl-text-gradient" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 52, marginTop: 2 }}>
          {BARS.map((h, i) => (
            <div key={i} style={{ flex: 1, position: 'relative', height: h + '%', borderRadius: 3, background: 'linear-gradient(to top, rgba(59,130,246,0.4), rgba(59,130,246,0.85))' }}>
              <span style={{ position: 'absolute', bottom: -16, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--muted)' }}>{DAYS[i]}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, display: 'flex', gap: 8, alignItems: 'flex-start', borderRadius: 8, border: '1px solid var(--danger-line)', background: 'var(--danger-soft)', padding: '8px 12px' }}>
          <Icon name="alert-triangle" size={14} strokeWidth={2} style={{ color: 'var(--danger)', flexShrink: 0, marginTop: 2 }} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--danger)' }}>Alert</div>
            <div style={{ fontSize: 11, color: 'var(--fg-strong)', lineHeight: 1.4 }}>Camera 3 at North Watchtower lost signal <span style={{ color: 'var(--danger)', fontWeight: 500 }}>3 times</span> this week.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GatekeeperMock() {
  const people = [
    { name: 'Ana Rodríguez', tag: 'Employee', time: 'Now', ok: true },
    { name: 'Luis Méndez', tag: 'Visitor', time: '14:18', ok: true },
    { name: 'Unknown', tag: 'No record', time: '13:42', ok: false },
    { name: 'Carlos Pinto', tag: 'Employee', time: '12:55', ok: true },
  ];
  return (
    <div style={{ ...mockWrap, padding: 20, display: 'flex', flexDirection: 'column', gap: 10, aspectRatio: '4 / 3' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--accent)' }}>Lobby · North Building</span>
        <span style={{ borderRadius: 4, border: '1px solid var(--success-line)', background: 'var(--success-soft)', color: 'var(--success)', padding: '1px 5px', fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase' }}>OPEN</span>
      </div>
      {people.map((p) => (
        <div key={p.name + p.time} style={{ display: 'flex', alignItems: 'center', gap: 12, borderRadius: 8, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.4)', padding: '8px 12px' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: 12, background: p.ok ? 'var(--success-soft)' : 'var(--danger-soft)', color: p.ok ? 'var(--success)' : 'var(--danger)' }}>{p.ok ? '✓' : '✕'}</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 11.5, color: 'var(--fg-strong)' }}>{p.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, textTransform: 'uppercase', color: 'var(--muted)' }}>{p.tag}</div>
          </div>
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)' }}>{p.time}</span>
        </div>
      ))}
    </div>
  );
}

function renderMock(name) {
  switch (name) {
    case 'Watcher': return <WatcherMock />;
    case 'Investigator': return <InvestigatorMock />;
    case 'Reporter': return <ReporterMock />;
    case 'Supervisor': return <SupervisorMock />;
    case 'Gatekeeper': return <GatekeeperMock />;
    default: return null;
  }
}

function Agents() {
  const [active, setActive] = useStateAg('AGENT.WATCHER');
  const a = AGENTS.find((x) => x.code === active);
  return (
    <section id="agents" style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
      <Container>
        <SectionHeading eyebrow="Agents" title="A ROSTER OF SPECIALIZED AI AGENTS. EACH WITH ONE JOB." lede="Not a monolithic detector. A team of agents covering the full cycle: detect, investigate, report, supervise, and control access." titleId="agents-title" />

        <div style={{ marginTop: 48 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            {AGENTS.map((ag) => {
              const isActive = ag.code === active;
              const isSoon = ag.status === 'soon';
              return (
                <button key={ag.code} onClick={() => setActive(ag.code)} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 9999,
                  border: `1px solid ${isActive ? 'var(--accent-line)' : 'var(--border)'}`,
                  background: isActive ? 'var(--accent-soft)' : 'rgba(17,19,32,0.4)',
                  color: isActive ? 'var(--fg-strong)' : 'var(--muted)',
                  boxShadow: isActive ? 'var(--shadow-glow)' : 'none',
                  padding: '10px 16px', fontSize: 14, cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'all .2s',
                }}>
                  <Icon name={ag.icon} size={16} />
                  <span style={{ fontWeight: 500 }}>{ag.name}</span>
                  {isSoon && <span style={{ borderRadius: 4, border: '1px solid var(--warn-line)', background: 'var(--warn-soft)', color: 'var(--warn)', padding: '1px 5px', fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', marginLeft: 4 }}>SOON</span>}
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: 32, borderRadius: 16, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.4)', padding: 40 }}>
            <div className="cl-agent-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Badge tone={a.status === 'soon' ? 'soon' : 'success'} pulse={a.status !== 'soon'}>{a.status === 'soon' ? 'Coming soon' : 'Active'}</Badge>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--muted)' }}>{a.code}</span>
                </div>
                <h3 className="cl-h3" style={{ margin: 0 }}>{a.name}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--muted-strong)' }}>{a.body}</p>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 6, listStyle: 'none', margin: 0, padding: 0 }}>
                  {a.tags.map((t) => <li key={t} style={{ borderRadius: 6, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.6)', padding: '4px 8px', fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--muted)' }}>{t}</li>)}
                </ul>
                <div style={{ paddingTop: 8 }}><Button variant="primary" size="md">Book demo <Icon name="arrow-right" size={14} /></Button></div>
              </div>
              <div>{renderMock(a.name)}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

window.Agents = Agents;
