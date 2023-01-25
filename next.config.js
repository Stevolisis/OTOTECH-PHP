/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['res.cloudinary.com','localhost'],
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
},
i18n:{
locales:["en"],
defaultLocale:"en",
}
}


module.exports = nextConfig
