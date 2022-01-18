module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "i.picsum.photos"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: "/projects/socialmediaapp/:path*",
        destination: "http://localhost:3300/projects/socialmediaapp/:path*", // Proxy to Backend
      },
    ];
  },
};
