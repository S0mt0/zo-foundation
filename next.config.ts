import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { remotePatterns: [{ hostname: "https://images.unsplash.com" }] },
};

export default nextConfig;
