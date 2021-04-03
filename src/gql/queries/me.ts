import { gql } from '@apollo/client'

const meQuery = gql`
  query me {
    me {
      id
      email
      username
    }
  }
`

export default meQuery
