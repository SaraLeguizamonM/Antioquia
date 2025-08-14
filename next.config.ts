import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.colombia.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn0.recetasgratis.net',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'img.chilango.com',
      },
      {
        protocol: 'https',
        hostname: 'losmitosyleyendas.com',
      },
      {
        protocol: 'https',
        hostname: 'www.antioquiacritica.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.weather-forecast.com',
      },
    ],
  },
};

export default nextConfig;
