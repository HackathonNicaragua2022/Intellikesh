import type { AppProps } from "next/app";
import "../styles/globals.css";

import { RecoilRoot } from "recoil";
import NonFieldErrorCatcher from "../components/NonFieldErrorCatcher";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NonFieldErrorCatcher />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
