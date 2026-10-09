import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * 上手指南（样板阶段）。
 *
 * 只完整写了第一节「红绿灯 + Apple Health + 手表」，用来先验证格式：
 * 用户看完能不能自己完成连接、知道要戴表睡觉。格式验证通过后再铺开其余 6 节、做五语言。
 * 所有 App 内文案（按钮名、弹窗原文）均逐字取自 iOS 源码 StringsZH.swift / DAY-1-Info.plist。
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

/** 截图占位：拿到 3.2 中文真机截图后替换。用灰框而不是画假界面。 */
function Shot({ label }: { label: string }) {
  return (
    <div className="aspect-[9/16] w-full max-w-[200px] rounded-[28px] border-2 border-dashed border-border-strong bg-bg-alt flex items-center justify-center p-5 text-center">
      <span className="text-xs leading-relaxed text-text-muted">
        截图
        <br />
        {label}
      </span>
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
            { t: "早上花 30 秒打卡", d: <>第二天打开 App，点 <UI>新的一天</UI> 卡片，回答精力、酸痛、压力几个问题。</> },
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
              <p><b className="text-text">长按</b>它，进入详情页，能看到分数是怎么算出来的、哪一项在拖后腿。</p>
              <p>每天第一次打开时，卡片上会显示 <UI>🌅 新的一天</UI>，点它完成 30 秒晨间打卡。</p>
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
              <p><b className="text-text">在 App 里：</b><UI>我的</UI> → <UI>HealthKit 授权</UI>，重新点一次。</p>
              <p>
                <b className="text-text">在 iPhone 设置里：</b>
                <UI>设置</UI> → <UI>隐私与安全性</UI> → <UI>健康</UI> → <UI>FitTrack</UI> → <UI>打开所有</UI>
              </p>
              <p className="text-sm text-text-muted">也可以从 设置 → 健康 → 数据访问与设备 → FitTrack 进去，效果一样。</p>
            </Panel>
          </div>

          {/* 一步一步 */}
          <h3 className="mt-16 mb-6 text-xl text-text">第一次连接 Apple Health，一步一步</h3>
          <ol className="list-none p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: <>在主页点 <UI>连接 Apple Watch</UI> 卡片</>, s: "主页「连接 Apple Watch」卡片" },
              { t: <>在「健康数据来源」里选 <UI>连接 Apple Health</UI></>, s: "健康数据来源 选择页" },
              { t: <>系统弹出「健康」授权页，点 <UI>打开所有</UI></>, s: "iOS 健康授权页" },
              { t: <>点右上角 <UI>允许</UI>，回到主页，卡片消失就成功了</>, s: "连接成功后的主页" },
            ].map((step, i) => (
              <li key={i} className="flex flex-col gap-3">
                <Shot label={step.s} />
                <p className="text-sm leading-relaxed text-text-mid">
                  <span className="font-mono text-xs text-accent-deep mr-1.5">{i + 1}</span>
                  {step.t}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border border-border bg-bg-alt p-6 text-[15px] leading-relaxed text-text-mid">
            <b className="text-text">授权页上写的是「FitTrack」，不是「DAY 1」？</b>
            <br />
            没点错，FitTrack 是 DAY 1 在系统里的名字，放心允许。系统弹窗上的原话是：
            <blockquote className="mt-3 mb-0 border-l-2 border-accent pl-4 text-text-muted">
              FitTrack 需要读取您的健康数据（步数、心率、睡眠等）以提供个性化训练建议和恢复分析。
            </blockquote>
          </div>

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
                a: "说明授权没给全。去 iPhone 设置 → 隐私与安全性 → 健康 → FitTrack，把读取的项目全部打开，再回到 App。",
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
