import { Clear } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  height: '20px',
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '10px',
  paddingLeft: '8px',
  paddingRight: '4px',

  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

export const Text = styled(Typography)`
  font-weight: 600;
  cursor: move;
  user-select: none;
`;

export const ClearIcon = styled(Clear)`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;
