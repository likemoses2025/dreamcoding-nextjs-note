/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "unsplash.com" }],
  },
  // 페이지가 없는 경우나 특정 url인 경우
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false,
      },
    ];
  },
  // 주소를 다른 주소값으로 대체하는 개념
  async rewrites() {
    return [
      {
        source: "/ellie",
        destination: "/about/me/ellie",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
