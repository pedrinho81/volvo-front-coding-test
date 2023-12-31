import type { AppProps } from 'next/app'
import "../public/css/styles.scss";
import Image from "next/image";

import React from "react";
import { DefaultProviders } from "../src/providers/defaultProviders";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <DefaultProviders>
      <Component {...pageProps} />
      </DefaultProviders>
    </React.StrictMode>
  );
}

 
