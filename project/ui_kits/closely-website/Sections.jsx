/* global React, Icon, Badge, Button, Container, SectionHeading */
// Closely UI Kit — Clients, Problem, HowItWorks, Differentiators, Metrics, Comparison, FAQ, FinalCta, Footer

const { useState: useStateSec } = React;

const CLIENTS = ['national-security', 'instaseg', 'seguridad-g2', 'security-shops', 'pintalba'];

function Clients() {
  return (
    <section style={{ padding: '40px 0', borderTop: '1px solid var(--border)' }}>
      <Container>
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--muted)', marginBottom: 28 }}>Security companies that already trust Closely</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: 32, flexWrap: 'wrap' }}>
          {CLIENTS.map((c) => (
            <img key={c} src={`../../assets/clients/${c}.png`} alt={c} style={{ height: 40, width: 'auto', objectFit: 'contain', opacity: .8, filter: 'grayscale(1) brightness(1.4)' }} />
          ))}
        </div>
      </Container>
    </section>
  );
}

const PROBLEMS = [
  { icon: 'eye-off', title: 'Guards miss things', body: 'Fatigue, distraction, blind spots. Security is only as good as human attention — and human attention has limits.' },
  { icon: 'film', title: 'Recordings are useless after the fact', body: "Reviewing footage post-incident doesn't undo what was lost. Closely acts before it's too late, while the response still matters." },
  { icon: 'bell-off', title: 'Generic alerts create noise', body: 'Systems that cry wolf get ignored. Your team stops trusting alerts — and stops responding to them.' },
];

function Card({ children, style }) {
  return <div style={{ borderRadius: 16, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.4)', padding: 24, ...style }}>{children}</div>;
}

function Problem() {
  return (
    <section style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
      <Container>
        <SectionHeading eyebrow="The problem" title="TRADITIONAL SECURITY OPERATIONS ARE REACTIVE BY DESIGN." lede="Cameras record, but nobody is watching in real time. By the time someone reviews, the incident is already over." />
        <div className="cl-cards-3" style={{ marginTop: 48 }}>
          {PROBLEMS.map((p) => (
            <Card key={p.title}>
              <div style={{ width: 40, height: 40, borderRadius: 10, display: 'grid', placeItems: 'center', border: '1px solid var(--border-strong)', color: 'var(--accent)', marginBottom: 16 }}><Icon name={p.icon} size={20} /></div>
              <h4 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, color: 'var(--fg-strong)' }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--muted-strong)' }}>{p.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

const STEPS = [
  { n: '01', title: 'Connect your existing cameras', body: 'NVR integration with Dahua, Hikvision or Milestone in minutes. No new hardware, no rip-and-replace.', icon: 'plug', terminal: '$ closely connect --nvr dahua://192.168.1.10' },
  { n: '02', title: 'Configure your AI agents', body: "Describe each camera's scene in plain language. Set detection rules per camera.", icon: 'sliders', terminal: '> CAM-02: "back service door, no traffic after 8pm"' },
  { n: '03', title: 'Agents monitor 24/7', body: 'Three-layer detection: motion → computer vision (YOLOv8) → Claude Vision reasoning.', icon: 'eye', terminal: 'pipeline: motion → vision → reasoning' },
  { n: '04', title: 'Your team validates and acts', body: 'Real-time alerts with the relevant clip. A human always makes the final call.', icon: 'user-check', terminal: 'alert.sent → operator.review → action' },
];

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
      <Container>
        <SectionHeading eyebrow="How it works" title="FROM PASSIVE FOOTAGE TO ACTIVE INTELLIGENCE IN FOUR STEPS." />
        <div className="cl-cards-2" style={{ marginTop: 48 }}>
          {STEPS.map((s) => (
            <Card key={s.n}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--accent)', fontWeight: 600 }}>{s.n}</span>
                <div style={{ width: 36, height: 36, borderRadius: 8, display: 'grid', placeItems: 'center', border: '1px solid var(--border-strong)', color: 'var(--fg)' }}><Icon name={s.icon} size={18} /></div>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: 'var(--fg-strong)' }}>{s.title}</h4>
              </div>
              <p style={{ margin: '0 0 14px', fontSize: 14, lineHeight: 1.6, color: 'var(--muted-strong)' }}>{s.body}</p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', background: 'rgba(7,8,17,0.6)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 10px', boxShadow: 'var(--shadow-term)' }}>{s.terminal}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

const METRICS = [
  { v: '+32%', l: 'more commercial proposals sold per month', sub: 'You close more contracts because you prove active detection, not passive recording.' },
  { v: '−90%', l: 'lower monitoring personnel costs', sub: 'One operator supervises what used to require a full rotating team.' },
  { v: '12×', l: 'more security alerts detected', sub: 'Closely sees everything the human eye misses — and only escalates what matters.' },
];

function Metrics() {
  return (
    <section id="metrics" style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
      <Container>
        <SectionHeading eyebrow="Results" title="SELL MORE MONITORING CONTRACTS WITHOUT GROWING YOUR TEAM." lede="We're not another monitoring software. We build customizable AI agents that run your entire operation." />
        <div className="cl-cards-3" style={{ marginTop: 48 }}>
          {METRICS.map((m) => (
            <Card key={m.l} style={{ padding: 28 }}>
              <div className="cl-text-gradient" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 56, lineHeight: 1, letterSpacing: '-0.02em' }}>{m.v}</div>
              <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg-strong)', marginTop: 12 }}>{m.l}</div>
              <div style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 8, lineHeight: 1.55 }}>{m.sub}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

const DIFFS = [
  { n: '01', title: 'Integrates with your existing infrastructure', body: "You don't replace cameras, alarms or access controls. Closely plugs into your NVR and starts working in minutes." },
  { n: '02', title: '100% cloud, 40× faster', body: 'While local solutions choke processing frames on-prem, Closely runs on GCP. No data loss, no maintenance costs.' },
  { n: '03', title: 'Human-in-the-loop, always', body: 'Your operator validates or dismisses before anything happens. Closely never takes autonomous physical actions. Ever.' },
  { n: '04', title: 'Computer Vision that learns', body: 'Our models retrain with every validation. They adapt to your specific environment and reduce false alarms over time.' },
  { n: '05', title: 'Beyond cameras', body: 'Voice agents that call supervisors, intelligent incident routing, operational data analysis, and preventive reporting.' },
];

function Differentiators() {
  return (
    <section id="differentiators" style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
      <Container>
        <SectionHeading eyebrow="Why Closely" title="FIVE REASONS THIS WORKS WHERE OTHERS FAIL." />
        <div className="cl-cards-2" style={{ marginTop: 48 }}>
          {DIFFS.map((d) => (
            <Card key={d.n} style={{ display: 'flex', gap: 18 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--accent)', flexShrink: 0 }}>{d.n}</span>
              <div>
                <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 600, color: 'var(--fg-strong)' }}>{d.title}</h4>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--muted-strong)' }}>{d.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

const ROWS = [
  ['Detection', 'Passive recording', 'Active detection'],
  ['Response', 'Manual post-incident review', 'Real-time alerts'],
  ['Alerts', 'Generic motion alarms', 'Contextual AI reasoning'],
  ['Configuration', 'Same config for all cameras', 'Per-camera configuration'],
  ['Awareness', 'No scene context', 'Understands the scene'],
  ['Hardware', 'Requires replacement', 'Works with your existing cameras'],
  ['Learning', 'Static rules', 'Models that adapt to your environment'],
];

function Comparison() {
  return (
    <section style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
      <Container>
        <SectionHeading eyebrow="VS" title="TRADITIONAL CCTV VS. CLOSELY." lede="Same hardware. Completely different outcomes." />
        <div style={{ marginTop: 48, overflow: 'hidden', borderRadius: 16, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.4)' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', background: 'rgba(17,19,32,0.6)' }}>
                  {['Capability', 'Traditional CCTV', 'Closely'].map((h, i) => (
                    <th key={h} style={{ textAlign: 'left', padding: '14px 24px', fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.16em', fontWeight: 500, color: i === 2 ? 'var(--accent)' : 'var(--muted)', width: i === 0 ? '33%' : 'auto' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, idx) => (
                  <tr key={r[0]} style={{ borderBottom: idx === ROWS.length - 1 ? 'none' : '1px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '14px 24px', fontWeight: 600, color: 'var(--fg-strong)' }}>{r[0]}</th>
                    <td style={{ padding: '14px 24px', color: 'var(--muted-strong)' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="x" size={14} style={{ color: 'var(--danger)' }} />{r[1]}</span></td>
                    <td style={{ padding: '14px 24px', color: 'var(--fg-strong)' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="check" size={14} style={{ color: 'var(--success)' }} />{r[2]}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

const FAQS = [
  { q: 'Do I have to replace my existing cameras?', a: 'No. Closely integrates with your existing infrastructure via the NVR (Dahua, Hikvision, Milestone and other RTSP standards). The hardware you already have stays valid.' },
  { q: 'Does Closely take autonomous physical actions?', a: 'Never. Every incident our agents detect is sent to your operator, who validates or dismisses before any action. Human-in-the-loop is a design principle, not an option.' },
  { q: 'How do you handle data privacy and Ley 1581 in Colombia?', a: 'All video data is processed on GCP with encryption in transit and at rest. We comply with Colombia\u2019s Ley 1581. Only event clips are stored, not full streams.' },
  { q: 'Does it run on-premise or only in the cloud?', a: 'Closely is 100% cloud. This makes us 40 times faster than local alternatives, lets us scale instantly, and eliminates server maintenance costs.' },
  { q: 'What if the detection generates a false positive?', a: 'Your operator dismisses the alert in one click. That feedback retrains the model for your specific environment. False alarms drop measurably over time.' },
  { q: "What's the pricing model?", a: 'Monthly subscription per active camera with volume discounts. Includes Watcher, Investigator and Reporter agents. First week is free.' },
];

function Faq() {
  const [open, setOpen] = useStateSec(0);
  return (
    <section id="faq" style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
      <Container>
        <SectionHeading eyebrow="Frequently asked questions" title="WHAT SOC DIRECTORS ASK US." />
        <div style={{ marginTop: 40, maxWidth: 820 }}>
          {FAQS.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)' }}>
                <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--fg-strong)' }}>{f.q}</span>
                <Icon name="chevron-down" size={18} style={{ color: 'var(--muted)', flexShrink: 0, transition: 'transform .25s', transform: open === i ? 'rotate(180deg)' : 'none' }} />
              </button>
              {open === i && <p style={{ margin: '0 0 20px', fontSize: 14.5, lineHeight: 1.65, color: 'var(--muted-strong)', maxWidth: 680 }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
      <Container>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, border: '1px solid var(--border)', background: 'rgba(17,19,32,0.5)', padding: '64px 32px', textAlign: 'center' }}>
          <div className="cl-bg-radial-fade" style={{ position: 'absolute', inset: 0, opacity: .8 }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <Badge tone="accent">Try Closely now and get 50% off</Badge>
            <h2 className="cl-h2" style={{ margin: 0, maxWidth: 720 }}>BUILT FOR SECURITY COMPANIES THAT TAKE OPERATIONS <span className="cl-text-gradient">SERIOUSLY.</span></h2>
            <p style={{ margin: 0, fontSize: 16, color: 'var(--muted-strong)', maxWidth: 560, lineHeight: 1.6 }}>Book a demo and get one week free to try our product. Then 50% off from your first month.</p>
            <Button variant="primary" size="lg">Book demo <Icon name="arrow-right" size={16} /></Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

const FOOTER_COLS = [
  { title: 'Product', links: ['How it works', 'Agents', 'Why Closely', 'FAQ'] },
  { title: 'Company', links: ['Contact', 'LinkedIn'] },
  { title: 'Legal', links: ['Privacy', 'Terms'] },
];

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '64px 0', marginTop: 0 }}>
      <Container>
        <div className="cl-footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, textTransform: 'uppercase', fontSize: 20, color: 'var(--fg-strong)' }}>Closely<span style={{ color: 'var(--accent)' }}>AI</span></span>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--muted)', maxWidth: 280, lineHeight: 1.6 }}>AI agents for physical security operations.</p>
            <p style={{ margin: 0, fontSize: 12, color: 'rgba(138,143,163,0.7)', fontFamily: 'var(--font-mono)' }}>Bogotá, Colombia</p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--muted)' }}>{col.title}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
                {col.links.map((l) => <li key={l}><a href="#" className="cl-navlink" style={{ fontSize: 14, color: 'rgba(230,232,239,0.8)', textDecoration: 'none' }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'var(--muted)' }}>
          <span>© 2026 Closely. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>closely.dev</span>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Clients, Problem, HowItWorks, Metrics, Differentiators, Comparison, Faq, FinalCta, Footer });
