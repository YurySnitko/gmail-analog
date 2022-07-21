import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const S = {
  DatePickerWrapper: styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
  `,

  DatePickerTextField: styled(TextField)`
    & .MuiTextField-root {
      padding: 0;
      font-size: 0.875rem;
      color: red;

      & > input {
        padding: 0;
      }
    }
  `,
};
