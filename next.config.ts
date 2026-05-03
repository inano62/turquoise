import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false, // LightningCSS を完全停止
         // Next.js の CSS パイプラインを完全停止
  },
turbopack: {},
  webpack: (config) => {
    // Rust バイナリ (.node) を読み込まないようにする
    config.module.rules.push({
      test: /\.node$/,
      use: 'raw-loader',
    });

    return config;
  },
};

export default nextConfig;