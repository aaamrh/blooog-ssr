/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  async rewrites () {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:3010/api/:path*',
      },
      {
        source: '/aaa',
        destination: '/admin',
      }
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
  sassOptions: {
    additionalData: `
      @import "@/src/styles/_variables.scss";
      @import "@/src/styles/_animation.scss";
      @import "@/src/styles/_mixin.scss";
    `,
  }
};

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  // Object.assign(nextConfig, { async rewrites () {
  //   return [
  //     {
  //       source: '/api',
  //       destination: 'http://127.0.0.1:3010/',
  //     },
  //   ];
  // } });
}

console.log(nextConfig);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

withBundleAnalyzer({});

module.exports = nextConfig;
