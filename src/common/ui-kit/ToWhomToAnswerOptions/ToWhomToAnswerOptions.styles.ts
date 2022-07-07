import { ShortcutOutlined } from '@mui/icons-material';
import { Button as MuiButton, Menu as MuiMenu, MenuProps } from '@mui/material';
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

export const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  '& .MuiPaper-root': {
    minWidth: 215,
    marginTop: theme.spacing(1),

    '& .MuiMenu-list': {
      padding: '6px 0',
    },

    '& .MuiMenuItem-root': {
      padding: '6px 48px',
      fontSize: '14px',
      color: theme.palette.text.mailTitle,
      position: 'relative',

      '& .MuiSvgIcon-root': {
        fontSize: 20,
        position: 'absolute',
        left: '16px',
      },
    },
  },
}));
