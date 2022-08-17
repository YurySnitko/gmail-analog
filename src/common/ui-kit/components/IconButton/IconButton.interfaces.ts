import { IconButtonProps as MuiIconButtonProps } from '@mui/material';

export interface IconButtonProps extends MuiIconButtonProps {
  shape?: 'circle' | 'square';
  hoverBackground?: 'light' | 'dark';
}
