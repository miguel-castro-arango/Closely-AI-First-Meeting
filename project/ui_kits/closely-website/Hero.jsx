/* global React, Icon, Button, Badge, Container, Dashboard */
// Closely UI Kit — Hero

function Hero() {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', isolation: 'isolate' }}>
      {/* backgrounds */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -3, background: 'var(--bg)' }} />
      <div className="cl-bg-radial-fade" style={{ position: 'absolute', inset: 0, zIndex: -2, opacity: .6 }} />
      <div className="cl-bg-grid" style={{ position: 'absolute', inset: 0, zIndex: -1, opacity: .3, maskImage: 'radial-gradient(80% 60% at 50% 0%, black, transparent 90%)', WebkitMaskImage: 'radial-gradient(80% 60% at 50% 0%, black, transparent 90%)' }} />

      <Container style={{ paddingTop: 88, paddingBottom: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20, maxWidth: 880, margin: '0 auto' }}>
          <Badge tone="success" pulse>Live · AI agents working 24/7</Badge>
          <h1 className="cl-h1" style={{ margin: 0 }}>
            <span className="cl-text-gradient">Artificial Intelligence</span><br />
            for physical security companies.
          </h1>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: 'var(--accent)' }}>Save up to 90% on your personnel costs.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', paddingTop: 8 }}>
            <Button variant="primary" size="lg">Book demo <Icon name="arrow-right" size={16} /></Button>
            <Button variant="ghost" size="lg" href="#hero-dashboard">See how it works <Icon name="arrow-down" size={16} /></Button>
          </div>
        </div>
      </Container>

      <Container id="hero-dashboard" style={{ marginTop: 48, paddingBottom: 24, scrollMarginTop: 88 }}>
        <Dashboard />
      </Container>
    </section>
  );
}

window.Hero = Hero;
