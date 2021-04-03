const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([], {
  env: {
    API_URL: 'my-value',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['www.theaudiodb.com', 'lastfm.freetls.fastly.net'],
  },
})
