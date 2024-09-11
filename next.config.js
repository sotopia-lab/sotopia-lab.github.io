/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/sotopia-website',
  output: 'export',
  images: {
    unoptimized: true,
    reactStrictMode: true,
    domains: [
      "xd2kcvzsdpeyx1gu.public.blob.vercel-storage.com",
      "replicate.delivery",
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/github",
  //       destination: "https://github.com/steven-tey/sotopia",
  //       permanent: false,
  //     },
  //     {
  //       source: "/deploy",
  //       destination: "https://vercel.com/templates/next.js/sotopia",
  //       permanent: false,
  //     },
  //     {
  //       source: "/t",
  //       destination: "/",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
