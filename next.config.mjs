import withMDX from '@next/mdx';
import remarkPlugin from 'remark-gfm';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default withMDX({
  // Use .md extension
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkPlugin],
  },
})({
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  poweredByHeader: false,

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Bundle optimization
  swcMinify: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@styled-icons/boxicons-regular', '@styled-icons/fa-brands', '@styled-icons/material'],
  },

  webpack: function (config, { dev, isServer }) {
    if (dev) {
      return config;
    }

    if (!!process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          generateStatsFile: true,
          statsFilename: 'stats.json',
        })
      );
    }

    return config;
  },
});
