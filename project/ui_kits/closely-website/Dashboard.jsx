/* global React, Icon, Badge */
// Closely UI Kit — Live operator Dashboard (camera feed + alert + incidents)

const { useState: useStateDash, useEffect: useEffectDash, useRef: useRefDash } = React;

const INCIDENTS = [
  { id: 'i1', type: 'Stolen bike', level: 'danger', time: '14:32:14', location: 'CAM-02 · Back D…', confidence: '94%' },
  { id: 'i2', type: 'Intrusion', level: 'danger', time: '14:32:08', location: 'CAM-02 · Back D…', confidence: '94%' },
  { id: 'i3', type: 'Open door', level: 'warn', time: '14:18:21', location: 'CAM-04 · Loadin…', confidence: '81%' },
  { id: 'i4', type: 'Loitering', level: 'warn', time: '13:55:12', location: 'CAM-02 · Back D…', confidence: '78%' },
  { id: 'i5', type: 'Tailgating', level: 'warn', time: '12:41:03', location: 'CAM-01 · Main Lo…', confidence: '88%' },
  { id: 'i6', type: 'Masked person', level: 'danger', time: '11:18:42', location: 'CAM-03 · Park…', confidence: '91%' },
];

const TONE = {
  danger: { color: 'var(--danger)', bg: 'var(--danger-soft)', bd: 'var(--danger-line)' },
  warn: { color: 'var(--warn)', bg: 'var(--warn-soft)', bd: 'var(--warn-line)' },
};

function CameraFeed() {
  const [action, setAction] = useStateDash('idle'); // idle | validated | dismissed
  const [voice, setVoice] = useStateDash(false);
  useEffectDash(() => {
    const t1 = setTimeout(() => setVoice(true), 2500);
    const t2 = setTimeout(() => setVoice(false), 7000);
    const id = setInterval(() => { setVoice(true); setTimeout(() => setVoice(false), 4500); }, 12000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(id); };
  }, []);

  return (
    <div style={{ border: '1px solid var(--border)', background: 'rgba(17,19,32,0.4)', borderRadius: 16, padding: 12, backdropFilter: 'blur(4px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, fontFamily: 'var(--font-mono)', fontSize: 11 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--fg-strong)' }}>
          <span style={{ position: 'relative', width: 6, height: 6, display: 'inline-flex' }}>
            <span className="cl-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--danger)', opacity: .75 }} />
            <span style={{ position: 'relative', width: 6, height: 6, borderRadius: '50%', background: 'var(--danger)' }} />
          </span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '.06em' }}>CAM-02 · Back Door</span>
          <span style={{ color: 'var(--warn)', marginLeft: 4 }}>· ANALYZING</span>
        </div>
        <span style={{ color: 'var(--muted)' }}>14:32:14</span>
      </div>

      {/* Faux camera frame */}
      <div style={{ position: 'relative', aspectRatio: '16 / 10', width: '100%', overflow: 'hidden', borderRadius: 8, background: 'linear-gradient(160deg,#11151f 0%,#070811 70%)', boxShadow: 'inset 0 0 0 1px var(--border)' }}>
        {/* faux scene: ground + perspective lines */}
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(115deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 22px)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '42%', background: 'linear-gradient(to top, rgba(40,46,70,0.5), transparent)' }} />
        {/* detection box */}
        <div className="cl-detbox" style={{ position: 'absolute', left: '41%', top: '34%', width: '18%', height: '50%', border: '2px solid var(--danger)' }}>
          <span style={{ position: 'absolute', top: -17, left: 0, background: 'var(--danger)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 9, padding: '1px 4px', textTransform: 'uppercase', letterSpacing: '.06em', whiteSpace: 'nowrap' }}>stolen bike · 0.94</span>
          {/* a simple silhouette */}
          <div style={{ position: 'absolute', left: '50%', top: '12%', width: 14, height: 14, borderRadius: '50%', background: 'rgba(180,184,200,0.4)', transform: 'translateX(-50%)' }} />
          <div style={{ position: 'absolute', left: '50%', top: '28%', width: 22, height: '52%', borderRadius: 6, background: 'rgba(180,184,200,0.35)', transform: 'translateX(-50%)' }} />
        </div>
        <div style={{ position: 'absolute', top: 8, left: 8, borderRadius: 4, background: 'rgba(0,0,0,.6)', padding: '3px 6px', fontFamily: 'var(--font-mono)', fontSize: 9, color: '#fff', textTransform: 'uppercase', letterSpacing: '.06em' }}>● CAM-02 · REC</div>
        <div style={{ position: 'absolute', top: 8, right: 8, borderRadius: 4, background: 'var(--danger-soft)', border: '1px solid var(--danger-line)', padding: '3px 6px', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--danger)', textTransform: 'uppercase', letterSpacing: '.06em' }}>⚠ Stolen vehicle</div>

        {voice && (
          <div className="cl-fade-in" style={{ position: 'absolute', bottom: 12, left: 12, maxWidth: 250, borderRadius: 8, border: '1px solid var(--success-line)', background: 'rgba(17,19,32,0.9)', backdropFilter: 'blur(8px)', padding: 10, boxShadow: 'var(--shadow-glow)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <span className="cl-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--success)', opacity: .4 }} />
                <div style={{ position: 'relative', width: 32, height: 32, borderRadius: '50%', background: 'var(--success-soft)', border: '1px solid var(--success-line)', display: 'grid', placeItems: 'center', color: 'var(--success)' }}><Icon name="phone" size={14} strokeWidth={2} /></div>
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--success)' }}>AGENT.VOICE</div>
                <div style={{ fontSize: 11, color: 'var(--fg-strong)' }}>Calling supervisor · CAM-02</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)' }}>
        <span style={{ color: 'rgba(230,232,239,0.8)' }}>PIPELINE: motion → YOLO → claude-vision</span>
        <span>1920×1080 · 30fps</span>
      </div>

      {/* operator actions */}
      <div style={{ marginTop: 12 }}>
        {action === 'idle' && (
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setAction('validated')} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, borderRadius: 8, border: '1px solid var(--success-line)', background: 'var(--success-soft)', padding: '9px', fontSize: 11, fontWeight: 500, color: 'var(--success)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
              <Icon name="check" size={12} strokeWidth={2.5} /> Validate · Dispatch
            </button>
            <button onClick={() => setAction('dismissed')} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, borderRadius: 8, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.6)', padding: '9px', fontSize: 11, fontWeight: 500, color: 'var(--muted)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
              <Icon name="x" size={12} strokeWidth={2.5} /> Dismiss
            </button>
          </div>
        )}
        {action === 'validated' && (
          <div className="cl-fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 8, border: '1px solid var(--success-line)', background: 'var(--success-soft)', padding: '9px', fontSize: 11, color: 'var(--success)', fontWeight: 500 }}>
            <Icon name="check" size={14} strokeWidth={2.5} /> Dispatched · Guard en route
          </div>
        )}
        {action === 'dismissed' && (
          <div className="cl-fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.6)', padding: '9px', fontSize: 11, color: 'var(--muted)' }}>
            Alert dismissed · Model retrained
          </div>
        )}
      </div>
    </div>
  );
}

function AlertBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderRadius: 16, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.4)', padding: 12 }}>
      <div style={{ width: 36, height: 36, display: 'grid', placeItems: 'center', borderRadius: 8, border: '1px solid var(--danger-line)', background: 'var(--danger-soft)', color: 'var(--danger)', flexShrink: 0 }}>
        <Icon name="alert-triangle" size={18} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--fg-strong)' }}>Intrusion detected</span>
          <span style={{ borderRadius: 4, border: '1px solid var(--danger-line)', background: 'var(--danger-soft)', padding: '1px 5px', fontFamily: 'var(--font-mono)', fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--danger)' }}>CONF 94%</span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>CAM-02 · Back Door · 14:32:08</div>
      </div>
      <button style={{ borderRadius: 9999, background: 'var(--brand-gradient)', border: 'none', padding: '7px 14px', fontSize: 12, fontWeight: 500, color: '#fff', boxShadow: 'var(--shadow-glow)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Review</button>
    </div>
  );
}

function IncidentsFeed() {
  const [items, setItems] = useStateDash(INCIDENTS);
  useEffectDash(() => {
    const id = setInterval(() => {
      setItems((prev) => { const next = [...prev]; const h = next.shift(); if (h) next.push(h); return next; });
    }, 4200);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: 12, fontWeight: 500, color: 'var(--fg-strong)', margin: 0 }}>Recent incidents</h3>
        <Icon name="search" size={14} strokeWidth={2} style={{ color: 'var(--muted)' }} />
      </div>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((item) => {
          const t = TONE[item.level] || TONE.warn;
          return (
            <li key={item.id} className="cl-incident" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, borderRadius: 8, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.4)', padding: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                <span style={{ borderRadius: 4, border: `1px solid ${t.bd}`, background: t.bg, color: t.color, padding: '2px 6px', fontFamily: 'var(--font-mono)', fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '.06em', whiteSpace: 'nowrap' }}>{item.type}</span>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>{item.time}</span>
                  <span style={{ fontSize: 11.5, color: 'var(--fg-strong)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.location}</span>
                </div>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', flexShrink: 0 }}>{item.confidence}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={{ borderRadius: 18, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.6)', padding: 8, backdropFilter: 'blur(12px)', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px 8px' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3f55' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3f55' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3f55' }} />
          </div>
          <div style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>closely.dev/dashboard</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-mono)', fontSize: 10 }}>
            <span style={{ position: 'relative', width: 6, height: 6, display: 'inline-flex' }}>
              <span className="cl-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--success)', opacity: .75 }} />
              <span style={{ position: 'relative', width: 6, height: 6, borderRadius: '50%', background: 'var(--success)' }} />
            </span>
            <span style={{ color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '.1em' }}>LIVE</span>
          </div>
        </div>
        <div className="cl-dash-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <CameraFeed />
            <AlertBar />
          </div>
          <IncidentsFeed />
        </div>
      </div>
      <div style={{ position: 'absolute', inset: '-48px -48px', zIndex: -1, background: 'var(--radial-fade)', pointerEvents: 'none' }} />
    </div>
  );
}

window.Dashboard = Dashboard;
