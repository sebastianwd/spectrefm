import { gql } from '@apollo/client'

const similarArtistsQuery = gql`
  query similarArtists($artistName: String!, $limit: Int) {
    similarArtists(artistName: $artistName, limit: $limit, withFullInfo: true) {
      id
      name
      image
    }
  }
`

export default similarArtistsQuery
