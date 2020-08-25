import { gql } from '@apollo/client'

const searchArtistsQuery = gql`
  query searchArtists($artistName: String!, $limit: Int) {
    searchArtists(artistName: $artistName, limit: $limit)
  }
`

export default searchArtistsQuery
