import { IconButtonProps } from './IconButton.interfaces';
import { styled } from '@mui/material';
import { IconButton as MuiIconButton } from '@mui/material';

export const IconButton = styled(MuiIconButton)<IconButtonProps>(
  ({ theme, shape }) => ({
    color: 'inherit',
    borderRadius: shape === 'square' ? '4px' : '50%',
    transition:
      'background-color, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    '&:hover': {
      backgroundColor: theme.palette.background.iconButton,
    },
  })
);
