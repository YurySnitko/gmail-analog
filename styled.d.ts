import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypeBackground {
    iconButton: string;
    IconButtonHover: string;
    searchBar: string;
    searchBarFocused: string;
    starButtonFocused: string;
    mailListItemViewed: string;
    mailListItemChecked: string;
  }

  interface TypeText {
    headerIconButton: string;
    mailTitle: string;
  }

  interface Theme {
    customShadows: {
      searchBarFocused: string;
      writeButton: string;
      writeButtonHover: string;
      mailListItemHover: string;
    };
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
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

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
