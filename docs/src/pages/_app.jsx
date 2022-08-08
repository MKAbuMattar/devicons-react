import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { Fragment } from 'react';

import SEO from '@/config/next-seo.config';
import { GlobalStyle } from '@/style/style';

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
  );
};

export default App;
