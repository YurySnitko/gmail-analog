import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Layout } from '../common/components/Layout/Layout';
import LocalizationProvider from '../common/ui-kit/LocalizationProvider/LocalizationProvider';
import ThemeProvider from '../common/ui-kit/ThemeProvider/ThemeProvider';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <LocalizationProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  );
};

export default MyApp;
