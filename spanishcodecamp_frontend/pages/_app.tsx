import type { AppProps } from "next/app";
import "../styles/globals.css";
import NavBar from "../components/NavBar";

import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NavBar />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
