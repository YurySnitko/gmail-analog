import { ThemeOptions } from '@mui/material/styles';

export const getTheme = (mode: string): ThemeOptions => {
  return mode === 'light' ? lightTheme : darkTheme;
};

const lightTheme: ThemeOptions = {
  palette: {
    background: {
      iconButton: 'rgba(60, 64, 67, 0.08)',
      IconButtonHover: 'rgba(60, 64, 67, 0.2)',
      searchBar: '#f1f3f4',
      searchBarFocused: 'rgba(255, 255, 255, 1)',
      starButtonFocused: '#f4b400',
      mailListItemViewed: '#f4f7f7',
      mailListItemChecked: '#c2dbff',
      mailListItemDefault: 'transparent',
      tryNewViewButtonHover: '#f6fafe',
      scrollBarThumb: '#c5c5c5',
      scrollBarThumbHover: '#8b8b8b',
      settingsButtonBorder: '#dadce0',
      headerFilterBorder: 'rgba(0, 0, 0, 0.2)',
      filterSelectHover: '#f2f2f2',
      createFilter: '#e5e5e5',
      localizationSelectBorder: '#e3e4e8',
      settingsSection: '#ffffff',
      paginationButton: 'transparent',
      paginationButtonHover: '#e3e3e4',
      settingsButton: 'transparent',
      settingsControllerChecked: '#1976d2',
      settingsController: '#202124',
    },
    text: {
      headerIconButton: '#5f6368',
      mailTitle: '#202124',
      createFilterDisabled: '#c3c4c5',
      createFilter: '#72757a',
      paginationButton: '#8c8f93',
      menuMessage: '#75797d',
      settingsText: '#202124',
      settingsButton: '#3483ea',
      mailListItemChecked: '#6a6c6e',
      mailListItem: '#202124',
    },
  },

  customShadows: {
    searchBarFocused:
      '0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%)',
    writeButton: '0 1px 3px 0 #9d9d9d',
    writeButtonHover: '1px 2px 4px #9d9d9d',
    mailListItemHover: 'inset 0 -1px 0 0 rgb(100 121 143 / 12%)',
    headerFilter: '0 2px 4px rgb(0 0 0 / 20%)',
    headerFilterInputBorder: '1px solid #eceff1',
    headerFilterFocusBorder: '1px solid #4285f4',
  },

  typography: {
    h5: {
      fontSize: '1.375rem',
    },
    h6: {
      fontSize: '1rem',
      color: '#0a0a0a',
    },
    subtitle2: {
      fontWeight: 700,
      lineHeight: 1.43,
    },
    button: {
      textTransform: 'none',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 600,
    },
    body3: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.2,
      letterSpacing: '0.00714em',
      color: '#555',
    },
    message: {
      fontFamily: 'Arial, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: 'small',
      lineHeight: 1.5,
      color: '#222',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadce0',

            '&:hover': {
              border: 'none',
              boxShadow: 'inset 0 0 0 1px #dadce0',
            },
          }),
          ...(ownerState.variant === 'contained' && {
            border: 'none',
            boxShadow: 'none',

            '&:hover': {
              border: 'none',
              backgroundColor: '#297be6',
              outline: '1px solid transparent',
              boxShadow:
                '0 1px 2px 0 rgb(26 115 232 / 45%), 0 1px 3px 1px rgb(26 115 232 / 30%)',
            },
          }),
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        colorPrimary: '#202124',
      },
    },
  },
};

const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      iconButton: '#404040',
      IconButtonHover: '#404040',
      searchBar: '#464647',
      searchBarFocused: '#ffffff',
      starButtonFocused: '#f4b400',
      mailListItemViewed: '#030303',
      mailListItemChecked: '#174ea6',
      mailListItemDefault: '#2f2f2f',
      tryNewViewButtonHover: '#f6fafe',
      scrollBarThumb: '#c5c5c5',
      scrollBarThumbHover: '#8b8b8b',
      settingsButtonBorder: '#dadce0',
      headerFilterBorder: 'rgba(0, 0, 0, 0.2)',
      filterSelectHover: '#f2f2f2',
      createFilter: '#e5e5e5',
      localizationSelectBorder: '#e3e4e8',
      settingsSection: '#e7e7e7',
      paginationButton: 'transparent',
      paginationButtonHover: '#565656',
      settingsButton: 'transparent',
      settingsControllerChecked: '#1976d2',
      settingsController: '#202124',
    },
    text: {
      headerIconButton: '#e0e0e0',
      mailTitle: '#202124',
      createFilterDisabled: '#c3c4c5',
      createFilter: '#72757a',
      paginationButton: '#cbcbcb',
      menuMessage: '#75797d',
      settingsText: '#4a4b4d',
      settingsButton: '#3483ea',
      mailListItemChecked: '#969696',
      mailListItem: '#fafafa',
    },
  },

  customShadows: {
    searchBarFocused:
      '0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%)',
    writeButton: '0 1px 3px 0 #9d9d9d',
    writeButtonHover: '1px 2px 4px #9d9d9d',
    mailListItemHover:
      'inset 1px 0 0 rgb(255 255 255 / 20%), inset -1px 0 0 rgb(255 255 255 / 20%), 0 0 4px 0 rgb(95 99 104 / 60%), 0 0 6px 2px rgb(95 99 104 / 60%)',
    headerFilter: '0 2px 4px rgb(0 0 0 / 20%)',
    headerFilterInputBorder: '1px solid #eceff1',
    headerFilterFocusBorder: '1px solid #4285f4',
  },

  typography: {
    h5: {
      fontSize: '1.375rem',
      color: '#bdbdbd',
    },
    h6: {
      fontSize: '1rem',
      color: '#bdbdbd',
    },
    subtitle2: {
      fontWeight: 700,
      lineHeight: 1.43,
    },
    button: {
      textTransform: 'none',
      fontFamily: 'Mulish, sans-serif',
      fontWeight: 600,
    },
    body3: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.2,
      letterSpacing: '0.00714em',
      color: '#555',
    },
    message: {
      fontFamily: 'Arial, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: 'small',
      lineHeight: 1.5,
      color: '#222',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadce0',

            '&:hover': {
              border: 'none',
              boxShadow: 'inset 0 0 0 1px #dadce0',
            },
          }),
          ...(ownerState.variant === 'contained' && {
            border: 'none',
            boxShadow: 'none',

            '&:hover': {
              border: 'none',
              backgroundColor: '#297be6',
              outline: '1px solid transparent',
              boxShadow:
                '0 1px 2px 0 rgb(26 115 232 / 45%), 0 1px 3px 1px rgb(26 115 232 / 30%)',
            },
          }),
        }),
      },
    },
  },
};
