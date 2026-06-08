// B V2 — sections part 3
// YouTube interviews, AI Calculator entry, Contact form, Footer

// ─────────── YouTube — channel hero + video thumbnails ───────────
function BV2YouTube() {
  const m = useIsMobile();
  const c = BV2_CONTENT.youtube;
  return (
    <BV2Section bg="paper">
      <BV2Header num="09" eyebrow={c.eyebrow} title={c.title} sub={c.sub} />

      {/* Channel card */}
      <a className="bv2-card-hover" href={BV2_CONTENT.youtubeChannelUrl} target="_blank" rel="noopener" style={{
        background: BV2.ink, color: BV2.paper, textDecoration: 'none',
        padding: m ? '20px 22px' : '24px 28px',
        display: 'grid', gridTemplateColumns: m ? '52px 1fr auto' : '64px 1fr auto',
        gap: m ? 14 : 20, alignItems: 'center', cursor: 'pointer',
        marginBottom: m ? 20 : 28,
      }}>
        <div style={{
          width: m ? 52 : 64, height: m ? 52 : 64, borderRadius: '50%',
          background: '#FF0033', color: BV2.paper,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: m ? 22 : 28, letterSpacing: -1,
        }}>▶</div>
        <div>
          <div style={{ fontSize: m ? 14 : 16, fontWeight: 700, lineHeight: 1.3 }}>{c.channel}</div>
          <div style={{ fontSize: m ? 11 : 13, color: BV2.ink5, marginTop: 4 }}>{c.sub2}</div>
        </div>
        <div style={{ fontSize: m ? 16 : 20, color: BV2.ink5 }}>↗</div>
      </a>

      <div style={{
        display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4, 1fr)', gap: m ? 10 : 14,
      }}>
        {c.videos.map((v, i) => (
          <a key={i} className="bv2-card-hover"
            href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener"
            style={{
              background: BV2.paper, border: `1px solid ${BV2.ink}12`,
              cursor: 'pointer', textDecoration: 'none', color: 'inherit',
              display: 'flex', flexDirection: 'column',
            }}>
            <div style={{ position: 'relative' }}>
              <img
                src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                alt={v.t}
                style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: 6, right: 6,
                background: 'rgba(0,0,0,0.85)', color: BV2.paper,
                padding: '2px 6px', fontSize: 11, fontWeight: 700, letterSpacing: -0.1,
                fontVariantNumeric: 'tabular-nums',
              }}>{v.dur}</div>
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: m ? 36 : 44, height: m ? 36 : 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.95)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: m ? 14 : 16, color: BV2.ink, fontWeight: 800, paddingLeft: 3,
              }}>▶</div>
            </div>
            <div style={{ padding: m ? '12px 12px 14px' : '14px 16px 18px' }}>
              <div style={{ fontSize: m ? 12 : 13, fontWeight: 600, color: BV2.ink, lineHeight: 1.4 }}>
                {v.t}
              </div>
            </div>
          </a>
        ))}
      </div>
    </BV2Section>
  );
}

// ─────────── AI Calculator — 3-step process ───────────
function BV2Calculator() {
  const m = useIsMobile();
  const c = BV2_CONTENT.calc;
  return (
    <BV2Section bg="paperAlt">
      <div style={{
        display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr',
        gap: m ? 28 : 56, alignItems: 'center',
      }}>
        <div>
          <BV2Header num="10" eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
          <a href="https://calc.tanggam.kr" target="_blank" rel="noopener" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <BV2BtnPrimary tone="green">{c.cta}</BV2BtnPrimary>
          </a>
          <div style={{ fontSize: 12, color: BV2.ink3, marginTop: 16, lineHeight: 1.6, maxWidth: 480 }}>
            {c.note} 정확한 분석은 변호사 상담을 통해 받아보세요.
          </div>
        </div>

        <div style={{
          background: BV2.paper, padding: m ? '24px 20px' : '32px 28px',
          border: `1px solid ${BV2.ink}12`,
          display: 'grid', gap: m ? 14 : 16,
        }}>
          <div style={{
            fontSize: 11, color: BV2.ink3, letterSpacing: 2,
            fontWeight: 700, textTransform: 'uppercase', marginBottom: 4,
          }}>calc.tanggam.kr — AI 빚탕감 계산기</div>
          {c.steps.map((s, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 14, alignItems: 'center',
              padding: m ? '14px 16px' : '18px 20px',
              background: i === 2 ? BV2.greenLighter : BV2.paperAlt,
              border: i === 2 ? `1px solid ${BV2.green}40` : `1px solid transparent`,
            }}>
              <BV2Mono ch={s.k} size={m ? 32 : 36}
                color={i === 2 ? BV2.paper : BV2.ink}
                bg={i === 2 ? BV2.green : BV2.ink5} rounded />
              <div>
                <div style={{ fontSize: m ? 14 : 15, fontWeight: 700, color: BV2.ink }}>{s.l}</div>
                <div style={{ fontSize: 11, color: BV2.ink3, marginTop: 2 }}>{s.t}</div>
              </div>
              <div style={{ fontSize: 11, color: BV2.ink3, letterSpacing: 1 }}>
                {i < 2 ? '→' : '✓'}
              </div>
            </div>
          ))}
          <div style={{
            marginTop: 6, padding: m ? '12px 16px' : '14px 18px',
            background: 'transparent', border: `1px dashed ${BV2.ink}30`,
            fontSize: 12, color: BV2.ink3, lineHeight: 1.55,
          }}>
            예상 변제금이 나왔다면, <b style={{ color: BV2.ink }}>변호사 검토</b>로 정확도를 높이세요.
          </div>
        </div>
      </div>
    </BV2Section>
  );
}

// ─────────── Contact form ───────────
function BV2Contact() {
  const m = useIsMobile();
  const c = BV2_CONTENT.contact;
  const { submit, submitted, errors, values, sending, sendError, setField } = useForm();
  const [showSuccess, setShowSuccess] = React.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (await submit()) setShowSuccess(true);
  };

  return (
    <BV2Section id="bv2-contact" bg="ink" style={{ color: BV2.paper }}>
      <div style={{
        display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr',
        gap: m ? 36 : 80, alignItems: 'start',
      }}>
        <div>
          <BV2Header num="11" eyebrow={c.eyebrow} invert
            title={<>{c.title[0]}<br/><span style={{ color: BV2.greenLight }}>{c.title[1]}</span><br/>{c.title[2]}</>}
            sub={c.sub} />
          <div style={{ marginTop: m ? 32 : 48, display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : '1fr 1fr', gap: 12 }}>
            <a href={`tel:${BV2_CONTENT.phone}`} style={{
              padding: m ? '16px 14px' : '20px 20px',
              border: `1px solid rgba(255,255,255,0.18)`,
              background: 'rgba(255,255,255,0.02)',
              textDecoration: 'none', color: BV2.paper, display: 'block',
            }} className="bv2-card-hover">
              <div style={{ fontSize: 10, color: BV2.ink5, letterSpacing: 2, marginBottom: 6 }}>전화 상담</div>
              <div style={{ fontSize: m ? 18 : 22, fontWeight: 700, letterSpacing: -0.5 }}>{BV2_CONTENT.phone}</div>
              <div style={{ fontSize: 11, color: BV2.ink5, marginTop: 4 }}>24시 상담 가능</div>
            </a>
            <a href={BV2_CONTENT.kakaoUrl} target="_blank" rel="noopener" style={{
              padding: m ? '16px 14px' : '20px 20px',
              border: `1px solid rgba(255,255,255,0.18)`,
              background: 'rgba(255,255,255,0.02)',
              textDecoration: 'none', color: BV2.paper, display: 'block',
            }} className="bv2-card-hover">
              <div style={{ fontSize: 10, color: BV2.ink5, letterSpacing: 2, marginBottom: 6 }}>카카오톡</div>
              <div style={{ fontSize: m ? 14 : 16, fontWeight: 600 }}>회생의기적 채널</div>
              <div style={{ fontSize: 11, color: BV2.ink5, marginTop: 4 }}>바로 채팅 →</div>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 18 }}>
          {showSuccess ? (
            <div style={{
              padding: '40px 28px', background: 'rgba(31,123,90,0.12)',
              border: `1px solid ${BV2.greenAccent}`, textAlign: 'center',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 24, background: BV2.greenAccent,
                color: BV2.paper, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, fontWeight: 800, marginBottom: 16,
              }}>✓</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: BV2.paper, marginBottom: 10 }}>
                상담 신청이 접수되었습니다.
              </div>
              <div style={{ fontSize: 14, color: BV2.ink5, lineHeight: 1.6 }}>
                <b style={{ color: BV2.greenLight }}>{values.name}</b>님, 변호사가 직접 검토 후 1영업일 내로 연락드리겠습니다.
              </div>
              <button type="button" onClick={() => setShowSuccess(false)} style={{
                marginTop: 20, background: 'transparent', color: BV2.ink5,
                border: 'none', fontSize: 13, textDecoration: 'underline',
                cursor: 'pointer', fontFamily: BV2.sans,
              }}>다른 내용으로 다시 신청</button>
            </div>
          ) : (
            <>
              {c.fields.map((f) => <FormField key={f.k} {...f} />)}
              <AgreeCheckbox />
              {/* honeypot — must stay empty; bots fill arbitrary fields */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off"
                value={values.website} onChange={(e) => setField('website', e.target.value)}
                aria-hidden="true"
                style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }} />
              <button type="submit" disabled={sending} className="bv2-btn-primary" style={{
                marginTop: 4, background: BV2.greenLight, color: BV2.greenDeep, border: 'none',
                padding: '20px 28px', fontSize: 16, fontWeight: 800,
                cursor: sending ? 'wait' : 'pointer', fontFamily: BV2.sans,
                letterSpacing: -0.3, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                opacity: sending ? 0.6 : 1,
              }}>
                <span>{sending ? '전송 중…' : c.submit}</span>
                <span>→</span>
              </button>
              {sendError && (
                <div style={{
                  padding: '12px 14px', background: 'rgba(244,180,180,0.08)',
                  border: '1px solid rgba(244,180,180,0.35)', color: '#F4B4B4',
                  fontSize: 13, lineHeight: 1.55,
                }}>{sendError}</div>
              )}
              <div style={{
                fontSize: 12, color: BV2.ink5, lineHeight: 1.65,
                display: 'flex', alignItems: 'flex-start', gap: 8,
              }}>
                <span style={{ color: BV2.greenLight, flex: '0 0 auto' }}>🔒</span>
                <span>{c.privacy}</span>
              </div>
            </>
          )}
        </form>
      </div>
    </BV2Section>
  );
}

function AgreeCheckbox() {
  const { values, setField, errors, submitted, touched } = useForm();
  const showErr = errors.agree && (touched.agree || submitted);
  return (
    <div>
      <label className="bv2-checkbox-wrap" style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontSize: 13, color: showErr ? '#F4B4B4' : BV2.ink5,
      }}>
        <input type="checkbox" checked={values.agree} onChange={(e) => setField('agree', e.target.checked)} />
        <span className="bv2-checkbox" />
        <span>{BV2_CONTENT.contact.agree.replace('(필수)', '')}<b style={{ color: BV2.greenLight }}>(필수)</b></span>
      </label>
      {showErr && <div style={{ fontSize: 12, color: '#F4B4B4', marginTop: 6, paddingLeft: 28 }}>{errors.agree}</div>}
    </div>
  );
}

// ─────────── Footer ───────────
function BV2Footer() {
  const m = useIsMobile();
  const f = BV2_CONTENT.footer;
  return (
    <footer style={{
      background: BV2.paper, color: BV2.ink3,
      padding: m ? '32px 16px' : '40px 56px',
      borderTop: `1px solid ${BV2.ink}12`,
      fontSize: 12,
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 14 : 32,
        marginBottom: 20,
      }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 2, color: BV2.green, fontWeight: 700, marginBottom: 8 }}>CONTACT</div>
          <div style={{ color: BV2.ink, fontWeight: 700, marginBottom: 4 }}>{f.legal}</div>
          <div style={{ lineHeight: 1.6 }}>{f.address}</div>
          <div style={{ lineHeight: 1.6 }}>{f.bizNo}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 2, color: BV2.green, fontWeight: 700, marginBottom: 8 }}>INFORMATION</div>
          <div style={{ lineHeight: 1.6 }}>TEL · <b style={{ color: BV2.ink }}>{BV2_CONTENT.phone}</b> (전국·24시 상담)</div>
          <div style={{ lineHeight: 1.6 }}>서울사무소 · <b style={{ color: BV2.ink }}>{BV2_CONTENT.seoulPhone}</b></div>
          <div style={{ lineHeight: 1.6 }}>EMAIL · revive.blackstone@gmail.com</div>
          <div style={{ lineHeight: 1.6, marginTop: 8, fontStyle: 'italic' }}>{f.note}</div>
        </div>
      </div>
      <div style={{
        paddingTop: 16, borderTop: `1px solid ${BV2.ink}12`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexDirection: m ? 'column' : 'row', gap: 6,
      }}>
        <div>© 2026 BLACKSTONE LAW. All rights reserved.</div>
        <div style={{ letterSpacing: 2 }}>"광고가 아니라, 결과로."</div>
      </div>
    </footer>
  );
}

Object.assign(window, { BV2YouTube, BV2Calculator, BV2Contact, BV2Footer });
