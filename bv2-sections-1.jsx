// B V2 — sections part 1
// Nav, Hero, LawyerProfile, Stats (with counters), Nationwide
// Each section uses useIsMobile() to branch layout where structure differs.

// ─────────── Nav ───────────
function BV2Nav() {
  const m = useIsMobile();
  return (
    <header style={{
      padding: m ? '14px 16px' : '20px 56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: BV2.paper,
      borderBottom: `1px solid ${BV2.ink}10`,
      position: 'sticky', top: 0, zIndex: 50,
      backdropFilter: 'saturate(150%) blur(8px)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: m ? 8 : 12 }}>
        <div style={{
          width: m ? 26 : 28, height: m ? 26 : 28, background: BV2.ink, color: BV2.paper,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: m ? 13 : 14, letterSpacing: -0.5,
        }}>회</div>
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', alignItems: m ? 'flex-start' : 'center', gap: m ? 0 : 12 }}>
          <div style={{ fontSize: m ? 14 : 15, fontWeight: 700, letterSpacing: -0.3, lineHeight: 1.2 }}>{BV2_CONTENT.brand.name}</div>
          {!m && <div style={{ width: 1, height: 14, background: BV2.ink, opacity: 0.15 }} />}
          <div style={{ fontSize: m ? 10 : 12, color: BV2.ink3, letterSpacing: -0.2, lineHeight: 1.2 }}>
            {m ? '빚탕감 전문' : BV2_CONTENT.brand.sub}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: m ? 6 : 8 }}>
        {!m && (
          <>
            <div style={{ fontSize: 14, fontWeight: 700, color: BV2.ink }}>{BV2_CONTENT.phone}</div>
            <div style={{ width: 1, height: 16, background: BV2.ink, opacity: 0.15, margin: '0 8px' }} />
          </>
        )}
        <a href="#bv2-contact" style={{
          background: BV2.ink, color: BV2.paper, border: 'none',
          padding: m ? '8px 14px' : '10px 18px', fontSize: m ? 12 : 13, fontWeight: 700,
          cursor: 'pointer', fontFamily: BV2.sans, letterSpacing: -0.2,
          textDecoration: 'none', whiteSpace: 'nowrap',
        }}>상담 신청</a>
      </div>
    </header>
  );
}

// ─────────── Hero ───────────
function BV2Hero() {
  const m = useIsMobile();
  const c = BV2_CONTENT.hero;
  return (
    <BV2Section bg="paper" style={{ paddingTop: m ? 48 : 120, paddingBottom: m ? 56 : 96 }}>
      <h1 style={{
        margin: 0, fontWeight: 800,
        fontSize: m ? 56 : 120, lineHeight: 0.95,
        letterSpacing: m ? -2.5 : -5,
        color: BV2.ink, maxWidth: 1000,
      }}>{c.h1[0]}<br/>{c.h1[1]}</h1>
      <div style={{
        marginTop: m ? 16 : 20,
        fontSize: m ? 22 : 38, fontWeight: 400, color: BV2.ink2,
        letterSpacing: m ? -0.6 : -1, lineHeight: 1.2,
      }}>{c.h2}</div>

      <div style={{
        marginTop: m ? 36 : 56,
        display: 'grid', gridTemplateColumns: m ? '1fr' : '1.2fr 1fr',
        gap: m ? 24 : 64, alignItems: 'end',
      }}>
        <p style={{
          margin: 0, fontSize: m ? 15 : 19, lineHeight: 1.7, color: BV2.ink2, maxWidth: 560,
        }}>{bv2RenderBold(c.body)}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'stretch' }}>
          <a href="#bv2-contact" style={{ textDecoration: 'none' }}>
            <BV2BtnPrimary full>{c.cta}</BV2BtnPrimary>
          </a>
          <div style={{ display: 'flex', gap: 8 }}>
            <a href={`tel:${BV2_CONTENT.phone}`} style={{ flex: 1, textDecoration: 'none' }}>
              <BV2BtnSecondary full>📞 전화 상담</BV2BtnSecondary>
            </a>
            <a href={BV2_CONTENT.kakaoUrl} target="_blank" rel="noopener" style={{ flex: 1, textDecoration: 'none' }}>
              <BV2BtnSecondary full>💬 카카오톡</BV2BtnSecondary>
            </a>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: m ? 48 : 88, padding: m ? '20px 0' : '32px 0',
        borderTop: `1px solid ${BV2.ink}`,
        display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr auto',
        alignItems: 'center', gap: m ? 8 : 32,
      }}>
        <div style={{ fontSize: m ? 18 : 26, fontWeight: 500, letterSpacing: -0.5 }}>
          “{c.quote}”
        </div>
        <div style={{ fontSize: 13, color: BV2.ink3 }}>{c.quoteAttr}</div>
      </div>
    </BV2Section>
  );
}

// ─────────── Lawyer profile (FULL) — credentials + portrait + integrations ───────────
function BV2LawyerProfile() {
  const m = useIsMobile();
  const c = BV2_CONTENT.lawyer;
  return (
    <BV2Section bg="paperAlt">
      <div style={{
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '460px 1fr',
        gap: m ? 32 : 64,
        alignItems: m ? 'start' : 'stretch',
      }}>
        <div style={{ height: '100%' }}>
          <img
            src="profile.png"
            width={1024}
            height={1536}
            alt="대표변호사 이승진"
            style={m
              ? { width: '100%', height: 'auto', display: 'block' }
              : { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: BV2.green, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>
            01 — 한 사람의 변호사가 끝까지
          </div>
          <h2 style={{
            margin: 0, fontSize: m ? 36 : 56, fontWeight: 800,
            letterSpacing: m ? -1.5 : -2.2, lineHeight: 1,
          }}>
            회생의기적을 만드는<br/>변호사.
          </h2>
          <div style={{
            marginTop: 28, display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: m ? 36 : 48, fontWeight: 800, letterSpacing: -1.5 }}>{c.name}</span>
            <span style={{ fontSize: 14, color: BV2.ink3 }}>{c.title}</span>
          </div>

          <p style={{ fontSize: m ? 14 : 16, lineHeight: 1.7, color: BV2.ink2, margin: '20px 0 28px', maxWidth: 580 }}>
            {c.bio}
          </p>

          <div style={{ display: 'grid', gap: 0, border: `1px solid ${BV2.ink}12`, background: BV2.paper }}>
            {c.creds.map((cred, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: m ? '60px 1fr' : '80px 1fr',
                gap: m ? 12 : 20, padding: m ? '14px 16px' : '18px 24px',
                borderBottom: i < c.creds.length - 1 ? `1px solid ${BV2.ink}10` : 'none',
                alignItems: 'center',
              }}>
                <div style={{ fontSize: 11, letterSpacing: 2, color: BV2.green, fontWeight: 700, textTransform: 'uppercase' }}>{cred.k}</div>
                <div style={{ fontSize: m ? 14 : 15, color: BV2.ink, fontWeight: 500, lineHeight: 1.5 }}>{cred.v}</div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 20, padding: '16px 18px', background: BV2.greenLighter,
            borderLeft: `3px solid ${BV2.green}`,
            fontSize: m ? 13 : 14, color: BV2.green, fontWeight: 600, lineHeight: 1.5,
          }}>
            💡 변호사 1명이 처음부터 끝까지. 사건이 여러 변호사 사이를 넘나들지 않습니다.
          </div>
        </div>
      </div>
    </BV2Section>
  );
}

// ─────────── Stats — 4-up with animated counters ───────────
function BV2Stats() {
  const m = useIsMobile();
  return (
    <BV2Section bg="paper">
      <BV2Header num="02" eyebrow="검증 가능한 신뢰" title="숫자로 증명합니다."
        sub="모두 외부 플랫폼에서 직접 확인할 수 있는 수치입니다. 클릭 한 번이면 출처를 검증할 수 있습니다." />

      <div style={{
        display: 'grid',
        gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4, 1fr)',
        gap: m ? 10 : 16,
      }}>
        {BV2_CONTENT.stats.map((s, i) => (
          <div key={i} className="bv2-card-hover" style={{
            background: BV2.paper, padding: m ? '20px 18px' : '32px 28px 28px',
            border: `1px solid ${BV2.ink}14`, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', minHeight: m ? 200 : 270,
          }}>
            <div style={{
              width: m ? 22 : 24, height: m ? 22 : 24, border: `1.5px solid ${BV2.ink}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: m ? 10 : 11, fontWeight: 800, letterSpacing: -0.5,
              marginBottom: m ? 18 : 32, fontVariantNumeric: 'tabular-nums',
            }}>{i + 1}</div>
            <div style={{
              fontSize: m ? 36 : 60, fontWeight: 800,
              letterSpacing: m ? -1.5 : -2.5, lineHeight: 1, marginBottom: m ? 10 : 16,
            }}>
              <BV2Counter value={s.n} suffix={s.suf} />
            </div>
            <div style={{ fontSize: m ? 13 : 15, fontWeight: 700, marginBottom: 4 }}>{s.l}</div>
            <div style={{ fontSize: m ? 11 : 13, color: BV2.ink3, marginBottom: 'auto' }}>{s.sub}</div>
            <div style={{
              marginTop: m ? 16 : 24, paddingTop: m ? 12 : 16,
              borderTop: `1px solid ${BV2.ink}10`,
            }}>
              <BV2Source url={s.src} />
            </div>
          </div>
        ))}
      </div>
    </BV2Section>
  );
}

// ─────────── Nationwide — map placeholder + process steps + region pills ───────────
function BV2Nationwide() {
  const m = useIsMobile();
  const c = BV2_CONTENT.nationwide;
  return (
    <BV2Section bg="paperDeep">
      <div style={{
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '1.2fr 1fr',
        gap: m ? 32 : 64, alignItems: 'start',
      }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: BV2.green, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>
            03 — {c.eyebrow}
          </div>
          <h2 style={{
            margin: 0, fontSize: m ? 36 : 56, fontWeight: 800,
            letterSpacing: m ? -1.5 : -2.2, lineHeight: 1.04,
          }}>{c.title}</h2>
          <p style={{ fontSize: m ? 15 : 17, lineHeight: 1.7, color: BV2.ink2, margin: '20px 0 12px', maxWidth: 580 }}>
            {bv2RenderBold(c.body)}
          </p>
          <p style={{ fontSize: m ? 14 : 15, lineHeight: 1.65, color: BV2.ink3, margin: '0 0 32px', maxWidth: 580 }}>
            {c.body2}
          </p>

          <div style={{ fontSize: 11, color: BV2.ink3, letterSpacing: 2, fontWeight: 700, marginBottom: 14 }}>
            진행 절차 — 평균 1~2영업일
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)',
            gap: m ? 8 : 12,
          }}>
            {c.steps.map((s, i) => (
              <div key={i} style={{
                background: BV2.paper, padding: m ? '14px 16px' : '20px 18px',
                border: `1px solid ${BV2.ink}10`,
                display: 'flex', flexDirection: m ? 'row' : 'column',
                alignItems: m ? 'center' : 'flex-start',
                gap: m ? 12 : 16,
              }}>
                <BV2Mono ch={s.k} size={m ? 28 : 32} color={BV2.paper} bg={BV2.green} rounded />
                <div>
                  <div style={{ fontSize: m ? 13 : 14, fontWeight: 700 }}>{s.l}</div>
                  <div style={{ fontSize: 11, color: BV2.ink3, marginTop: 2 }}>{s.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src="southkorea-map.png"
            width={800}
            height={1200}
            alt="대한민국 전국 서비스 — 서울 본사 · 15개 지역 진행 가능"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </BV2Section>
  );
}

Object.assign(window, { BV2Nav, BV2Hero, BV2LawyerProfile, BV2Stats, BV2Nationwide });
