import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "artaspractice.onrender.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
