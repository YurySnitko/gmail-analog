import React, {FC} from 'react';
import {S} from './AsideItem.styles'
import {AsideItemProps} from "./AsideItem.interface";

const AsideItem: FC<AsideItemProps> = ({isOpen, Image, title, clickHandler}) => {
  return (
    <S.Item>
      <S.ListButton onClick={clickHandler}>
        <S.ItemButtonIcon>
          <Image fontSize={'small'}/>
        </S.ItemButtonIcon>
        {isOpen && <S.ItemTitle>{title}</S.ItemTitle>}
      </S.ListButton>
    </S.Item>
  );
};

export default AsideItem;