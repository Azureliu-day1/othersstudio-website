import type { GuideDoc, Section } from "../types";

/**
 * 繁體中文（香港）。照 zh.ts 轉寫，結構、id、截圖檔名保持一致。
 * 雙方括號包住 App 文案鍵，渲染時自動換成 App 繁體版的原文；[=文字=] 是 iOS（繁體中文（香港））系統介面上的字。
 */

const readiness: Section = {
  id: "readiness",
  nav: "紅綠燈與 Apple Health",
  title: "紅綠燈：每天早上告訴你今天怎樣練",
  lead: "這是 DAY 1 最核心的功能，也是最需要你先做好設定的功能。沒有連接 Apple Health，它就只能靠問卷粗略估算。",
  blocks: [
    {
      kind: "panels",
      what: [
        "每天早上讀取你昨晚的 **心率變異性（HRV）**、**靜止心率** 和 **睡眠**，與你自己過去 60 晚的數據比較，給出 0–100 分和一盞燈。",
        "綠燈：恢復良好，按計劃練。黃燈：未完全恢復，減量或降低強度。紅燈：以恢復為主，休息或伸展。",
        "同時給你兩套當天的練法，標着 [[decision.planCard.recommended]] 的就是最合適的那套。",
      ],
      where: [
        "[[tab.home]] 最上方那張大卡片就是紅綠燈。",
        "每天第一次打開時，這張卡片會顯示 [[decision.daily.newDay]]。點它完成 30 秒打卡，卡片就會變成 [[decision.readiness.todayAdvice]] 和一盞燈。",
        "之後**點一下**這張卡片進入詳情頁，就能看到分數是怎樣算出來的、哪一項在拉低分數。",
      ],
      perms: [
        "**Apple Health 讀取權限**（HRV、靜止心率、心率、睡眠、步數等）。",
        "注意：App 第一次打開時**不會**自動向你要求這個權限，需要你自己點一次連接。",
        "想要 HRV，還需要 **戴着 Apple Watch 睡覺**。",
      ],
      fix: [
        "**在 App 內：**底部 [[tab.profile]] → [[cycle.profile.healthKitAuth]]，再點一次。",
        "**在 iPhone 設定中：**[=設定=] → [=私隱與保安=] → [=健康=] → [=DAY 1=]，把讀取的項目全部開啟。",
        "如果之前已拒絕過系統彈出視窗，在 App 內再點也不會彈出，這時只能經 iPhone 設定開啟。",
      ],
      fixImage: { shot: "me-healthkit", alt: "「我的」頁面中的「設備管理」和「HealthKit 授權」兩行", w: 720, h: 242 },
    },
    {
      kind: "steps",
      title: "第一次連接 Apple Health，一步一步來",
      intro: "以下都是 App 的真實畫面，照着點就可以。",
      items: [
        { shot: "health-source", alt: "健康數據來源選擇頁，三個選項", text: "在 [[tab.home]] 點 [[home.watch.disconnected]] 卡片，彈出 [[health.mode.title]]，選第一項 [[health.mode.connectApple]]。" },
        { shot: "ios-sheet", alt: "iOS 健康授權頁，開關全部關閉", text: "系統彈出「健康取用權限」，開關預設全部關閉。點 [=全部開啟=]。" },
        { shot: "ios-sheet-allowed", alt: "iOS 健康授權頁，開關全部開啟，底部允許按鈕變藍", text: "開關全部變綠後，點最下方藍色的 [=允許=]。" },
        { shot: "home-readiness", alt: "主頁，連接卡片已消失，顯示今日訓練建議黃燈", text: "回到主頁，[[home.watch.disconnected]] 卡片不見了，就代表已連接。" },
      ],
    },
    {
      kind: "callout",
      title: "授權頁底部的小字寫着「FitTrack」？",
      body: "FitTrack 是 DAY 1 以前的名字，是同一個 App。授權頁標題寫的是「DAY 1 想取用並更新你的健康資料」，可以放心允許。",
    },
    {
      kind: "steps",
      title: "第二天早上：30 秒打卡",
      intro: "打開 App，主頁會出現 [[decision.daily.newDay]] 卡片。點進去按次序完成，就能看到今天的燈和兩套訓練方案。",
      items: [
        { shot: "sleep-fill", alt: "昨晚未記錄到睡眠，手動填寫睡眠時數", text: "如果手錶昨晚沒有記錄到睡眠，會先問你睡了多久。拖到大約的小時數，點 [[manual.input.done]]。戴錶睡覺就不會出現這一步。" },
        { shot: "checkin", alt: "晨間打卡第 1 題，今天感覺如何", text: "回答 6 條小問題，每題點一個最接近的選項，再點 [[common.next]]。憑第一感覺選就可以。" },
        { shot: "checkin-result", alt: "打卡結果，黃燈 59 分，方案 A 正常訓練、方案 B 輕量訓練", text: "得出結果：一盞燈、一個分數、兩套方案。標着 [[decision.planCard.recommended]] 的就是今天最合適的練法。" },
      ],
    },
    {
      kind: "timeline",
      title: "為甚麼頭幾天的燈「不太準」",
      intro: "紅綠燈是和**你自己**比較，不是和別人比較，所以它需要先認識你。這段時間詳情頁會顯示 [[baseline.status.learning]]，這是正常的。",
      items: [
        { n: "第 1–3 晚", d: "數據還少，先用通用標準判斷" },
        { n: "第 4–10 晚", d: "逐步換成你的個人基線，分數平穩過渡，不會突然跳動" },
        { n: "第 14 晚以後", d: "個人基線穩定，燈最準" },
      ],
      note: "中間哪一晚沒有戴錶，不會歸零，只是那一晚不計算在內。",
    },
    {
      kind: "options",
      title: "沒有 Apple Watch 也能用",
      intro: "在 [[health.mode.title]] 中還有兩個選項。燈會比戴錶時粗略一些，但每天的訓練建議照樣會有：",
      items: [
        { t: "[[health.mode.connectApple]]", d: "透過 Apple Watch 等裝置自動同步數據", tag: "最準" },
        { t: "[[health.mode.manual]]", d: "每天手動輸入睡眠等關鍵數據" },
        { t: "[[health.mode.skip]]", d: "透過晨間打卡評估身體狀態" },
      ],
    },
    {
      kind: "faq",
      title: "還是不對？",
      items: [
        { q: "已連接 Apple Health，詳情頁還是看不到 HRV", a: "確認昨晚有戴着手錶睡覺，而且 iPhone「健康」App 中能看到昨晚的心率變異性。手錶只會在你睡着、靜止時量度 HRV，日間量度的不會計入當晚。" },
        { q: "主頁的「連接 Apple Watch」卡片一直都在", a: "代表授權沒有全部給予。前往 iPhone 設定 → 私隱與保安 → 健康 → DAY 1，把讀取的項目全部開啟，再回到 App。" },
        { q: "每天早上都要我補填睡眠", a: "代表 App 沒有讀取到手錶的睡眠記錄。確認睡覺時有戴着手錶，而且 iPhone「健康」App 中能看到昨晚的睡眠。如果沒有手錶，每天填一下時數就可以，燈會參考它。" },
        { q: "換了手錶 / 重新安裝 App 後，燈又變回「學習中」", a: "個人基線跟隨你的健康數據。重新安裝後再連接 Apple Health 即可，歷史數據仍在「健康」中，幾天內就會恢復。" },
      ],
    },
  ],
};

const food: Section = {
  id: "food",
  nav: "拍照識別食物",
  title: "拍照識別食物：拍一張，熱量和營養自動記錄",
  lead: "不用查熱量表。拍下這一餐，AI 估算熱量和三大營養素，記錄到今天的飲食中。",
  blocks: [
    {
      kind: "panels",
      what: [
        "拍下一餐，AI 估算 **熱量** 和 **蛋白質、碳水化合物、脂肪**，並告訴你這次識別的準確度高不高。",
        "每次最多 3 張相片。從不同角度多拍一張，識別會更準。",
        "不想拍照，就切換到 [[food.mode.manual]]，自己填寫名稱和熱量。",
      ],
      where: [
        "底部 [[tab.cycle]] → [[cycle.tab.calories]] → 右下角橙色 **+** → [[food.add.title]]。",
        "在這裏選 [[food.photo.take]] 即時拍攝，或者點 [[food.photo.album]] 選擇已有的相片。",
        "在 [[tab.ai]] 頁點輸入框左邊的 **+** → [[chat.menu.camera]]，也能拍照問 AI，例如「這是甚麼器械」。",
      ],
      perms: [
        "**相機**：第一次點 [[food.photo.take]] 時，系統會詢問一次。",
        "從 [[food.photo.album]] 選圖一般不需要額外授權。",
        "第一次使用 AI 識別前，App 會先說明相片會傳送給 AI 分析，你同意後才會繼續。識別需要連接網絡。",
        "免費版和 Pro 都能使用，但有次數上限。新增頁底部會顯示還剩多少次。",
      ],
      fix: [
        "拒絕相機權限後，App 會提示 [[camera.permission.denied.title]]，點 [[camera.permission.denied.settings]] 會直接跳到系統設定。",
        "也可以手動前往：[=設定=] → [=私隱與保安=] → [=相機=] → 開啟 [=DAY 1=]。",
      ],
    },
    {
      kind: "steps",
      title: "記錄一餐，一步一步來",
      items: [
        { shot: "food-today", alt: "週期頁的今日飲食，右下角橙色加號", text: "底部點 [[tab.cycle]]，在 [[cycle.tab.calories]] 頁點右下角橙色的 **+**。" },
        { shot: "food-add", alt: "新增食物記錄頁，AI Photo 和自己填寫兩種方式", text: "預設是 [[food.mode.aiPhoto]]。點 [[food.photo.take]] 拍照，或 [[food.photo.album]] 選圖，等幾秒得出結果，確認後儲存。" },
      ],
    },
    {
      kind: "faq",
      title: "常見問題",
      items: [
        { q: "識別出來的熱量準確嗎？", a: "這是估算，不是磅重。份量看不清、醬汁多、幾款菜疊在一起時，誤差會較大。結果頁會標示準確度，偏低時按提示補拍一張，或者手動修改數字。" },
      ],
    },
  ],
};

const voice: Section = {
  id: "voice",
  nav: "語音提問",
  title: "語音提問：手上拿着器械，也能問 AI",
  lead: "訓練期間不方便打字時，直接說出來，App 會轉成文字傳送給 AI 教練。",
  blocks: [
    {
      kind: "panels",
      what: [
        "按一下就開始錄音，說完停頓 2 秒自動結束，轉成文字後傳送給 AI。",
        "問甚麼都可以：動作要點、組間休息多久、今天該不該加重量。",
        "**Apple Watch 上不能使用語音**。訓練中在手錶上滑到第 3 頁，可以選一張預設問題卡片，傳送給手機上的 AI 教練。",
      ],
      where: [
        "底部 [[tab.ai]] → 輸入框左邊的 **+** → [[chat.menu.voice]]。",
        "只有預設的 [[ai.version.immersive]] 介面有語音功能。如果在 AI 頁右上角的設定中切換到 [[ai.version.classic]]，語音按鈕就無法使用。",
      ],
      perms: [
        "**語音辨識** 和 **咪高峰** 兩項權限。第一次點 [[chat.menu.voice]] 時，系統會依次詢問。",
        "手錶傳送問題時，需要手機上的 DAY 1 正在運行。",
      ],
      fix: [
        "拒絕了語音辨識，App 會提示 [[voice.permission.denied]]。",
        "拒絕了咪高峰，點 [[chat.menu.voice]] 會沒有反應。",
        "兩種情況都要前往：[=設定=] → [=私隱與保安=] → [=語音辨識=] 和 [=咪高峰=]，分別開啟 [=DAY 1=]。",
      ],
    },
    {
      kind: "steps",
      title: "在 AI 頁找到語音",
      items: [
        { shot: "ai-home", alt: "AI 頁首頁，有常用問題和輸入框", text: "底部點 [[tab.ai]]。可以直接點下面的常用問題，也可以自己輸入。" },
        { shot: "ai-plus", alt: "輸入框加號選單：拍照、相簿、訓練計劃、語音", text: "點輸入框左邊的 **+**，選 [[chat.menu.voice]]。這裏也能 [[chat.menu.camera]]、傳送 [[chat.menu.album]] 相片，或者把 [[chat.menu.sharePlan]] 傳給 AI 看。" },
      ],
    },
  ],
};

const training: Section = {
  id: "training",
  nav: "訓練計劃與記錄",
  title: "訓練：先建立計劃，再逐組剔選",
  lead: "計劃可以自己建立，也可以讓 AI 生成。練習時每完成一組點一下，組間休息自動計時，練完會有檢討。",
  blocks: [
    {
      kind: "panels",
      what: [
        "**自己建立計劃**：先選 [[workout.category.strength]] 或 [[workout.category.functional]]，再選練哪個部位（[[training.create.singlePart]]、[[training.create.combo]] 或 [[training.create.customCombo]]），為每個動作設定重量、組數、次數。",
        "**讓 AI 生成**：點 [[smartPlan.card.title]]，回答目標、每星期練幾天、有甚麼器材，AI 會生成一整套計劃，可以 [[smartPlan.importAll]]。",
        "**截圖匯入**：在其他 App 看到的計劃，截圖後用 [[planHub.import.section]] 識別成 DAY 1 的計劃。",
        "練完會自動記錄到這份計劃的歷史中，下次打開就能看到上次練了多少。",
      ],
      where: [
        "底部 [[tab.training]]。右上角 [[training.header.add]] 手動建立；下面的 [[smartPlan.card.title]] 卡片讓 AI 建立。",
        "右上角中間的圖示是 [[planHub.title]]：碰一碰、分享卡片、截圖匯入都在這裏。",
        "打開一份計劃 → [[training.plan.start]]。",
      ],
      perms: [
        "**在手機上記錄訓練不需要任何權限。**",
        "想在訓練報告中看到心率，需要 Apple Health 讀取權限，而且訓練時要戴着 Apple Watch。",
        "在 iPhone 上記錄的訓練**不會**寫入「健康」App。在 Apple Watch 上開始的訓練則會寫入。",
        "[[smartPlan.card.title]] 需要 Pro。手動建立計劃和截圖匯入免費。",
      ],
      fix: [
        "訓練報告顯示沒有心率：確認 [[tab.profile]] → [[cycle.profile.healthKitAuth]] 已授權，而且訓練時有戴着手錶。",
        "AI 生成失敗時會提示 [[smartPlan.error.failed]]，檢查網絡後再點一次。",
      ],
    },
    {
      kind: "steps",
      title: "手動建立一份計劃",
      items: [
        { shot: "training-empty", alt: "訓練頁，還沒有訓練計劃", text: "底部點 [[tab.training]]，點右上角 [[training.header.add]]，或者中間的 [[training.empty.create]]。" },
        { shot: "create-plan", alt: "建立訓練計劃，選擇訓練類型和訓練組合", text: "先選類型，再選今天練哪裏，例如胸部日、推日。" },
        { shot: "add-exercise", alt: "設定動作的目標重量、組數、次數", text: "每個動作點 **+**，設定目標重量、組數、次數，點新增。點數字可以直接輸入任何重量。" },
        { shot: "plan-start", alt: "計劃卡片展開，顯示動作和開始訓練按鈕", text: "選好訓練日期，儲存。計劃會出現在訓練頁，打開就能 [[training.plan.start]]。" },
      ],
    },
    {
      kind: "steps",
      title: "練習的時候",
      items: [
        { shot: "workout", alt: "訓練進行中頁面，訓練進度和完成第 1 組按鈕", text: "開始前會先問你現在的狀態，給出今天的練法。進入訓練後，每完成一組點一下大按鈕。" },
        { shot: "rest", alt: "組間休息倒數 90 秒", text: "點完自動開始 [[active.rest.title]] 倒數。休息夠了可以 [[active.rest.skip]]。" },
        { shot: "review", alt: "訓練檢討，這次訓練感覺如何", text: "全部練完後點右上角 [[active.header.end]]，選擇這次的感覺，寫幾句 [[decision.postWorkout.diaryLabel]]，點 [[decision.postWorkout.saveRecord]]。" },
        { shot: "done", alt: "訓練完成，恢復、飲食、訓練循環三項建議", text: "最後會給出恢復、飲食和下次訓練的建議。想再細問，直接在下面的輸入框問 AI。" },
      ],
    },
    {
      kind: "faq",
      title: "常見問題",
      items: [
        { q: "可以在 Apple Watch 上記錄訓練嗎？", a: "可以。在手機上點開始訓練，會同時啟動手錶上的 DAY 1；也可以直接在手錶上開始一次自由訓練，記錄時長、心率和卡路里。手錶上的訓練會寫入「健康」App。" },
        { q: "練到一半想換動作或改重量", a: "訓練中每個動作右上角都有編輯按鈕，可以修改重量、組數、次數；頂部的 **+** 可以臨時加入動作。" },
      ],
    },
  ],
};

const coach: Section = {
  id: "coach",
  nav: "AI 教練",
  title: "AI 教練：了解你今天狀態的訓練夥伴",
  lead: "問訓練、問飲食、問恢復都可以。如果你允許，它會參考你的睡眠、心率和訓練記錄來回答。",
  blocks: [
    {
      kind: "panels",
      what: [
        "回答訓練、飲食、恢復問題，例如 [[immersive.suggest.training]]、[[immersive.suggest.progress]]。",
        "拍一張器械相片，問它這是甚麼、怎樣使用。",
        "兩種思考深度：[[ai.tier.flash]] 回答快，[[ai.tier.professional]] 想得更仔細。",
        "可以在 [[tab.profile]] → [[profile.aiMode.title]] 選 [[workout.category.strength]] 或 [[profile.aiMode.functional]]，回答會按你選的方向進行。",
      ],
      where: [
        "底部 [[tab.ai]]。左上角 [[ai.history.title]] 可以找回以前的對話。",
        "訓練中頁面上方的 [[coach.title]] 卡片，也能隨時發問。",
        "練完後的完成頁底部有輸入框，直接問「我今天練得怎樣」。",
      ],
      perms: [
        "**不需要系統權限**就能打字聊天。語音需要咪高峰和語音辨識，拍照需要相機。",
        "只有你在 App 內同意分享健康數據，AI 才會看到你的睡眠、心率、HRV。不同意也能聊天，只是回答不會結合你的身體狀態。",
        "每天有對話次數上限，免費版和 Pro 不同。用完會有提示，第二天恢復。",
      ],
      fix: [
        "提示 [[ai.error.noNetwork]]：AI 需要連接網絡，連上網絡後再試。",
        "提示次數已用完：等到第二天，或在 [[tab.profile]] → [[sub.title]] 查看 Pro。",
      ],
    },
    {
      kind: "steps",
      title: "從哪裏開始問",
      items: [
        { shot: "ai-home", alt: "AI 頁首頁，有常用問題和輸入框", text: "第一次不知道問甚麼，直接點下面的常用問題。" },
        { shot: "ai-plus", alt: "輸入框加號選單：拍照、相簿、訓練計劃、語音", text: "輸入框左邊的 **+**：拍照問器械、傳送相簿相片、把你的訓練計劃傳給 AI 看，或者用語音發問。" },
      ],
    },
  ],
};

const report: Section = {
  id: "report",
  nav: "AI 週報",
  title: "AI 週報：這星期練得怎樣，一頁看清",
  lead: "把你這星期的訓練、睡眠、心率和體重放在一起看，告訴你哪裏進步了、哪裏要注意、下星期怎樣安排。",
  blocks: [
    {
      kind: "panels",
      what: [
        "分為 [[cycle.weeklyReport.overviewTitle]]、[[cycle.weeklyReport.comparisonTitle]]、[[cycle.weeklyReport.stateChartTitle]] 和 [[cycle.weeklyReport.aiTitle]] 幾部分。",
        "AI 總結會寫五件事：本週總覽、訓練亮點、需要關注、身體狀態、下週建議。",
        "用到的數據：App 內的訓練記錄，加上「健康」中的訓練、睡眠、靜止心率、HRV 和體重。",
      ],
      where: [
        "[[tab.home]] 向下捲動，在 [[home.weekly.title]] 下面點 [[home.weeklyReport.title]] 卡片。",
        "沒有固定的生成日：**每次打開時按本週數據生成**。同一天再打開會用同一份，左上角重新整理可以重新生成。",
      ],
      perms: [
        "需要 Pro。",
        "需要你在 App 內同意過處理敏感個人資料，以及 Apple Health 讀取權限，週報中的睡眠、心率才會有內容。",
      ],
      fix: [
        "顯示 [[cycle.weeklyReport.localNoData]]：這星期還沒有訓練記錄，先練一次再來看。",
        "AI 暫時連接不上時，會先給你一份簡版週報，連接網絡後重新整理即可。",
      ],
    },
  ],
};

const share: Section = {
  id: "share",
  nav: "碰一碰分享計劃",
  title: "碰一碰：和朋友面對面傳送訓練計劃",
  lead: "兩部 iPhone 放在一起，輸入一個密碼，計劃就傳過去了。收到後 AI 會按對方自己的情況調整一個版本。",
  blocks: [
    {
      kind: "panels",
      what: [
        "把你的一份計劃直接傳給身邊的朋友，不用截圖，也不用加朋友。",
        "傳送經由 Apple 的近距離直接連線，全程加密，連接後雙方還要核對一次驗證碼。",
        "朋友收到後，AI 會按他自己的數據調整一個版本，他可以選 [[adjust.adoptAdjusted]]、[[adjust.useOriginal]]，或者 [[adjust.continueChat]]。",
        "不在身邊？用 [[planHub.shareCard.title]] 生成一張圖片傳給他。",
      ],
      where: [
        "**傳送**：[[tab.training]] → 長按要分享的計劃 → [[share.plan.shareAction]] → [[planHub.bump.title]] → [[bump.choice.send]]。螢幕會顯示一個密碼，告訴朋友。",
        "**接收**：[[tab.training]] → 右上角 [[planHub.title]] 圖示 → [[planHub.bump.title]] → [[bump.choice.receive]]，輸入朋友給你的 6 位數密碼。",
        "連接後雙方核對 [[bump.verify.title]] 中的驗證碼，相同就點 [[bump.verify.confirm]]。",
      ],
      perms: [
        "**本地網絡**：第一次打開碰一碰時，系統會詢問 DAY 1 能否尋找本地網絡上的裝置，點允許。",
        "兩部手機都要安裝 DAY 1，而且都需要 Pro。",
        "收到計劃後，AI 調整那一步需要連接網絡。",
      ],
      fix: [
        "提示 [[bump.error.startFailed]]：前往 [=設定=] → [=私隱與保安=] → [=本地網絡=]，開啟 [=DAY 1=]。",
        "兩部手機都開啟 Wi‑Fi 和藍牙，靠近一點再試。",
        "AI 調整失敗時計劃不會儲存，連接網絡後請對方重新傳送一次。",
      ],
    },
    {
      kind: "steps",
      title: "接收方從這裏進入",
      items: [
        { shot: "plan-tools", alt: "計劃工具：碰一碰、分享卡片、截圖匯入", text: "訓練頁右上角的 [[planHub.title]] 圖示，進入後點 [[planHub.bump.title]]。截圖匯入也在這一頁。" },
      ],
    },
  ],
};

const permissions: Section = {
  id: "permissions",
  nav: "所有權限一覽",
  title: "DAY 1 會向你要求哪些權限",
  lead: "每項權限只會在你第一次用到相應功能時才詢問。不授權也能使用 App，只是那項功能無法使用或變得較粗略。",
  blocks: [
    {
      kind: "table",
      title: "iPhone 上的權限",
      head: ["權限", "用途", "何時詢問", "不授權會怎樣"],
      rows: [
        ["健康（讀取）", "紅綠燈、睡眠、訓練心率", "點 [[home.watch.disconnected]] → [[health.mode.connectApple]]", "紅綠燈只能靠打卡估算"],
        ["健康（寫入）", "把體重、動態能量、體脂率寫回「健康」", "和讀取在同一個系統頁面", "不影響使用"],
        ["相機", "拍食物、拍器械問 AI、更換頭像", "第一次點拍照", "只能從相簿選圖"],
        ["語音辨識 + 咪高峰", "語音提問", "第一次點 [[chat.menu.voice]]", "只能打字"],
        ["本地網絡", "碰一碰面對面傳送計劃", "第一次使用 [[planHub.bump.title]]", "不能面對面傳送，可以改用 [[planHub.shareCard.title]]"],
        ["通知", "訓練提醒", "開啟 [[cycle.reminder.enableLabel]] 並儲存時", "收不到提醒"],
      ],
    },
    {
      kind: "table",
      title: "DAY 1 從「健康」讀取哪些數據",
      intro: "這些數據只用於計算紅綠燈、撰寫週報和分析訓練。",
      head: ["類別", "具體項目"],
      rows: [
        ["恢復", "心率變異性（HRV）、靜止心率、心率、睡眠、體溫"],
        ["活動", "步數、動態能量、基礎代謝能量、體能訓練記錄"],
        ["身體", "體重、身高、體脂率、性別、出生日期、月經週期"],
      ],
    },
    {
      kind: "callout",
      title: "Apple Watch 上的權限",
      body: "第一次打開手錶上的 DAY 1，會向你要求讀取心率、靜止心率、HRV、睡眠和通知的權限。第一次在手錶上開始訓練時，會再詢問一次寫入體能訓練記錄。iPhone 和手錶共用同一份健康授權，一般不用重複設定；如果手錶上彈出授權，點允許即可。",
    },
    {
      kind: "faq",
      title: "想更改權限",
      items: [
        { q: "所有權限在哪裏統一更改？", a: "iPhone [設定] → [私隱與保安]，點相應的權限名稱（健康、相機、咪高峰、語音辨識、本地網絡），找到 DAY 1。通知在 [設定] → [通知] → DAY 1。" },
        { q: "DAY 1 會使用定位或藍牙嗎？", a: "不會。DAY 1 不會申請定位和藍牙權限。" },
      ],
    },
  ],
};

export const zhHant: GuideDoc = {
  metaTitle: "使用指南",
  metaDescription: "第一次使用 DAY 1：連接 Apple Health、戴錶睡一晚、第二天早上看紅綠燈。每項功能需要甚麼權限、拒絕了怎樣重新開啟。",
  eyebrow: "使用指南",
  heroTitle: ["第一次使用 DAY 1，", "照着做這 3 步。"],
  heroLead: "DAY 1 的紅綠燈靠你昨晚的身體數據，判斷今天該怎樣練。完成以下三步，第二天早上就能看到第一盞真正屬於你的燈。",
  quick: [
    { t: "連接 Apple Health", d: "打開 App，點主頁的 [[home.watch.disconnected]]，選 [[health.mode.connectApple]]，在授權頁點 [=全部開啟=]。" },
    { t: "戴着手錶睡一晚", d: "心率變異性（HRV）大多在你睡着時量度。不戴錶睡覺，紅綠燈就只能靠問卷估算。" },
    { t: "早上花 30 秒打卡", d: "第二天打開 App，點主頁的 [[decision.daily.newDay]] 卡片，回答 6 條小問題，馬上得到今天的燈。" },
  ],
  stepLabel: "第 {n} 步",
  tocLabel: "指南目錄",
  panelLabels: { what: "可以做甚麼", where: "在 App 哪裏", perms: "需要甚麼權限", fix: "拒絕了 / 未連接，怎樣重新開啟" },
  shotNote: "截圖是 App 簡體中文版的畫面。繁體版的按鈕位置相同，按鈕文字請以內文為準。",
  contactText: "還有問題？直接寫信給我們：",
  backHome: "返回首頁",
  sections: [readiness, training, coach, food, voice, report, share, permissions],
};
