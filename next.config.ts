import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators:false,
  reactStrictMode:false,
   images: {
    remotePatterns: [
       new URL('https://openweathermap.org/img/wn/**'),
      {
        protocol: "https",
        hostname: "img.clerk.com",   // Clerk user images
      }
    ],
  },

  
};

export default nextConfig;
