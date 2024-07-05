/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'freegrand.pythonanywhere.com',
        port: '',
      }
    ],
  }
};

export default nextConfig;
