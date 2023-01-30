/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "telegra.ph", "images.jedavi2095.workers.dev"],
  },
};

module.exports = nextConfig;
