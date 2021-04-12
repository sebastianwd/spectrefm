import { gql } from '@apollo/client'

const albumByTrackQuery = gql`
  query albumByTrack($artistName: String!, $trackTitle: String!) {
    albumByTrack(artistName: $artistName, trackTitle: $trackTitle) {
      id
      title
      coverImage
      artistName
    }
  }
`

export default albumByTrackQuery
