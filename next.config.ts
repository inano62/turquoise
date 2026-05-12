import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/proxy/3000",

  experimental: {
    optimizeCss: false,
  },

  turbopack: {},

  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "raw-loader",
    });

    return config;
  },
};

export default nextConfig;
