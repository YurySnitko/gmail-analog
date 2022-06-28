import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    iconButton: string;
    searchBar: string;
    searchBarFocused: string;
  }

  interface Theme {
    customShadows: {
      searchBarFocused: string;
    };
  }

  interface ThemeOptions {
    customShadows: {
      searchBarFocused: string;
    };
  }
}
