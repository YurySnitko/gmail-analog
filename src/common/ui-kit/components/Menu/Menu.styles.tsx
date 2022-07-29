import { MenuProps, Menu as MuiMenu } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  '& .MuiPaper-root': {
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
