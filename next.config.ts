import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Para GitHub Pages: ajuste o basePath se seu repositório não estiver na raiz
  // basePath: '/nome-do-repositorio',
};

export default nextConfig;
