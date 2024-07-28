import { ThemeProvider } from "styled-components";
import "../main/i18n";
import { theme } from "@/styles/themes";
import { GlobalStyles } from "@/styles/global";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
