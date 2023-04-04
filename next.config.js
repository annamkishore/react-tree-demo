/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tree-sample',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
