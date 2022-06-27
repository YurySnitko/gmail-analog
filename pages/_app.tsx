import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { Layout } from "../src/common/components/Layout/Layout";
import { theme } from "../src/common/ui-kit/ThemeProvider/theme";
import { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
