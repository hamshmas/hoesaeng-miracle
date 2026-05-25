// B V2 — atomic components shared across sections.

// SectionShell — wraps every section with consistent vertical rhythm.
// Padding scales with viewport via clamp() so mobile gets tighter spacing
// than desktop without two separate components.
function BV2Section({ id, bg = 'paper', children, style = {} }) {
  const bgColor = { paper: BV2.paper, paperAlt: BV2.paperAlt, paperDeep: BV2.paperDeep, ink: BV2.ink, greenLight: BV2.greenLight }[bg] || bg;
  return (
    <section id={id} style={{
      background: bgColor,
      color: bg === 'ink' ? BV2.paper : BV2.ink,
      padding: 'clamp(56px, 8vw, 120px) clamp(20px, 5vw, 64px)',
      ...style,
    }}>{children}</section>
  );
}

// SectionHeader — eyebrow w/ section number, h2, optional sub.
function BV2Header({ num, eyebrow, title, sub, align = 'left', invert = false, maxWidth = 720 }) {
  const accent = invert ? BV2.greenLight : BV2.green;
  const ink = invert ? BV2.paper : BV2.ink;
  const ink2 = invert ? BV2.ink5 : BV2.ink2;
  return (
    <div style={{ textAlign: align, marginBottom: 'clamp(32px, 5vw, 56px)' }}>
      <div style={{
        fontSize: 'clamp(11px, 1.2vw, 12px)', fontWeight: 700, color: accent,
        letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14,
      }}>
        {num && <span>{num} — </span>}{eyebrow}
      </div>
      <h2 style={{
        margin: 0, color: ink, fontWeight: 800,
        fontSize: 'clamp(32px, 5.6vw, 64px)', lineHeight: 1.02,
        letterSpacing: 'clamp(-1.2px, -0.18vw, -2.4px)',
        maxWidth, marginLeft: align === 'center' ? 'auto' : undefined,
        marginRight: align === 'center' ? 'auto' : undefined,
      }}>{title}</h2>
      {sub && <p style={{
        margin: '14px 0 0', color: ink2,
        fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.65,
        maxWidth, marginLeft: align === 'center' ? 'auto' : undefined,
        marginRight: align === 'center' ? 'auto' : undefined,
      }}>{typeof sub === 'string' ? bv2RenderBold(sub) : sub}</p>}
    </div>
  );
}

// Verified-cert pill (green check + text). Used in hero + a few credibility spots.
function BV2VerifiedPill({ text, tone = 'light' }) {
  const dark = tone === 'dark';
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '6px 12px 6px 6px',
      background: dark ? 'rgba(255,255,255,0.08)' : BV2.greenLight,
      color: dark ? BV2.paper : BV2.green,
      fontSize: 12, fontWeight: 700, letterSpacing: -0.1,
    }}>
      <span style={{
        width: 18, height: 18, borderRadius: 9,
        background: dark ? BV2.greenAccent : BV2.green, color: BV2.paper,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 10, fontWeight: 800,
      }}>✓</span>
      {text}
    </div>
  );
}

// Monogram badge — single letter / digit in a square or rounded-square.
// Replaces ALL emoji icon usage in the design.
function BV2Mono({ ch, color = BV2.green, bg = BV2.greenLight, size = 36, rounded = false, weight = 800 }) {
  return (
    <span style={{
      width: size, height: size,
      borderRadius: rounded ? size / 2 : 4,
      background: bg, color,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: weight, fontSize: size * 0.45, letterSpacing: -0.3,
      fontVariantNumeric: 'tabular-nums', flex: '0 0 auto',
    }}>{ch}</span>
  );
}

// Number badge — circle with number. Used for situation cards, lawyer creds.
function BV2Num({ n, color = BV2.green, bg = BV2.greenLight, size = 40 }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: size / 2,
      background: bg, color,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 800, fontSize: size * 0.4, letterSpacing: -0.5,
      fontVariantNumeric: 'tabular-nums', flex: '0 0 auto',
    }}>{n}</span>
  );
}

// Primary CTA button — dark with arrow.
function BV2BtnPrimary({ children, full, tone = 'ink', ...rest }) {
  const bg = tone === 'green' ? BV2.greenAccent : BV2.ink;
  return (
    <button className="bv2-btn-primary" {...rest} style={{
      background: bg, color: BV2.paper, border: 'none',
      padding: '17px 26px', fontFamily: BV2.sans, fontSize: 15, fontWeight: 700,
      cursor: 'pointer', letterSpacing: -0.2,
      width: full ? '100%' : undefined,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 14, minHeight: 52, ...rest.style,
    }}>
      <span>{children}</span>
      <span style={{ fontSize: 18 }}>→</span>
    </button>
  );
}

function BV2BtnSecondary({ children, full, ...rest }) {
  return (
    <button className="bv2-btn-secondary" {...rest} style={{
      background: BV2.paper, color: BV2.ink, border: `1px solid ${BV2.ink}`,
      padding: '15px 20px', fontFamily: BV2.sans, fontSize: 14, fontWeight: 600,
      cursor: 'pointer', letterSpacing: -0.2,
      width: full ? '100%' : undefined,
      minHeight: 48, ...rest.style,
    }}>{children}</button>
  );
}

// Disclosure-style attribution tag — small dot indicator + source URL in mono.
function BV2Source({ url }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      fontSize: 11, color: BV2.ink3, fontFamily: BV2.mono,
    }}>
      <span style={{ width: 5, height: 5, borderRadius: 3, background: BV2.greenAccent }} />
      {url}
      <span style={{ marginLeft: 'auto', opacity: 0.5 }}>↗</span>
    </div>
  );
}

// Horizontal bar chart — used for 94% case viz + lawtalk case cards.
function BV2DataBar({ pct, label, sublabel, color = BV2.green, bg = BV2.ink5, height = 8, animate = true }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref}>
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginBottom: 8, gap: 8,
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: BV2.ink2 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 800, color, fontVariantNumeric: 'tabular-nums' }}>{pct}%</div>
      </div>
      <div style={{
        height, background: bg, borderRadius: height / 2, overflow: 'hidden', position: 'relative',
      }}>
        <div style={{
          height: '100%', width: animate ? (inView ? `${pct}%` : 0) : `${pct}%`,
          background: color,
          transition: `width 1.2s ${BV2.ease}`,
          borderRadius: height / 2,
        }} />
      </div>
      {sublabel && <div style={{ fontSize: 11, color: BV2.ink3, marginTop: 6 }}>{sublabel}</div>}
    </div>
  );
}

// Placeholder block (image stand-in). Aspect ratio controllable.
function BV2Ph({ label, ratio = '4 / 3', tone = 'light', style = {} }) {
  return (
    <div className={`bv2-placeholder ${tone === 'dark' ? 'dark' : ''}`} style={{ aspectRatio: ratio, ...style }}>
      {label}
    </div>
  );
}

// Animated number that counts up when scrolled into view.
function BV2Counter({ value, suffix = '', style = {} }) {
  const [ref, inView] = useInView();
  const n = useCounter(value, inView);
  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums', ...style }}>{n}{suffix}</span>
  );
}

Object.assign(window, {
  BV2Section, BV2Header, BV2VerifiedPill, BV2Mono, BV2Num,
  BV2BtnPrimary, BV2BtnSecondary, BV2Source, BV2DataBar, BV2Ph, BV2Counter,
});
