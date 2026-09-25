import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // ~/Applications 下有一个无关的 package-lock.json，Turbopack 会误把它当工作区根，
  // 导致模块路径带上 "othersstudio-website/" 前缀而在 Client Manifest 里找不到。
  // 显式钉死项目根目录（本地 dev 与 Cloudflare 构建都在项目目录下执行）。
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
