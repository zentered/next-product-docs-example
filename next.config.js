import UnoCSS from '@unocss/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false
    config.plugins.push(UnoCSS())
    return config
  }
}

export default nextConfig
