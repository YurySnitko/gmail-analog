import React, { FC, MouseEventHandler, useState } from 'react';
import { S } from './MailListItem.styles';
import { MailListEndItems } from '../MailListEndItems/MailListEndItems';
import { Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  MailListItemGridBackgroundEnum,
  MailListItemProps,
} from './MailListItem.interfaces';

const MailListItem: FC<MailListItemProps> = ({
  id,
  senderName,
  title,
  text,
  isViewed,
  date,
  onMailListItemClick,
  isChecked,
  checkboxCheckHandler,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const listItemMouseEnderHandler = (): void => {
    setIsHover(true);
  };

  const listItemMouseLeaveHandler = (): void => {
    setIsHover(false);
  };

  const checkboxClickHandler: MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    e.stopPropagation();
    checkboxCheckHandler(isChecked, id);
  };

  const starredCheckboxClickHandler: MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.stopPropagation();
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
      onClick={(): void => onMailListItemClick(id)}
    >
      {isHover && <S.DragIcon fontSize={'small'} />}
      <Checkbox
        size={'small'}
        checked={isChecked}
        onClick={checkboxClickHandler}
        disableTouchRipple
      />
      <Checkbox
        onClick={starredCheckboxClickHandler}
        icon={<StarBorderIcon fontSize={'small'} />}
        checkedIcon={<S.CheckedStarIcon fontSize={'small'} />}
      />
      <S.TextWrapper>
        <S.MessageText isViewed={isViewed}>{senderName}</S.MessageText>
        <S.TextContentWrapper>
          <S.MessageText>
            {isViewed ? title : <b>{title}</b>} - {text}
          </S.MessageText>
        </S.TextContentWrapper>
      </S.TextWrapper>
      <MailListEndItems isHover={isHover} date={date} />
    </S.MailListItemGrid>
  );
};

export default React.memo(MailListItem);
