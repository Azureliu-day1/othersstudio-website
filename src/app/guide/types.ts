/**
 * 上手指南的内容结构（五种语言共用一套结构，各语言一个文件填内容）。
 *
 * 文字里的小标记（rich.tsx 负责渲染）：
 *   [[home.watch.disconnected]]  → 引用 App 文案键，按当前语言显示 App 里的原文按钮名
 *   [=全部打开=]                  → 直接写的界面文字（iOS 系统弹窗、设置 App 里的字，App 文案里没有）
 *   **加粗**                      → 强调
 */

export type Shot = {
  /** public/guide/<lang>/ 下的文件名（不带扩展名） */
  shot: string;
  alt: string;
  text: string;
};

export type Block =
  | {
      kind: "panels";
      what: string[];
      where: string[];
      perms: string[];
      fix: string[];
      /** 「怎么补开」里配的一张小图（横图） */
      fixImage?: { shot: string; alt: string; w: number; h: number };
    }
  | { kind: "steps"; title: string; intro?: string; items: Shot[] }
  | { kind: "callout"; title: string; body: string }
  | { kind: "timeline"; title: string; intro: string; items: { n: string; d: string }[]; note?: string }
  | { kind: "options"; title: string; intro: string; items: { t: string; d: string; tag?: string }[] }
  | { kind: "table"; title: string; intro?: string; head: string[]; rows: string[][] }
  | { kind: "faq"; title: string; items: { q: string; a: string }[] };

export type Section = {
  id: string;
  /** 目录里的短名 */
  nav: string;
  title: string;
  lead: string;
  blocks: Block[];
};

export type GuideDoc = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string[];
  heroLead: string;
  quick: { t: string; d: string }[];
  /** 「第 {n} 步」 */
  stepLabel: string;
  tocLabel: string;
  panelLabels: { what: string; where: string; perms: string; fix: string };
  /** 截图不是本语言时的提示（简中留空） */
  shotNote?: string;
  contactText: string;
  backHome: string;
  sections: Section[];
};
