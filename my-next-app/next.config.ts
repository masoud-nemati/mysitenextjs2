import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: "export",
  images: { unoptimized: true },

  // ✅ برای دامنه شخصی
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;