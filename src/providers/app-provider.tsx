import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { AppProps } from 'next/app'
import { StoreProvider } from 'easy-peasy'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import { useApollo } from '@gql/apollo'
import theme from '@theme'
import store from '@state'

const AppProvider: React.FC<AppProps> = (props) => {
  const { pageProps, children } = props

  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <StoreProvider store={store}>
            <StylesProvider injectFirst>{children}</StylesProvider>
          </StoreProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

export default AppProvider
