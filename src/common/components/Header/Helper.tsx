import React, { FC, ReactNode } from 'react';
import ThemeProvider from '../../ui-kit/ThemeProvider/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import LocalizationProvider from '../../ui-kit/LocalizationProvider/LocalizationProvider';

interface HelperProps {
  children: ReactNode;
}

const Helper: FC<HelperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LocalizationProvider>{children}</LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default Helper;
