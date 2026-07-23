/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Alter Slug der bisherigen Website (BaseKit) — Rankings mitnehmen.
      { source: "/%C3%BCber-uns", destination: "/ueber-uns", permanent: true },
    ];
  },
};

export default nextConfig;
