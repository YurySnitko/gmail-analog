import { styled } from '@mui/material/styles';
import { Input } from '@mui/material';

export const S = {
  FilterItemInput: styled(Input)`
    width: 100%;
    font-size: 0.875rem;

    &:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid lightgray;
    }

    &:before {
      border-bottom: 1px solid lightgray;
    }

    & > input {
      padding: 0;
    }
  `,
};
