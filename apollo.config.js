module.exports = {
  client: {
    name: 'spectrefm',
    tagName: 'gql',
    includes: ['./src/**/*.{ts,tsx}'],
    service: {
      name: 'allfm-api',
      // url: ' http://localhost:4000/___graphql',
      localSchemaFile: './graphql.schema.json',
      // skipSSLValidation: true,
    },
    excludes: ['**/public/**/*.js', '**/node_modules/**/*', '**/.next/**/*'],
  },
}
