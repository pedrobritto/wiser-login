import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import "normalize.css";
import ThemeProvider from "../theme/index.js";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
