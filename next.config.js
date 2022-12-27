/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['www.google.com','images.unsplash.com']
  }
}

module.exports = nextConfig
