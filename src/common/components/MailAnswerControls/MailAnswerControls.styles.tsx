import { styled } from '@mui/material/styles';
import { IconButton } from '../../ui-kit/IconButton/IconButton';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  bottom: '0',
  padding: '12px 16px 16px',
  backgroundColor: theme.palette.common.white,
  border: '1px solid transparent',
  borderRadius: ' 0 0 8px 8px',
}));

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
