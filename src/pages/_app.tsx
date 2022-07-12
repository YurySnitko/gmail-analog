import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { Layout } from '../common/components/Layout/Layout';
import { theme } from '../common/ui-kit/ThemeProvider/theme';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
