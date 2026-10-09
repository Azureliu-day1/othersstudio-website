import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * 上手指南（样板阶段）。
 *
 * 只完整写了第一节「红绿灯 + Apple Health + 手表」，用来先验证格式：
 * 用户看完能不能自己完成连接、知道要戴表睡觉。格式验证通过后再铺开其余 6 节、做五语言。
 * 所有 App 内文案（按钮名、弹窗原文）均逐字取自 iOS 源码 StringsZH.swift / DAY-1-Info.plist，
 * 截图来自 iPhone 17 Pro 模拟器上的 3.2 中文版真实流程（新账号，从注册走到第一次打卡）。
 */

export const metadata: Metadata = {
  title: "上手指南",
  description: "第一次用 DAY 1：连接 Apple Health、戴表睡一晚、第二天早上看红绿灯。每个功能需要什么权限、拒绝了怎么补开。",
  robots: { index: false, follow: true }, // 样板阶段不进搜索引擎
  alternates: { canonical: "/guide" },
};

const SECTIONS = [
  { id: "readiness", title: "红绿灯与 Apple Health", ready: true },
  { id: "training", title: "训练计划与记录", ready: false },
  { id: "coach", title: "AI 教练", ready: false },
  { id: "food", title: "拍照识别食物", ready: false },
  { id: "voice", title: "语音提问", ready: false },
  { id: "report", title: "AI 周报", ready: false },
  { id: "share", title: "碰一碰分享计划", ready: false },
  { id: "permissions", title: "全部权限一览", ready: false },
];

/** 真机界面截图（模拟器 3.2 中文版，已去掉状态栏）。宽 540，等比缩放。 */
function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-[220px] overflow-hidden rounded-[26px] border border-border-strong bg-[#0B0B0F] shadow-[0_10px_30px_var(--c-shadow-strong)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={540} height={1109} loading="lazy" decoding="async" className="block w-full h-auto" />
    </div>
  );
}

/** App 里的按钮 / 文字原样标出来，让用户对着屏幕找 */
function UI({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md bg-ink/[0.06] px-1.5 py-0.5 font-medium text-text whitespace-nowrap">
      {children}
    </span>
  );
}

function Panel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="text-xs font-semibold tracking-wider text-accent-deep mb-3">{label}</div>
      <div className="text-[15px] leading-relaxed text-text-mid space-y-2.5">{children}</div>
    </div>
  );
}

export default function GuidePage() {
  return (
    <>
      <Navbar />

      <header className="pt-36 pb-12 max-w-[960px] mx-auto px-6 md:px-15">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">上手指南</span>
        <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.12] tracking-[-0.02em] mb-5">
          第一次用 DAY 1，
          <br />
          照着做这 3 步。
        </h1>
        <p className="text-lg text-text-muted max-w-[52ch]">
          DAY 1 的红绿灯靠你昨晚的身体数据来判断今天该怎么练。下面三步做完，第二天早上就能看到第一盏真正属于你的灯。
        </p>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0">
          {[
            { t: "连接 Apple Health", d: <>打开 App，点主页的 <UI>连接 Apple Watch</UI>，选 <UI>连接 Apple Health</UI>，在授权页打开全部。</> },
            { t: "戴着手表睡一晚", d: <>心率变异性（HRV）大多在你睡着时测量。不戴表睡，红绿灯就只能靠问卷估算。</> },
            { t: "早上花 30 秒打卡", d: <>第二天打开 App，点主页的 <UI>新的一天</UI> 卡片，回答 6 个小问题，马上拿到今天的灯。</> },
          ].map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-border bg-surface p-6">
              <span className="font-mono text-xs text-accent-deep">第 {i + 1} 步</span>
              <h3 className="mt-2 mb-2 text-lg text-text">{s.t}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </header>

      <nav aria-label="指南目录" className="max-w-[960px] mx-auto px-6 md:px-15 pb-6">
        <div className="flex flex-wrap gap-2 border-t border-border pt-6">
          {SECTIONS.map((s) =>
            s.ready ? (
              <a key={s.id} href={`#${s.id}`} className="no-underline rounded-full border border-ink bg-ink px-4 py-1.5 text-sm text-on-ink">
                {s.title}
              </a>
            ) : (
              <span key={s.id} className="rounded-full border border-border px-4 py-1.5 text-sm text-text-soft">
                {s.title} · 整理中
              </span>
            )
          )}
        </div>
      </nav>

      <main className="max-w-[960px] mx-auto px-6 md:px-15 pb-28">
        <section id="readiness" className="scroll-mt-28 pt-10">
          <h2 className="text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.15] mb-3">红绿灯：每天早上告诉你今天怎么练</h2>
          <p className="text-base text-text-muted max-w-[60ch] mb-10">
            这是 DAY 1 最核心的功能，也是最需要你先做好设置的功能。没连 Apple Health，它就只能靠问卷粗略估算。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Panel label="能做什么">
              <p>
                每天早上读取你昨晚的 <b className="text-text">心率变异性（HRV）</b>、<b className="text-text">静息心率</b>和<b className="text-text">睡眠</b>，和你自己过去 60 晚的数据比较，给出 0–100 分和一盏灯：
              </p>
              <ul className="list-none p-0 space-y-1.5">
                <li><span className="inline-block w-2.5 h-2.5 rounded-full bg-[#34C759] mr-2 align-middle" />绿灯：恢复好，按计划练</li>
                <li><span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FFC53D] mr-2 align-middle" />黄灯：没完全恢复，减量或降强度</li>
                <li><span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF453A] mr-2 align-middle" />红灯：以恢复为主，休息或拉伸</li>
              </ul>
            </Panel>

            <Panel label="在 App 哪里">
              <p>主页最上方那张大卡片就是红绿灯。</p>
              <p>每天第一次打开时，这张卡片显示 <UI>新的一天</UI>。点它做完 30 秒打卡，卡片就变成 <UI>今日训练建议</UI> 和一盏灯。</p>
              <p>之后<b className="text-text">点一下</b>这张卡片，进入详情页，能看到分数是怎么算出来的、哪一项在拖后腿。</p>
            </Panel>

            <Panel label="需要什么权限">
              <p>
                <b className="text-text">Apple Health 读取权限</b>（HRV、静息心率、心率、睡眠、步数等）。
              </p>
              <p className="rounded-xl bg-accent-soft px-4 py-3 text-text">
                注意：App 第一次打开时<b>不会</b>自动问你要这个权限，需要你自己点一次连接。
              </p>
              <p>想要 HRV，还需要 <b className="text-text">Apple Watch 戴着睡觉</b>。</p>
            </Panel>

            <Panel label="拒绝了 / 没连上，怎么补开">
              <p><b className="text-text">在 App 里：</b>底部 <UI>我的</UI> → <UI>HealthKit 授权</UI>，重新点一次。</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/guide/zh/me-healthkit.webp" alt="「我的」页面里的「设备管理」和「HealthKit 授权」两行" width={720} height={242} loading="lazy" className="block w-full h-auto rounded-xl border border-border" />
              <p>
                <b className="text-text">在 iPhone 设置里：</b>
                <UI>设置</UI> → <UI>隐私与安全性</UI> → <UI>健康</UI> → <UI>DAY 1</UI>，把读取的项目全部打开。
              </p>
              <p className="text-sm text-text-muted">如果系统弹窗已经被拒绝过，App 里再点也不会弹，这时只能走 iPhone 设置这条路。</p>
            </Panel>
          </div>

          {/* 一步一步 */}
          <h3 className="mt-16 mb-2 text-xl text-text">第一次连接 Apple Health，一步一步</h3>
          <p className="mb-8 text-[15px] text-text-muted">下面都是 App 里的真实界面，照着点就行。</p>
          <ol className="list-none p-0 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
            {[
              {
                src: "/guide/zh/health-source.webp",
                alt: "健康数据来源选择页，三个选项",
                t: <>在主页点 <UI>连接 Apple Watch</UI> 卡片，弹出「健康数据来源」，选第一个 <UI>连接 Apple Health</UI>。</>,
              },
              {
                src: "/guide/zh/ios-sheet.webp",
                alt: "iOS 健康授权页，开关都是关的",
                t: <>系统弹出「访问健康数据」，开关默认都是关的。点 <UI>全部打开</UI>。</>,
              },
              {
                src: "/guide/zh/ios-sheet-allowed.webp",
                alt: "iOS 健康授权页，开关全部打开，底部允许按钮变蓝",
                t: <>开关全部变绿后，点最下面蓝色的 <UI>允许</UI>。</>,
              },
              {
                src: "/guide/zh/home-readiness.webp",
                alt: "主页，连接 Apple Watch 卡片已消失，显示今日训练建议黄灯",
                t: <>回到主页，<UI>连接 Apple Watch</UI> 卡片不见了，就是连上了。</>,
              },
            ].map((step, i) => (
              <li key={step.src} className="flex flex-col gap-3">
                <Shot src={step.src} alt={step.alt} />
                <p className="text-sm leading-relaxed text-text-mid">
                  <span className="font-mono text-xs text-accent-deep mr-1.5">{i + 1}</span>
                  {step.t}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border border-border bg-bg-alt p-6 text-[15px] leading-relaxed text-text-mid">
            <b className="text-text">授权页底部的小字写着「FitTrack」？</b>
            <br />
            FitTrack 是 DAY 1 以前的名字，是同一个 App。授权页标题写的是「DAY 1 想要访问并更新你的健康数据」，放心允许。
          </div>

          {/* 第二天早上 */}
          <h3 className="mt-16 mb-2 text-xl text-text">第二天早上：30 秒打卡</h3>
          <p className="mb-8 text-[15px] leading-relaxed text-text-muted max-w-[62ch]">
            打开 App，主页会出现 <UI>新的一天</UI> 卡片。点进去按顺序做完，就能看到今天的灯和两套训练方案。
          </p>
          <ol className="list-none p-0 grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
            {[
              {
                src: "/guide/zh/sleep-fill.webp",
                alt: "昨晚未记录到睡眠，手动填写睡眠时长",
                t: <>如果手表昨晚没记到睡眠，会先问你睡了多久。拖到大概的小时数，点 <UI>记录完成</UI>。戴表睡了就不会出现这一步。</>,
              },
              {
                src: "/guide/zh/checkin.webp",
                alt: "晨间打卡第 1 题，今天感觉怎么样",
                t: <>回答 6 个小问题，每题点一个最接近的选项，再点 <UI>下一步</UI>。凭第一感觉选就好。</>,
              },
              {
                src: "/guide/zh/checkin-result.webp",
                alt: "打卡结果，黄灯 59 分，方案 A 正常训练、方案 B 轻量训练",
                t: <>出结果：一盏灯、一个分数、两套方案。标着 <UI>推荐</UI> 的就是今天最合适的练法。</>,
              },
            ].map((step, i) => (
              <li key={step.src} className={`flex flex-col gap-3 ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}>
                <Shot src={step.src} alt={step.alt} />
                <p className="text-sm leading-relaxed text-text-mid">
                  <span className="font-mono text-xs text-accent-deep mr-1.5">{i + 1}</span>
                  {step.t}
                </p>
              </li>
            ))}
          </ol>

          {/* 前 14 天 */}
          <h3 className="mt-16 mb-3 text-xl text-text">为什么前几天的灯「不太准」</h3>
          <p className="text-[15px] leading-relaxed text-text-mid max-w-[62ch] mb-6">
            红绿灯是和<b className="text-text">你自己</b>比，不是和别人比，所以它需要先认识你。这段时间详情页会显示 <UI>基线学习中，评分会越来越贴合你的身体</UI>，是正常的。
          </p>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {[
              { n: "第 1–3 晚", d: "数据还少，先用通用标准判断" },
              { n: "第 4–10 晚", d: "逐步换成你的个人基线，分数平滑过渡，不会突然跳" },
              { n: "第 14 晚以后", d: "个人基线稳定，灯最准" },
            ].map((x, i) => (
              <div key={x.n} className={`p-5 ${i === 2 ? "bg-accent-soft" : "bg-surface"}`}>
                <div className="font-mono text-sm text-text">{x.n}</div>
                <div className="mt-1.5 text-sm leading-relaxed text-text-muted">{x.d}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-text-muted">中间哪晚没戴表，不会清零，只是那一晚不计入。</p>

          {/* 没有手表 */}
          <h3 className="mt-16 mb-3 text-xl text-text">没有 Apple Watch 也能用</h3>
          <p className="text-[15px] leading-relaxed text-text-mid max-w-[62ch] mb-6">
            在 <UI>健康数据来源</UI> 里还有两个选项。灯会比戴表时粗略一些，但每天的训练建议照样有：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "连接 Apple Health", d: "通过 Apple Watch 等设备自动同步数据", tag: "最准" },
              { t: "我没有智能手表", d: "每天手动输入睡眠等关键数据", tag: "" },
              { t: "跳过，仅使用自评", d: "通过晨间 Check-in 评估身体状态", tag: "" },
            ].map((o) => (
              <div key={o.t} className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-text">{o.t}</span>
                  {o.tag && <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs text-accent-deep">{o.tag}</span>}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{o.d}</p>
              </div>
            ))}
          </div>

          {/* 常见问题 */}
          <h3 className="mt-16 mb-4 text-xl text-text">还是不对？</h3>
          <div className="border-t border-border">
            {[
              {
                q: "连了 Apple Health，详情页还是看不到 HRV",
                a: "确认手表昨晚戴着睡了，且手表上「健康」App 能看到昨晚的心率变异性。手表只在你睡着、静止时测 HRV，白天测的不算进当晚。",
              },
              {
                q: "主页的「连接 Apple Watch」卡片一直在",
                a: "说明授权没给全。去 iPhone 设置 → 隐私与安全性 → 健康 → DAY 1，把读取的项目全部打开，再回到 App。",
              },
              {
                q: "每天早上都让我补填睡眠",
                a: "说明 App 没读到手表的睡眠记录。确认睡觉时戴着手表，并且 iPhone「健康」App 里能看到昨晚的睡眠。没有手表的话，每天填一下时长就行，灯会参考它。",
              },
              {
                q: "手表换了 / App 重装后，灯又变回「学习中」",
                a: "个人基线跟着你的健康数据走。重装后重新连接 Apple Health 即可，历史数据还在「健康」里，几天内就会恢复。",
              },
            ].map((f) => (
              <details key={f.q} className="group border-b border-border">
                <summary className="cursor-pointer list-none py-5 pr-8 text-base font-medium text-text relative">
                  {f.q}
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 text-text-soft transition-transform group-open:rotate-45">＋</span>
                </summary>
                <p className="pb-5 pr-8 text-[15px] leading-relaxed text-text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-20 rounded-2xl bg-ink px-7 py-8 text-on-ink">
          <p className="text-base leading-relaxed">其他功能的指南正在整理。遇到问题可以直接写信给我们：</p>
          <a href="mailto:support@day1aifitness.com" className="mt-2 inline-block text-accent no-underline">support@day1aifitness.com</a>
          <span className="mx-3 text-on-ink/30">·</span>
          <Link href="/" className="text-on-ink/70 no-underline hover:text-on-ink">返回首页</Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
