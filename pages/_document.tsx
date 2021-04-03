import React from 'react'
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles'
import theme from '~/theme'

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets()

    const materialUiSheets = new MaterialUiServerStyleSheets()

    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />)
            ),
        })

      const initialProps = await NextDocument.getInitialProps(ctx)

      const styles = [
        <React.Fragment key="styles">
          {initialProps.styles}
          {materialUiSheets.getStyleElement()}
          {styledComponentSheet.getStyleElement()}
        </React.Fragment>,
      ]

      return {
        ...initialProps,
        styles,
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:200,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap&text=SpectreFM"
            rel="stylesheet"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
