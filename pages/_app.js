import Head from "next/head";

import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>MotoPlay</title>
      <meta name="description" content="Praticidade, qualidade e preço que só a MotoPlay tem!" />
      <link rel="icon" href="images/prancheta.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="MotoPlay" key="title" />
      <meta name="keywords" content="Scooters, MotoPlay" />
      <meta name="author" content="Victor Torrens" />
      <meta property="og:image" content="https://www.motoplayscooters.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_circular_df.53a27f5f.png&w=1920&q=75" key="image" />
      <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
      <meta http-equiv="content-language" content="pt-br" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
