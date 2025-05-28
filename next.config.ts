import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@acme/ui'],
  images: {
    domains: ['tailwindcss.com'],
  },
};

export default nextConfig;
