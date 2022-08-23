import { Paper as MuiPaper, Popper as MuiPopper, styled } from '@mui/material';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';

export const Paper = styled(MuiPaper)`
  padding: 4px;
  margin-bottom: 16px;
`;

export const Popper = styled(MuiPopper)`
  z-index: 1;
`;

export const IconButtonStld = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[800],

  '&:hover': {
    color: theme.palette.grey[900],
  },
}));
