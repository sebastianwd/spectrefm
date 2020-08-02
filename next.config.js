/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = {
  env: {
    API_URL: 'my-value',
  },
}

module.exports = withPlugins([[optimizedImages, {}]], {
  env: {
    API_URL: 'my-value',
  },
})
