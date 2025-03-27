import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow any domain
      },
    ],
    domains: ["*"], // Allow all domains (optional)
    loader: "default", // Use Next.js default image loader
    unoptimized: true, // Allows all images without restrictions
  },
};

export default nextConfig;


// for any image from anywhere but https

// webpack: (config, { isServer }) => {
//   if (!isServer) {
//     config.resolve.fallback = { fs: false };
//   }
//   return config;
// },