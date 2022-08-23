import React, { FC } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@emotion/react';
import { useAppSelector } from '../../../hooks/redux.hook';
import { createTheme } from '@mui/material/styles';
import { getTheme } from './theme';
import { ThemeProviderProps } from './ThemeProvider.interfaces';

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { theme: currentTheme } = useAppSelector((state) => state.theme);
  const theme = createTheme(getTheme(currentTheme));

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
