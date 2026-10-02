"use client";

/**
 * 译文编辑器（文章 / 动态共用）。
 *
 * 简中原文仍在上方的主表单里；这里按语言分页签填繁中 / 英 / 日 / 韩。
 * 所有译文合成一个 JSON 放进隐藏字段 `translations`，服务端 parseTranslationsField 解析。
 * 某语言某字段留空 = 前台回退简中原文；整页签留空 = 该语言全部回退。
 */

import { useState } from "react";
import { LOCALE_NAMES } from "@/i18n/messages";
import { TRANSLATION_LOCALES, type ChangelogItem } from "@/lib/content-i18n";

type Kind = "article" | "update";
type Lang = (typeof TRANSLATION_LOCALES)[number];
type Fields = Record<string, string>;
type State = Record<Lang, Fields>;

const ARTICLE_FIELDS: { key: string; label: string; rows?: number }[] = [
  { key: "title", label: "标题" },
  { key: "tag", label: "标签" },
  { key: "excerpt", label: "摘要", rows: 2 },
  { key: "content", label: "正文", rows: 12 },
];

const UPDATE_FIELDS: { key: string; label: string; rows?: number }[] = [
  { key: "title", label: "标题" },
  { key: "changelog", label: "更新条目（每行一条，行首加 * 表示重点）", rows: 5 },
  { key: "why", label: "为什么做这个", rows: 4 },
  { key: "content", label: "正文 / 补充说明", rows: 6 },
];

function changelogToText(items: unknown): string {
  if (!Array.isArray(items)) return "";
  return (items as ChangelogItem[])
    .map((c) => (c.highlight ? "* " : "") + (c.text ?? ""))
    .join("\n");
}

function textToChangelog(text: string): ChangelogItem[] {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => (l.startsWith("* ") ? { text: l.slice(2).trim(), highlight: true } : { text: l, highlight: false }));
}

function fromInitial(kind: Kind, initial: unknown): State {
  const src = (initial && typeof initial === "object" ? initial : {}) as Record<string, Record<string, unknown>>;
  const out = {} as State;
  for (const lang of TRANSLATION_LOCALES) {
    const t = src[lang] ?? {};
    const f: Fields = {};
    for (const { key } of kind === "article" ? ARTICLE_FIELDS : UPDATE_FIELDS) {
      f[key] = key === "changelog" ? changelogToText(t[key]) : typeof t[key] === "string" ? (t[key] as string) : "";
    }
    out[lang] = f;
  }
  return out;
}

function toJSON(kind: Kind, state: State): string {
  const out: Record<string, Record<string, unknown>> = {};
  for (const lang of TRANSLATION_LOCALES) {
    const f = state[lang];
    const entry: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(f)) {
      if (!v.trim()) continue;
      entry[k] = k === "changelog" && kind === "update" ? textToChangelog(v) : v;
    }
    if (Object.keys(entry).length) out[lang] = entry;
  }
  return JSON.stringify(out);
}

export function TranslationsEditor({ kind, initial }: { kind: Kind; initial?: unknown }) {
  const [state, setState] = useState<State>(() => fromInitial(kind, initial));
  const [active, setActive] = useState<Lang>("en");
  const fields = kind === "article" ? ARTICLE_FIELDS : UPDATE_FIELDS;

  const filled = (lang: Lang) => Object.values(state[lang]).some((v) => v.trim());

  return (
    <div className="rounded-2xl border border-[#C9A88C]/20 bg-[#FAF6F1] p-4">
      <input type="hidden" name="translations" value={toJSON(kind, state)} />
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-[#6B4E3D]">其他语言（留空的字段前台显示简中原文）</span>
      </div>
      <div className="flex gap-1.5 mb-4">
        {TRANSLATION_LOCALES.map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => setActive(lang)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
              active === lang
                ? "bg-[#3D2B1F] text-white border-[#3D2B1F]"
                : "bg-white text-[#6B4E3D] border-[#C9A88C]/30 hover:bg-[#F0E8DF]"
            }`}
          >
            {LOCALE_NAMES[lang]}
            {filled(lang) && <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 align-middle" />}
          </button>
        ))}
      </div>
      <div className="space-y-3" lang={active === "zh-Hant" ? "zh-HK" : active}>
        {fields.map(({ key, label, rows }) => (
          <div key={key}>
            <label className="block text-[11px] font-medium text-[#6B4E3D] mb-1.5">{label}</label>
            {rows ? (
              <textarea
                rows={rows}
                value={state[active][key]}
                onChange={(e) => setState((s) => ({ ...s, [active]: { ...s[active], [key]: e.target.value } }))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9A88C]/20 bg-white text-[#3D2B1F] text-sm focus:outline-none focus:ring-2 focus:ring-[#5C3D2E]/20 transition-all resize-y leading-relaxed"
              />
            ) : (
              <input
                value={state[active][key]}
                onChange={(e) => setState((s) => ({ ...s, [active]: { ...s[active], [key]: e.target.value } }))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C9A88C]/20 bg-white text-[#3D2B1F] text-sm focus:outline-none focus:ring-2 focus:ring-[#5C3D2E]/20 transition-all"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
