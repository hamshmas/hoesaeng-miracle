// B V2 — Form context + validation + ContactForm + StickyCTA
// Owns the form state so SituationCards can prefill the textarea and scroll
// to the form section. Validation is real (name + phone + agree required;
// phone pattern checked). submit() POSTs to Google Apps Script webhook with
// IP, honeypot, rate-limit, speed-gate, and fires GA4/Naver conversions.

const GSCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyh5tunh1e2cZeL8Rzid5HKYoGB5nexjhOrmuaR0lk3a6pIzEKdyio1eoYQ6pFN2MlzzA/exec';
const LEAD_SUBMIT_KEY = 'hoesaeng_lead_submits';
const LEAD_MAX_PER_DAY = 2;
const PAGE_LOAD_TS = Date.now();
let VISITOR_IP = '';
if (typeof window !== 'undefined') {
  fetch('https://api.ipify.org?format=json')
    .then((r) => r.json())
    .then((d) => { VISITOR_IP = d.ip || ''; })
    .catch(() => {});
}

const FormCtx = React.createContext(null);

function FormProvider({ children }) {
  const [values, setValues] = React.useState({ name: '', phone: '', time: '', note: '', agree: false, website: '' });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [touched, setTouched] = React.useState({});
  const [sending, setSending] = React.useState(false);
  const [sendError, setSendError] = React.useState('');
  const formRef = React.useRef(null);

  const validate = React.useCallback((v) => {
    const e = {};
    if (!v.name || v.name.trim().length < 2) e.name = '성함을 입력해주세요';
    if (!v.phone) e.phone = '연락처를 입력해주세요';
    else if (!/^[0-9\-\s+()]{9,}$/.test(v.phone.trim())) e.phone = '올바른 연락처 형식이 아닙니다';
    if (!v.agree) e.agree = '개인정보 수집·이용 동의가 필요합니다';
    return e;
  }, []);

  const setField = React.useCallback((k, v) => {
    setValues((prev) => {
      const next = { ...prev, [k]: v };
      if (touched[k] || submitted) setErrors(validate(next));
      return next;
    });
  }, [touched, submitted, validate]);

  const onBlur = React.useCallback((k) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  }, [values, validate]);

  const prefill = React.useCallback((text) => {
    setValues((v) => ({ ...v, note: text + (v.note ? '\n\n' + v.note : '') }));
    // smooth-scroll to form section (the section gets the id below in ContactSection)
    const el = document.getElementById('bv2-contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // focus the textarea after a tick
    setTimeout(() => {
      const ta = document.getElementById('bv2-field-note');
      if (ta) { ta.focus(); ta.setSelectionRange(text.length, text.length); }
    }, 600);
  }, []);

  const submit = React.useCallback(async () => {
    const e = validate(values);
    setErrors(e);
    setTouched({ name: true, phone: true, time: true, note: true, agree: true });
    setSubmitted(true);
    setSendError('');
    if (Object.keys(e).length > 0) return false;

    // Honeypot — bot filled hidden field; show success but don't send.
    if (values.website) return true;

    // Rate-limit per device (max 2/day, resets at local midnight).
    try {
      const raw = localStorage.getItem(LEAD_SUBMIT_KEY);
      const today = new Date().toDateString();
      const todays = (raw ? JSON.parse(raw) : []).filter((t) => new Date(t).toDateString() === today);
      if (todays.length >= LEAD_MAX_PER_DAY) return true; // silent success
    } catch (_) {}

    // Speed gate — submissions in first 3s likely bot.
    if (Date.now() - PAGE_LOAD_TS < 3000) {
      setSendError('잠시 후 다시 시도해주세요.');
      return false;
    }

    setSending(true);
    try {
      const data = new FormData();
      data.append('name', values.name);
      data.append('tel', values.phone);
      data.append('time', values.time || '');
      data.append('memo', values.note || '');
      data.append('consent', values.agree ? 'yes' : '');
      data.append('source', window.location.href);
      data.append('ua', navigator.userAgent);
      data.append('ip', VISITOR_IP);
      await fetch(GSCRIPT_URL, { method: 'POST', mode: 'no-cors', body: data });

      try {
        const raw = localStorage.getItem(LEAD_SUBMIT_KEY);
        const today = new Date().toDateString();
        const todays = (raw ? JSON.parse(raw) : []).filter((t) => new Date(t).toDateString() === today);
        todays.push(Date.now());
        localStorage.setItem(LEAD_SUBMIT_KEY, JSON.stringify(todays));
      } catch (_) {}

      try {
        if (window.wcs && typeof window.wcs.trans === 'function') {
          if (!window.wcs_add) window.wcs_add = {};
          window.wcs_add['wa'] = 's_52ed07736a49';
          const _conv = { type: 'lead', value: '50000' };
          window.wcs.trans(_conv);
        }
      } catch (_) {}

      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            event_category: 'form',
            event_label: 'lead_form_submit',
            currency: 'KRW',
            value: 50000,
          });
        }
      } catch (_) {}

      setSending(false);
      return true;
    } catch (err) {
      setSending(false);
      setSendError('전송 실패. 1670-7708으로 전화 주세요.');
      return false;
    }
  }, [values, validate]);

  return (
    <FormCtx.Provider value={{ values, errors, touched, submitted, sending, sendError, formRef, setField, onBlur, prefill, submit }}>
      {children}
    </FormCtx.Provider>
  );
}

const useForm = () => React.useContext(FormCtx);

// ─────────── Form field ───────────
function FormField({ k, l, req, ph, area, type = 'text' }) {
  const { values, errors, touched, submitted, setField, onBlur } = useForm();
  const showError = errors[k] && (touched[k] || submitted);
  const sharedStyle = {
    width: '100%', boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.04)', color: BV2.paper,
    border: `1px solid ${showError ? BV2.oxblood : 'rgba(255,255,255,0.18)'}`,
    padding: area ? '14px 16px' : '14px 16px',
    fontSize: 15, fontFamily: BV2.sans, outline: 'none', lineHeight: 1.5,
  };
  return (
    <label style={{ display: 'block' }}>
      <div style={{
        fontSize: 13, color: BV2.ink5, marginBottom: 8, fontWeight: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span>{l}{req && <span style={{ color: BV2.greenLight, marginLeft: 4 }}>*</span>}</span>
        {showError && <span style={{ color: '#F4B4B4', fontSize: 12 }}>{errors[k]}</span>}
      </div>
      {area ? (
        <textarea id={`bv2-field-${k}`} className="bv2-input" placeholder={ph} rows={4}
          value={values[k]}
          onChange={(e) => setField(k, e.target.value)}
          onBlur={() => onBlur(k)}
          style={{ ...sharedStyle, resize: 'vertical', minHeight: 100 }} />
      ) : (
        <input id={`bv2-field-${k}`} className="bv2-input" placeholder={ph} type={type}
          value={values[k]}
          onChange={(e) => setField(k, e.target.value)}
          onBlur={() => onBlur(k)}
          style={sharedStyle} />
      )}
    </label>
  );
}

// ─────────── Sticky CTA bar — mobile only ───────────
function StickyCTA() {
  const isMobile = useIsMobile();
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!isMobile) return;
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      transform: visible ? 'translateY(0)' : 'translateY(110%)',
      transition: `transform .35s ${BV2.ease}`,
      zIndex: 200,
      background: BV2.ink,
      borderTop: `1px solid rgba(255,255,255,0.1)`,
      padding: '10px 16px max(10px, env(safe-area-inset-bottom))',
      boxShadow: '0 -8px 32px rgba(0,0,0,0.18)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.4fr', gap: 8 }}>
        <a href={`tel:${BV2_CONTENT.phone}`} style={{
          textDecoration: 'none', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '10px 6px', background: 'rgba(255,255,255,0.06)',
          color: BV2.paper, borderRadius: 6,
        }}>
          <div style={{ fontSize: 10, color: BV2.ink5, marginBottom: 2 }}>전화</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>1670-7708</div>
        </a>
        <a href={BV2_CONTENT.kakaoUrl} target="_blank" rel="noopener" style={{
          textDecoration: 'none', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '10px 6px', background: 'rgba(255,255,255,0.06)',
          color: BV2.paper, borderRadius: 6,
        }}>
          <div style={{ fontSize: 10, color: BV2.ink5, marginBottom: 2 }}>카카오</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>채팅 상담</div>
        </a>
        <a href="#bv2-contact" style={{
          textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 6, padding: '10px 12px', background: BV2.greenAccent, color: BV2.paper,
          borderRadius: 6, fontSize: 14, fontWeight: 700, letterSpacing: -0.2,
        }}>
          <span>변호사 회신 받기</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

Object.assign(window, { FormProvider, useForm, FormField, StickyCTA });
