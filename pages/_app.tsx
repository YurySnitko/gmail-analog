import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../common/ui-kit/ThemeProvider/theme";
import { ThemeProvider } from "@emotion/react";
import { Layout } from "../common/components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
