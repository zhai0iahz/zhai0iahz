/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  basePath: '/quest',
  assetPrefix: '/quest/',
  output: 'export',
}

module.exports = nextConfig