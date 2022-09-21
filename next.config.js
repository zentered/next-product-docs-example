import UnoCSS from '@unocss/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.cache = false
    config.plugins.push(UnoCSS())
    return config
  }
}

export default nextConfig
