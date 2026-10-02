import type { Metadata } from "next";
import { Geist, Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getLocale } from "@/i18n/server";
import { LOCALE_TAGS, translate } from "@/i18n/messages";
import GuideAssistant from "@/components/GuideAssistant";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://othersstudio.tech";

/** 站点级 metadata 跟随语言：标题、描述、分享卡片文案 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title = translate(locale, "meta.title");
  const description = translate(locale, "meta.description");
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s — DAY 1",
    },
    description,
    applicationName: "DAY 1",
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      siteName: "DAY 1",
      title,
      description,
      locale: LOCALE_TAGS[locale].replace("-", "_"),
      url: SITE_URL,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "DAY 1" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/brand/apple-touch-icon.png",
    },
    other: {
      // Safari 顶部的「在 App Store 打开」智能横幅
      "apple-itunes-app": "app-id=6759196162",
    },
  };
}

export const viewport = {
  themeColor: "#FBF7F1",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={LOCALE_TAGS[locale]}
      className={`${geist.variable} ${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body>
        <LocaleProvider initialLocale={locale}>
          {children}
          <GuideAssistant />
        </LocaleProvider>
      </body>
    </html>
  );
}
