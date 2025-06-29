/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
        unoptimized: false,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/webp']
    },
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production"
    },
    experimental: {
        optimizePackageImports: ['lucide-react']
    },
    eslint: {
        ignoreDuringBuilds: false
    },
    typescript: {
        ignoreBuildErrors: false
    }
}

module.exports = nextConfig 