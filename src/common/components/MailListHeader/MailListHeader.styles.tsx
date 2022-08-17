import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const S = {
  MailListHeaderWrapper: styled(Grid)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 17px;
    border-bottom: 1px solid ${(props): string => props.theme.palette.divider};
    justify-content: space-between;
    box-sizing: border-box;
  `,
};
