import React from 'react';
import { IconButton } from '../../ui-kit/IconButton/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { S } from './MailListHeaderIcons.styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const MailListHeaderIcons = () => {
  return (
    <S.MailListHeaderIconsWrapper>
      <S.CheckBoxWrapper>
        <S.Checkbox size={'small'} />
        <S.CheckboxArrowButton disableRipple size={'small'}>
          <ArrowDropDownIcon fontSize={'small'} />
        </S.CheckboxArrowButton>
      </S.CheckBoxWrapper>
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
