import { ArrowDropDown, ShortcutOutlined } from '@mui/icons-material';
import { Divider, MenuItem } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { Menu } from '../Menu/Menu.styles';
import { Tooltip } from '../Tooltip/Tooltip';
import { ToWhomToAnswerOptionsProps } from './ToWhomToAnswerOptions.interfaces';
import * as S from './ToWhomToAnswerOptions.styles';

export const ToWhomToAnswerOptions: FC<ToWhomToAnswerOptionsProps> = ({
  answerMode,
  toggleAnswerMode,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const onReplyClick = (): void => {
    setAnchorEl(null);
    toggleAnswerMode('reply');
  };
  const onForwardClick = (): void => {
    setAnchorEl(null);
    toggleAnswerMode('forward');
  };

  return (
    <>
      <Tooltip title="Кому ответить">
        <S.Button onClick={handleClick}>
          {answerMode === 'reply' ? (
            <S.ShortcutOutlinedLeft fontSize="small" />
          ) : (
            <ShortcutOutlined fontSize="small" />
          )}
          <ArrowDropDown fontSize="small" />
        </S.Button>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={onReplyClick}>
          <S.ShortcutOutlinedLeft />
          Ответить
        </MenuItem>
        <MenuItem onClick={onForwardClick}>
          <ShortcutOutlined />
          Переслать
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Изменить тему</MenuItem>
        <MenuItem onClick={handleClose}>Развернуть ответ</MenuItem>
      </Menu>
    </>
  );
};
