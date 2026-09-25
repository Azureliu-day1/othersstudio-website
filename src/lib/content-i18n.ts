/**
 * 数据库内容（文章 / 动态）的多语言取值。
 *
 * 原字段永远是作者写的简中原文；其他语言放在 `translations` JSON 里：
 *   articles.translations = { "en": {title, tag, excerpt, content}, "zh-Hant": {...}, "ja": {...}, "ko": {...} }
 *   updates.translations  = { "en": {title, content, why, changelog: [{text, highlight}]}, ... }
 *
 * 规则：当前语言有译文且该字段非空 → 用译文；否则回退原文（简中）。
 * 这样后台只填了标题没填正文时，标题是译文、正文还是原文，永远不会空白。
 */

import type { Locale } from "@/i18n/messages";

export type ArticleTranslation = {
  title?: string;
  tag?: string;
  excerpt?: string;
  content?: string;
};

export type ChangelogItem = { text: string; highlight: boolean };

export type UpdateTranslation = {
  title?: string;
  content?: string;
  why?: string;
  changelog?: ChangelogItem[];
};

export type ArticleTranslations = Partial<Record<Locale, ArticleTranslation>>;
export type UpdateTranslations = Partial<Record<Locale, UpdateTranslation>>;

/** 需要译文的语言（简中是原文，不在此列） */
export const TRANSLATION_LOCALES: Exclude<Locale, "zh">[] = ["zh-Hant", "en", "ja", "ko"];

function nonEmpty(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function pick<T extends Record<string, unknown>>(translations: unknown, locale: Locale): T | null {
  if (locale === "zh" || !translations || typeof translations !== "object") return null;
  const t = (translations as Record<string, unknown>)[locale];
  return t && typeof t === "object" ? (t as T) : null;
}

/** 文章行 → 当前语言视图（字段名不变，直接替换原字段的值） */
export function localizeArticle<R extends { title: string; tag?: string | null; excerpt?: string | null; content?: string | null; translations?: unknown }>(
  row: R,
  locale: Locale
): R {
  const t = pick<ArticleTranslation>(row.translations, locale);
  if (!t) return row;
  return {
    ...row,
    title: nonEmpty(t.title) ? t.title : row.title,
    tag: nonEmpty(t.tag) ? t.tag : row.tag,
    excerpt: nonEmpty(t.excerpt) ? t.excerpt : row.excerpt,
    content: nonEmpty(t.content) ? t.content : row.content,
  };
}

/** 动态行 → 当前语言视图 */
export function localizeUpdate<R extends { title: string; content?: string | null; why?: string | null; changelog?: ChangelogItem[] | null; translations?: unknown }>(
  row: R,
  locale: Locale
): R {
  const t = pick<UpdateTranslation>(row.translations, locale);
  if (!t) return row;
  const changelog = Array.isArray(t.changelog) && t.changelog.length > 0 ? t.changelog : row.changelog;
  return {
    ...row,
    title: nonEmpty(t.title) ? t.title : row.title,
    content: nonEmpty(t.content) ? t.content : row.content,
    why: nonEmpty(t.why) ? t.why : row.why,
    changelog,
  };
}

/** 后台表单 → 安全解析 translations JSON（坏 JSON 当作空，不让保存炸掉） */
export function parseTranslationsField(raw: FormDataEntryValue | null): Record<string, unknown> {
  if (typeof raw !== "string" || !raw.trim()) return {};
  try {
    const v = JSON.parse(raw);
    return v && typeof v === "object" && !Array.isArray(v) ? v : {};
  } catch {
    return {};
  }
}
