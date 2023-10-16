/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index-6',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
