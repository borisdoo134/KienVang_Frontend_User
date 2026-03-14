import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
  return [
    {
      source: '/',
      destination: '/home', // <--- Chính hắn!
      permanent: true,
    },
  ];
}
};

export default nextConfig;
