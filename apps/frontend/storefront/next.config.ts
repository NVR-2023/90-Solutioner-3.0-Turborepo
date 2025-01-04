import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/ui", "@repo/utils"],
};

export default nextConfig;
