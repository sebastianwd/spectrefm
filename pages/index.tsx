import React from 'react'
import { Button } from '@components'
import { useMutation } from '@apollo/react-hooks'
import { loginMutation } from '@gql/mutations'

const IndexPage: React.FC = () => {
  const [login] = useMutation(loginMutation)

  return (
    <div>
      <Button />
      <button
        type="button"
        onClick={async () => {
          const res = await login()

          console.log('res', res)
        }}
      >
        call mutation
      </button>
    </div>
  )
}

export default IndexPage
