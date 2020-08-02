import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { CssBaseline } from '@material-ui/core'
import { AppProvider } from '@providers'
import { MainLayout } from 'src/layouts'

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
      <CssBaseline />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>
  )
}

export default App
