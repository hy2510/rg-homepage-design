/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wcfresource.a1edu.com",
      },
      {
        protocol: "http",
        hostname: "wcfresource.a1edu.com",
      },
    ],
  },
};

module.exports = nextConfig;
