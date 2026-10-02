"use client";

/**
 * LanguageMenu — 五语言切换菜单（导航栏 / 用户中心顶部栏共用）。
 *
 * 之前是 中↔英 的单按钮 toggle；语言扩到五种后改成下拉列表。
 * 选中即写 NEXT_LOCALE cookie 并 router.refresh()（逻辑仍在 LocaleProvider 里）。
 * 键盘：Esc 关闭；点击外部关闭；按钮带 aria-expanded / 菜单带 role=menu。
 */

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { LOCALES, LOCALE_NAMES, type Locale } from "@/i18n/messages";

const SHORT: Record<Locale, string> = {
  zh: "简",
  "zh-Hant": "繁",
  en: "EN",
  ja: "日",
  ko: "한",
};

export default function LanguageMenu({
  variant = "site",
  align = "right",
}: {
  /** site：官网导航样式；portal：用户中心暖棕样式 */
  variant?: "site" | "portal";
  align?: "left" | "right";
}) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const buttonCls =
    variant === "portal"
      ? "inline-flex items-center gap-1.5 h-8 px-2.5 rounded-full border border-[#C9A88C]/40 text-xs font-semibold text-[#6B4E3D] hover:border-[#3D2B1F] hover:bg-white/60 transition-all cursor-pointer"
      : "inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-border-strong text-xs font-semibold text-text-mid hover:border-ink hover:bg-surface transition-all cursor-pointer";

  const menuCls =
    variant === "portal"
      ? "bg-white border border-[#C9A88C]/30 shadow-[0_12px_32px_rgba(61,43,31,0.14)]"
      : "bg-surface border border-border shadow-[0_14px_40px_var(--c-shadow-strong)]";

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("nav.language")}
        className={buttonCls}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {SHORT[locale]}
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute top-[calc(100%+8px)] ${align === "right" ? "right-0" : "left-0"} min-w-[150px] py-1.5 rounded-xl z-[120] ${menuCls}`}
        >
          {LOCALES.map((l) => {
            const active = l === locale;
            return (
              <button
                key={l}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                lang={l === "zh" ? "zh-CN" : l === "zh-Hant" ? "zh-HK" : l}
                onClick={() => {
                  setOpen(false);
                  if (!active) setLocale(l);
                }}
                className={`w-full flex items-center justify-between gap-3 px-3.5 py-2 text-sm text-left cursor-pointer transition-colors ${
                  variant === "portal"
                    ? active
                      ? "text-[#3D2B1F] font-semibold"
                      : "text-[#6B4E3D] hover:bg-[#FAF6F1]"
                    : active
                      ? "text-text font-semibold"
                      : "text-text-mid hover:bg-bg-alt hover:text-text"
                }`}
              >
                {LOCALE_NAMES[l]}
                {active && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
