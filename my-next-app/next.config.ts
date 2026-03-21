import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚀 جلوگیری از خطاهای eslint
  },

  typescript: {
    ignoreBuildErrors: true, // 🚀 جلوگیری از خطاهای TypeScript (خیلی مهم برای export)
  },

  output: "export", 
  
   images: {
    unoptimized: true, // غیرفعال کردن Image Optimization
  },
  // 🚀 فعال کردن حالت export برای GitHub Pages
};

export default nextConfig;
