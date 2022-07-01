import React, { FC, useState } from 'react';
import { S } from './MailListItem.styles';
import { Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { MailListItemProps } from './MailListItem.interface';
import { MailListEndItems } from '../MailListEndItems/MailListEndItems';

const MailListItem: FC<MailListItemProps> = ({
  sender,
  title,
  text,
  isViewed,
  date,
  onMailListItemClick,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const listItemMouseEnderHandler = (): void => {
    setIsHover(true);
  };

  const listItemMouseLeaveHandler = (): void => {
    setIsHover(false);
  };

  return (
    <S.MailListItemGrid
      isViewed={isViewed}
      onMouseEnter={listItemMouseEnderHandler}
      onMouseLeave={listItemMouseLeaveHandler}
      onClick={onMailListItemClick}
    >
      {isHover && <S.DragIcon fontSize={'small'} />}
      <Checkbox size={'small'} />
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
      <MailListEndItems isHover={isHover} date={date} />
    </S.MailListItemGrid>
  );
};

export default MailListItem;
