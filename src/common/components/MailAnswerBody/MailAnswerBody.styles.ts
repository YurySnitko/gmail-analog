import { Input as MuiInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButton } from '../../ui-kit/IconButton/IconButton';

export const Container = styled('div')`
  padding: 0 16px;
`;

export const Input = styled(MuiInput)`
  & .MuiInput-input {
    min-height: 85px;
  }
`;

export const IconButtonStld = styled(IconButton)(({ theme }) => ({
  paddingTop: 0,
  paddingBottom: 0,
  borderRadius: '10px',
  backgroundColor: theme.palette.background.iconButton,

  '&:hover': {
    backgroundColor: theme.palette.background.IconButtonHover,
  },
}));

export const PrevMessage = styled('div')(({ theme }) => ({
  paddingLeft: '7px',
  borderLeft: `1px solid ${theme.palette.divider}`,
  marginLeft: '5px',
}));
