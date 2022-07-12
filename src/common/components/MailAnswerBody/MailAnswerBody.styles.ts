import { Input as MuiInput } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  padding: 0 16px;
`;

export const Input = styled(MuiInput)`
  & .MuiInput-input {
    min-height: 85px;
  }
`;
