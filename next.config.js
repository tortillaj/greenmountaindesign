const path = require('path')
const withPlugins = require('next-compose-plugins')
const readingTime = require('reading-time')
const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withPlugins([
  withMdxEnhanced({
    layoutPath: 'layouts',
    defaultLayout: true,
    extendFrontMatter: {
      process: (mdxContent) => ({
        wordCount: mdxContent.split(/\s+/gu).length,
        readingTime: readingTime(mdxContent),
      }),
    },
  }),
], {
  experimental: {
    modern: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['static'] = path.join(__dirname, 'static')

    // https://github.com/leerob/leerob.io
    // if (isServer) {
    //   require('./scripts/generate-sitemap')
    // }

    return config
  },
})
