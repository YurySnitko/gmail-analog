import React, { FC, useState } from 'react';
import { S } from './MailListItem.styles';
import { Checkbox, Tooltip } from '@mui/material';
import { IconButton } from '../IconButton/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import {
  MailListItemGridBackgroundEnum,
  MailListItemProps,
} from './MailListItem.interfaces';

const MailListItem: FC<MailListItemProps> = ({
  id,
  sender,
  title,
  text,
  isViewed,
  date,
  isChecked,
  checkboxCheckHandler,
}) => {
  const [isHover, setIsHover] = useState(false);

  const listItemMouseEnderHandler = (): void => {
    setIsHover(true);
  };

  const listItemMouseLeaveHandler = (): void => {
    setIsHover(false);
  };

  const checkboxClickHandler = () => {
    checkboxCheckHandler(isChecked, id);
  };

  const lineEndItems = (): React.ReactNode => {
    if (isHover) {
      return (
        <S.EndLineWrapper>
          <Tooltip title={'Архивировать'}>
            <IconButton>
              <ArchiveOutlinedIcon fontSize={'small'} />
            </IconButton>
          </Tooltip>
          <Tooltip title={'Удалить'}>
            <IconButton>
              <DeleteOutlinedIcon fontSize={'small'} />
            </IconButton>
          </Tooltip>
          <Tooltip title={'Отметить как прочитанное'}>
            <IconButton>
              <AccessTimeOutlinedIcon fontSize={'small'} />
            </IconButton>
          </Tooltip>
          <Tooltip title={'Отложить'}>
            <IconButton>
              <EmailOutlinedIcon fontSize={'small'} />
            </IconButton>
          </Tooltip>
        </S.EndLineWrapper>
      );
    }
    return (
      <S.EndLineWrapper>
        <S.TimeText>{date}</S.TimeText>
      </S.EndLineWrapper>
    );
  };

  return (
    <S.MailListItemGrid
      background={
        isChecked
          ? MailListItemGridBackgroundEnum.checked
          : isViewed
          ? MailListItemGridBackgroundEnum.viewed
          : MailListItemGridBackgroundEnum.normal
      }
      onMouseEnter={listItemMouseEnderHandler}
      onMouseLeave={listItemMouseLeaveHandler}
    >
      {isHover && <S.DragIcon fontSize={'small'} />}
      <Checkbox
        size={'small'}
        checked={isChecked}
        onChange={checkboxClickHandler}
        disableTouchRipple
      />
      <Checkbox
        icon={<StarBorderIcon fontSize={'small'} />}
        checkedIcon={<S.CheckedStarIcon fontSize={'small'} />}
      />
      <S.TextWrapper>
        <S.MessageText isViewed={isViewed}>{sender}</S.MessageText>
        <S.TextContentWrapper>
          <S.MessageText>
            {isViewed ? title : <b>{title}</b>} - {text}
          </S.MessageText>
        </S.TextContentWrapper>
      </S.TextWrapper>
      {lineEndItems()}
    </S.MailListItemGrid>
  );
};

export default React.memo(MailListItem);
