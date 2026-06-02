/* global React */
// Closely UI Kit — shared primitives
// Button, Badge, Icon, Container, SectionHeading

const { useState, useEffect, useRef } = React;

// ---- Icon: Lucide-style set (24x24, stroke 1.75, round) ----
const ICON_PATHS = {
  'eye-off': '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/>',
  'film': '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="7" x2="7" y2="7"/><line x1="3" y1="12" x2="7" y2="12"/><line x1="3" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="21" y2="7"/><line x1="17" y1="12" x2="21" y2="12"/><line x1="17" y1="17" x2="21" y2="17"/>',
  'bell-off': '<path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 0 0-9.33-5"/><line x1="2" y1="2" x2="22" y2="22"/>',
  'plug': '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
  'sliders': '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  'eye': '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  'user-check': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>',
  'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  'search': '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>',
  'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>',
  'door-open': '<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h20"/><path d="M13 20V6l-7 2v12"/><circle cx="10" cy="13" r="0.5" fill="currentColor"/>',
  'check': '<polyline points="20 6 9 17 4 12"/>',
  'x': '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  'arrow-down': '<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>',
  'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
  'globe': '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>',
  'alert-triangle': '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>',
};

function Icon({ name, size = 20, strokeWidth = 1.75, style, className }) {
  const inner = ICON_PATHS[name] || '';
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round"
      style={style} className={className} aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}

// ---- Button ----
function Button({ variant = 'primary', size = 'md', children, onClick, href, style }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: size === 'lg' ? 8 : 6, fontWeight: 500, letterSpacing: '-0.01em',
    fontFamily: 'var(--font-sans)', borderRadius: 9999, cursor: 'pointer',
    border: 'none', transition: 'all .2s', whiteSpace: 'nowrap',
    height: size === 'lg' ? 48 : 40,
    padding: size === 'lg' ? '0 24px' : '0 16px',
    fontSize: size === 'lg' ? 16 : 14,
  };
  const variants = {
    primary: { background: 'var(--brand-gradient)', color: '#fff', boxShadow: 'var(--shadow-glow)' },
    secondary: { background: 'rgba(17,19,32,0.6)', color: 'var(--fg)', border: '1px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--muted)' },
  };
  const cls = 'cl-btn cl-btn-' + variant;
  const props = { className: cls, style: { ...base, ...variants[variant], ...style }, onClick };
  if (href) return <a href={href} {...props}>{children}</a>;
  return <button {...props}>{children}</button>;
}

// ---- Badge ----
function Badge({ tone = 'neutral', pulse, children, style }) {
  const tones = {
    live: { color: 'var(--success)', bg: 'var(--success-soft)', bd: 'var(--success-line)' },
    success: { color: 'var(--success)', bg: 'var(--success-soft)', bd: 'var(--success-line)' },
    soon: { color: 'var(--warn)', bg: 'var(--warn-soft)', bd: 'var(--warn-line)' },
    warn: { color: 'var(--warn)', bg: 'var(--warn-soft)', bd: 'var(--warn-line)' },
    danger: { color: 'var(--danger)', bg: 'var(--danger-soft)', bd: 'var(--danger-line)' },
    accent: { color: 'var(--accent)', bg: 'var(--accent-soft)', bd: 'var(--accent-line)' },
    neutral: { color: 'var(--muted)', bg: 'rgba(17,19,32,0.6)', bd: 'var(--border)' },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 9999,
      padding: '5px 11px', fontSize: 11, fontWeight: 500, letterSpacing: '.04em',
      textTransform: 'uppercase', fontFamily: 'var(--font-sans)',
      color: t.color, background: t.bg, border: `1px solid ${t.bd}`, ...style,
    }}>
      {pulse && (
        <span style={{ position: 'relative', width: 6, height: 6, display: 'inline-flex' }}>
          <span className="cl-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'currentColor', opacity: .75 }} />
          <span style={{ position: 'relative', width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />
        </span>
      )}
      {children}
    </span>
  );
}

// ---- Container ----
function Container({ children, style }) {
  return <div style={{ width: '100%', maxWidth: 1152, margin: '0 auto', padding: '0 24px', ...style }}>{children}</div>;
}

// ---- SectionHeading ----
function SectionHeading({ eyebrow, title, lede, align = 'left', titleId }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 768,
      ...(align === 'center' ? { margin: '0 auto', textAlign: 'center', alignItems: 'center' } : {}),
    }}>
      {eyebrow && <span className="cl-eyebrow">{eyebrow}</span>}
      <h2 id={titleId} className="cl-h2" style={{ margin: 0 }}>{title}</h2>
      {lede && <p className="cl-lede" style={{ margin: 0, maxWidth: 640 }}>{lede}</p>}
    </div>
  );
}

Object.assign(window, { Icon, Button, Badge, Container, SectionHeading });
