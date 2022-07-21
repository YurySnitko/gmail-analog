import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

export const S = {
  FilterWrapper: styled('div')`
    height: 28px;
    align-items: center;
    padding: 3px 3px 5px 3px;

    &:hover {
      background-color: #f2f2f2;
      border-radius: 4px;
    }
  `,

  FilterSelect: styled(Select)`
    font-size: 0.875rem;
    transition: 0.15s ease-out;
    width: 100%;
    height: 100%;

    &:hover:not(.Mui-disabled):before {
      border-bottom: white;
    }

    &:before {
      border-bottom: 1px solid lightgray;
    }

    &:hover {
      border: none;
    }
  `,
};
