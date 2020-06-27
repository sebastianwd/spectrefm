import React from 'react'
import { AppProps } from 'next/app'
import { AppProvider } from '@providers'

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <AppProvider {...props}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default App
