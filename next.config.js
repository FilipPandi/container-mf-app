/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
        port: '',
        pathname: '/images/featured/**',
      },
    ],
  }
}

module.exports = nextConfig
