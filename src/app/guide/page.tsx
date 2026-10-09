import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocale } from "@/i18n/server";
import type { Locale } from "@/i18n/messages";
import type { Block, Shot as ShotData } from "./types";
import { GUIDES, SHOT_LOCALES } from "./content";
import { rich, plain } from "./rich";

/**
 * 上手指南：八个功能，每个讲清「能做什么 / 在哪 / 要什么权限 / 拒绝了怎么补开」。
 *
 * 内容在 ./content/<语言>.ts，结构见 ./types.ts。按钮名用 App 文案键引用，
 * 由 scripts/gen-guide-strings.py 从 iOS 五语文案生成 ./app-strings.ts，保证和 App 里一字不差。
 * 截图来自 iPhone 17 Pro 模拟器上的 3.2 真实流程；还没拍本语言截图的，回退简中截图并加一行提示。
 */

export async function generateMetadata(): Promise<Metadata> {
  const doc = GUIDES[await getLocale()];
  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternates: { canonical: "/guide" },
  };
}

function shotSrc(locale: Locale, name: string) {
  return `/guide/${SHOT_LOCALES.has(locale) ? locale : "zh"}/${name}.webp`;
}

function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-[220px] overflow-hidden rounded-[26px] border border-border-strong bg-[#0B0B0F] shadow-[0_10px_30px_var(--c-shadow-strong)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={540} height={1109} loading="lazy" decoding="async" className="block w-full h-auto" />
    </div>
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

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-16 mb-2 text-xl text-text">{children}</h3>;
}

function Steps({ items, locale }: { items: ShotData[]; locale: Locale }) {
  const cols = items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  return (
    <ol className={`mt-6 list-none p-0 grid grid-cols-2 ${cols} gap-x-5 gap-y-8`}>
      {items.map((step, i) => (
        <li key={step.shot} className="flex flex-col gap-3">
          <Shot src={shotSrc(locale, step.shot)} alt={step.alt} />
          <p className="text-sm leading-relaxed text-text-mid">
            {items.length > 1 && <span className="font-mono text-xs text-accent-deep mr-1.5">{i + 1}</span>}
            {rich(step.text, locale)}
          </p>
        </li>
      ))}
    </ol>
  );
}

type Labels = { what: string; where: string; perms: string; fix: string };

function BlockView({ block, locale, labels }: { block: Block; locale: Locale; labels: Labels }) {
  switch (block.kind) {
    case "panels":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Panel label={labels.what}>{block.what.map((t, i) => <p key={i}>{rich(t, locale)}</p>)}</Panel>
          <Panel label={labels.where}>{block.where.map((t, i) => <p key={i}>{rich(t, locale)}</p>)}</Panel>
          <Panel label={labels.perms}>{block.perms.map((t, i) => <p key={i}>{rich(t, locale)}</p>)}</Panel>
          <Panel label={labels.fix}>
            {block.fix.map((t, i) => (
              <p key={i}>{rich(t, locale)}</p>
            ))}
            {block.fixImage && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={shotSrc(locale, block.fixImage.shot)}
                alt={block.fixImage.alt}
                width={block.fixImage.w}
                height={block.fixImage.h}
                loading="lazy"
                className="block w-full h-auto rounded-xl border border-border"
              />
            )}
          </Panel>
        </div>
      );
    case "steps":
      return (
        <div>
          <H3>{rich(block.title, locale)}</H3>
          {block.intro && <p className="text-[15px] leading-relaxed text-text-muted max-w-[62ch]">{rich(block.intro, locale)}</p>}
          <Steps items={block.items} locale={locale} />
        </div>
      );
    case "callout":
      return (
        <div className="mt-8 rounded-2xl border border-border bg-bg-alt p-6 text-[15px] leading-relaxed text-text-mid">
          <b className="text-text">{rich(block.title, locale)}</b>
          <p className="mt-1.5">{rich(block.body, locale)}</p>
        </div>
      );
    case "timeline":
      return (
        <div>
          <H3>{rich(block.title, locale)}</H3>
          <p className="text-[15px] leading-relaxed text-text-mid max-w-[62ch] mb-6">{rich(block.intro, locale)}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {block.items.map((x, i) => (
              <div key={x.n} className={`p-5 ${i === block.items.length - 1 ? "bg-accent-soft" : "bg-surface"}`}>
                <div className="font-mono text-sm text-text">{x.n}</div>
                <div className="mt-1.5 text-sm leading-relaxed text-text-muted">{rich(x.d, locale)}</div>
              </div>
            ))}
          </div>
          {block.note && <p className="mt-3 text-sm text-text-muted">{rich(block.note, locale)}</p>}
        </div>
      );
    case "options":
      return (
        <div>
          <H3>{rich(block.title, locale)}</H3>
          <p className="text-[15px] leading-relaxed text-text-mid max-w-[62ch] mb-6">{rich(block.intro, locale)}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {block.items.map((o) => (
              <div key={o.t} className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-text">{plain(o.t, locale)}</span>
                  {o.tag && <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs text-accent-deep">{o.tag}</span>}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{rich(o.d, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "table":
      return (
        <div>
          <H3>{rich(block.title, locale)}</H3>
          {block.intro && <p className="text-[15px] leading-relaxed text-text-muted max-w-[62ch]">{rich(block.intro, locale)}</p>}
          <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead className="bg-bg-alt">
                <tr>
                  {block.head.map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-semibold text-text whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((r, i) => (
                  <tr key={i} className="border-t border-border bg-surface align-top">
                    {r.map((c, j) => (
                      <td key={j} className={`px-4 py-3 leading-relaxed ${j === 0 ? "font-medium text-text whitespace-nowrap" : "text-text-mid"}`}>{rich(c, locale)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "faq":
      return (
        <div>
          <H3>{rich(block.title, locale)}</H3>
          <div className="mt-4 border-t border-border">
            {block.items.map((f) => (
              <details key={f.q} className="group border-b border-border">
                <summary className="cursor-pointer list-none py-5 pr-8 text-base font-medium text-text relative">
                  {rich(f.q, locale)}
                  <span aria-hidden="true" className="absolute right-1 top-1/2 -translate-y-1/2 text-text-soft transition-transform group-open:rotate-45">＋</span>
                </summary>
                <p className="pb-5 pr-8 text-[15px] leading-relaxed text-text-muted">{rich(f.a, locale)}</p>
              </details>
            ))}
          </div>
        </div>
      );
  }
}

export default async function GuidePage() {
  const locale = await getLocale();
  const doc = GUIDES[locale];

  return (
    <>
      <Navbar />

      <header className="pt-36 pb-12 max-w-[960px] mx-auto px-6 md:px-15">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">{doc.eyebrow}</span>
        <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.12] tracking-[-0.02em] mb-5 text-balance">
          {doc.heroTitle.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>
        <p className="text-lg text-text-muted max-w-[52ch]">{doc.heroLead}</p>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0">
          {doc.quick.map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-border bg-surface p-6">
              <span className="font-mono text-xs text-accent-deep">{doc.stepLabel.replace("{n}", String(i + 1))}</span>
              <h2 className="mt-2 mb-2 text-lg text-text">{s.t}</h2>
              <p className="text-sm leading-relaxed text-text-muted">{rich(s.d, locale)}</p>
            </li>
          ))}
        </ol>
      </header>

      <nav aria-label={doc.tocLabel} className="sticky top-16 z-30 bg-bg/90 backdrop-blur">
        <div className="max-w-[960px] mx-auto px-6 md:px-15">
          <div className="flex gap-2 overflow-x-auto border-y border-border py-3 [scrollbar-width:none]">
            {doc.sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="no-underline shrink-0 rounded-full border border-border px-4 py-1.5 text-sm text-text-mid hover:border-ink hover:text-text transition-colors">
                {s.nav}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-[960px] mx-auto px-6 md:px-15 pb-28">
        {doc.shotNote && <p className="mt-6 rounded-xl bg-bg-alt px-4 py-3 text-sm text-text-muted">{doc.shotNote}</p>}

        {doc.sections.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-40 pt-20">
            <h2 className="text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.15] mb-3 text-balance">{sec.title}</h2>
            <p className="text-base text-text-muted max-w-[60ch] mb-10">{rich(sec.lead, locale)}</p>
            <div className="space-y-2">
              {sec.blocks.map((b, i) => (
                <BlockView key={i} block={b} locale={locale} labels={doc.panelLabels} />
              ))}
            </div>
          </section>
        ))}

        <div className="mt-24 rounded-2xl bg-ink px-7 py-8 text-on-ink">
          <p className="text-base leading-relaxed">{doc.contactText}</p>
          <a href="mailto:support@day1aifitness.com" className="mt-2 inline-block text-accent no-underline">support@day1aifitness.com</a>
          <span className="mx-3 text-on-ink/30">·</span>
          <Link href="/" className="text-on-ink/70 no-underline hover:text-on-ink">{doc.backHome}</Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
