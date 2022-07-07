import { ArrowDropDown, ShortcutOutlined } from '@mui/icons-material';
import { Divider, MenuItem, Tooltip } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import * as S from './ToWhomToAnswerOptions.styles';

export const ToWhomToAnswerOptions: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Кому ответить">
        <S.Button onClick={handleClick}>
          <S.ShortcutOutlinedLeft fontSize="small" />
          <ArrowDropDown fontSize="small" />
        </S.Button>
      </Tooltip>
      <S.Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <S.ShortcutOutlinedLeft />
          Ответить
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ShortcutOutlined />
          Переслать
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Изменить тему</MenuItem>
        <MenuItem onClick={handleClose}>Развернуть ответ</MenuItem>
      </S.Menu>
    </>
  );
};
