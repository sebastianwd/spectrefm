import { gql } from '@apollo/client'

const trackYoutubeIdsQuery = gql`
  query trackYoutubeIds(
    $artistName: String!
    $trackTitle: String!
    $limit: Int
  ) {
    trackYoutubeIds(
      artistName: $artistName
      trackTitle: $trackTitle
      limit: $limit
    )
  }
`

export default trackYoutubeIdsQuery
