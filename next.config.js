/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
          },
          {
            protocol: 'https',
            hostname: 'superbwishes.com',
          },
        ],
    }
}

module.exports = nextConfig
