import { styled } from '@mui/material/styles';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';

export const InputBox = styled('div')`
  margin-left: 56px;
  margin-right: 96px;
  height: 46px;
  display: flex;
  align-items: center;
`;

export const Input = styled('input')`
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 16px;

  ::placeholder {
    color: ${({ theme }): string => theme.palette.text.headerIconButton};
  }

  &:focus {
    outline: none;
    background-color: transparent;
  }
`;

export const ClearButton = styled(IconButton)`
  margin: 3px 0;
  position: absolute;
  top: 0;
  right: 52px;
`;
