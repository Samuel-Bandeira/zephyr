/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["docmanagement.com.br"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
