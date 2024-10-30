/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/doy5slx3n/**',
          },
          {
            protocol: "https",
            hostname: "s3-stockbale.s3.eu-west-3.amazonaws.com",
            port: "",
            pathname: "/**",
          }
        ],
      },
};

export default nextConfig;
