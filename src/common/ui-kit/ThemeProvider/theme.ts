import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      iconButton: 'rgba(60, 64, 67, 0.08)',
      searchBar: '#f1f3f4',
      searchBarFocused: 'rgba(255, 255, 255, 1)',
      starButtonFocused: '#f4b400',
      mailListItemViewed: '#f4f7f7',
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
    subtitle2: {
      fontWeight: 700,
      lineHeight: 1.43,
    },
    body3: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.2,
      letterSpacing: '0.00714em',
      color: '#555',
    },
  },
});
