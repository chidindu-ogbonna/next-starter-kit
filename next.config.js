const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["tailwindui.com", "images.unsplash.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
