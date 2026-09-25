/**
 * 服务端读取当前 locale：cookie 优先；首次访问没有 cookie 时按浏览器 Accept-Language 挑。
 * 供根 layout 与服务端页面使用。
 */

import { cookies, headers } from "next/headers";
import {
  type Locale,
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  normalizeLocale,
  pickLocaleFromAcceptLanguage,
  translate,
} from "./messages";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const fromCookie = normalizeLocale(jar.get(LOCALE_COOKIE)?.value);
  if (fromCookie) return fromCookie;
  const h = await headers();
  return pickLocaleFromAcceptLanguage(h.get("accept-language")) ?? DEFAULT_LOCALE;
}

/** 服务端取词：在服务端组件里直接翻译门面文案。 */
export async function getServerT(): Promise<(key: string) => string> {
  const locale = await getLocale();
  return (key: string) => translate(locale, key);
}
