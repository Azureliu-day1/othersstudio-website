import type { Locale } from "@/i18n/messages";
import type { GuideDoc } from "../types";
import { zh } from "./zh";
import { zhHant } from "./zh-Hant";
import { en } from "./en";
import { ja } from "./ja";
import { ko } from "./ko";

export const GUIDES: Record<Locale, GuideDoc> = { zh, "zh-Hant": zhHant, en, ja, ko };

/** 已经拍了本语言 App 截图的语言；其他语言回退简中截图 */
export const SHOT_LOCALES = new Set<Locale>(["zh"]);
