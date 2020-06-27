import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { AppProps } from 'next/app'
import { useApollo } from '@gql/apollo'

const AppProvider: React.FC<AppProps> = (props) => {
  const { pageProps, children } = props

  const apolloClient = useApollo(pageProps.initialApolloState)

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

export default AppProvider
