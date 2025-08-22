import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  Images: {
    remotePatterns: [
      new URL("https://via.placeholder.com"),
    ],
  }
};

export default nextConfig;
