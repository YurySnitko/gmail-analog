import { styled } from "@mui/material";
import { IconButton as MuiIconButton } from "@mui/material";

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.background.iconButton,
  },
}));
