/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Important for Netlify static export
  },
};

export default nextConfig;
