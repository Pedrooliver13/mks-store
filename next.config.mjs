/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "storage.googleapis.com",
      "mks-sistemas.nyc3.digitaloceanspaces.com",
    ],
  },
};

export default nextConfig;
