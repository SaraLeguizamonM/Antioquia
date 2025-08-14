import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // The project is now static HTML, most of this config is not used.
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
