import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 78, 82, 85],
  },
};

export default nextConfig;
