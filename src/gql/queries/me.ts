import gql from 'graphql-tag'

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
