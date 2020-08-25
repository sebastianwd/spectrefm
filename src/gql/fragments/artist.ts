import { gql } from '@apollo/client'

const artistFragment = gql`
  fragment artist on Artist {
    id
    bannerImage
    biography
    disbanded
    disbandedYear
    facebook
    formedYear
    genre
    image
    location
    logo
    memberQuantity
    name
    style
    twitter
    website
  }
`

export default artistFragment
