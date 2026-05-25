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
        <BV2Honest />
        <BV2Situations />
        <BV2Handwritten />
        <BV2Lawtalk />
        <BV2Cafe />
        <BV2YouTube />
        <BV2Calculator />
        <BV2Contact />
        <BV2Footer />
      </div>
      <StickyCTA />
    </FormProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BV2App />);
