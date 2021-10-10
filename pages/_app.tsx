import { ThemeProvider } from "styled-components";
import React from "react";
import type { AppProps } from "next/app";

import { StoreProvider } from "../context/store-context-provider";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
