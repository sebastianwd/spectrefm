import { gql } from '@apollo/client'
import { artistFragment } from '../fragments'

const artistQuery = gql`
  query artist($artistName: String!) {
    artist(artistName: $artistName) {
      ...artist
    }
  }
  ${artistFragment}
`

export default artistQuery
