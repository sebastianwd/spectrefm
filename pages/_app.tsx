import React, { useEffect } from 'react'
import Head from 'next/head'
import 'simplebar/dist/simplebar.min.css'
import { AppProps } from 'next/app'
import { CssBaseline } from '@material-ui/core'
import { AppProvider } from '~/providers'
import { MainLayout } from '~/layouts'
import theme from '~/theme'

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <AppProvider {...props}>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>
  )
}

export default App
