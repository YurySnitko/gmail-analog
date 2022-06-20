import {ListItem, ListItemButton, Typography} from "@mui/material";
import styled from "@emotion/styled";

export const S = {
  Item: styled(ListItem)`
    padding: 0;
  `,

  ListButton: styled(ListItemButton)`
    border-radius: 0 20px 20px 0;
    padding: 0 0 0 26px;
    display: flex;
    gap: 1rem;
    
    & > div {
      min-width: 0;
    }
  `,

  ItemTitle: styled(Typography)`
    line-height: 2rem;
    font-size: 0.875rem;
    letter-spacing: .2px;
  `,


}