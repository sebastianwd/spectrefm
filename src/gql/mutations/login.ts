import { gql } from '@apollo/client'

const loginMutation = gql`
  mutation login {
    login(input: { email: "bob@bob.com", password: "123" }) {
      id
      email
      username
    }
  }
`

export default loginMutation
