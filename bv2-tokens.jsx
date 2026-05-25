// B V2 — shared design tokens (sharper version of direction-b.jsx).
// Single source of truth for color, type, spacing across both mobile + desktop.

const BV2 = {
  // type
  sans: '"Pretendard Variable", Pretendard, "Noto Sans KR", system-ui, sans-serif',
  mono: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',

  // surfaces — pushed a touch warmer + darker for more contrast vs V1
  paper: '#FAFAF7',
  paperAlt: '#F1F0EB',
  paperDeep: '#E9E7DF',

  // ink scale
  ink: '#080908',
  ink2: '#33332F',
  ink3: '#73746E',
  ink4: '#A8A9A2',
  ink5: '#D9D9D2',

  // accent — punched up from V1's #1F4E3D to a more saturated/deeper evergreen
  green: '#15533D',
  greenDeep: '#0E3B2B',
  greenAccent: '#1F7B5A',
  greenLight: '#E0EAE2',
  greenLighter: '#EEF2EC',

  // semantic
  oxblood: '#8B2F2F',
  oxbloodLight: '#FBECEC',
  amber: '#A37E47',
  amberLight: '#F4ECDB',

  // data viz palette
  viz1: '#15533D',   // primary positive
  viz2: '#A37E47',   // secondary
  viz3: '#8B2F2F',   // negative
  viz4: '#73746E',   // neutral

  // motion
  ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
};

// Inject global stylesheet once: keyframes, focus rings, hover utilities, the
// striped placeholder background, scrollbar resets. Component-level styles
// stay inline (React style prop) — only behaviors that need :hover/:focus
// pseudo-class selectors live here.
if (typeof document !== 'undefined' && !document.getElementById('bv2-styles')) {
  const s = document.createElement('style');
  s.id = 'bv2-styles';
  s.textContent = `
    @keyframes bv2-fade-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
    @keyframes bv2-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(31,123,90,0.3); } 50% { box-shadow: 0 0 0 8px rgba(31,123,90,0); } }

    .bv2-reveal { opacity: 0; }
    .bv2-reveal.in { animation: bv2-fade-up .7s ${BV2.ease} both; }

    .bv2-link { color: inherit; text-decoration: none; }
    .bv2-link:hover { text-decoration: underline; text-underline-offset: 3px; }

    .bv2-btn-primary { transition: all .15s ${BV2.ease}; }
    .bv2-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 12px 30px rgba(8,9,8,.25); }
    .bv2-btn-primary:active { transform: translateY(0); }

    .bv2-btn-secondary { transition: all .15s ${BV2.ease}; }
    .bv2-btn-secondary:hover { background: ${BV2.ink} !important; color: ${BV2.paper} !important; }

    .bv2-card-hover { transition: transform .2s ${BV2.ease}, box-shadow .2s ${BV2.ease}, border-color .15s ${BV2.ease}; }
    .bv2-card-hover:hover { transform: translateY(-2px); border-color: ${BV2.ink} !important; box-shadow: 0 12px 24px rgba(8,9,8,.06); }

    .bv2-situ-card { cursor: pointer; transition: all .15s ${BV2.ease}; }
    .bv2-situ-card:hover { background: ${BV2.greenLighter} !important; border-color: ${BV2.green} !important; }
    .bv2-situ-card:hover .bv2-situ-arrow { transform: translateX(4px); }
    .bv2-situ-arrow { transition: transform .15s ${BV2.ease}; display: inline-block; }

    .bv2-input { transition: all .12s ${BV2.ease}; }
    .bv2-input:focus { border-color: ${BV2.green} !important; outline: none; box-shadow: 0 0 0 3px ${BV2.greenLight}; }
    .bv2-input.invalid { border-color: ${BV2.oxblood} !important; box-shadow: 0 0 0 3px ${BV2.oxbloodLight}; }

    .bv2-checkbox-wrap { cursor: pointer; user-select: none; }
    .bv2-checkbox-wrap input { position: absolute; opacity: 0; pointer-events: none; }
    .bv2-checkbox { width: 18px; height: 18px; border: 1.5px solid currentColor; border-radius: 3px;
      display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto;
      transition: all .12s ${BV2.ease}; }
    .bv2-checkbox-wrap input:checked + .bv2-checkbox { background: ${BV2.green}; border-color: ${BV2.green}; color: ${BV2.paper}; }
    .bv2-checkbox-wrap input:checked + .bv2-checkbox::after { content: '✓'; font-size: 11px; font-weight: 800; }

    .bv2-handwritten {
      font-family: "Nanum Pen Script", "Gaegu", "Caveat", "Comic Sans MS", cursive;
      font-weight: 400;
    }

    /* Striped placeholder — calmer than direction-b.jsx's, slightly cooler */
    .bv2-placeholder {
      background:
        repeating-linear-gradient(135deg, rgba(8,9,8,.04) 0 1px, transparent 1px 14px),
        rgba(8,9,8,.025);
      color: rgba(8,9,8,.42);
      display: flex; align-items: center; justify-content: center;
      font-family: ${BV2.mono}; font-size: 11px; letter-spacing: 0.4px;
      text-transform: lowercase;
    }
    .bv2-placeholder.dark {
      background:
        repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 1px, transparent 1px 14px),
        rgba(255,255,255,.03);
      color: rgba(255,255,255,.55);
    }

    /* Hide scrollbars inside horizontal-scroll rails */
    .bv2-hscroll { overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
    .bv2-hscroll::-webkit-scrollbar { display: none; }
  `;
  document.head.appendChild(s);
}

// Hook: detect mobile based on window width.  Each device frame gets its own
// iframe (when used through prototype.html), so window.innerWidth inside the
// frame reflects the device width — not the outer page.
function useIsMobile(breakpoint = 720) {
  const [m, setM] = React.useState(() => typeof window !== 'undefined' && window.innerWidth < breakpoint);
  React.useEffect(() => {
    const r = () => setM(window.innerWidth < breakpoint);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, [breakpoint]);
  return m;
}

// Hook: trigger once when element scrolls into view (50% threshold).
// Used by stat counters and section reveals.
function useInView(opts = { threshold: 0.4, once: true }) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            if (opts.once) io.disconnect();
          } else if (!opts.once) setInView(false);
        }
      },
      { threshold: opts.threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

// Counter-up animation. Number can include commas, suffixes (건, 명, +).
function useCounter(target, inView, dur = 1400) {
  // Pull numeric prefix; keep tail (",+건" etc.) as-is.
  const m = String(target).match(/^([\d,]+)(.*)$/);
  const finalN = m ? parseInt(m[1].replace(/,/g, ''), 10) : 0;
  const tail = m ? m[2] : '';
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let raf, start;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(finalN * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, finalN, dur]);
  return inView ? n.toLocaleString('ko-KR') + tail : '0' + tail;
}

Object.assign(window, { BV2, useIsMobile, useInView, useCounter });
