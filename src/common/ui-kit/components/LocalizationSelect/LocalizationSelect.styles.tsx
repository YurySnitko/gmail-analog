import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

export const S = {
  SelectWrapper: styled('div')`
    height: 36px;
    width: 62px;
    padding: 0;
  `,

  Select: styled(Select)`
    font-size: 0.875rem;
    height: 100%;
    width: 100%;
    border-radius: 20px;
  `,
};
