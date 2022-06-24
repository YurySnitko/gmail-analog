import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      iconButton: "rgba(60, 64, 67, 0.08)",
      searchBar: "#f1f3f4",
      searchBarFocused: "rgba(255, 255, 255, 1)",
    },
  },
  customShadows: {
    searchBarFocused:
      "0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%)",
  },
});
