import { Grow, MenuList, Popper } from '@mui/material';
import { FC } from 'react';
import { PopperMenuProps } from './PopperMenu.interfaces';
import * as S from './PopperMenu.styles';

export const PopperMenu: FC<PopperMenuProps> = ({
  children,
  open,
  ...props
}) => {
  return (
    <Popper open={open} {...props}>
      <Grow in={open}>
        <S.Paper elevation={3}>
          <MenuList>{children}</MenuList>
        </S.Paper>
      </Grow>
    </Popper>
  );
};
