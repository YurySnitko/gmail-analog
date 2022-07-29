import { IconButtonProps } from './IconButton.interfaces';
import { styled } from '@mui/material';
import { IconButton as MuiIconButton } from '@mui/material';

export const IconButton = styled(MuiIconButton)<IconButtonProps>(
  ({ theme, shape }) => ({
    color: 'inherit',
    borderRadius: shape === 'square' ? '4px' : '50%',
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.shortest,
    }),

    '&:hover': {
      backgroundColor: theme.palette.background.iconButton,
    },
  })
);
