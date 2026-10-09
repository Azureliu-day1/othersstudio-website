import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";
import { normalizeLocale } from "@/i18n/messages";

// 语言前缀路由：/en /zh /zh-hant /ja /ko 仅用于"分享指定语言链接"。
// 命中后设置 NEXT_LOCALE cookie，并重写到去掉前缀的干净 URL（URL 不暴露前缀）。
const LOCALE_PREFIXES = ["en", "zh", "zh-hant", "zh-hans", "zh-tw", "zh-hk", "ja", "ko"] as const;

// 主域名：day1aifitness.com。旧域名与 www 一律 301 到主域名，路径与查询参数原样保留。
// 新域名的 OAuth 回调（/me/auth/callback）已加入 Supabase 白名单，开发者门户也一并跳转。
// 需要临时保留旧域名某些路径时，把前缀加进 LEGACY_KEEP_PREFIXES。ai.othersstudio.tech 是另一个 Worker，不经过这里。
const CANONICAL_HOST = "day1aifitness.com";
const LEGACY_HOSTS = new Set(["othersstudio.tech", "www.othersstudio.tech"]);
const LEGACY_KEEP_PREFIXES: string[] = [];

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];
  const isLegacy = LEGACY_HOSTS.has(host) && !LEGACY_KEEP_PREFIXES.some((p) => pathname.startsWith(p));
  if (isLegacy || host === `www.${CANONICAL_HOST}`) {
    return NextResponse.redirect(`https://${CANONICAL_HOST}${pathname}${search}`, 301);
  }

  // 语言前缀处理（最前、独立于鉴权逻辑）
  const seg = pathname.split("/")[1]?.toLowerCase();
  const locale = (LOCALE_PREFIXES as readonly string[]).includes(seg) ? normalizeLocale(seg) : null;
  if (locale) {
    const rest = pathname.slice(seg.length + 1) || "/";
    const url = request.nextUrl.clone();
    url.pathname = rest;
    const response = NextResponse.redirect(url);
    response.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
      maxAge: 31536000,
      sameSite: "lax",
    });
    return response;
  }

  // 管理后台：原有密码 + HMAC Cookie 鉴权，保持不变
  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") return NextResponse.next();

    const token = request.cookies.get(COOKIE_NAME)?.value;
    const secret = process.env.ADMIN_SESSION_SECRET;

    if (!secret || !token || !(await verifyToken(token, secret))) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  // 用户中心：Supabase Auth 会话守卫
  if (pathname.startsWith("/me")) {
    let response = NextResponse.next({ request });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            response = NextResponse.next({ request });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    // 登录页与 OAuth 回调放行；其余 /me/* 未登录则跳登录页
    const isLoginRoute =
      pathname === "/me/login" || pathname.startsWith("/me/auth");

    if (!user && !isLoginRoute) {
      const loginUrl = new URL("/me/login", request.url);
      loginUrl.searchParams.set(
        "next",
        `${request.nextUrl.pathname}${request.nextUrl.search}`
      );
      return NextResponse.redirect(loginUrl);
    }

    // 已登录访问登录页则跳回 /me
    if (user && pathname === "/me/login") {
      return NextResponse.redirect(new URL("/me", request.url));
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  // 全站都要过主域名跳转；静态资源与图片不走中间件
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\.(?:png|jpg|jpeg|webp|svg|gif|ico|glb)$).*)"],
};
