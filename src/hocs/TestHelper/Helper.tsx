import React, { FC } from 'react';
import ThemeProvider from '../../common/ui-kit/ThemeProvider/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import LocalizationProvider from '../../common/ui-kit/LocalizationProvider/LocalizationProvider';
import { HelperProps } from './Helper.interfaces';

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
