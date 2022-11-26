import type { AppProps } from "next/app";
import "../styles/globals.css";

import Head from "next/head";
import { RecoilRoot } from "recoil";
import NonFieldErrorCatcher from "../components/NonFieldErrorCatcher";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Spanish Code Camp</title>
      </Head>
      <NonFieldErrorCatcher />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
