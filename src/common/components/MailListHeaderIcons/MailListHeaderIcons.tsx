import React, { FC, useState } from 'react';
import { IconButton } from '../../ui-kit/IconButton/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { S } from './MailListHeaderIcons.styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MailListHeaderIconsProps } from './MailListHeaderIcons.interfaces';
import { mails } from '../../../../consts/mails';

const MailListHeaderIcons: FC<MailListHeaderIconsProps> = ({
  setSelectedMailsIds,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkboxCheckedHandler = () => {
    setSelectedMailsIds(checkboxChecked ? [] : mails.map((mail) => mail.id));
    setCheckboxChecked((prev) => !prev);
  };

  return (
    <S.MailListHeaderIconsWrapper>
      <S.CheckBoxWrapper>
        <S.Checkbox
          size={'small'}
          checked={checkboxChecked}
          onChange={checkboxCheckedHandler}
        />
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
