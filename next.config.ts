/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => config,
  experimental: {
    turbo: true, // ✅ enable Turbopack
  },
};

module.exports = nextConfig;