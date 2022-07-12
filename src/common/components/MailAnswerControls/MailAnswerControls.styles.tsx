import { styled } from '@mui/material/styles';
import { IconButton } from '../../ui-kit/IconButton/IconButton';

export const Container = styled('div')`
  display: flex;
  padding: 12px 16px 16px;
  align-items: center;
`;

export const MainControls = styled('div')`
  display: flex;
  align-items: center;
  padding-left: 6px;
`;

export const OtherControls = styled('div')`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const IconButtonStld = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[800],

  '&:hover': {
    color: theme.palette.grey[900],
  },
}));
