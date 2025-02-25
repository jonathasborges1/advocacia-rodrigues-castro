import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Necessário para Cloudflare Pages
  images: {
    unoptimized: true, // Evita otimização de imagens no Cloudflare Pages
  },
};

export default nextConfig;
