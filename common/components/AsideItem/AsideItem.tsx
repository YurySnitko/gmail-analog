import React, {FC} from 'react';
import {ListItemIcon} from "@mui/material";
import {S} from './AsideItem.styles'
import {AsideItemProps} from "./AsideItem.interface";

const AsideItem: FC<AsideItemProps> = ({Image, title, clickHandler}) => {
  return (
    <S.Item>
      <S.ListButton onClick={clickHandler}>
        <ListItemIcon>
          <Image fontSize={'small'}/>
        </ListItemIcon>
        <S.ItemTitle>{title}</S.ItemTitle>
      </S.ListButton>
    </S.Item>
  );
};

export default AsideItem;