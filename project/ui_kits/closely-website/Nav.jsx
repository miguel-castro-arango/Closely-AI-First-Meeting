/* global React, Icon, Button, Badge, Container */
// Closely UI Kit — Nav + mobile drawer

const { useState: useStateNav, useEffect: useEffectNav } = React;

function Nav() {
  const [scrolled, setScrolled] = useStateNav(false);
  const [open, setOpen] = useStateNav(false);
  useEffectNav(() => {
    const onScroll = () => setScrolled((window.__clScroll || 0) > 16);
    const el = document.querySelector('.cl-scroll');
    const target = el || window;
    const handler = () => setScrolled((el ? el.scrollTop : window.scrollY) > 16);
    target.addEventListener('scroll', handler, { passive: true });
    return () => target.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#agents', label: 'Agents' },
    { href: '#differentiators', label: 'Why Closely' },
    { href: '#metrics', label: 'Results' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, transition: 'all .3s',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      background: scrolled ? 'rgba(10,11,20,0.7)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>
      <nav style={{
        maxWidth: 1152, margin: '0 auto', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 16, padding: '14px 24px',
      }}>
        <a href="#top" style={{
          fontFamily: 'var(--font-display)', fontWeight: 400, textTransform: 'uppercase',
          fontSize: 20, letterSpacing: '-0.01em', color: 'var(--fg-strong)',
          display: 'inline-flex', gap: 5, alignItems: 'baseline', textDecoration: 'none',
        }}>
          Closely<span style={{ color: 'var(--accent)' }}>AI</span>
        </a>

        <ul className="cl-navlinks" style={{
          display: 'flex', alignItems: 'center', gap: 28, listStyle: 'none',
          margin: 0, padding: 0, fontSize: 13.5, color: 'var(--muted)',
        }}>
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="cl-navlink" style={{ color: 'inherit', textDecoration: 'none', transition: 'color .2s' }}>{l.label}</a></li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="cl-lang" style={{
            display: 'inline-flex', alignItems: 'center', gap: 5, background: 'transparent',
            border: '1px solid var(--border)', borderRadius: 9999, padding: '6px 11px',
            color: 'var(--muted)', fontSize: 12.5, cursor: 'pointer', fontFamily: 'var(--font-sans)',
          }}>
            <Icon name="globe" size={14} /> EN
          </button>
          <Button variant="primary" size="md" style={{ fontSize: 13 }}>Book demo</Button>
        </div>
      </nav>
    </header>
  );
}

window.Nav = Nav;
