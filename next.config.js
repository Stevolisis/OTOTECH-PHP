/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
}
}


module.exports = nextConfig
