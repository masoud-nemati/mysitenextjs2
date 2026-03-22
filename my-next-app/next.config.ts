import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const repoName = "mysitenextjs2"; // 👈 اسم ریپوی تو

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  output: isProd ? "export" : undefined,

  images: {
    unoptimized: true,
  },

  // ✅ مهم‌ترین بخش
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;