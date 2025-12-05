/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow this dev origin (network IP) to access _next resources during development
  allowedDevOrigins: ['http://192.168.1.15:3000']
};

module.exports = nextConfig;
