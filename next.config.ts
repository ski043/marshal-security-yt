import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    taint: true,
  },
};

export default nextConfig;
