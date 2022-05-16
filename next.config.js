/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
    basePath: '/cicd_test',
    assetPrefix: '/cicd_test/',
}

module.exports = nextConfig
