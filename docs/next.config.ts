import type {NextConfig} from 'next';
import PWANextInit from 'next-pwa';
import runtimeCachingConfig from 'next-pwa/cache.js';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} satisfies NextConfig;

const PWANextConfig = PWANextInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching: runtimeCachingConfig,
  publicExcludes: [
    '!robots.txt',
    '!sitemap.xml',
    '!sitemap.*.xml',
    '!app-build-manifest.json',
  ],
  buildExcludes: ['app-build-manifest.json'],
});

export default PWANextConfig(nextConfig);
