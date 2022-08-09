import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { theme } from '../common/ui-kit/ThemeProvider/theme';
import { Layout } from '../common/components/Layout/Layout';
import LocalizationProvider from '../common/ui-kit/LocalizationProvider/LocalizationProvider';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
