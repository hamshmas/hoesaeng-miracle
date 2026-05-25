// B V2 — content data
// Korean copy lifted from land1.tanggam.kr + expanded for the additional
// sections requested (handwritten reviews, lawtalk cases, cafe reviews,
// youtube interviews, calculator entry, nationwide).

const BV2_CONTENT = {
  brand: { name: '회생의기적', sub: '블랙스톤 법률사무소 · 빚탕감 전문' },
  phone: '1670-7708',
  kakao: '회생의기적 채널',
  kakaoUrl: 'https://pf.kakao.com/_Exnxnkxj/chat',
  youtubeChannelUrl: 'https://www.youtube.com/@%EA%B0%9C%EC%9D%B8%ED%9A%8C%EC%83%9D',
  cafeUrl: 'https://cafe.naver.com/f-e/cafes/30974285/articles/6549?boardtype=L&userDisplay=50&menuid=14&referrerAllArticles=false&page=1',

  hero: {
    badge: '대한변호사협회 인증 도산 변호사',
    h1: ['빚, 정리할 수', '있습니다.'],
    h2: '변호사 본인이 끝까지.',
    body: '사무장이 아니라 **도산전문변호사가 직접** 검토합니다. **2,211건**의 성공사례와 **94.18%** 탕감 인가사례로 증명합니다.',
    cta: '변호사 직접 회신 받기',
    quote: '광고가 아니라, 결과로 말씀드립니다.',
    quoteAttr: '— 대표 변호사 이승진',
  },

  lawyer: {
    name: '이승진',
    title: '대표 변호사 · 도산 전문',
    bio: '서울대 공대를 우등졸업하고, 도산 전문 변호사로 등록한 이후 15년간 회생·파산 사건만 다뤄왔습니다.',
    creds: [
      { k: '학력', v: '서울대학교 공과대학 전기컴퓨터공학부 우등졸업' },
      { k: '자격', v: '대한변호사협회 인증 도산 변호사' },
      { k: '현직', v: '서울대학교 총동창회 이사' },
      { k: '실적', v: '회생/파산 누적 2,211건+' },
      { k: '미디어', v: '유튜브 "회생의기적" 25,450명 · 로톡 등록 923건' },
    ],
  },

  stats: [
    { n: '2,211', suf: '건+', l: '누적 성공 사례', sub: '2026.5 기준', src: 'blackstonelaw.co.kr' },
    { n: '25,450', suf: '명', l: '유튜브 "회생의기적"', sub: '구독자', src: 'youtube.com/@개인회생' },
    { n: '352', suf: '건', l: '네이버 카페', sub: '실제 의뢰인 후기', src: 'cafe.naver.com' },
    { n: '923', suf: '건', l: '로톡 등록', sub: '법률사례', src: 'lawtalk.co.kr' },
  ],

  nationwide: {
    eyebrow: '전국 거주 의뢰인께',
    title: '전국 어디서나 방문 없이 진행 가능합니다.',
    body: '개인회생은 서류와 법원 절차 중심으로 진행됩니다. **전국 어디서나 전화·카톡·온라인 자료 제출**로 상담 및 진행이 가능합니다.',
    body2: '다만 관할 법원과 사건 특성에 따라 보정 방향은 달라질 수 있어, 처음부터 도산전문변호사의 검토가 필요합니다.',
    steps: [
      { k: '1', l: '전화 / 카톡 1차 상담', t: '약 20~30분' },
      { k: '2', l: '온라인 자료 제출', t: '신분증·소득증빙·채권자명단' },
      { k: '3', l: '변호사 검토 + 견적', t: '평균 1~2영업일' },
      { k: '4', l: '계약 → 법원 접수', t: '서면 위주 진행' },
    ],
    regions: ['서울', '경기·인천', '강원', '충청', '대전', '대구', '경북', '부산·울산', '경남', '광주', '전남·전북', '제주'],
  },

  case: {
    eyebrow: '대표 성공 사례',
    title: '94%의 빚이 사라졌습니다.',
    sub: '실제 의뢰인의 개인회생 인가 결정문 기준.',
    rate: '94.18',
    debt: '3.3억원',
    forgiven: '3.1억원',
    repay: '5.82%',
    detail: '변호사가 직접 설계한 변제계획안으로 인가 결정. 의뢰 당시 절망에 가까운 상황이었지만 끝까지 매달려 최대 탕감을 만들었습니다.',
    evidence: '법원이 인가한 실제 변제예정액표의 일부. 제3항 변제율 「원금의 5.82% 상당액」 — 즉 94.18%가 탕감됨.',
    disclaimer: '* 본 사례는 대표변호사가 직접 진행한 실제 인가 사건이며, 결과는 의뢰인의 채무·소득·재산 등 개별 상황에 따라 달라질 수 있습니다.',
  },

  honest: {
    eyebrow: '솔직히 말씀드립니다',
    title: ['이런 경우는', '회생이 어렵습니다.'],
    case: '보유 재산이 채무보다 많은 경우',
    body: '개인회생은 "갚을 능력이 부족하다"는 전제 위에 있습니다. 부동산·예금·증권 등을 청산했을 때 채무보다 많거나 비슷하다면, 회생 신청 자체가 어렵거나 큰 효과를 보기 어렵습니다.',
    quote: '이런 상황은 무리하게 회생을 추진하지 않습니다. 채무조정·자산 정리 등 다른 방향을 함께 검토합니다.',
    attr: '— 대표 변호사 이승진',
  },

  situations: [
    { k: '01', t: '아직 연체 전입니다', d: '연체 전에 신청 가능성부터 확인하세요.', prefill: '아직 연체는 없지만, 곧 연체가 우려되는 상황입니다. ' },
    { k: '02', t: '독촉 전화가 오고 있습니다', d: '채권자 대응과 금지명령 가능성을 검토해야 합니다.', prefill: '채권자 독촉 전화·문자가 오고 있습니다. ' },
    { k: '03', t: '급여압류가 걱정됩니다', d: '압류 전 신청 타이밍이 중요합니다.', prefill: '급여 압류 가능성이 있어 빠른 신청이 필요합니다. ' },
    { k: '04', t: '주식·코인 손실이 있습니다', d: '사용처와 청산가치 반영 여부를 봐야 합니다.', prefill: '주식·코인 투자 손실로 채무가 늘어났습니다. ' },
    { k: '05', t: '개인사업자입니다', d: '매출·비용·세금, 사업 유지 가능성을 같이 봐야 합니다.', prefill: '개인사업자입니다. 사업 유지 여부도 같이 검토 부탁드립니다. ' },
    { k: '06', t: '수임료가 부담됩니다', d: '분납 가능 여부를 상담에서 확인하세요.', prefill: '수임료 분납이 가능한지 확인하고 싶습니다. ' },
  ],

  lawtalk: [
    { tag: '회생/파산', t: '코인 투자 손실 → 돌려막기·카드깡 누적', rate: '90.62' },
    { tag: '회생/파산', t: '코로나 폐업 + 가족 건강 악화', rate: '87.17' },
    { tag: '회생/파산', t: '부동산 중개업 거래 급감, 채무 누적', rate: '85.70' },
    { tag: '회생/파산', t: '생활비 부족, 카드·대출 누적', rate: '83.30' },
    { tag: '회생/파산', t: '빚보증 + 보이스피싱 피해', rate: '80.00' },
  ],

  cafe: [
    { stage: 'inka', stageL: '인가결정', t: '드디어 인가 결정이 났습니다.', author: '경기연풍', date: '2026.04.12' },
    { stage: 'gaesi', stageL: '개시결정', t: '개인회생은 블랙스톤에서', author: '밴츠', date: '2026.04.08' },
    { stage: 'inka', stageL: '인가결정', t: '이제 성실히 내면 끝납니다.', author: '코묻은돈', date: '2026.04.03' },
    { stage: 'gaesi', stageL: '개시결정', t: '개시결정 후 채권자 집회 기다리고 있어요', author: '호야', date: '2026.03.28' },
    { stage: 'inka', stageL: '인가결정', t: '7년간의 카드빚 — 끝났습니다', author: '리스타트', date: '2026.03.21' },
    { stage: 'inka', stageL: '인가결정', t: '월 변제금이 예상보다 적게 나왔네요', author: '오늘부터', date: '2026.03.17' },
  ],

  youtube: {
    eyebrow: '유튜브 의뢰인 인터뷰',
    title: '의뢰인이 카메라 앞에서 직접 이야기합니다.',
    sub: '꾸미지 않은 본인 얼굴과 목소리로 사건을 회고한 실제 인터뷰.',
    channel: '회생의기적 · 대표변호사 이승진',
    sub2: '구독자 25,450명 · 찾아가는 의뢰인 시리즈',
    videos: [
      { id: 'GMJ5lgSizKA', dur: '8:52', t: '부부빚 95% 이상 탕감! 유튜브 최초 개인회생 의뢰인' },
      { id: 'B9B86r6ms8A', dur: '10:16', t: '역대급 후기: 딸 넷, 사기, 암투병, 쓰리잡의 국가유공자' },
      { id: 'lppePMb1D0A', dur: '7:40', t: '신청만 3번째, 개인회생 사무실들의 민낯' },
      { id: 'aM-TY8XuQYM', dur: '12:40', t: '서울대 출신 엘리트, 개인회생으로 제2의 인생을' },
    ],
  },

  calc: {
    eyebrow: '참고용 도구',
    title: '예상치만 먼저 보고 싶다면.',
    sub: '정확한 분석은 변호사 통화로만 가능합니다. 감을 잡고 싶을 때 한 번 써보세요.',
    steps: [
      { k: '1', l: '채무 정보 입력', t: '약 1분' },
      { k: '2', l: '소득·재산 입력', t: '약 1분' },
      { k: '3', l: 'AI 예상치 즉시 확인', t: '실시간' },
    ],
    cta: '지금 계산해보기',
    note: '※ 예상치이며, 실제 결과는 사실관계·증거에 따라 달라질 수 있습니다.',
  },

  contact: {
    eyebrow: '1:1 비밀 상담',
    title: ['지금 회생 가능한지,', '변호사가 직접 보고', '말씀드립니다.'],
    sub: '어렵다면 어렵다고 말하고, 가능하다면 예상 변제금부터 설명드리겠습니다.',
    fields: [
      { k: 'name', l: '성함', req: true, ph: '홍길동', type: 'text' },
      { k: 'phone', l: '연락처', req: true, ph: '010-0000-0000', type: 'tel' },
      { k: 'note', l: '현재 채무 상황 (선택)', req: false, ph: '예) 카드 4곳 약 6,500만원, 6개월 연체 / 월 소득 280만원', area: true },
    ],
    agree: '상담 진행을 위한 개인정보 수집·이용에 동의합니다 (필수)',
    submit: '상담 신청하기',
    privacy: '1:1 비밀 상담. 입력하신 정보는 상담 목적으로만 사용되며, 변호사 비밀유지 의무에 따라 외부에 절대 공개되지 않습니다.',
  },

  footer: {
    legal: '블랙스톤 법률사무소 · 대표 이승진 변호사',
    address: '서울특별시 서초구 서초대로 254, 8층 (서초동, 오퓨런스빌딩)',
    bizNo: '사업자등록번호 414-33-00357',
    note: '"회생의기적"은 블랙스톤 법률사무소가 운영하는 빚탕감 전문 브랜드입니다.',
  },
};

// Replace **bold** markers with <b> nodes — used by paragraph-style copy.
function bv2RenderBold(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <b key={i} style={{ color: BV2.ink, fontWeight: 700 }}>{p.slice(2, -2)}</b>;
    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
}

Object.assign(window, { BV2_CONTENT, bv2RenderBold });
