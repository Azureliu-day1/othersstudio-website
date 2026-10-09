#!/usr/bin/env python3
"""
从 iOS App 的五语文案里，抽出上手指南用到的键，生成 src/app/guide/app-strings.ts。

用法（在网站仓库根目录）：
    python3 scripts/gen-guide-strings.py "/Users/azure/Downloads/FitTrack/DAY 1/DAY 1"

指南内容文件里用 [[key]] 引用 App 文案；这里扫描 src/app/guide/content/*.ts 收集所有 key，
再去 StringsZH / StringsHK / StringsEN / StringsJA / StringsKO.swift 里取值。
找不到的 key 会打印出来并让脚本以非零退出，避免指南里出现裸 key。
"""

import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "src/app/guide/content"
OUT = ROOT / "src/app/guide/app-strings.ts"

# 网站语言 → App 文案文件
FILES = {"zh": "StringsZH.swift", "zh-Hant": "StringsHK.swift", "en": "StringsEN.swift", "ja": "StringsJA.swift", "ko": "StringsKO.swift"}

KEY_USE = re.compile(r"\[\[([a-zA-Z0-9_.]+)\]\]")
KEY_DEF = re.compile(r'd\["([^"]+)"\]\s*=\s*"((?:[^"\\]|\\.)*)"')


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    app_dir = pathlib.Path(sys.argv[1])

    keys: set[str] = set()
    for f in sorted(CONTENT_DIR.glob("*.ts")):
        keys |= set(KEY_USE.findall(f.read_text(encoding="utf-8")))

    table: dict[str, dict[str, str]] = {}
    missing: list[str] = []
    for lang, fname in FILES.items():
        src = (app_dir / fname).read_text(encoding="utf-8")
        defs = {k: json.loads(f'"{v}"') for k, v in KEY_DEF.findall(src)}
        table[lang] = {}
        for k in sorted(keys):
            if k in defs:
                table[lang][k] = defs[k]
            else:
                missing.append(f"{lang}:{k}")

    body = json.dumps(table, ensure_ascii=False, indent=2)
    OUT.write_text(
        "// 由 scripts/gen-guide-strings.py 从 iOS App 文案生成，不要手改。\n"
        "// App 文案改了按钮名，重新跑一次脚本即可同步。\n"
        'import type { Locale } from "@/i18n/messages";\n\n'
        f"export const APP_STRINGS: Record<Locale, Record<string, string>> = {body};\n",
        encoding="utf-8",
    )
    print(f"{len(keys)} keys → {OUT.relative_to(ROOT)}")
    if missing:
        print("缺失：", ", ".join(missing))
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
