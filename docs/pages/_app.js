import { Fragment } from 'react'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from './../next-seo.config'

import { GlobalStyle } from '../style/Style'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
