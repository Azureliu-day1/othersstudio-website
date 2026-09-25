"use client";

import LanguageMenu from "@/components/LanguageMenu";

/**
 * 用户中心顶部栏的语言切换（暖棕样式）。逻辑与官网导航栏共用 LanguageMenu。
 */
export default function LocaleSwitchButton() {
  return <LanguageMenu variant="portal" />;
}
