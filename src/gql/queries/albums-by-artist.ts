import { gql } from '@apollo/client'

const albumsByArtistQuery = gql`
  query albumsByArtist($artistName: String!, $limit: Int) {
    albumsByArtist(artistName: $artistName, limit: $limit) {
      id
      coverImage
      title
      description
      tracks
      year
    }
  }
`

export default albumsByArtistQuery
