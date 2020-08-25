import { gql } from '@apollo/client'

const meQuery = gql`
  query me {
    me {
      id
      email
      firstName
      fullName
      lastName
    }
  }
`

export default meQuery
