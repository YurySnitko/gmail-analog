import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const S = {
  DatePickerWrapper: styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
  `,

  DatePickerTextField: styled(TextField)`
    & .MuiInput-root,
    .MuiInput-input {
      font-size: 0.875rem;
      padding: 0;
    }

    & .MuiInput-root:hover:not(.Mui-disabled):before {
      border-bottom: ${({ theme }): string =>
        theme.customShadows.headerFilterInputBorder};
    }

    & .MuiInput-root:after {
      transition: none;
      border-bottom: ${({ theme }): string =>
        theme.customShadows.headerFilterFocusBorder};
    }

    & .MuiInput-underline:before {
      border-bottom: ${({ theme }): string =>
        theme.customShadows.headerFilterInputBorder};
    }

    & .MuiInput-underline:hover:before {
      border-bottom: ${({ theme }): string =>
        theme.customShadows.headerFilterInputBorder};
    }
  `,
};
