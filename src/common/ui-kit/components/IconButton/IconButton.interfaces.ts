import { IconButtonProps as MuiIconButtonProps } from '@mui/material';

export interface IconButtonProps extends MuiIconButtonProps {
  active?: boolean;
  shape?: 'circle' | 'square';
  hoverbackground?: 'light' | 'dark';
}
