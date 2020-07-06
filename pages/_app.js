import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'theme-ui'
import { DefaultSeo } from 'next-seo'

import defaultSEO from '../default-seo'
import {theme, GlobalStyle} from '../components/theme'
import MDXComponents from '../components/MDXComponents'

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme} components={MDXComponents}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ztr7eov.css" />
      </Head>
      <DefaultSeo {...defaultSEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
