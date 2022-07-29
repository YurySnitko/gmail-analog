import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const S = {
  HeaderFilterItemWrapper: styled('div')`
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    width: 100%;
    user-select: none;
  `,

  HeaderFilterItemText: styled(Typography)`
    font-size: 0.875rem;
  `,
};
