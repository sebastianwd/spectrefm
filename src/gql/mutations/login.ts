import gql from 'graphql-tag'

const loginMutation = gql`
  mutation login {
    login(input: { email: "bob@bob.com", password: "123" }) {
      id
      firstName
      email
      fullName
    }
  }
`

export default loginMutation
