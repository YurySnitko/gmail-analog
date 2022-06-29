import React from 'react';
import { IconButton } from '../../ui-kit/IconButton/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { S } from './MailListHeaderIcons.styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const MailListHeaderIcons = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.MailListHeaderIconsWrapper>
      <S.CheckBoxWrapper>
        <S.Checkbox size={'small'} />
        <S.CheckboxArrowButton
          onClick={handleClick}
          disableRipple
          size={'small'}
        >
          <ArrowDropDownIcon fontSize={'small'} />
        </S.CheckboxArrowButton>
      </S.CheckBoxWrapper>
      <S.Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <S.MenuItem onClick={handleClose}>Все</S.MenuItem>
        <S.MenuItem onClick={handleClose}>Ни одного</S.MenuItem>
        <S.MenuItem onClick={handleClose}>Прочитанные</S.MenuItem>
        <S.MenuItem onClick={handleClose}>Непрочитанные</S.MenuItem>
        <S.MenuItem onClick={handleClose}>Помеченные</S.MenuItem>
        <S.MenuItem onClick={handleClose}>Без пометок</S.MenuItem>
      </S.Menu>
      <IconButton>
        <RefreshIcon fontSize={'small'} />
      </IconButton>
      <IconButton>
        <MoreVertIcon fontSize={'small'} />
      </IconButton>
    </S.MailListHeaderIconsWrapper>
  );
};

export default MailListHeaderIcons;
