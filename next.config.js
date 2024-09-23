/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.xn--oi2b31he2e32g.xn--3e0b707e",
      },
    ],
  },
};

module.exports = nextConfig;
