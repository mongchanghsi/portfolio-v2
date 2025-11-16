/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: [
      "static-nft.pancakeswap.com",
      "cdn.ebisusbay.biz",
      "cdn.ebisusbay.com",
      "ipfs.io",
      "ik-proxy.b-cdn.net",
      "cdn.ltsglxy.network",
      "assets.coingecko.com",
      "images.ctfassets.net",
    ],
  },
  async redirects() {
    return [
      {
        source: "/mint",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/explorer",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/staking",
        destination: "/404",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
