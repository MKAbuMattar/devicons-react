import { DefaultSeo } from 'next-seo'
import SEO from './../next-seo.config'

import { GlobalStyle } from "../style/Style";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
