import type { NextConfig } from "next";

const nextConfig = {
  // Ensure Turbopack uses this project as the workspace root
  turbopack: {
    root: __dirname,
  },
} satisfies NextConfig;

export default nextConfig;
