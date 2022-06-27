import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    iconButton: string;
    searchBar: string;
    searchBarFocused: string;
    starButtonFocused: string;
    mailListItemViewed: string;
  }

  interface Theme {
    customShadows: {
      searchBarFocused: string;
      writeButton: string;
      writeButtonHover: string;
      mailListItemHover: string;
    };
  }

  interface ThemeOptions {
    customShadows: {
      searchBarFocused: string;
      writeButton: string;
      writeButtonHover: string;
      mailListItemHover: string;
    };
  }
}
