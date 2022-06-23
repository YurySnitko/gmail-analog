import {ListItem, ListItemButton, ListItemIcon, Typography} from "@mui/material";
import styled from "@emotion/styled";

export const S = {
  Item: styled(ListItem)`
    padding: 0;
    height: 2rem;
    display: flex;
    gap: 1rem;
  `,

  ListButton: styled(ListItemButton)`
    border-radius: 0 20px 20px 0;
    padding: 0 0 0 1.625rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  `,

  ItemTitle: styled(Typography)`
    line-height: 2rem;
    font-size: 0.875rem;
    letter-spacing: .2px;
  `,

  ItemButtonIcon: styled(ListItemIcon)`
    min-width: 0;
  `
}