import { styled } from '@mui/material/styles';
import { Input, Typography } from '@mui/material';

export const S = {
  HeaderFilterItemWrapper: styled('div')`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    width: 100%;
    gap: 1rem;
  `,

  HeaderFilterItemText: styled(Typography)`
    font-size: 0.875rem;
    margin: 0;
  `,

  HeaderFilterItemInput: styled(Input)`
    width: 100%;
  `,
};
