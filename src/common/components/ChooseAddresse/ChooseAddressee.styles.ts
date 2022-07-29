import { Input as MuiInput, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';

export const Container = styled('div')`
  padding: 6px 16px;
  display: flex;
  position: sticky;
  top: 0;
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

export const ToWhomTypography = styled(Typography)`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
