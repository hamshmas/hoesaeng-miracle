// B V2 — App entry. Composes all sections in order. Wraps in FormProvider
// so SituationCards can prefill the contact textarea + scroll smoothly.

function BV2App() {
  // Add bottom padding equal to the sticky-CTA height so the last bit of
  // content isn't permanently hidden behind it on mobile.
  const isMobile = useIsMobile();
  return (
    <FormProvider>
      <div style={{
        background: BV2.paper,
        color: BV2.ink,
        fontFamily: BV2.sans,
        paddingBottom: isMobile ? 88 : 0,
      }}>
        <BV2Nav />
        <BV2Hero />
        <BV2LawyerProfile />
        <BV2Stats />
        <BV2Nationwide />
        <BV2CaseStudy />
        <BV2Lawtalk />
        <BV2MidCta tone="green" eyebrow="이런 결과를 만들고 싶다면" title="내 사건도 회생 가능한지, 변호사에게 직접 들어보세요." />
        <BV2Honest />
        <BV2Situations />
        <BV2Handwritten />
        <BV2Cafe />
        <BV2MidCta tone="green" eyebrow="다음 후기의 주인공" title="당신의 사건도 결과로 보여드리겠습니다." />
        <BV2YouTube />
        <BV2MidCta tone="ink" eyebrow="영상 속 의뢰인처럼" title="얼굴 없이도, 1:1 비밀 상담으로 시작할 수 있습니다." />
        <BV2Calculator />
        <BV2Contact />
        <BV2Footer />
      </div>
      <StickyCTA />
    </FormProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BV2App />);
