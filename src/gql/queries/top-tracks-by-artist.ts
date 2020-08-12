import gql from 'graphql-tag'

const topTracksByArtistQuery = gql`
  query topTracksByArtist($artistName: String!, $limit: Int, $page: Int) {
    topTracksByArtist(artistName: $artistName, limit: $limit, page: $page) {
      id
      title
      artistName
      playcount
    }
  }
`

export default topTracksByArtistQuery
