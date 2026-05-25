// B V2 — sections part 2
// CaseStudy (94%), Honest, SituationCards (form prefill!), Handwritten,
// Lawtalk cases (with bar charts), Cafe reviews.

// ─────────── 94% Case Study — split layout with bar chart ───────────
function BV2CaseStudy() {
  const m = useIsMobile();
  const c = BV2_CONTENT.case;
  return (
    <BV2Section bg="paper">
      <BV2Header num="04" eyebrow={c.eyebrow} title={c.title} sub={c.sub} />

      <div style={{
        marginTop: 0,
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '1fr 1.2fr',
        gap: m ? 16 : 32, alignItems: 'stretch',
      }}>
        {/* Result panel — dark */}
        <div style={{
          background: BV2.ink, color: BV2.paper,
          padding: m ? '32px 24px' : '48px 40px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 12, color: BV2.ink5, letterSpacing: 2, textTransform: 'uppercase', marginBottom: m ? 16 : 24 }}>
              최종 탕감률
            </div>
            <div style={{
              fontSize: m ? 110 : 200, fontWeight: 800, lineHeight: 0.85,
              letterSpacing: m ? -5 : -10, fontVariantNumeric: 'tabular-nums',
            }}>
              94<span style={{ fontSize: m ? 50 : 80, color: BV2.ink5 }}>.18</span>
              <span style={{ fontSize: m ? 50 : 80 }}>%</span>
            </div>

            {/* Bar chart viz */}
            <div style={{ marginTop: m ? 24 : 36, paddingTop: 20, borderTop: `1px solid ${BV2.ink5}33` }}>
              <div style={{ fontSize: 11, color: BV2.ink5, letterSpacing: 2, marginBottom: 14, fontWeight: 700 }}>
                채무 → 변제 비율
              </div>
              <div style={{ position: 'relative', height: 32, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
                <ChartBars />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: BV2.ink5 }}>
                <div>
                  <span style={{ display: 'inline-block', width: 8, height: 8, background: BV2.greenAccent, marginRight: 6 }} />
                  탕감 94.18%
                </div>
                <div>
                  <span style={{ display: 'inline-block', width: 8, height: 8, background: BV2.oxblood, marginRight: 6 }} />
                  변제 5.82%
                </div>
              </div>
            </div>

            <div style={{
              marginTop: m ? 24 : 32,
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
              borderTop: `1px solid ${BV2.ink5}33`,
            }}>
              <div style={{ padding: '20px 12px 0 0', borderRight: `1px solid ${BV2.ink5}33` }}>
                <div style={{ fontSize: 10, color: BV2.ink5, letterSpacing: 2, marginBottom: 6 }}>의뢰 당시 채무</div>
                <div style={{ fontSize: m ? 20 : 24, fontWeight: 700, letterSpacing: -0.5 }}>{c.debt}</div>
              </div>
              <div style={{ padding: '20px 0 0 12px' }}>
                <div style={{ fontSize: 10, color: BV2.ink5, letterSpacing: 2, marginBottom: 6 }}>탕감액</div>
                <div style={{ fontSize: m ? 20 : 24, fontWeight: 700, letterSpacing: -0.5, color: BV2.greenLight }}>{c.forgiven}</div>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: m ? 28 : 40, padding: m ? '16px 20px' : '20px 24px',
            background: 'rgba(255,255,255,.05)',
            borderLeft: `3px solid ${BV2.greenLight}`,
            fontSize: m ? 13 : 14, lineHeight: 1.6, color: '#D5D6D2',
          }}>{c.detail}</div>
        </div>

        {/* Evidence panel */}
        <div>
          <img
            src="repayment-plan.jpg"
            width={1357}
            height={1315}
            alt="법원 인가 결정문 — 변제예정액표"
            style={{ width: '100%', height: 'auto', display: 'block', border: `1px solid ${BV2.ink}12` }}
          />
          <div style={{
            marginTop: 16, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 14,
            padding: '14px 0', borderBottom: `1px solid ${BV2.ink}12`,
          }}>
            <BV2Mono ch="i" size={20} bg={BV2.green} color={BV2.paper} />
            <div style={{ fontSize: m ? 13 : 14, color: BV2.ink2, lineHeight: 1.55 }}>
              ▲ {c.evidence.split('「')[0]}「<b>원금의 5.82% 상당액</b>」 — 즉 <b style={{ color: BV2.green }}>94.18%</b>가 탕감됨.
            </div>
          </div>
          <p style={{ fontSize: 12, color: BV2.ink3, lineHeight: 1.65, marginTop: 16 }}>{c.disclaimer}</p>
        </div>
      </div>
    </BV2Section>
  );

  // Animated split bar inside the dark panel.
  function ChartBars() {
    const [ref, inView] = useInView();
    return (
      <div ref={ref} style={{ position: 'absolute', inset: 0, display: 'flex' }}>
        <div style={{
          width: inView ? '94.18%' : '0%', background: BV2.greenAccent,
          transition: `width 1.4s ${BV2.ease}`,
          display: 'flex', alignItems: 'center', paddingLeft: 12,
          fontSize: 11, fontWeight: 800, color: BV2.paper, letterSpacing: -0.2,
        }}>94.18% 탕감</div>
        <div style={{
          flex: 1, background: BV2.oxblood,
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 8,
          fontSize: 10, fontWeight: 700, color: BV2.paper, opacity: inView ? 1 : 0,
          transition: `opacity 1.4s ${BV2.ease} 0.6s`,
        }}>5.82%</div>
      </div>
    );
  }
}

// ─────────── Honest — "이런 경우는 어렵습니다" ───────────
function BV2Honest() {
  const m = useIsMobile();
  const c = BV2_CONTENT.honest;
  return (
    <BV2Section bg="paperAlt">
      <BV2Header num="06" eyebrow={c.eyebrow} tone="oxblood"
        title={<>{c.title[0]}<br/>{c.title[1].replace('어렵습니다.', '')}<span style={{ color: BV2.oxblood }}>어렵습니다.</span></>} />

      <div style={{
        marginTop: 0, padding: m ? '28px 24px' : '40px 44px',
        background: BV2.paper,
        display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr',
        gap: m ? 24 : 56, borderTop: `2px solid ${BV2.oxblood}`,
      }}>
        <div>
          <div style={{ fontSize: 12, color: BV2.ink3, letterSpacing: 2, marginBottom: 8, fontWeight: 700 }}>CASE</div>
          <h3 style={{ margin: 0, fontSize: m ? 22 : 28, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1.25 }}>
            {c.case}
          </h3>
          <p style={{ fontSize: m ? 14 : 15, lineHeight: 1.75, color: BV2.ink2, margin: '16px 0 0' }}>
            {c.body}
          </p>
        </div>
        <div style={{
          borderLeft: m ? 'none' : `1px solid ${BV2.ink}12`,
          borderTop: m ? `1px solid ${BV2.ink}12` : 'none',
          paddingLeft: m ? 0 : 40,
          paddingTop: m ? 24 : 0,
        }}>
          <div style={{ fontSize: 12, color: BV2.ink3, letterSpacing: 2, marginBottom: 8, fontWeight: 700 }}>변호사 코멘트</div>
          <p style={{ margin: 0, fontSize: m ? 16 : 18, lineHeight: 1.65, color: BV2.ink, fontWeight: 500 }}>
            “{c.quote.replace('다른 방향을 함께 검토', '')}<u>다른 방향을 함께 검토</u>합니다.”
          </p>
          <div style={{ fontSize: 13, color: BV2.ink3, marginTop: 14 }}>{c.attr}</div>
        </div>
      </div>
    </BV2Section>
  );
}

// ─────────── Situation cards — clicking PREFILLS the form ───────────
function BV2Situations() {
  const m = useIsMobile();
  const { prefill } = useForm();
  return (
    <BV2Section bg="paper">
      <div style={{
        display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr',
        gap: m ? 16 : 48, marginBottom: m ? 32 : 56, alignItems: 'end',
      }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: BV2.green, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>
            07 — 상황별 빠른 안내
          </div>
          <h2 style={{
            margin: 0, fontSize: m ? 32 : 56, fontWeight: 800,
            letterSpacing: m ? -1.2 : -2, lineHeight: 1.02,
          }}>지금 어떤 상황이신가요?</h2>
        </div>
        <p style={{ margin: 0, fontSize: m ? 14 : 17, color: BV2.ink2, lineHeight: 1.65, maxWidth: 440 }}>
          카드를 누르면 <b style={{ color: BV2.green }}>아래 상담 폼에 자동으로 입력</b>됩니다. 어떤 검토가 필요한지 미리 알려드립니다.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)',
        gap: m ? 10 : 16,
      }}>
        {BV2_CONTENT.situations.map((s) => (
          <div key={s.k} className="bv2-situ-card"
            onClick={() => prefill(s.prefill)}
            style={{
              padding: m ? '18px 18px' : '32px 28px 24px',
              background: BV2.paper, border: `1px solid ${BV2.ink}12`,
              display: 'flex', flexDirection: m ? 'row' : 'column',
              minHeight: m ? 'auto' : 220,
              alignItems: m ? 'center' : 'stretch',
              gap: m ? 14 : 0,
            }}>
            <BV2Num n={s.k} size={m ? 36 : 36} />
            {m ? (
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, letterSpacing: -0.3, lineHeight: 1.3 }}>{s.t}</h3>
                <p style={{ margin: '4px 0 0', fontSize: 12, color: BV2.ink3, lineHeight: 1.5 }}>{s.d}</p>
              </div>
            ) : (
              <>
                <h3 style={{ margin: '20px 0 12px', fontSize: 20, fontWeight: 700, letterSpacing: -0.4, lineHeight: 1.3 }}>{s.t}</h3>
                <p style={{ margin: 0, fontSize: 14, color: BV2.ink2, lineHeight: 1.6 }}>{s.d}</p>
                <div style={{
                  marginTop: 'auto', paddingTop: 20, fontSize: 13, fontWeight: 700,
                  color: BV2.green, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span>이 상황으로 상담 신청</span>
                  <span className="bv2-situ-arrow">→</span>
                </div>
              </>
            )}
            {m && <span className="bv2-situ-arrow" style={{ color: BV2.green, fontSize: 18, fontWeight: 700 }}>→</span>}
          </div>
        ))}
      </div>
    </BV2Section>
  );
}

// ─────────── Handwritten reviews — image-only gallery ───────────
// width/height included so cards reserve aspect-ratio space before lazy images load
const BV2_HANDWRITTEN_IMAGES = [
  { src: 'reviews/review-01.png', w: 1000, h: 907 },
  { src: 'reviews/review-02.png', w: 1000, h: 1263 },
  { src: 'reviews/review-03.png', w: 1000, h: 1157 },
  { src: 'reviews/review-04.png', w: 1000, h: 1063 },
  { src: 'reviews/review-05.png', w: 1000, h: 1088 },
  { src: 'reviews/review-06.jpg', w: 782,  h: 846 },
  { src: 'reviews/review-07.jpg', w: 833,  h: 1015 },
  { src: 'reviews/review-08.jpg', w: 890,  h: 1033 },
  { src: 'reviews/review-09.jpg', w: 932,  h: 671 },
  { src: 'reviews/review-10.jpg', w: 1022, h: 1042 },
  { src: 'reviews/review-11.jpg', w: 1026, h: 1195 },
  { src: 'reviews/review-12.jpg', w: 877,  h: 635 },
  { src: 'reviews/review-13.jpg', w: 399,  h: 573 },
];

function BV2Handwritten() {
  const m = useIsMobile();
  const [zoomed, setZoomed] = React.useState(null);
  // Pre-computed deterministic tilts (chosen, not random — stable across renders).
  const tilts = [-2.4, 1.6, -1.2, 2.8, -2.0, 1.4, -1.8, 2.2, -2.6, 1.0, -1.4, 2.4, -2.0];
  const accents = [BV2.amberLight, '#F0EAD8', BV2.greenLighter, '#EFE8DA', '#F2EAD2'];

  React.useEffect(() => {
    if (!zoomed) return;
    const onKey = (e) => { if (e.key === 'Escape') setZoomed(null); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [zoomed]);

  return (
    <BV2Section bg="paperDeep">
      <BV2Header num="08" eyebrow="손편지로 받은 진심" title="의뢰인이 직접 쓴 자필후기."
        sub="**위조 불가능한, 업체가 손댈 수 없는** 진심의 흔적." />

      <div className={m ? 'bv2-hscroll' : ''} style={{
        display: m ? 'flex' : 'grid',
        gridTemplateColumns: m ? undefined : 'repeat(4, 1fr)',
        gap: m ? 12 : 20,
        paddingBottom: m ? 8 : 0,
        marginLeft: m ? -16 : 0, marginRight: m ? -16 : 0,
        paddingLeft: m ? 16 : 0, paddingRight: m ? 16 : 0,
      }}>
        {BV2_HANDWRITTEN_IMAGES.map((img, i) => (
          <div key={img.src} style={{
            flex: m ? '0 0 240px' : undefined,
            background: accents[i % accents.length],
            padding: m ? 10 : 12,
            transform: `rotate(${tilts[i % tilts.length]}deg)`,
            boxShadow: '0 12px 28px rgba(8,9,8,0.08), 0 2px 6px rgba(8,9,8,0.06)',
            transition: `transform .25s ${BV2.ease}`,
            cursor: 'zoom-in',
            position: 'relative',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(0deg) scale(1.04)`}
            onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${tilts[i % tilts.length]}deg)`}
            onClick={() => setZoomed(img.src)}>
            <div style={{
              position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
              width: 60, height: 14, background: 'rgba(0,0,0,0.06)',
              borderRadius: 2,
            }} />
            <img src={img.src} width={img.w} height={img.h} alt={`의뢰인 자필후기 ${i + 1}`} loading="lazy" style={{
              display: 'block', width: '100%', height: 'auto', background: '#fff',
            }} />
          </div>
        ))}
      </div>

      {zoomed && (
        <div onClick={() => setZoomed(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(8,9,8,0.88)',
          zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: m ? 16 : 40, cursor: 'zoom-out',
        }}>
          <img src={zoomed} alt="자필후기 확대" style={{
            maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',
            boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
          }} />
          <button onClick={(e) => { e.stopPropagation(); setZoomed(null); }} aria-label="닫기" style={{
            position: 'absolute', top: m ? 12 : 24, right: m ? 12 : 24,
            width: 40, height: 40, border: 'none', borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: 22,
            cursor: 'pointer', lineHeight: 1,
          }}>×</button>
        </div>
      )}
    </BV2Section>
  );
}

// ─────────── Lawtalk cases — bar chart per case ───────────
function BV2Lawtalk() {
  const m = useIsMobile();
  return (
    <BV2Section bg="paper">
      <BV2Header num="05" eyebrow="로톡 공식 등록 · 925건" title="이런 결과들을 꾸준히 만들어왔습니다."
        sub="변호사 본인이 로톡에 등록한 실제 사건. 클릭 시 정식 사례 페이지로 이동합니다." />

      <div style={{
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : 'repeat(5, 1fr)',
        gap: m ? 10 : 14,
      }}>
        {BV2_CONTENT.lawtalk.map((c, i) => (
          <div key={i} className="bv2-card-hover" style={{
            background: BV2.paper, padding: m ? '18px 18px' : '24px 20px',
            border: `1px solid ${BV2.ink}12`, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 14,
            minHeight: m ? 'auto' : 220,
          }}>
            <div style={{
              display: 'inline-flex', padding: '3px 8px', alignSelf: 'flex-start',
              fontSize: 10, fontWeight: 700, color: BV2.green,
              background: BV2.greenLight, letterSpacing: -0.1,
            }}>{c.tag}</div>
            <div style={{ fontSize: m ? 14 : 14, fontWeight: 600, lineHeight: 1.45, color: BV2.ink, flex: 1 }}>
              {c.t}
            </div>
            <BV2DataBar pct={c.rate} label="탕감률" color={BV2.green} bg={BV2.ink5} height={6} />
            <div style={{ fontSize: 11, color: BV2.ink3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: BV2.mono }}>lawtalk.co.kr</span>
              <span>↗</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: m ? 24 : 32, textAlign: 'center' }}>
        <a href={BV2_CONTENT.lawtalkUrl} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
          <BV2BtnSecondary>로톡에서 전체 925건 보기 →</BV2BtnSecondary>
        </a>
      </div>
    </BV2Section>
  );
}

// ─────────── Cafe reviews — stage-tagged ───────────
function BV2Cafe() {
  const m = useIsMobile();
  return (
    <BV2Section bg="paperAlt">
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14, flexWrap: 'wrap' }}>
        <div style={{
          width: 28, height: 28, background: '#03C75A', color: BV2.paper,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 16,
        }}>N</div>
        <span style={{ fontSize: 12, fontWeight: 700, color: BV2.green, letterSpacing: 2, textTransform: 'uppercase' }}>
          09 — 네이버 카페 · 352건
        </span>
      </div>
      <h2 style={{
        margin: 0, fontSize: m ? 32 : 56, fontWeight: 800,
        letterSpacing: m ? -1.2 : -2, lineHeight: 1.02,
      }}>실제 의뢰인의 후기.</h2>
      <p style={{ fontSize: m ? 14 : 16, color: BV2.ink2, margin: '14px 0 32px', maxWidth: 600, lineHeight: 1.65 }}>
        <b>개시결정 / 인가결정</b> 단계별로 분류. 본인인증 회원만 작성 가능 — 업체가 손댈 수 없습니다.
      </p>

      <div style={{
        display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: m ? 8 : 12,
      }}>
        {BV2_CONTENT.cafe.map((c, i) => (
          <div key={i} className="bv2-card-hover" style={{
            background: BV2.paper, padding: m ? '16px 18px' : '20px 22px',
            border: `1px solid ${BV2.ink}12`, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                fontSize: 10, fontWeight: 800, padding: '3px 8px',
                background: c.stage === 'inka' ? BV2.green : BV2.amber,
                color: BV2.paper, letterSpacing: -0.1,
              }}>{c.stageL}</span>
              <span style={{ fontSize: 11, color: BV2.ink3 }}>{c.date}</span>
            </div>
            <div style={{ fontSize: m ? 14 : 15, fontWeight: 600, color: BV2.ink, lineHeight: 1.45 }}>
              {c.t}
            </div>
            <div style={{ fontSize: 12, color: BV2.ink3, marginTop: 'auto' }}>
              <span style={{ fontWeight: 600, color: BV2.ink2 }}>{c.author}</span>
              <span style={{ margin: '0 6px' }}>·</span>
              <span>네이버 카페 회원</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: m ? 24 : 32, textAlign: 'center' }}>
        <a href={BV2_CONTENT.cafeUrl} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
          <BV2BtnSecondary>카페에서 전체 후기 보기 →</BV2BtnSecondary>
        </a>
      </div>
    </BV2Section>
  );
}

Object.assign(window, { BV2CaseStudy, BV2Honest, BV2Situations, BV2Handwritten, BV2Lawtalk, BV2Cafe });
