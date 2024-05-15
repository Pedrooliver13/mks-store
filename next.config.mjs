/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: ["images.unsplash.com", "storage.googleapis.com"],
  },
};

export default nextConfig;
