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
      {
        protocol: "https",
        hostname: "fservice6.readinggate.com",
      },
      {
        protocol: "http",
        hostname: "fservice6.readinggate.com",
      },
      {
        protocol: "https",
        hostname: "postfiles.pstatic.net",
      },
      {
        protocol: "http",
        hostname: "postfiles.pstatic.net",
      },
    ],
  },
};

module.exports = nextConfig;
