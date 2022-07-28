import { ShortcutOutlined } from '@mui/icons-material';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Button = styled(MuiButton)(({ theme }) => ({
  width: '56px',
  height: '36px',
  minWidth: '56px',
  color: theme.palette.grey[900],

  '&:hover': {
    backgroundColor: theme.palette.background.iconButton,
  },
}));

export const ShortcutOutlinedLeft = styled(ShortcutOutlined)`
  transform: scale(-1, 1);
`;
