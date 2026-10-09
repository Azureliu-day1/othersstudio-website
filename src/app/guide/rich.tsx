import type { ReactNode } from "react";
import type { Locale } from "@/i18n/messages";
import { APP_STRINGS } from "./app-strings";

/**
 * 指南文字的小标记渲染：
 *   [[key]]   App 文案键 → 当前语言的 App 原文（缺译回退简中，再回退 key 本身）
 *   [=文字=]  直接写的界面文字
 *   **文字**  加粗
 * 两种界面文字都渲染成同一种「按钮标签」样式，让用户对着屏幕找。
 */

export function appString(locale: Locale, key: string): string {
  return APP_STRINGS[locale]?.[key] ?? APP_STRINGS.zh?.[key] ?? key;
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-md bg-ink/[0.06] px-1.5 py-0.5 font-medium text-text whitespace-nowrap">
      {children}
    </span>
  );
}

const TOKEN = /(\[\[[a-zA-Z0-9_.]+\]\]|\[=[^=\]]+=\]|\*\*[^*]+\*\*)/g;

export function rich(text: string, locale: Locale): ReactNode {
  const parts = text.split(TOKEN);
  return parts.map((p, i) => {
    if (p.startsWith("[[") && p.endsWith("]]")) return <Chip key={i}>{appString(locale, p.slice(2, -2))}</Chip>;
    if (p.startsWith("[=") && p.endsWith("=]")) return <Chip key={i}>{p.slice(2, -2)}</Chip>;
    if (p.startsWith("**") && p.endsWith("**")) return <b key={i} className="text-text">{p.slice(2, -2)}</b>;
    return p;
  });
}

/** 纯文本版（给 alt / metadata 用）：去掉标记，App 键换成原文 */
export function plain(text: string, locale: Locale): string {
  return text
    .replace(/\[\[([a-zA-Z0-9_.]+)\]\]/g, (_, k) => appString(locale, k))
    .replace(/\[=([^=\]]+)=\]/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1");
}
