import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      iconButton: 'rgba(60, 64, 67, 0.08)',
      IconButtonHover: 'rgba(60, 64, 67, 0.2)',
      searchBar: '#f1f3f4',
      searchBarFocused: 'rgba(255, 255, 255, 1)',
      starButtonFocused: '#f4b400',
      mailListItemViewed: '#f4f7f7',
      mailListItemChecked: '#c2dbff',
    },
    text: {
      headerIconButton: '#5f6368',
      mailTitle: '#202124',
    },
  },

  customShadows: {
    searchBarFocused:
      '0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%)',
    writeButton: '0 1px 3px 0 #9d9d9d',
    writeButtonHover: '1px 2px 4px #9d9d9d',
    mailListItemHover: 'inset 0 -1px 0 0 rgb(100 121 143 / 12%)',
  },

  typography: {
    h5: {
      fontSize: '1.375rem',
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
});
