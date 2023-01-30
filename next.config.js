/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "telegra.ph", "images.jedavi2095.workers.dev"],
  },
};

module.exports = nextConfig;
