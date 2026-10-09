import type { GuideDoc, Section } from "../types";

/**
 * 简体中文（原文）。其他语言照这份翻译，结构保持一致。
 * 双方括号包住 App 文案键，引用 App 文案（会按语言自动换成 App 里的原文）；[=文字=] 是 iOS 系统界面上的字。
 * 事实依据：iOS 源码 + 3.2 模拟器实拍。凡是 App 里会变的数字（次数上限等）一律不写死。
 */

const readiness: Section = {
  id: "readiness",
  nav: "红绿灯与 Apple Health",
  title: "红绿灯：每天早上告诉你今天怎么练",
  lead: "这是 DAY 1 最核心的功能，也是最需要你先做好设置的功能。没连 Apple Health，它就只能靠问卷粗略估算。",
  blocks: [
    {
      kind: "panels",
      what: [
        "每天早上读取你昨晚的 **心率变异性（HRV）**、**静息心率** 和 **睡眠**，和你自己过去 60 晚的数据比较，给出 0–100 分和一盏灯。",
        "绿灯：恢复好，按计划练。黄灯：没完全恢复，减量或降强度。红灯：以恢复为主，休息或拉伸。",
        "同时给你两套当天的练法，标着 [[decision.planCard.recommended]] 的是最合适的那套。",
      ],
      where: [
        "[[tab.home]] 最上方那张大卡片就是红绿灯。",
        "每天第一次打开时，这张卡片显示 [[decision.daily.newDay]]。点它做完 30 秒打卡，卡片就变成 [[decision.readiness.todayAdvice]] 和一盏灯。",
        "之后**点一下**这张卡片，进入详情页，能看到分数是怎么算出来的、哪一项在拖后腿。",
      ],
      perms: [
        "**Apple Health 读取权限**（HRV、静息心率、心率、睡眠、步数等）。",
        "注意：App 第一次打开时**不会**自动问你要这个权限，需要你自己点一次连接。",
        "想要 HRV，还需要 **Apple Watch 戴着睡觉**。",
      ],
      fix: [
        "**在 App 里：**底部 [[tab.profile]] → [[cycle.profile.healthKitAuth]]，重新点一次。",
        "**在 iPhone 设置里：**[=设置=] → [=隐私与安全性=] → [=健康=] → [=DAY 1=]，把读取的项目全部打开。",
        "如果系统弹窗已经被拒绝过，App 里再点也不会弹，这时只能走 iPhone 设置这条路。",
      ],
      fixImage: { shot: "me-healthkit", alt: "「我的」页面里的「设备管理」和「HealthKit 授权」两行", w: 720, h: 242 },
    },
    {
      kind: "steps",
      title: "第一次连接 Apple Health，一步一步",
      intro: "下面都是 App 里的真实界面，照着点就行。",
      items: [
        { shot: "health-source", alt: "健康数据来源选择页，三个选项", text: "在 [[tab.home]] 点 [[home.watch.disconnected]] 卡片，弹出 [[health.mode.title]]，选第一个 [[health.mode.connectApple]]。" },
        { shot: "ios-sheet", alt: "iOS 健康授权页，开关都是关的", text: "系统弹出「访问健康数据」，开关默认都是关的。点 [=全部打开=]。" },
        { shot: "ios-sheet-allowed", alt: "iOS 健康授权页，开关全部打开，底部允许按钮变蓝", text: "开关全部变绿后，点最下面蓝色的 [=允许=]。" },
        { shot: "home-readiness", alt: "主页，连接卡片已消失，显示今日训练建议黄灯", text: "回到主页，[[home.watch.disconnected]] 卡片不见了，就是连上了。" },
      ],
    },
    {
      kind: "callout",
      title: "授权页底部的小字写着「FitTrack」？",
      body: "FitTrack 是 DAY 1 以前的名字，是同一个 App。授权页标题写的是「DAY 1 想要访问并更新你的健康数据」，放心允许。",
    },
    {
      kind: "steps",
      title: "第二天早上：30 秒打卡",
      intro: "打开 App，主页会出现 [[decision.daily.newDay]] 卡片。点进去按顺序做完，就能看到今天的灯和两套训练方案。",
      items: [
        { shot: "sleep-fill", alt: "昨晚未记录到睡眠，手动填写睡眠时长", text: "如果手表昨晚没记到睡眠，会先问你睡了多久。拖到大概的小时数，点 [[manual.input.done]]。戴表睡了就不会出现这一步。" },
        { shot: "checkin", alt: "晨间打卡第 1 题，今天感觉怎么样", text: "回答 6 个小问题，每题点一个最接近的选项，再点 [[common.next]]。凭第一感觉选就好。" },
        { shot: "checkin-result", alt: "打卡结果，黄灯 59 分，方案 A 正常训练、方案 B 轻量训练", text: "出结果：一盏灯、一个分数、两套方案。标着 [[decision.planCard.recommended]] 的就是今天最合适的练法。" },
      ],
    },
    {
      kind: "timeline",
      title: "为什么前几天的灯「不太准」",
      intro: "红绿灯是和**你自己**比，不是和别人比，所以它需要先认识你。这段时间详情页会显示 [[baseline.status.learning]]，是正常的。",
      items: [
        { n: "第 1–3 晚", d: "数据还少，先用通用标准判断" },
        { n: "第 4–10 晚", d: "逐步换成你的个人基线，分数平滑过渡，不会突然跳" },
        { n: "第 14 晚以后", d: "个人基线稳定，灯最准" },
      ],
      note: "中间哪晚没戴表，不会清零，只是那一晚不计入。",
    },
    {
      kind: "options",
      title: "没有 Apple Watch 也能用",
      intro: "在 [[health.mode.title]] 里还有两个选项。灯会比戴表时粗略一些，但每天的训练建议照样有：",
      items: [
        { t: "[[health.mode.connectApple]]", d: "通过 Apple Watch 等设备自动同步数据", tag: "最准" },
        { t: "[[health.mode.manual]]", d: "每天手动输入睡眠等关键数据" },
        { t: "[[health.mode.skip]]", d: "通过晨间打卡评估身体状态" },
      ],
    },
    {
      kind: "faq",
      title: "还是不对？",
      items: [
        { q: "连了 Apple Health，详情页还是看不到 HRV", a: "确认手表昨晚戴着睡了，且 iPhone「健康」App 里能看到昨晚的心率变异性。手表只在你睡着、静止时测 HRV，白天测的不算进当晚。" },
        { q: "主页的「连接 Apple Watch」卡片一直在", a: "说明授权没给全。去 iPhone 设置 → 隐私与安全性 → 健康 → DAY 1，把读取的项目全部打开，再回到 App。" },
        { q: "每天早上都让我补填睡眠", a: "说明 App 没读到手表的睡眠记录。确认睡觉时戴着手表，并且 iPhone「健康」App 里能看到昨晚的睡眠。没有手表的话，每天填一下时长就行，灯会参考它。" },
        { q: "手表换了 / App 重装后，灯又变回「学习中」", a: "个人基线跟着你的健康数据走。重装后重新连接 Apple Health 即可，历史数据还在「健康」里，几天内就会恢复。" },
      ],
    },
  ],
};

const food: Section = {
  id: "food",
  nav: "拍照识别食物",
  title: "拍照识别食物：拍一张，热量和营养自动记下",
  lead: "不用查热量表。拍下这一餐，AI 估算热量和三大营养素，记进今天的饮食里。",
  blocks: [
    {
      kind: "panels",
      what: [
        "拍下一餐，AI 估算 **热量** 和 **蛋白质、碳水、脂肪**，并告诉你这次识别的准确度高不高。",
        "一次最多 3 张照片。从不同角度多拍一张，识别更准。",
        "不想拍照，就切到 [[food.mode.manual]]，自己填名称和热量。",
      ],
      where: [
        "底部 [[tab.cycle]] → [[cycle.tab.calories]] → 右下角橙色 **+** → [[food.add.title]]。",
        "在这里选 [[food.photo.take]] 现拍，或者点 [[food.photo.album]] 选已有的照片。",
        "在 [[tab.ai]] 页点输入框左边的 **+** → [[chat.menu.camera]]，也能拍照问 AI，比如「这是什么器械」。",
      ],
      perms: [
        "**相机**：第一次点 [[food.photo.take]] 时，系统会问一次。",
        "从 [[food.photo.album]] 选图一般不需要额外授权。",
        "第一次用 AI 识别前，App 会先说明照片会发给 AI 分析，你同意后才继续。识别需要联网。",
        "免费版和 Pro 都能用，但有次数上限。添加页底部会显示还剩几次。",
      ],
      fix: [
        "相机被拒绝后，App 会提示 [[camera.permission.denied.title]]，点 [[camera.permission.denied.settings]] 直接跳到系统设置。",
        "也可以手动去：[=设置=] → [=隐私与安全性=] → [=相机=] → 打开 [=DAY 1=]。",
      ],
    },
    {
      kind: "steps",
      title: "记一餐，一步一步",
      items: [
        { shot: "food-today", alt: "周期页的今日饮食，右下角橙色加号", text: "底部点 [[tab.cycle]]，在 [[cycle.tab.calories]] 页点右下角橙色的 **+**。" },
        { shot: "food-add", alt: "添加食物记录页，AI Photo 和自己填两种方式", text: "默认是 [[food.mode.aiPhoto]]。点 [[food.photo.take]] 拍照，或 [[food.photo.album]] 选图，等几秒出结果，确认后保存。" },
      ],
    },
    {
      kind: "faq",
      title: "常见问题",
      items: [
        { q: "识别出来的热量准吗？", a: "是估算，不是称重。份量看不清、酱料多、几样菜叠在一起时误差会大。结果页会标出准确度，低的时候按提示补拍一张，或者手动改一下数字。" },
      ],
    },
  ],
};

const voice: Section = {
  id: "voice",
  nav: "语音提问",
  title: "语音提问：手上拿着器械，也能问 AI",
  lead: "训练间隙不方便打字时，直接说出来，App 会转成文字发给 AI 教练。",
  blocks: [
    {
      kind: "panels",
      what: [
        "按一下就开始录音，说完停顿 2 秒自动结束，转成文字后发给 AI。",
        "问什么都行：动作要领、组间休息多久、今天该不该加重量。",
        "**Apple Watch 上不能语音**。训练中在手表上滑到第 3 页，可以选一张预设问题卡片发给手机上的 AI 教练。",
      ],
      where: [
        "底部 [[tab.ai]] → 输入框左边的 **+** → [[chat.menu.voice]]。",
        "只有默认的 [[ai.version.immersive]] 界面有语音。如果在 AI 页右上角设置里切到了 [[ai.version.classic]]，语音按钮不可用。",
      ],
      perms: [
        "**语音识别** 和 **麦克风** 两个权限。第一次点 [[chat.menu.voice]] 时，系统会依次询问。",
        "手表发问题需要手机上的 DAY 1 正在运行。",
      ],
      fix: [
        "拒绝了语音识别，App 会提示 [[voice.permission.denied]]。",
        "拒绝了麦克风，点 [[chat.menu.voice]] 会没有反应。",
        "两种情况都去：[=设置=] → [=隐私与安全性=] → [=语音识别=] 和 [=麦克风=]，分别打开 [=DAY 1=]。",
      ],
    },
    {
      kind: "steps",
      title: "在 AI 页找到语音",
      items: [
        { shot: "ai-home", alt: "AI 页首页，有常用问题和输入框", text: "底部点 [[tab.ai]]。可以直接点下面的常用问题，也可以自己输入。" },
        { shot: "ai-plus", alt: "输入框加号菜单：拍照、相册、训练计划、语音", text: "点输入框左边的 **+**，选 [[chat.menu.voice]]。这里也能 [[chat.menu.camera]]、发 [[chat.menu.album]] 照片，或者把 [[chat.menu.sharePlan]] 发给 AI 看。" },
      ],
    },
  ],
};

const training: Section = {
  id: "training",
  nav: "训练计划与记录",
  title: "训练：先建计划，再一组一组打勾",
  lead: "计划可以自己搭，也可以让 AI 生成。练的时候每完成一组点一下，组间休息自动计时，练完有复盘。",
  blocks: [
    {
      kind: "panels",
      what: [
        "**自己建计划**：先选 [[workout.category.strength]] 或 [[workout.category.functional]]，再挑练哪里（[[training.create.singlePart]]、[[training.create.combo]] 或 [[training.create.customCombo]]），给每个动作设好重量、组数、次数。",
        "**让 AI 生成**：点 [[smartPlan.card.title]]，回答目标、每周练几天、有什么器材，AI 生成一整套计划，可以 [[smartPlan.importAll]]。",
        "**截图导入**：在别的 App 里看到的计划，截图后用 [[planHub.import.section]] 识别成 DAY 1 的计划。",
        "练完自动记进这份计划的历史，下次打开能看到上次练了多少。",
      ],
      where: [
        "底部 [[tab.training]]。右上角 [[training.header.add]] 手动建；下面的 [[smartPlan.card.title]] 卡片让 AI 建。",
        "右上角中间的图标是 [[planHub.title]]：碰一碰、分享卡片、截图导入都在这里。",
        "点开一份计划 → [[training.plan.start]]。",
      ],
      perms: [
        "**手机上记训练不需要任何权限。**",
        "想在训练报告里看到心率，需要 Apple Health 读取权限，并且训练时戴着 Apple Watch。",
        "iPhone 上记的训练**不会**写进「健康」App。在 Apple Watch 上开始的训练会写进去。",
        "[[smartPlan.card.title]] 需要 Pro。手动建计划和截图导入免费。",
      ],
      fix: [
        "训练报告显示没有心率：确认 [[tab.profile]] → [[cycle.profile.healthKitAuth]] 已授权，并且训练时戴着手表。",
        "AI 生成失败时会提示 [[smartPlan.error.failed]]，检查网络后再点一次。",
      ],
    },
    {
      kind: "steps",
      title: "手动建一份计划",
      items: [
        { shot: "training-empty", alt: "训练页，还没有训练计划", text: "底部点 [[tab.training]]，点右上角 [[training.header.add]]，或者中间的 [[training.empty.create]]。" },
        { shot: "create-plan", alt: "创建训练计划，选择训练类型和训练组合", text: "先选类型，再选今天练哪里，比如练胸日、推日。" },
        { shot: "add-exercise", alt: "设置动作的目标重量、组数、次数", text: "每个动作点 **+**，设好目标重量、组数、次数，点添加。点数字可以直接输入任意重量。" },
        { shot: "plan-start", alt: "计划卡片展开，显示动作和开始训练按钮", text: "选好训练日期，保存。计划出现在训练页，点开就能 [[training.plan.start]]。" },
      ],
    },
    {
      kind: "steps",
      title: "练的时候",
      items: [
        { shot: "workout", alt: "正在训练页面，训练进度和完成第 1 组按钮", text: "开始前会先问一句你现在的状态，给出今天的练法。进入训练后，每做完一组点一下大按钮。" },
        { shot: "rest", alt: "组间休息倒计时 90 秒", text: "点完自动开始 [[active.rest.title]] 倒计时。休息够了可以 [[active.rest.skip]]。" },
        { shot: "review", alt: "训练复盘，这次训练感觉如何", text: "全部练完点右上角 [[active.header.end]]，选一下这次的感觉，写几句 [[decision.postWorkout.diaryLabel]]，点 [[decision.postWorkout.saveRecord]]。" },
        { shot: "done", alt: "训练完成，恢复、饮食、训练循环三条建议", text: "最后给出恢复、饮食和下次训练的建议。想细问，直接在下面的输入框问 AI。" },
      ],
    },
    {
      kind: "faq",
      title: "常见问题",
      items: [
        { q: "能在 Apple Watch 上记训练吗？", a: "可以。手机上点开始训练会同时拉起手表上的 DAY 1；也可以直接在手表上开始一次自由训练，记录时长、心率和卡路里。手表上的训练会写进「健康」App。" },
        { q: "练到一半想换动作或改重量", a: "训练中每个动作右上角有编辑按钮，可以改重量、组数、次数；顶部的 **+** 可以临时加动作。" },
      ],
    },
  ],
};

const coach: Section = {
  id: "coach",
  nav: "AI 教练",
  title: "AI 教练：懂你今天状态的训练搭子",
  lead: "问训练、问吃、问恢复都行。你允许的话，它会参考你的睡眠、心率和训练记录来回答。",
  blocks: [
    {
      kind: "panels",
      what: [
        "回答训练、饮食、恢复问题，比如 [[immersive.suggest.training]]、[[immersive.suggest.progress]]。",
        "拍一张器械照片，问它这是什么、怎么用。",
        "两种思考深度：[[ai.tier.flash]] 回答快，[[ai.tier.professional]] 想得更细。",
        "可以在 [[tab.profile]] → [[profile.aiMode.title]] 选 [[workout.category.strength]] 或 [[profile.aiMode.functional]]，回答会按你选的方向来。",
      ],
      where: [
        "底部 [[tab.ai]]。左上角 [[ai.history.title]] 能找回以前的对话。",
        "训练中页面上方的 [[coach.title]] 卡片，也能随时问。",
        "练完的完成页底部有输入框，直接问「我今天练得怎么样」。",
      ],
      perms: [
        "**不需要系统权限**就能打字聊天。语音要麦克风和语音识别，拍照要相机。",
        "只有你在 App 里同意了健康数据共享，AI 才会看到你的睡眠、心率、HRV。不同意也能聊，只是回答不会结合你的身体状态。",
        "每天有对话次数上限，免费版和 Pro 不同。用完会提示，第二天恢复。",
      ],
      fix: [
        "提示 [[ai.error.noNetwork]]：AI 需要联网，连上网再试。",
        "提示次数用完：等第二天，或在 [[tab.profile]] → [[sub.title]] 查看 Pro。",
      ],
    },
    {
      kind: "steps",
      title: "从哪里开始问",
      items: [
        { shot: "ai-home", alt: "AI 页首页，有常用问题和输入框", text: "第一次不知道问什么，直接点下面的常用问题。" },
        { shot: "ai-plus", alt: "输入框加号菜单：拍照、相册、训练计划、语音", text: "输入框左边的 **+**：拍照问器械、发相册照片、把你的训练计划发给 AI 看，或者用语音问。" },
      ],
    },
  ],
};

const report: Section = {
  id: "report",
  nav: "AI 周报",
  title: "AI 周报：这一周练得怎么样，一页看懂",
  lead: "把你这周的训练、睡眠、心率和体重放在一起看，告诉你哪里进步了、哪里要注意、下周怎么安排。",
  blocks: [
    {
      kind: "panels",
      what: [
        "分成 [[cycle.weeklyReport.overviewTitle]]、[[cycle.weeklyReport.comparisonTitle]]、[[cycle.weeklyReport.stateChartTitle]] 和 [[cycle.weeklyReport.aiTitle]] 几块。",
        "AI 总结写五件事：本周总览、训练亮点、需要关注、身体状态、下周建议。",
        "用到的数据：App 里的训练记录，加上「健康」里的训练、睡眠、静息心率、HRV 和体重。",
      ],
      where: [
        "[[tab.home]] 往下滑，在 [[home.weekly.title]] 下面点 [[home.weeklyReport.title]] 卡片。",
        "没有固定生成日：**每次打开时按本周数据生成**。同一天再打开用的是同一份，左上角刷新可以重新生成。",
      ],
      perms: [
        "需要 Pro。",
        "需要你在 App 里同意过敏感个人信息处理，以及 Apple Health 读取权限，周报里的睡眠、心率才有内容。",
      ],
      fix: [
        "显示 [[cycle.weeklyReport.localNoData]]：这周还没有训练记录，先练一次再来看。",
        "AI 暂时连不上时，会先给一份简版周报，联网后刷新即可。",
      ],
    },
  ],
};

const share: Section = {
  id: "share",
  nav: "碰一碰分享计划",
  title: "碰一碰：和朋友面对面传训练计划",
  lead: "两台 iPhone 放在一起，输入一个密码，计划就传过去了。收到后 AI 会按对方自己的情况调整一版。",
  blocks: [
    {
      kind: "panels",
      what: [
        "把你的一份计划直接传给身边的朋友，不用截图、不用加好友。",
        "传输走苹果的近场直连，全程加密，连上后双方还要核对一次验证码。",
        "朋友收到后，AI 会按他自己的数据调一版，他可以选 [[adjust.adoptAdjusted]]、[[adjust.useOriginal]]，或者 [[adjust.continueChat]]。",
        "不在身边？用 [[planHub.shareCard.title]] 生成一张图发给他。",
      ],
      where: [
        "**发送**：[[tab.training]] → 长按要分享的计划 → [[share.plan.shareAction]] → [[planHub.bump.title]] → [[bump.choice.send]]。屏幕会显示一个密码，告诉朋友。",
        "**接收**：[[tab.training]] → 右上角 [[planHub.title]] 图标 → [[planHub.bump.title]] → [[bump.choice.receive]]，输入朋友给的 6 位密码。",
        "连上后双方核对 [[bump.verify.title]] 里的验证码，一样就点 [[bump.verify.confirm]]。",
      ],
      perms: [
        "**本地网络**：第一次打开碰一碰时，系统会问 DAY 1 能否查找本地网络上的设备，点允许。",
        "两台手机都要装 DAY 1，都需要 Pro。",
        "收到计划后 AI 调整那一步需要联网。",
      ],
      fix: [
        "提示 [[bump.error.startFailed]]：去 [=设置=] → [=隐私与安全性=] → [=本地网络=]，打开 [=DAY 1=]。",
        "两台手机都打开 Wi‑Fi 和蓝牙，靠近一点再试。",
        "AI 调整失败时计划不会存下来，联网后让对方重新发一次。",
      ],
    },
    {
      kind: "steps",
      title: "接收方从这里进",
      items: [
        { shot: "plan-tools", alt: "计划工具：碰一碰、分享卡片、截图导入", text: "训练页右上角的 [[planHub.title]] 图标，进去点 [[planHub.bump.title]]。截图导入也在这一页。" },
      ],
    },
  ],
};

const permissions: Section = {
  id: "permissions",
  nav: "全部权限一览",
  title: "DAY 1 会问你要哪些权限",
  lead: "每个权限只在你第一次用到对应功能时才问。不给也能用 App，只是那个功能用不了或变粗略。",
  blocks: [
    {
      kind: "table",
      title: "iPhone 上的权限",
      head: ["权限", "用来做什么", "什么时候问", "不给会怎样"],
      rows: [
        ["健康（读取）", "红绿灯、睡眠、训练心率", "点 [[home.watch.disconnected]] → [[health.mode.connectApple]]", "红绿灯只能靠打卡估算"],
        ["健康（写入）", "把体重、活动能量、体脂率写回「健康」", "和读取在同一个系统页", "不影响使用"],
        ["相机", "拍食物、拍器械问 AI、换头像", "第一次点拍照", "只能从相册选图"],
        ["语音识别 + 麦克风", "语音提问", "第一次点 [[chat.menu.voice]]", "只能打字"],
        ["本地网络", "碰一碰面对面传计划", "第一次用 [[planHub.bump.title]]", "不能面对面传，可以改用 [[planHub.shareCard.title]]"],
        ["通知", "训练提醒", "打开 [[cycle.reminder.enableLabel]] 并保存时", "收不到提醒"],
      ],
    },
    {
      kind: "table",
      title: "DAY 1 从「健康」读取哪些数据",
      intro: "这些数据只用来算红绿灯、写周报和分析训练。",
      head: ["类别", "具体项目"],
      rows: [
        ["恢复", "心率变异性（HRV）、静息心率、心率、睡眠、体温"],
        ["活动", "步数、活动能量、基础代谢能量、体能训练记录"],
        ["身体", "体重、身高、体脂率、性别、出生日期、月经周期"],
      ],
    },
    {
      kind: "callout",
      title: "Apple Watch 上的权限",
      body: "第一次打开手表上的 DAY 1，会问你要读取心率、静息心率、HRV、睡眠和通知。第一次在手表上开始训练时，会再问一次写入体能训练记录。在 iPhone 上点 [=全部打开=] 不会自动带到手表，手表上也要点一次允许。",
    },
    {
      kind: "faq",
      title: "想改权限",
      items: [
        { q: "所有权限在哪里统一改？", a: "iPhone [设置] → [隐私与安全性]，点对应的权限名（健康、相机、麦克风、语音识别、本地网络），找到 DAY 1。通知在 [设置] → [通知] → DAY 1。" },
        { q: "DAY 1 会用定位或蓝牙吗？", a: "不会。DAY 1 不申请定位和蓝牙权限。" },
      ],
    },
  ],
};

export const zh: GuideDoc = {
  metaTitle: "上手指南",
  metaDescription: "第一次用 DAY 1：连接 Apple Health、戴表睡一晚、第二天早上看红绿灯。每个功能需要什么权限、拒绝了怎么补开。",
  eyebrow: "上手指南",
  heroTitle: ["第一次用 DAY 1，", "照着做这 3 步。"],
  heroLead: "DAY 1 的红绿灯靠你昨晚的身体数据来判断今天该怎么练。下面三步做完，第二天早上就能看到第一盏真正属于你的灯。",
  quick: [
    { t: "连接 Apple Health", d: "打开 App，点主页的 [[home.watch.disconnected]]，选 [[health.mode.connectApple]]，在授权页点 [=全部打开=]。" },
    { t: "戴着手表睡一晚", d: "心率变异性（HRV）大多在你睡着时测量。不戴表睡，红绿灯就只能靠问卷估算。" },
    { t: "早上花 30 秒打卡", d: "第二天打开 App，点主页的 [[decision.daily.newDay]] 卡片，回答 6 个小问题，马上拿到今天的灯。" },
  ],
  stepLabel: "第 {n} 步",
  tocLabel: "指南目录",
  panelLabels: { what: "能做什么", where: "在 App 哪里", perms: "需要什么权限", fix: "拒绝了 / 没连上，怎么补开" },
  contactText: "还有问题？直接写信给我们：",
  backHome: "返回首页",
  sections: [readiness, training, coach, food, voice, report, share, permissions],
};
