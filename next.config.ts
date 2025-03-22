import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {                                                  //Solve Image Related Errors
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
