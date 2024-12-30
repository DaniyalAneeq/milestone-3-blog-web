/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '/images/**', // Allowing all images hosted on Sanity's CDN
            search: '',             // Keeping search empty since it's optional
          },
        ],
      },
};

export default nextConfig;
