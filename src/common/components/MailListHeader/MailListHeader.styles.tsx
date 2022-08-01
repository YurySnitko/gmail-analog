import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const S = {
  MailListHeaderWrapper: styled(Grid)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 17px;
    border-left: 1px solid
      ${(props): string => props.theme.palette.common.white};
    justify-content: space-between;
    box-sizing: border-box;
  `,
};