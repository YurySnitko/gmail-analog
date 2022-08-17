import { styled } from '@mui/material/styles';
import { Input } from '@mui/material';

export const S = {
  FilterItemInput: styled(Input)`
    font-size: 0.875rem;
    color: ${({ theme }): string => theme.palette.text.controls};

    & .MuiInput-input {
      padding: 0;
    }

    &.MuiInput-root:after {
      transition: none;
      border-bottom: ${({ theme }): string =>
        theme.customShadows.headerFilterFocusBorder};
    }

    &.MuiInput-root:not(.Mui-disabled):before {
      border-bottom: ${({ theme }): string =>
        theme.customShadows.headerFilterInputBorder};
    }

    &.MuiInput-root:hover:not(.Mui-disabled):before {
      border-bottom: ${({ theme }): string =>
        theme.customShadows.headerFilterInputBorder};
    }
  `,
};
