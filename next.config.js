const withPWA = require("next-pwa");
const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */

const config = {
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

const nextConfig = withPWA({
  dest: "public",
  // disable: !isProduction,
  runtimeCaching: [],
})(config);

module.exports = nextConfig;
