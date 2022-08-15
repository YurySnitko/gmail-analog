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
    tryNewViewButtonHover: string;
    scrollBarThumb: string;
    scrollBarThumbHover: string;
    settingsButtonBorder: string;
    headerFilterBorder: string;
    filterSelectHover: string;
    createFilter: string;
    localizationSelectBorder: string;
    settingsSection: string;
    paginationButton: string;
    paginationButtonHover: string;
    settingsButton: string;
    settingsControllerChecked: string;
    settingsController: string;
    mailListItemDefault: string;
  }

  interface TypeText {
    headerIconButton: string;
    mailTitle: string;
    createFilterDisabled: string;
    createFilter: string;
    paginationButton: string;
    menuMessage: string;
    settingsText: string;
    settingsButton: string;
    mailListItemChecked: string;
    mailListItem: string;
  }

  interface Theme {
    customShadows: {
      searchBarFocused: string;
      writeButton: string;
      writeButtonHover: string;
      mailListItemHover: string;
      headerFilter: string;
      headerFilterInputBorder: string;
      headerFilterFocusBorder: string;
    };
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    message: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    message?: React.CSSProperties;
  }

  interface ThemeOptions {
    customShadows: {
      searchBarFocused: string;
      writeButton: string;
      writeButtonHover: string;
      mailListItemHover: string;
      headerFilter: string;
      headerFilterInputBorder: string;
      headerFilterFocusBorder: string;
    };
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    message: true;
  }
}
