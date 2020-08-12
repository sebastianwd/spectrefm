import gql from 'graphql-tag'

const similarArtistsQuery = gql`
  query similarArtists($artistName: String!, $limit: Int) {
    similarArtists(artistName: $artistName, limit: $limit, withInfo: true) {
      id
      name
      image
    }
  }
`

export default similarArtistsQuery
