/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "static01.nyt.com"],
  },
  env: {
    Times_Key: process.env.Times_Key,
  },
};

module.exports = nextConfig;
