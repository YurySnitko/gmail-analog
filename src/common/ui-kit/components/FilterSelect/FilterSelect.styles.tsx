import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

export const S = {
  FilterWrapper: styled('div')`
    height: 28px;
    align-items: center;
    padding: 3px 3px 5px 3px;
  `,

  FilterSelect: styled(Select)`
    font-size: 0.875rem;
    width: 100%;
    height: 100%;
    color: ${({ theme }): string => theme.palette.text.controls};

    & .MuiSelect-icon {
      color: ${({ theme }): string => theme.palette.text.controls};
    }

    & .MuiSelect-root {
      transition: 0.15s ease-out;
    }

    & .MuiSelect-select:focus {
      border-radius: 4px;
      background-color: ${({ theme }): string =>
        theme.palette.background.filterSelectHover};
    }

    & .MuiSelect-select:hover {
      border-radius: 4px;
      background-color: ${({ theme }): string =>
        theme.palette.background.filterSelectHover};
    }

    &:hover:not(.Mui-disabled):before {
      border-bottom: ${({ theme }): string => theme.palette.common.white};
    }

    &:before {
      transition: none;
      border-bottom: ${({ theme }): string =>
        theme.customShadows.headerFilterInputBorder};
    }

    &:after {
      transition: none;
      border-bottom: ${({ theme }): string =>
        theme.customShadows.headerFilterInputBorder};
    }

    &:hover {
      border: none;
    }
  `,
};
