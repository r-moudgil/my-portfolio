/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove `turbo` — it is only for local dev (Turbopack is used automatically on Vercel if supported)
  webpack(config: any) {
    return config;
  },
};

module.exports = nextConfig;