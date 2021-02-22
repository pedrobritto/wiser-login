import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import "normalize.css";
import { Provider } from "react-redux";
import { store } from "store";

import ThemeProvider from "@/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
