import { ArrowDropDown, ScheduleSendOutlined } from '@mui/icons-material';
import { Divider, MenuItem, Typography } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { Menu } from '../Menu/Menu.styles';
import { Tooltip } from '../Tooltip/Tooltip';
import * as S from './ButtonWithOptions.styles';

export const ButtonWithOptions: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <S.Wrapper>
      <Tooltip title="Отправить">
        <S.MainButton>
          <Typography variant="button">Отправить</Typography>
        </S.MainButton>
      </Tooltip>
      <Divider flexItem orientation="vertical" />
      <Tooltip title="Другие параметры отправки">
        <S.OptionsButton onClick={handleClick}>
          <ArrowDropDown fontSize="small" color="inherit" />
        </S.OptionsButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MenuItem onClick={handleClose}>
          <ScheduleSendOutlined color="primary" />
          Запланировать отправку
        </MenuItem>
      </Menu>
    </S.Wrapper>
  );
};
