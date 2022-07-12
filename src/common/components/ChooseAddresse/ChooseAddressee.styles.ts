import { Input as MuiInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButton } from '../../ui-kit/IconButton/IconButton';

export const Container = styled('div')`
  padding: 6px 16px;
  display: flex;
`;

export const AddressersWrapper = styled('div')`
  padding: 8px 0;
  display: flex;
  line-height: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: text;
  overflow: hidden;
`;

export const OpenInNewButton = styled(IconButton)`
  width: 20px;
  height: 20px;
  font-size: 14px;
`;

export const Input = styled(MuiInput)`
  font-size: 0.875rem;

  & .MuiInput-input {
    line-height: 20px;
    padding: 0;
  }
`;
