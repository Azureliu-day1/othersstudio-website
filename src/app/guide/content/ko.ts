import type { GuideDoc, Section } from "../types";

/**
 * 한국어. zh.ts를 그대로 옮긴 번역본이에요. 구조, id, 스크린샷 파일명은 zh.ts와 같아요.
 * 이중 대괄호로 감싼 App 문구 키는 렌더링할 때 App 한국어판 원문으로 바뀌어요. [=문구=]는 iOS 시스템 화면의 글자예요.
 */

const readiness: Section = {
  id: "readiness",
  nav: "신호등과 Apple Health",
  title: "신호등: 매일 아침 오늘 어떻게 운동할지 알려줘요",
  lead: "DAY 1의 가장 핵심 기능이자, 가장 먼저 설정해 둬야 하는 기능이에요. Apple Health를 연결하지 않으면 설문만으로 대략 추정할 수밖에 없어요.",
  blocks: [
    {
      kind: "panels",
      what: [
        "매일 아침 어젯밤의 **심박 변이도(HRV)**, **안정 시 심박수**, **수면**을 읽어 와서 지난 60일 밤 동안의 내 데이터와 비교해요. 그리고 0~100점 점수와 신호등 하나를 보여줘요.",
        "초록불: 회복이 잘됐어요. 계획대로 운동하세요. 노란불: 아직 다 회복되지 않았어요. 양이나 강도를 줄이세요. 빨간불: 회복이 우선이에요. 쉬거나 스트레칭하세요.",
        "그날 할 수 있는 운동 방법 두 가지도 함께 보여줘요. [[decision.planCard.recommended]] 표시가 붙은 쪽이 가장 잘 맞는 방법이에요.",
      ],
      where: [
        "[[tab.home]] 맨 위의 큰 카드가 신호등이에요.",
        "매일 처음 열면 이 카드에 [[decision.daily.newDay]] 문구가 보여요. 카드를 탭해서 30초 체크인을 마치면 카드에 [[decision.readiness.todayAdvice]] 문구와 신호등이 나타나요.",
        "그다음부터는 이 카드를 **한 번 탭하면** 상세 화면으로 들어가요. 점수가 어떻게 계산됐는지, 어떤 항목이 점수를 끌어내리는지 볼 수 있어요.",
      ],
      perms: [
        "**Apple Health 읽기 권한**(HRV, 안정 시 심박수, 심박수, 수면, 걸음 수 등).",
        "참고: 앱을 처음 열 때 이 권한을 자동으로 묻지 **않아요**. 직접 한 번 연결을 눌러야 해요.",
        "HRV를 받으려면 **Apple Watch를 차고 자야** 해요.",
      ],
      fix: [
        "**앱에서:** 하단 [[tab.profile]] → [[cycle.profile.healthKitAuth]]에서 다시 한 번 탭하세요.",
        "**iPhone 설정에서:** [=설정=] → [=개인정보 보호 및 보안=] → [=건강=] → [=DAY 1=]에서 읽기 항목을 모두 켜세요.",
        "시스템 팝업을 이미 거부했다면 앱에서 다시 눌러도 팝업이 뜨지 않아요. 이때는 iPhone 설정에서만 바꿀 수 있어요.",
      ],
      fixImage: { shot: "me-healthkit", alt: "「내 정보」 화면의 「기기 관리」와 「HealthKit 권한」 두 줄", w: 720, h: 242 },
    },
    {
      kind: "steps",
      title: "처음 Apple Health 연결하기, 한 단계씩",
      intro: "아래는 모두 실제 앱 화면이에요. 그대로 따라 누르면 돼요.",
      items: [
        { shot: "health-source", alt: "건강 데이터 소스 선택 화면, 선택지 세 개", text: "[[tab.home]]에서 [[home.watch.disconnected]] 카드를 탭하면 [[health.mode.title]] 화면이 떠요. 첫 번째 항목인 [[health.mode.connectApple]]을(를) 고르세요." },
        { shot: "ios-sheet", alt: "iOS 건강 권한 화면, 스위치가 모두 꺼져 있음", text: "시스템 화면 「건강 데이터 접근」이 떠요. 스위치는 기본으로 모두 꺼져 있어요. [=모두 켜기=]를 탭하세요." },
        { shot: "ios-sheet-allowed", alt: "iOS 건강 권한 화면, 스위치가 모두 켜지고 아래 허용 버튼이 파랗게 바뀜", text: "스위치가 모두 초록색으로 바뀌면 맨 아래 파란색 [=허용=] 버튼을 탭하세요." },
        { shot: "home-readiness", alt: "홈 화면, 연결 카드가 사라지고 오늘의 운동 조언 노란불이 표시됨", text: "홈으로 돌아왔을 때 [[home.watch.disconnected]] 카드가 사라졌다면 연결된 거예요." },
      ],
    },
    {
      kind: "callout",
      title: "권한 화면 아래 작은 글씨에 「FitTrack」이 보이나요?",
      body: "FitTrack은 DAY 1의 예전 이름이고, 같은 앱이에요. 권한 화면 제목에는 「DAY 1이(가) 건강 데이터에 접근하고 업데이트하려고 합니다」라고 적혀 있어요. 안심하고 허용하세요.",
    },
    {
      kind: "steps",
      title: "다음 날 아침: 30초 체크인",
      intro: "앱을 열면 홈에 [[decision.daily.newDay]] 카드가 나타나요. 탭해서 순서대로 마치면 오늘의 신호등과 운동 플랜 두 가지를 볼 수 있어요.",
      items: [
        { shot: "sleep-fill", alt: "어젯밤 수면이 기록되지 않아 수면 시간을 직접 입력", text: "어젯밤 워치에 수면이 기록되지 않았다면 먼저 몇 시간 잤는지 물어봐요. 대략적인 시간으로 끌어 놓고 [[manual.input.done]] 버튼을 탭하세요. 워치를 차고 잤다면 이 단계는 나오지 않아요." },
        { shot: "checkin", alt: "아침 체크인 1번 질문, 오늘 컨디션은 어떤가요", text: "짧은 질문 6개에 답해요. 질문마다 가장 가까운 선택지를 하나 고르고 [[common.next]] 버튼을 탭하세요. 첫 느낌대로 고르면 돼요." },
        { shot: "checkin-result", alt: "체크인 결과, 노란불 59점, 플랜 A 일반 운동, 플랜 B 가벼운 운동", text: "결과가 나와요. 신호등 하나, 점수 하나, 플랜 두 가지예요. [[decision.planCard.recommended]] 표시가 붙은 쪽이 오늘 가장 잘 맞는 운동 방법이에요." },
      ],
    },
    {
      kind: "timeline",
      title: "처음 며칠은 신호등이 「덜 정확한」 이유",
      intro: "신호등은 다른 사람이 아니라 **나 자신**과 비교해요. 그래서 먼저 나를 알아 가는 시간이 필요해요. 이 기간에는 상세 화면에 [[baseline.status.learning]] 문구가 보이는데, 정상이에요.",
      items: [
        { n: "1~3일째 밤", d: "데이터가 아직 적어서 일반 기준으로 먼저 판단해요" },
        { n: "4~10일째 밤", d: "조금씩 내 개인 기준선으로 바뀌어요. 점수는 부드럽게 넘어가고 갑자기 튀지 않아요" },
        { n: "14일째 밤부터", d: "개인 기준선이 안정되고 신호등이 가장 정확해져요" },
      ],
      note: "중간에 워치를 안 차고 잔 밤이 있어도 초기화되지 않아요. 그날 밤만 빠져요.",
    },
    {
      kind: "options",
      title: "Apple Watch가 없어도 쓸 수 있어요",
      intro: "[[health.mode.title]] 화면에는 선택지가 두 개 더 있어요. 워치를 찰 때보다 신호등은 조금 대략적이지만, 매일 운동 조언은 그대로 받아요.",
      items: [
        { t: "[[health.mode.connectApple]]", d: "Apple Watch 같은 기기로 데이터를 자동 동기화해요", tag: "가장 정확" },
        { t: "[[health.mode.manual]]", d: "수면 같은 핵심 데이터를 매일 직접 입력해요" },
        { t: "[[health.mode.skip]]", d: "아침 체크인으로 몸 상태를 평가해요" },
      ],
    },
    {
      kind: "faq",
      title: "그래도 안 되나요?",
      items: [
        { q: "Apple Health를 연결했는데 상세 화면에 HRV가 안 보여요", a: "어젯밤 워치를 차고 잤는지, iPhone 「건강」 앱에서 어젯밤 심박 변이도가 보이는지 확인하세요. 워치는 잠들어 가만히 있을 때만 HRV를 측정해요. 낮에 잰 값은 그날 밤 데이터에 들어가지 않아요." },
        { q: "홈의 「Apple Watch 연결하기」 카드가 계속 떠 있어요", a: "권한이 다 허용되지 않았다는 뜻이에요. iPhone 설정 → 개인정보 보호 및 보안 → 건강 → DAY 1에서 읽기 항목을 모두 켠 다음 앱으로 돌아오세요." },
        { q: "매일 아침 수면을 입력하라고 해요", a: "앱이 워치의 수면 기록을 읽지 못했다는 뜻이에요. 잘 때 워치를 차고 있는지, iPhone 「건강」 앱에서 어젯밤 수면이 보이는지 확인하세요. 워치가 없다면 매일 수면 시간만 입력하면 돼요. 신호등이 그 값을 참고해요." },
        { q: "워치를 바꿨거나 앱을 다시 설치했더니 신호등이 다시 「학습 중」이 됐어요", a: "개인 기준선은 내 건강 데이터를 따라가요. 다시 설치한 뒤 Apple Health를 다시 연결하면 돼요. 이전 데이터는 「건강」 앱에 그대로 있어서 며칠 안에 돌아와요." },
      ],
    },
  ],
};

const food: Section = {
  id: "food",
  nav: "사진으로 음식 인식",
  title: "사진으로 음식 인식: 한 장 찍으면 칼로리와 영양소가 자동으로 기록돼요",
  lead: "칼로리표를 찾아볼 필요 없어요. 식사를 찍으면 AI가 칼로리와 3대 영양소를 추정해서 오늘 식단에 기록해요.",
  blocks: [
    {
      kind: "panels",
      what: [
        "식사를 찍으면 AI가 **칼로리**와 **단백질, 탄수화물, 지방**을 추정하고, 이번 인식의 정확도가 높은지도 알려줘요.",
        "한 번에 최대 3장까지 찍을 수 있어요. 다른 각도에서 한 장 더 찍으면 더 정확해요.",
        "사진을 찍고 싶지 않다면 [[food.mode.manual]] 모드로 바꿔서 이름과 칼로리를 직접 입력하세요.",
      ],
      where: [
        "하단 [[tab.cycle]] → [[cycle.tab.calories]] → 오른쪽 아래 주황색 **+** → [[food.add.title]].",
        "여기서 [[food.photo.take]] 버튼으로 바로 찍거나, [[food.photo.album]] 버튼으로 이미 있는 사진을 고르세요.",
        "[[tab.ai]] 탭에서 입력창 왼쪽 **+** → [[chat.menu.camera]] 항목을 탭해도 사진을 찍어 AI에게 물어볼 수 있어요. 예를 들면 「이건 무슨 기구야?」처럼요.",
      ],
      perms: [
        "**카메라**: 처음 [[food.photo.take]] 버튼을 탭할 때 시스템이 한 번 물어봐요.",
        "[[food.photo.album]]에서 사진을 고를 때는 보통 따로 권한이 필요 없어요.",
        "처음 AI 인식을 쓰기 전에, 사진이 AI 분석을 위해 전송된다는 안내가 먼저 나와요. 동의해야 다음으로 넘어가요. 인식하려면 인터넷 연결이 필요해요.",
        "무료 버전과 Pro 모두 쓸 수 있지만 횟수 제한이 있어요. 추가 화면 아래에 남은 횟수가 표시돼요.",
      ],
      fix: [
        "카메라를 거부하면 앱에 [[camera.permission.denied.title]] 안내가 떠요. [[camera.permission.denied.settings]] 버튼을 탭하면 시스템 설정으로 바로 이동해요.",
        "직접 가도 돼요: [=설정=] → [=개인정보 보호 및 보안=] → [=카메라=] → [=DAY 1=] 켜기.",
      ],
    },
    {
      kind: "steps",
      title: "식사 기록하기, 한 단계씩",
      items: [
        { shot: "food-today", alt: "주기 탭의 오늘 식단, 오른쪽 아래 주황색 더하기 버튼", text: "하단에서 [[tab.cycle]] 탭을 누르고, [[cycle.tab.calories]] 화면 오른쪽 아래 주황색 **+**를 탭하세요." },
        { shot: "food-add", alt: "식단 기록 추가 화면, AI Photo와 직접 입력 두 가지 방식", text: "기본은 [[food.mode.aiPhoto]] 모드예요. [[food.photo.take]] 버튼으로 찍거나 [[food.photo.album]] 버튼으로 사진을 고르세요. 몇 초 뒤 결과가 나오면 확인하고 저장하세요." },
      ],
    },
    {
      kind: "faq",
      title: "자주 묻는 질문",
      items: [
        { q: "인식된 칼로리는 정확한가요?", a: "무게를 잰 값이 아니라 추정치예요. 양이 잘 안 보이거나, 소스가 많거나, 여러 음식이 겹쳐 있으면 오차가 커져요. 결과 화면에 정확도가 표시돼요. 낮을 때는 안내에 따라 한 장 더 찍거나 숫자를 직접 고치세요." },
      ],
    },
  ],
};

const voice: Section = {
  id: "voice",
  nav: "음성 질문",
  title: "음성 질문: 기구를 들고 있어도 AI에게 물어볼 수 있어요",
  lead: "운동 중간에 타이핑하기 불편할 때는 그냥 말하세요. 앱이 글로 바꿔서 AI 코치에게 보내요.",
  blocks: [
    {
      kind: "panels",
      what: [
        "한 번 누르면 녹음이 시작되고, 말을 마친 뒤 2초 동안 멈추면 자동으로 끝나요. 글로 바뀐 뒤 AI에게 보내져요.",
        "무엇이든 물어보세요. 동작 요령, 세트 사이에 얼마나 쉴지, 오늘 무게를 올려도 될지 같은 것들이요.",
        "**Apple Watch에서는 음성을 쓸 수 없어요**. 운동 중 워치에서 3번째 페이지로 넘기면, 미리 준비된 질문 카드를 골라 iPhone의 AI 코치에게 보낼 수 있어요.",
      ],
      where: [
        "하단 [[tab.ai]] → 입력창 왼쪽 **+** → [[chat.menu.voice]].",
        "음성은 기본 화면인 [[ai.version.immersive]]에서만 쓸 수 있어요. AI 화면 오른쪽 위 설정에서 [[ai.version.classic]] 화면으로 바꿨다면 음성 버튼을 쓸 수 없어요.",
      ],
      perms: [
        "**음성 인식**과 **마이크** 두 가지 권한이 필요해요. 처음 [[chat.menu.voice]] 버튼을 탭하면 시스템이 차례로 물어봐요.",
        "워치에서 질문을 보내려면 iPhone의 DAY 1이 실행 중이어야 해요.",
      ],
      fix: [
        "음성 인식을 거부하면 앱에 [[voice.permission.denied]] 안내가 떠요.",
        "마이크를 거부하면 [[chat.menu.voice]] 버튼을 눌러도 아무 반응이 없어요.",
        "두 경우 모두 [=설정=] → [=개인정보 보호 및 보안=] → [=음성 인식=]과 [=마이크=]에서 각각 [=DAY 1=]을 켜세요.",
      ],
    },
    {
      kind: "steps",
      title: "AI 화면에서 음성 찾기",
      items: [
        { shot: "ai-home", alt: "AI 화면 첫 페이지, 자주 묻는 질문과 입력창", text: "하단에서 [[tab.ai]] 탭을 누르세요. 아래 자주 묻는 질문을 바로 탭해도 되고, 직접 입력해도 돼요." },
        { shot: "ai-plus", alt: "입력창 더하기 메뉴: 카메라, 앨범, 운동 플랜, 음성", text: "입력창 왼쪽 **+**를 탭하고 [[chat.menu.voice]] 항목을 고르세요. 여기서 [[chat.menu.camera]] 항목으로 사진을 찍거나, [[chat.menu.album]] 사진을 보내거나, [[chat.menu.sharePlan]] 항목으로 운동 플랜을 AI에게 보여 줄 수도 있어요." },
      ],
    },
  ],
};

const training: Section = {
  id: "training",
  nav: "운동 플랜과 기록",
  title: "운동: 먼저 플랜을 만들고, 한 세트씩 체크해요",
  lead: "플랜은 직접 만들어도 되고 AI에게 맡겨도 돼요. 운동할 때 한 세트를 마칠 때마다 한 번 탭하면 세트 간 휴식 시간이 자동으로 재지고, 운동이 끝나면 리뷰가 나와요.",
  blocks: [
    {
      kind: "panels",
      what: [
        "**직접 플랜 만들기**: 먼저 [[workout.category.strength]] 또는 [[workout.category.functional]] 중에서 고르고, 어디를 운동할지 정해요([[training.create.singlePart]], [[training.create.combo]], [[training.create.customCombo]]). 그다음 동작마다 무게, 세트 수, 횟수를 설정해요.",
        "**AI로 만들기**: [[smartPlan.card.title]] 카드를 탭하고 목표, 일주일에 운동하는 날 수, 가진 기구에 답하면 AI가 전체 플랜을 만들어 줘요. [[smartPlan.importAll]] 버튼으로 한꺼번에 가져올 수 있어요.",
        "**스크린샷 가져오기**: 다른 앱에서 본 플랜을 스크린샷으로 찍은 뒤 [[planHub.import.section]] 기능으로 DAY 1 플랜으로 바꿔요.",
        "운동을 마치면 이 플랜의 기록에 자동으로 저장돼요. 다음에 열면 지난번에 얼마나 했는지 볼 수 있어요.",
      ],
      where: [
        "하단 [[tab.training]]. 오른쪽 위 [[training.header.add]] 버튼으로 직접 만들고, 아래 [[smartPlan.card.title]] 카드로 AI에게 만들게 해요.",
        "오른쪽 위 가운데 아이콘은 [[planHub.title]] 메뉴예요. WShare, 공유 카드, 스크린샷 가져오기가 모두 여기 있어요.",
        "플랜을 열고 → [[training.plan.start]].",
      ],
      perms: [
        "**iPhone에서 운동을 기록할 때는 권한이 전혀 필요 없어요.**",
        "운동 리포트에서 심박수를 보려면 Apple Health 읽기 권한이 필요하고, 운동할 때 Apple Watch를 차고 있어야 해요.",
        "iPhone에서 기록한 운동은 「건강」 앱에 저장되지 **않아요**. Apple Watch에서 시작한 운동은 저장돼요.",
        "[[smartPlan.card.title]] 기능은 Pro가 필요해요. 직접 만들기와 스크린샷 가져오기는 무료예요.",
      ],
      fix: [
        "운동 리포트에 심박수가 없다면 [[tab.profile]] → [[cycle.profile.healthKitAuth]]에서 권한을 허용했는지, 운동할 때 워치를 차고 있었는지 확인하세요.",
        "AI 생성에 실패하면 [[smartPlan.error.failed]] 안내가 떠요. 네트워크를 확인하고 다시 탭하세요.",
      ],
    },
    {
      kind: "steps",
      title: "플랜 직접 만들기",
      items: [
        { shot: "training-empty", alt: "운동 탭, 아직 운동 플랜이 없음", text: "하단에서 [[tab.training]] 탭을 누르고, 오른쪽 위 [[training.header.add]] 버튼이나 가운데 [[training.empty.create]] 버튼을 탭하세요." },
        { shot: "create-plan", alt: "운동 플랜 만들기, 운동 종류와 운동 조합 선택", text: "먼저 종류를 고르고, 오늘 어디를 운동할지 고르세요. 예를 들면 가슴 데이, 푸시 데이요." },
        { shot: "add-exercise", alt: "동작의 목표 무게, 세트 수, 횟수 설정", text: "동작마다 **+**를 탭해서 목표 무게, 세트 수, 횟수를 정하고 추가를 탭하세요. 숫자를 탭하면 원하는 무게를 바로 입력할 수 있어요." },
        { shot: "plan-start", alt: "플랜 카드가 펼쳐져 동작 목록과 운동 시작 버튼이 보임", text: "운동 날짜를 고르고 저장하세요. 플랜이 운동 탭에 나타나요. 열어서 [[training.plan.start]] 버튼을 탭하면 돼요." },
      ],
    },
    {
      kind: "steps",
      title: "운동할 때",
      items: [
        { shot: "workout", alt: "운동 중 화면, 운동 진행률과 1세트 완료 버튼", text: "시작하기 전에 지금 컨디션을 한 번 묻고, 오늘의 운동 방법을 알려줘요. 운동에 들어가면 한 세트를 마칠 때마다 큰 버튼을 한 번 탭하세요." },
        { shot: "rest", alt: "세트 간 휴식 90초 카운트다운", text: "탭하면 [[active.rest.title]] 카운트다운이 자동으로 시작돼요. 충분히 쉬었다면 [[active.rest.skip]] 버튼을 탭해도 돼요." },
        { shot: "review", alt: "운동 리뷰, 이번 운동은 어땠나요", text: "모두 마치면 오른쪽 위 [[active.header.end]] 버튼을 탭하세요. 이번 운동의 느낌을 고르고 [[decision.postWorkout.diaryLabel]]에 몇 줄 적은 뒤 [[decision.postWorkout.saveRecord]] 버튼을 탭하세요." },
        { shot: "done", alt: "운동 완료, 회복·식단·운동 주기 세 가지 조언", text: "마지막으로 회복, 식단, 다음 운동에 대한 조언이 나와요. 더 자세히 묻고 싶으면 아래 입력창에서 바로 AI에게 물어보세요." },
      ],
    },
    {
      kind: "faq",
      title: "자주 묻는 질문",
      items: [
        { q: "Apple Watch에서 운동을 기록할 수 있나요?", a: "네. iPhone에서 운동을 시작하면 워치의 DAY 1도 함께 열려요. 워치에서 바로 자유 운동을 시작해서 시간, 심박수, 칼로리를 기록할 수도 있어요. 워치에서 한 운동은 「건강」 앱에 저장돼요." },
        { q: "운동 중간에 동작을 바꾸거나 무게를 고치고 싶어요", a: "운동 중에는 동작마다 오른쪽 위에 편집 버튼이 있어서 무게, 세트 수, 횟수를 바꿀 수 있어요. 위쪽 **+**로 그 자리에서 동작을 추가할 수도 있어요." },
      ],
    },
  ],
};

const coach: Section = {
  id: "coach",
  nav: "AI 코치",
  title: "AI 코치: 오늘 내 컨디션을 아는 운동 파트너",
  lead: "운동, 식사, 회복 무엇이든 물어보세요. 허용하면 수면, 심박수, 운동 기록을 참고해서 답해요.",
  blocks: [
    {
      kind: "panels",
      what: [
        "운동, 식단, 회복 질문에 답해요. 예를 들면 [[immersive.suggest.training]], [[immersive.suggest.progress]] 같은 질문이요.",
        "기구 사진을 찍어서 이게 뭔지, 어떻게 쓰는지 물어볼 수 있어요.",
        "생각의 깊이는 두 가지예요. [[ai.tier.flash]] 모드는 답이 빠르고, [[ai.tier.professional]] 모드는 더 꼼꼼하게 생각해요.",
        "[[tab.profile]] → [[profile.aiMode.title]]에서 [[workout.category.strength]] 또는 [[profile.aiMode.functional]] 중 하나를 고르면, 고른 방향에 맞춰 답해요.",
      ],
      where: [
        "하단 [[tab.ai]]. 왼쪽 위 [[ai.history.title]]에서 예전 대화를 다시 찾을 수 있어요.",
        "운동 중 화면 위쪽의 [[coach.title]] 카드에서도 언제든 물어볼 수 있어요.",
        "운동을 마친 완료 화면 아래에도 입력창이 있어요. 「오늘 운동 어땠어?」라고 바로 물어보세요.",
      ],
      perms: [
        "글로 대화할 때는 **시스템 권한이 필요 없어요**. 음성은 마이크와 음성 인식, 사진은 카메라 권한이 필요해요.",
        "앱에서 건강 데이터 공유에 동의해야만 AI가 수면, 심박수, HRV를 볼 수 있어요. 동의하지 않아도 대화는 되지만, 답에 내 몸 상태가 반영되지 않아요.",
        "하루 대화 횟수에 제한이 있고, 무료 버전과 Pro가 달라요. 다 쓰면 안내가 뜨고, 다음 날 다시 쓸 수 있어요.",
      ],
      fix: [
        "[[ai.error.noNetwork]] 안내가 뜨면: AI는 인터넷 연결이 필요해요. 연결한 뒤 다시 시도하세요.",
        "횟수를 다 썼다는 안내가 뜨면: 다음 날까지 기다리거나 [[tab.profile]] → [[sub.title]]에서 Pro를 확인하세요.",
      ],
    },
    {
      kind: "steps",
      title: "어디서부터 물어볼까요",
      items: [
        { shot: "ai-home", alt: "AI 화면 첫 페이지, 자주 묻는 질문과 입력창", text: "처음이라 뭘 물어볼지 모르겠다면 아래 자주 묻는 질문을 바로 탭하세요." },
        { shot: "ai-plus", alt: "입력창 더하기 메뉴: 카메라, 앨범, 운동 플랜, 음성", text: "입력창 왼쪽 **+**에서 사진을 찍어 기구에 대해 묻거나, 앨범 사진을 보내거나, 내 운동 플랜을 AI에게 보여 주거나, 음성으로 물어볼 수 있어요." },
      ],
    },
  ],
};

const report: Section = {
  id: "report",
  nav: "AI 주간 리포트",
  title: "AI 주간 리포트: 이번 주 운동을 한 페이지로 한눈에",
  lead: "이번 주의 운동, 수면, 심박수, 체중을 한데 모아 보여 줘요. 어디가 좋아졌는지, 무엇을 조심해야 하는지, 다음 주를 어떻게 짜면 좋을지 알려줘요.",
  blocks: [
    {
      kind: "panels",
      what: [
        "[[cycle.weeklyReport.overviewTitle]], [[cycle.weeklyReport.comparisonTitle]], [[cycle.weeklyReport.stateChartTitle]], [[cycle.weeklyReport.aiTitle]] 등 몇 부분으로 나뉘어요.",
        "AI 요약에는 다섯 가지가 담겨요. 이번 주 개요, 운동 하이라이트, 주의할 점, 몸 상태, 다음 주 제안이에요.",
        "사용하는 데이터: 앱의 운동 기록, 그리고 「건강」 앱의 운동, 수면, 안정 시 심박수, HRV, 체중.",
      ],
      where: [
        "[[tab.home]]에서 아래로 스크롤해서 [[home.weekly.title]] 아래의 [[home.weeklyReport.title]] 카드를 탭하세요.",
        "정해진 생성 요일은 없어요. **열 때마다 이번 주 데이터로 만들어요**. 같은 날 다시 열면 같은 리포트가 나오고, 왼쪽 위 새로고침으로 다시 만들 수 있어요.",
      ],
      perms: [
        "Pro가 필요해요.",
        "앱에서 민감한 개인정보 처리에 동의하고 Apple Health 읽기 권한을 허용해야 리포트에 수면과 심박수 내용이 채워져요.",
      ],
      fix: [
        "[[cycle.weeklyReport.localNoData]] 문구가 보이면: 이번 주 운동 기록이 아직 없는 거예요. 한 번 운동한 뒤 다시 보세요.",
        "AI에 잠시 연결되지 않으면 간단한 리포트가 먼저 나와요. 인터넷에 연결된 뒤 새로고침하면 돼요.",
      ],
    },
  ],
};

const share: Section = {
  id: "share",
  nav: "WShare로 플랜 공유",
  title: "WShare: 친구와 마주 보고 운동 플랜 주고받기",
  lead: "iPhone 두 대를 가까이 두고 비밀번호를 입력하면 플랜이 넘어가요. 받은 뒤에는 AI가 받는 사람 상황에 맞춰 한 버전을 조정해 줘요.",
  blocks: [
    {
      kind: "panels",
      what: [
        "내 플랜 하나를 옆에 있는 친구에게 바로 보내요. 스크린샷도, 친구 추가도 필요 없어요.",
        "전송은 Apple의 근거리 직접 연결을 쓰고, 처음부터 끝까지 암호화돼요. 연결된 뒤에는 서로 인증 코드도 한 번 확인해요.",
        "친구가 받으면 AI가 그 친구의 데이터에 맞춰 한 버전을 조정해요. 친구는 [[adjust.adoptAdjusted]], [[adjust.useOriginal]], [[adjust.continueChat]] 중에서 고를 수 있어요.",
        "옆에 없다면 [[planHub.shareCard.title]] 기능으로 이미지를 만들어 보내세요.",
      ],
      where: [
        "**보내기**: [[tab.training]] → 공유할 플랜을 길게 누르기 → [[share.plan.shareAction]] → [[planHub.bump.title]] → [[bump.choice.send]]. 화면에 비밀번호가 나오면 친구에게 알려 주세요.",
        "**받기**: [[tab.training]] → 오른쪽 위 [[planHub.title]] 아이콘 → [[planHub.bump.title]] → [[bump.choice.receive]]. 친구가 알려 준 6자리 비밀번호를 입력하세요.",
        "연결되면 [[bump.verify.title]] 화면의 인증 코드를 서로 확인하고, 같으면 [[bump.verify.confirm]] 버튼을 탭하세요.",
      ],
      perms: [
        "**로컬 네트워크**: WShare를 처음 열면 DAY 1이 로컬 네트워크의 기기를 찾아도 되는지 시스템이 물어봐요. 허용을 탭하세요.",
        "두 휴대폰 모두 DAY 1이 설치돼 있어야 하고, 둘 다 Pro가 필요해요.",
        "플랜을 받은 뒤 AI가 조정하는 단계에는 인터넷 연결이 필요해요.",
      ],
      fix: [
        "[[bump.error.startFailed]] 안내가 뜨면 [=설정=] → [=개인정보 보호 및 보안=] → [=로컬 네트워크=]에서 [=DAY 1=]을 켜세요.",
        "두 휴대폰 모두 Wi‑Fi와 블루투스를 켜고, 조금 더 가까이 두고 다시 시도하세요.",
        "AI 조정에 실패하면 플랜이 저장되지 않아요. 인터넷에 연결한 뒤 상대에게 다시 보내 달라고 하세요.",
      ],
    },
    {
      kind: "steps",
      title: "받는 사람은 여기서 들어가요",
      items: [
        { shot: "plan-tools", alt: "플랜 도구: WShare, 공유 카드, 스크린샷 가져오기", text: "운동 탭 오른쪽 위의 [[planHub.title]] 아이콘을 탭하고 [[planHub.bump.title]] 항목을 고르세요. 스크린샷 가져오기도 이 화면에 있어요." },
      ],
    },
  ],
};

const permissions: Section = {
  id: "permissions",
  nav: "권한 한눈에 보기",
  title: "DAY 1이 요청하는 권한",
  lead: "각 권한은 해당 기능을 처음 쓸 때만 물어봐요. 허용하지 않아도 앱은 쓸 수 있어요. 그 기능만 못 쓰거나 덜 정확해져요.",
  blocks: [
    {
      kind: "table",
      title: "iPhone 권한",
      head: ["권한", "어디에 쓰나요", "언제 묻나요", "허용하지 않으면"],
      rows: [
        ["건강(읽기)", "신호등, 수면, 운동 심박수", "[[home.watch.disconnected]] → [[health.mode.connectApple]] 탭", "신호등을 체크인으로만 추정"],
        ["건강(쓰기)", "체중, 활동 에너지, 체지방률을 「건강」 앱에 기록", "읽기와 같은 시스템 화면", "사용에 영향 없음"],
        ["카메라", "음식 촬영, 기구 사진으로 AI에게 질문, 프로필 사진 변경", "처음 사진 찍기를 탭할 때", "앨범에서만 사진 선택 가능"],
        ["음성 인식 + 마이크", "음성 질문", "처음 [[chat.menu.voice]] 버튼을 탭할 때", "타이핑만 가능"],
        ["로컬 네트워크", "WShare로 마주 보고 플랜 전송", "처음 [[planHub.bump.title]] 기능을 쓸 때", "마주 보고 보낼 수 없음. 대신 [[planHub.shareCard.title]] 사용 가능"],
        ["알림", "운동 알림", "[[cycle.reminder.enableLabel]] 항목을 켜고 저장할 때", "알림을 받을 수 없음"],
      ],
    },
    {
      kind: "table",
      title: "DAY 1이 「건강」 앱에서 읽는 데이터",
      intro: "이 데이터는 신호등 계산, 주간 리포트 작성, 운동 분석에만 써요.",
      head: ["분류", "세부 항목"],
      rows: [
        ["회복", "심박 변이도(HRV), 안정 시 심박수, 심박수, 수면, 체온"],
        ["활동", "걸음 수, 활동 에너지, 기초 대사 에너지, 운동 기록"],
        ["신체", "체중, 키, 체지방률, 성별, 생년월일, 생리 주기"],
      ],
    },
    {
      kind: "callout",
      title: "Apple Watch 권한",
      body: "워치에서 DAY 1을 처음 열면 심박수, 안정 시 심박수, HRV, 수면 읽기와 알림 권한을 물어봐요. 워치에서 처음 운동을 시작할 때는 운동 기록 쓰기 권한을 한 번 더 물어봐요. iPhone에서 [=모두 켜기=]를 탭해도 워치에는 자동으로 적용되지 않아요. 워치에서도 허용을 한 번 탭해야 해요.",
    },
    {
      kind: "faq",
      title: "권한을 바꾸고 싶어요",
      items: [
        { q: "모든 권한은 어디서 한 번에 바꾸나요?", a: "iPhone 설정 → 개인정보 보호 및 보안에서 해당 권한 이름(건강, 카메라, 마이크, 음성 인식, 로컬 네트워크)을 탭하고 DAY 1을 찾으세요. 알림은 설정 → 알림 → DAY 1에 있어요." },
        { q: "DAY 1은 위치나 블루투스를 쓰나요?", a: "아니요. DAY 1은 위치와 블루투스 권한을 요청하지 않아요." },
      ],
    },
  ],
};

export const ko: GuideDoc = {
  metaTitle: "사용 가이드",
  metaDescription: "DAY 1을 처음 쓴다면: Apple Health를 연결하고, 워치를 차고 하룻밤 자고, 다음 날 아침 신호등을 확인하세요. 기능별로 필요한 권한과 거부했을 때 다시 켜는 방법도 정리했어요.",
  eyebrow: "사용 가이드",
  heroTitle: ["DAY 1을 처음 쓴다면,", "이 3단계만 따라 하세요."],
  heroLead: "DAY 1의 신호등은 어젯밤 몸 데이터로 오늘 어떻게 운동할지 판단해요. 아래 세 단계를 마치면 다음 날 아침, 처음으로 나만의 신호등을 볼 수 있어요.",
  quick: [
    { t: "Apple Health 연결하기", d: "앱을 열고 홈의 [[home.watch.disconnected]] 카드를 탭하세요. [[health.mode.connectApple]] 항목을 고르고, 권한 화면에서 [=모두 켜기=]를 탭하세요." },
    { t: "워치를 차고 하룻밤 자기", d: "심박 변이도(HRV)는 대부분 잠들어 있을 때 측정돼요. 워치 없이 자면 신호등은 설문으로만 추정할 수 있어요." },
    { t: "아침에 30초 체크인", d: "다음 날 앱을 열고 홈의 [[decision.daily.newDay]] 카드를 탭하세요. 짧은 질문 6개에 답하면 바로 오늘의 신호등이 나와요." },
  ],
  stepLabel: "{n}단계",
  tocLabel: "가이드 목차",
  panelLabels: { what: "할 수 있는 것", where: "앱 어디에 있나요", perms: "필요한 권한", fix: "거부했거나 연결이 안 될 때" },
  shotNote: "스크린샷은 중국어판 화면이에요. 한국어판도 버튼 위치는 같고, 버튼 이름은 본문에 적힌 대로예요.",
  contactText: "궁금한 점이 더 있나요? 메일로 바로 문의하세요:",
  backHome: "홈으로",
  sections: [readiness, training, coach, food, voice, report, share, permissions],
};
