const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: { serverActions: { bodySizeLimit: '2mb' } },
  images: { remotePatterns: [] },
  // Ensure Next receives a function for build id generation
  generateBuildId: async () => Date.now().toString(36)
}

module.exports = withBundleAnalyzer(nextConfig)
