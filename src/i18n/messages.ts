/**
 * 门面文案五语字典（轻量自建 i18n，不引第三方、不重构目录）。
 *
 * 覆盖"门面"——导航 / 首页框架文案 / 各列表页标题 / 按钮 / 页脚 / 站点 metadata。
 * 文章、动态等数据库内容保持作者原文，不在此处翻译。
 *
 * 语言集合与 iOS App 一致：简中 / 繁中 / 英 / 日 / 韩。
 * 用法：组件内 const t = useT(); t("nav.thoughts")；带占位符用 format(t("thoughts.count"), { n })
 * 缺词时回退到 zh，再回退到 key 本身，保证永不空白。
 */

export type Locale = "zh" | "zh-Hant" | "en" | "ja" | "ko";
export const LOCALES: Locale[] = ["zh", "zh-Hant", "en", "ja", "ko"];
export const DEFAULT_LOCALE: Locale = "zh";
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** 语言菜单里显示的本名（每种语言用自己的写法） */
export const LOCALE_NAMES: Record<Locale, string> = {
  zh: "简体中文",
  "zh-Hant": "繁體中文",
  en: "English",
  ja: "日本語",
  ko: "한국어",
};

/** <html lang> 与 Intl 用的 BCP 47 标签 */
export const LOCALE_TAGS: Record<Locale, string> = {
  zh: "zh-CN",
  "zh-Hant": "zh-HK",
  en: "en",
  ja: "ja",
  ko: "ko",
};

/** URL 前缀 / cookie 里可能出现的写法 → 规范 Locale（大小写不敏感） */
export function normalizeLocale(raw: string | undefined | null): Locale | null {
  if (!raw) return null;
  const v = raw.trim().toLowerCase();
  if (v === "zh" || v === "zh-cn" || v === "zh-hans" || v === "zh-sg") return "zh";
  if (v === "zh-hant" || v === "zh-hk" || v === "zh-tw" || v === "zh-mo") return "zh-Hant";
  if (v === "en" || v.startsWith("en-")) return "en";
  if (v === "ja" || v.startsWith("ja-")) return "ja";
  if (v === "ko" || v.startsWith("ko-")) return "ko";
  return null;
}

/** 从 Accept-Language 里挑第一个支持的语言（首次访问、没有 cookie 时用） */
export function pickLocaleFromAcceptLanguage(header: string | null | undefined): Locale | null {
  if (!header) return null;
  const candidates = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.trim(), q: q ? parseFloat(q) : 1 };
    })
    .filter((c) => c.tag)
    .sort((a, b) => b.q - a.q);
  for (const c of candidates) {
    const l = normalizeLocale(c.tag);
    if (l) return l;
    // zh 单独出现时按简中；zh-Hant-* 变体已在 normalizeLocale 覆盖
    if (c.tag.toLowerCase().startsWith("zh")) return "zh";
  }
  return null;
}

type Dict = Record<string, string>;

const zh: Dict = {
  // meta
  "meta.title": "DAY 1 — 每天早上，先看一眼红绿灯",
  "meta.description": "DAY 1 读取你昨夜的心率变异性、静息心率和睡眠，对照你自己过去 60 晚的数据，告诉你今天该练重、练轻，还是休息。iPhone 与 Apple Watch。",

  // nav
  "nav.thoughts": "思考",
  "nav.updates": "动态",
  "nav.product": "产品",
  "nav.team": "团队",
  "nav.developer": "开发者",
  "nav.menu": "菜单",
  "nav.language": "语言",

  // hero
  "hero.badge": "AI 健身科技",
  "hero.desc": "用 AI 真正理解你的身体。DAY 1 把训练、恢复与健康数据融为一体，让每一天都是最好的开始。",
  "hero.cta.product": "了解产品",
  "hero.cta.thoughts": "阅读思考",

  // sections
  "section.thoughts.title": "最新思考",
  "section.thoughts.desc": "关于产品、设计与生活的独立思考，以及 DAY 1 功能背后的落地逻辑。",
  "section.thoughts.more": "查看全部思考",
  "section.updates.title": "最新动态",
  "section.updates.desc": "App 更新记录、产品感想，以及我们的日常。",
  "section.updates.more": "查看全部动态",
  "section.product.eyebrow": "Our Product",
  "section.developer.eyebrow": "For Developers",
  "section.developer.title": "让你的 AI 读懂你的身体",
  "section.developer.desc": "健康，应当像 AI 一样被持续追踪、被真正理解。用 App 同款账号登录，生成专属 API Key，把你的健康数据开放给 Cursor、Claude Code、Codex 等 AI Agent，让它比任何人都更了解你。",
  "section.developer.apply": "申请 API Key",
  "section.developer.docs": "查看 API 文档",
  "section.developer.step1.title": "登录",
  "section.developer.step1.desc": "用 App 同款账号登录",
  "section.developer.step2.title": "生成 Key",
  "section.developer.step2.desc": "一键创建专属 API Key",
  "section.developer.step3.title": "接入 Agent",
  "section.developer.step3.desc": "AI 自动读取你的数据",
  "section.team.title": "我们的团队",
  "section.team.desc": "一群热爱健身和技术的人，致力于让训练变得更智能。",

  // product（数据库未配置或非中文时的门面文案）
  "product.title": "DAY 1 — 你的智能健身伙伴",
  "product.subtitle": "不只是记录，更是理解",
  "product.description": "用 AI 重新定义训练记录与恢复管理，让每一天都是最好的 Day 1。",
  "product.detail": "DAY 1 结合 Apple Health 数据和 AI 分析，帮你了解身体状态，智能规划训练，并在你需要时提供个性化的教练建议。",
  "product.f1": "AI 实时教练 — 训练中的智能语音指导",
  "product.f2": "身体准备度 — 基于 HRV/睡眠的每日状态评估",
  "product.f3": "智能训练计划 — 根据恢复情况动态调整",
  "product.f4": "Apple Watch 联动 — 手腕上的训练助手",
  "product.f5": "训练数据分析 — 可视化你的进步轨迹",
  "product.appStore": "App Store 下载",

  // thoughts 列表 / 详情
  "thoughts.title": "思考与产品思路",
  "thoughts.desc": "关于产品、设计与生活的独立思考。记录灵感、沉淀观点。",
  "thoughts.pinned": "置顶精选",
  "thoughts.all": "全部文章",
  "thoughts.count": "按时间倒序 · 共 {n} 篇",
  "article.back": "返回思考列表",
  "article.empty": "这篇文章还没有正文内容。",

  // updates
  "updates.title": "动态",
  "updates.desc": "App 更新记录、产品感想、以及日常的照片和灵感碎片。",
  "updates.type.app": "App 更新",
  "updates.type.photo": "照片",
  "updates.type.thought": "产品感想",
  "updates.why": "为什么做这个",
  "updates.released": "上线",

  // 用户中心
  "me.title": "DAY 1 — 我的",
  "me.description": "管理你的 API Key，让 AI Agent 读取你的健康数据",
  "me.welcome": "欢迎回来",
  "me.desc": "你已用 App 同款账号登录。在这里生成 API Key，让你的 AI Agent 安全读取你的健康数据。",
  "me.keys.title": "API Key 管理",
  "me.keys.desc": "生成、查看和撤销你的 API Key，并查看接入文档。",
  "me.keys.go": "前往管理",
  "me.signedIn": "已登录",
  "me.signOut": "退出",

  // 卡片 / 链接通用
  "card.viewProduct": "查看产品详情",
  "card.readMins": "分钟阅读",

  // footer
  "footer.tagline": "记录思考，构建产品。每一天都是新的 Day 1。",
  "footer.col.content": "内容",
  "footer.col.product": "产品",
  "footer.col.contact": "联系",
  "footer.link.thoughts": "思考与思路",
  "footer.link.updates": "动态更新",
  "footer.link.privacy": "隐私政策",
  "footer.link.terms": "用户协议",
  "footer.link.email": "邮箱",
  "footer.rights": "保留所有权利。",
  "footer.built": "用心打造。",

  // misc
  "common.readMore": "查看详情",
};

const zhHant: Dict = {
  "meta.title": "DAY 1 — 每天早上，先看一眼紅綠燈",
  "meta.description": "DAY 1 讀取你昨夜的心率變異性、靜息心率和睡眠，對照你自己過去 60 晚的數據，告訴你今天該練重、練輕，還是休息。iPhone 與 Apple Watch。",

  "nav.thoughts": "思考",
  "nav.updates": "動態",
  "nav.product": "產品",
  "nav.team": "團隊",
  "nav.developer": "開發者",
  "nav.menu": "選單",
  "nav.language": "語言",

  "hero.badge": "AI 健身科技",
  "hero.desc": "用 AI 真正理解你的身體。DAY 1 把訓練、恢復與健康數據融為一體，讓每一天都是最好的開始。",
  "hero.cta.product": "了解產品",
  "hero.cta.thoughts": "閱讀思考",

  "section.thoughts.title": "最新思考",
  "section.thoughts.desc": "關於產品、設計與生活的獨立思考，以及 DAY 1 功能背後的落地邏輯。",
  "section.thoughts.more": "查看全部思考",
  "section.updates.title": "最新動態",
  "section.updates.desc": "App 更新記錄、產品感想，以及我們的日常。",
  "section.updates.more": "查看全部動態",
  "section.product.eyebrow": "Our Product",
  "section.developer.eyebrow": "For Developers",
  "section.developer.title": "讓你的 AI 讀懂你的身體",
  "section.developer.desc": "健康，應當像 AI 一樣被持續追蹤、被真正理解。用 App 同款帳號登入，生成專屬 API Key，把你的健康數據開放給 Cursor、Claude Code、Codex 等 AI Agent，讓它比任何人都更了解你。",
  "section.developer.apply": "申請 API Key",
  "section.developer.docs": "查看 API 文件",
  "section.developer.step1.title": "登入",
  "section.developer.step1.desc": "用 App 同款帳號登入",
  "section.developer.step2.title": "生成 Key",
  "section.developer.step2.desc": "一鍵建立專屬 API Key",
  "section.developer.step3.title": "接入 Agent",
  "section.developer.step3.desc": "AI 自動讀取你的數據",
  "section.team.title": "我們的團隊",
  "section.team.desc": "一群熱愛健身和技術的人，致力於讓訓練變得更智能。",

  "product.title": "DAY 1 — 你的智能健身夥伴",
  "product.subtitle": "不只是記錄，更是理解",
  "product.description": "用 AI 重新定義訓練記錄與恢復管理，讓每一天都是最好的 Day 1。",
  "product.detail": "DAY 1 結合 Apple Health 數據和 AI 分析，幫你了解身體狀態，智能規劃訓練，並在你需要時提供個人化的教練建議。",
  "product.f1": "AI 即時教練 — 訓練中的智能語音指導",
  "product.f2": "身體準備度 — 基於 HRV/睡眠的每日狀態評估",
  "product.f3": "智能訓練計劃 — 根據恢復情況動態調整",
  "product.f4": "Apple Watch 聯動 — 手腕上的訓練助手",
  "product.f5": "訓練數據分析 — 視覺化你的進步軌跡",
  "product.appStore": "App Store 下載",

  "thoughts.title": "思考與產品思路",
  "thoughts.desc": "關於產品、設計與生活的獨立思考。記錄靈感、沉澱觀點。",
  "thoughts.pinned": "置頂精選",
  "thoughts.all": "全部文章",
  "thoughts.count": "按時間倒序 · 共 {n} 篇",
  "article.back": "返回思考列表",
  "article.empty": "這篇文章還沒有正文內容。",

  "updates.title": "動態",
  "updates.desc": "App 更新記錄、產品感想、以及日常的照片和靈感碎片。",
  "updates.type.app": "App 更新",
  "updates.type.photo": "照片",
  "updates.type.thought": "產品感想",
  "updates.why": "為什麼做這個",
  "updates.released": "上線",

  "me.title": "DAY 1 — 我的",
  "me.description": "管理你的 API Key，讓 AI Agent 讀取你的健康數據",
  "me.welcome": "歡迎回來",
  "me.desc": "你已用 App 同款帳號登入。在這裡生成 API Key，讓你的 AI Agent 安全讀取你的健康數據。",
  "me.keys.title": "API Key 管理",
  "me.keys.desc": "生成、查看和撤銷你的 API Key，並查看接入文件。",
  "me.keys.go": "前往管理",
  "me.signedIn": "已登入",
  "me.signOut": "登出",

  "card.viewProduct": "查看產品詳情",
  "card.readMins": "分鐘閱讀",

  "footer.tagline": "記錄思考，構建產品。每一天都是新的 Day 1。",
  "footer.col.content": "內容",
  "footer.col.product": "產品",
  "footer.col.contact": "聯絡",
  "footer.link.thoughts": "思考與思路",
  "footer.link.updates": "動態更新",
  "footer.link.privacy": "私隱政策",
  "footer.link.terms": "用戶協議",
  "footer.link.email": "電郵",
  "footer.rights": "保留所有權利。",
  "footer.built": "用心打造。",

  "common.readMore": "查看詳情",
};

const en: Dict = {
  "meta.title": "DAY 1 — Check your light every morning",
  "meta.description": "DAY 1 reads last night's heart-rate variability, resting heart rate and sleep, compares them with your own past 60 nights, and tells you whether to train hard, go easy, or rest. iPhone and Apple Watch.",

  "nav.thoughts": "Thoughts",
  "nav.updates": "Updates",
  "nav.product": "Product",
  "nav.team": "Team",
  "nav.developer": "Developers",
  "nav.menu": "Menu",
  "nav.language": "Language",

  "hero.badge": "AI Fitness Technology",
  "hero.desc": "Let AI truly understand your body. DAY 1 unifies training, recovery and health data, so every day is the best place to start.",
  "hero.cta.product": "Explore Product",
  "hero.cta.thoughts": "Read Thoughts",

  "section.thoughts.title": "Latest Thoughts",
  "section.thoughts.desc": "Independent thinking on product, design and life — and the logic behind DAY 1's features.",
  "section.thoughts.more": "View all thoughts",
  "section.updates.title": "Latest Updates",
  "section.updates.desc": "App release notes, product reflections, and our day-to-day.",
  "section.updates.more": "View all updates",
  "section.product.eyebrow": "Our Product",
  "section.developer.eyebrow": "For Developers",
  "section.developer.title": "Let your AI understand your body",
  "section.developer.desc": "Health should be continuously tracked and truly understood, the way AI is. Sign in with your app account, generate an API Key, and open your health data to AI agents like Cursor, Claude Code and Codex — so they know you better than anyone.",
  "section.developer.apply": "Get API Key",
  "section.developer.docs": "Read API Docs",
  "section.developer.step1.title": "Sign in",
  "section.developer.step1.desc": "Use your app account",
  "section.developer.step2.title": "Generate Key",
  "section.developer.step2.desc": "Create your API Key in one click",
  "section.developer.step3.title": "Connect Agent",
  "section.developer.step3.desc": "Your AI reads your data automatically",
  "section.team.title": "Our Team",
  "section.team.desc": "A team that loves fitness and technology, making training smarter.",

  "product.title": "DAY 1 — Your smart fitness companion",
  "product.subtitle": "More than tracking — understanding",
  "product.description": "AI reimagines training logs and recovery, making every day the best Day 1.",
  "product.detail": "DAY 1 combines Apple Health data with AI analysis to help you understand your body, plan training intelligently, and get personalized coaching when you need it.",
  "product.f1": "Live AI coach — smart voice guidance during workouts",
  "product.f2": "Body readiness — daily status from HRV / sleep",
  "product.f3": "Smart training plans — adapt to your recovery",
  "product.f4": "Apple Watch sync — your training assistant on the wrist",
  "product.f5": "Training analytics — visualize your progress",
  "product.appStore": "Download on the App Store",

  "thoughts.title": "Thoughts & product notes",
  "thoughts.desc": "Independent thinking on product, design and life. Ideas captured, opinions refined.",
  "thoughts.pinned": "Pinned",
  "thoughts.all": "All articles",
  "thoughts.count": "Newest first · {n} articles",
  "article.back": "Back to thoughts",
  "article.empty": "This article has no body text yet.",

  "updates.title": "Updates",
  "updates.desc": "App release notes, product reflections, photos and fragments from everyday life.",
  "updates.type.app": "App update",
  "updates.type.photo": "Photo",
  "updates.type.thought": "Reflection",
  "updates.why": "Why we built this",
  "updates.released": "released",

  "me.title": "DAY 1 — Account",
  "me.description": "Manage your API keys and let AI agents read your health data",
  "me.welcome": "Welcome back",
  "me.desc": "You're signed in with your app account. Generate an API key here so your AI agent can read your health data securely.",
  "me.keys.title": "API keys",
  "me.keys.desc": "Create, view and revoke your API keys, and read the integration docs.",
  "me.keys.go": "Manage keys",
  "me.signedIn": "Signed in",
  "me.signOut": "Sign out",

  "card.viewProduct": "View product details",
  "card.readMins": "min read",

  "footer.tagline": "Thinking out loud, building products. Every day is a new Day 1.",
  "footer.col.content": "Content",
  "footer.col.product": "Product",
  "footer.col.contact": "Contact",
  "footer.link.thoughts": "Thoughts & ideas",
  "footer.link.updates": "Updates",
  "footer.link.privacy": "Privacy Policy",
  "footer.link.terms": "Terms of Use",
  "footer.link.email": "Email",
  "footer.rights": "All rights reserved.",
  "footer.built": "Built with care.",

  "common.readMore": "Read more",
};

const ja: Dict = {
  "meta.title": "DAY 1 — 毎朝、まず信号を見る",
  "meta.description": "DAY 1 は昨夜の心拍変動・安静時心拍数・睡眠を読み取り、あなた自身の過去 60 夜と比べて、今日は追い込むか、軽めにするか、休むかを教えます。iPhone と Apple Watch 対応。",

  "nav.thoughts": "考察",
  "nav.updates": "アップデート",
  "nav.product": "プロダクト",
  "nav.team": "チーム",
  "nav.developer": "開発者",
  "nav.menu": "メニュー",
  "nav.language": "言語",

  "hero.badge": "AI フィットネス",
  "hero.desc": "AI があなたの体を本当に理解する。DAY 1 はトレーニング・回復・健康データをひとつにまとめ、毎日を最高のスタートにします。",
  "hero.cta.product": "プロダクトを見る",
  "hero.cta.thoughts": "考察を読む",

  "section.thoughts.title": "最新の考察",
  "section.thoughts.desc": "プロダクト・デザイン・生活についての独立した考察と、DAY 1 の機能の裏にある設計の理由。",
  "section.thoughts.more": "すべての考察を見る",
  "section.updates.title": "最新のアップデート",
  "section.updates.desc": "アプリのリリースノート、プロダクトへの思い、そして日常。",
  "section.updates.more": "すべてのアップデートを見る",
  "section.product.eyebrow": "Our Product",
  "section.developer.eyebrow": "For Developers",
  "section.developer.title": "あなたの AI に、あなたの体を読ませる",
  "section.developer.desc": "健康は AI と同じように、継続的に追跡され、本当に理解されるべきです。アプリと同じアカウントでログインして API キーを発行し、Cursor・Claude Code・Codex などの AI エージェントに健康データを開放しましょう。誰よりもあなたを理解する AI に。",
  "section.developer.apply": "API キーを取得",
  "section.developer.docs": "API ドキュメント",
  "section.developer.step1.title": "ログイン",
  "section.developer.step1.desc": "アプリと同じアカウントで",
  "section.developer.step2.title": "キーを発行",
  "section.developer.step2.desc": "ワンクリックで専用 API キーを作成",
  "section.developer.step3.title": "エージェントに接続",
  "section.developer.step3.desc": "AI が自動でデータを読み取る",
  "section.team.title": "チーム",
  "section.team.desc": "フィットネスとテクノロジーを愛する仲間が、トレーニングをもっと賢くします。",

  "product.title": "DAY 1 — あなたのスマートな相棒",
  "product.subtitle": "記録するだけでなく、理解する",
  "product.description": "AI がトレーニング記録と回復管理を再定義し、毎日を最高の Day 1 に。",
  "product.detail": "DAY 1 は Apple ヘルスケアのデータと AI 分析を組み合わせ、体の状態を把握し、賢くトレーニングを計画し、必要なときにパーソナルなコーチングを届けます。",
  "product.f1": "AI リアルタイムコーチ — トレーニング中の音声ガイド",
  "product.f2": "身体の準備度 — HRV と睡眠から毎日の状態を評価",
  "product.f3": "スマートな計画 — 回復状況に合わせて自動調整",
  "product.f4": "Apple Watch 連携 — 手首の上のトレーニングアシスタント",
  "product.f5": "トレーニング分析 — 進歩を可視化",
  "product.appStore": "App Store でダウンロード",

  "thoughts.title": "考察とプロダクトノート",
  "thoughts.desc": "プロダクト・デザイン・生活についての独立した考察。ひらめきを記録し、考えを深める。",
  "thoughts.pinned": "ピン留め",
  "thoughts.all": "すべての記事",
  "thoughts.count": "新しい順 · 全 {n} 件",
  "article.back": "考察一覧へ戻る",
  "article.empty": "この記事にはまだ本文がありません。",

  "updates.title": "アップデート",
  "updates.desc": "アプリのリリースノート、プロダクトへの思い、日常の写真とひらめきの断片。",
  "updates.type.app": "アプリ更新",
  "updates.type.photo": "写真",
  "updates.type.thought": "雑感",
  "updates.why": "なぜこれを作ったか",
  "updates.released": "リリース",

  "me.title": "DAY 1 — マイページ",
  "me.description": "API キーを管理し、AI エージェントに健康データを読ませる",
  "me.welcome": "おかえりなさい",
  "me.desc": "アプリと同じアカウントでログインしています。ここで API キーを発行すると、AI エージェントが安全に健康データを読み取れます。",
  "me.keys.title": "API キー管理",
  "me.keys.desc": "API キーの発行・確認・失効と、連携ドキュメントの閲覧。",
  "me.keys.go": "管理へ",
  "me.signedIn": "ログイン中",
  "me.signOut": "ログアウト",

  "card.viewProduct": "プロダクト詳細を見る",
  "card.readMins": "分で読める",

  "footer.tagline": "考えを記録し、プロダクトを作る。毎日が新しい Day 1。",
  "footer.col.content": "コンテンツ",
  "footer.col.product": "プロダクト",
  "footer.col.contact": "連絡先",
  "footer.link.thoughts": "考察とアイデア",
  "footer.link.updates": "アップデート",
  "footer.link.privacy": "プライバシーポリシー",
  "footer.link.terms": "利用規約",
  "footer.link.email": "メール",
  "footer.rights": "All rights reserved.",
  "footer.built": "心を込めて作りました。",

  "common.readMore": "詳しく見る",
};

const ko: Dict = {
  "meta.title": "DAY 1 — 매일 아침, 신호등부터 확인하세요",
  "meta.description": "DAY 1은 어젯밤의 심박 변이도, 안정 시 심박수, 수면을 읽고 지난 60일 밤의 내 데이터와 비교해 오늘 강하게 할지, 가볍게 할지, 쉴지를 알려줍니다. iPhone과 Apple Watch 지원.",

  "nav.thoughts": "생각",
  "nav.updates": "업데이트",
  "nav.product": "제품",
  "nav.team": "팀",
  "nav.developer": "개발자",
  "nav.menu": "메뉴",
  "nav.language": "언어",

  "hero.badge": "AI 피트니스 테크",
  "hero.desc": "AI가 당신의 몸을 진짜로 이해합니다. DAY 1은 훈련, 회복, 건강 데이터를 하나로 모아 매일을 최고의 시작으로 만듭니다.",
  "hero.cta.product": "제품 살펴보기",
  "hero.cta.thoughts": "생각 읽기",

  "section.thoughts.title": "최신 생각",
  "section.thoughts.desc": "제품, 디자인, 삶에 대한 독립적인 생각과 DAY 1 기능 뒤에 있는 설계 이유.",
  "section.thoughts.more": "모든 생각 보기",
  "section.updates.title": "최신 업데이트",
  "section.updates.desc": "앱 릴리스 노트, 제품에 대한 소회, 그리고 우리의 일상.",
  "section.updates.more": "모든 업데이트 보기",
  "section.product.eyebrow": "Our Product",
  "section.developer.eyebrow": "For Developers",
  "section.developer.title": "당신의 AI가 당신의 몸을 읽게 하세요",
  "section.developer.desc": "건강은 AI처럼 지속적으로 추적되고 제대로 이해되어야 합니다. 앱과 같은 계정으로 로그인해 전용 API 키를 만들고, Cursor, Claude Code, Codex 같은 AI 에이전트에 건강 데이터를 열어 주세요. 누구보다 당신을 잘 아는 AI가 됩니다.",
  "section.developer.apply": "API 키 받기",
  "section.developer.docs": "API 문서 보기",
  "section.developer.step1.title": "로그인",
  "section.developer.step1.desc": "앱과 같은 계정으로",
  "section.developer.step2.title": "키 생성",
  "section.developer.step2.desc": "클릭 한 번으로 전용 API 키 생성",
  "section.developer.step3.title": "에이전트 연결",
  "section.developer.step3.desc": "AI가 데이터를 자동으로 읽습니다",
  "section.team.title": "우리 팀",
  "section.team.desc": "피트니스와 기술을 사랑하는 사람들이 훈련을 더 똑똑하게 만듭니다.",

  "product.title": "DAY 1 — 당신의 스마트 피트니스 파트너",
  "product.subtitle": "기록을 넘어, 이해로",
  "product.description": "AI로 훈련 기록과 회복 관리를 다시 정의해, 매일을 최고의 Day 1로.",
  "product.detail": "DAY 1은 Apple 건강 데이터와 AI 분석을 결합해 몸 상태를 파악하고, 훈련을 똑똑하게 계획하며, 필요할 때 맞춤 코칭을 제공합니다.",
  "product.f1": "AI 실시간 코치 — 훈련 중 음성 안내",
  "product.f2": "신체 준비도 — HRV와 수면 기반 일일 상태 평가",
  "product.f3": "스마트 훈련 계획 — 회복 상태에 맞춰 자동 조정",
  "product.f4": "Apple Watch 연동 — 손목 위의 훈련 도우미",
  "product.f5": "훈련 데이터 분석 — 발전 과정을 시각화",
  "product.appStore": "App Store에서 다운로드",

  "thoughts.title": "생각과 제품 노트",
  "thoughts.desc": "제품, 디자인, 삶에 대한 독립적인 생각. 영감을 기록하고 관점을 다듬습니다.",
  "thoughts.pinned": "고정 글",
  "thoughts.all": "전체 글",
  "thoughts.count": "최신순 · 총 {n}편",
  "article.back": "생각 목록으로",
  "article.empty": "이 글에는 아직 본문이 없습니다.",

  "updates.title": "업데이트",
  "updates.desc": "앱 릴리스 노트, 제품에 대한 소회, 일상의 사진과 영감 조각들.",
  "updates.type.app": "앱 업데이트",
  "updates.type.photo": "사진",
  "updates.type.thought": "소회",
  "updates.why": "왜 만들었나",
  "updates.released": "출시",

  "me.title": "DAY 1 — 내 계정",
  "me.description": "API 키를 관리하고 AI 에이전트가 건강 데이터를 읽게 하세요",
  "me.welcome": "다시 오셨군요",
  "me.desc": "앱과 같은 계정으로 로그인되어 있습니다. 여기서 API 키를 만들면 AI 에이전트가 건강 데이터를 안전하게 읽을 수 있습니다.",
  "me.keys.title": "API 키 관리",
  "me.keys.desc": "API 키를 생성·확인·폐기하고 연동 문서를 확인하세요.",
  "me.keys.go": "관리로 이동",
  "me.signedIn": "로그인됨",
  "me.signOut": "로그아웃",

  "card.viewProduct": "제품 상세 보기",
  "card.readMins": "분 소요",

  "footer.tagline": "생각을 기록하고 제품을 만듭니다. 매일이 새로운 Day 1.",
  "footer.col.content": "콘텐츠",
  "footer.col.product": "제품",
  "footer.col.contact": "연락처",
  "footer.link.thoughts": "생각과 아이디어",
  "footer.link.updates": "업데이트",
  "footer.link.privacy": "개인정보 처리방침",
  "footer.link.terms": "이용약관",
  "footer.link.email": "이메일",
  "footer.rights": "All rights reserved.",
  "footer.built": "정성껏 만들었습니다.",

  "common.readMore": "자세히 보기",
};

const dicts: Record<Locale, Dict> = { zh, "zh-Hant": zhHant, en, ja, ko };

export function translate(locale: Locale, key: string): string {
  return dicts[locale]?.[key] ?? zh[key] ?? key;
}

/** 简单占位符替换：format("共 {n} 篇", { n: 3 }) → "共 3 篇" */
export function format(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}

/** 是否属于中文（简/繁），用于"数据库内容是中文"时的展示决策 */
export function isChineseLocale(locale: Locale): boolean {
  return locale === "zh" || locale === "zh-Hant";
}
