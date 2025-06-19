import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental", //partial prerendering
  },
};

export default nextConfig;
