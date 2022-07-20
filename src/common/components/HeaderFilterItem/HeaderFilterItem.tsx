import React, { FC } from 'react';
import { S } from './HeaderFilterItem.styles';
import { HeaderFilterItemProps } from './HeaderFilterItem.interfaces';

const HeaderFilterItem: FC<HeaderFilterItemProps> = ({ label }) => {
  return (
    <S.HeaderFilterItemWrapper>
      <S.HeaderFilterItemText>{label}</S.HeaderFilterItemText>
      <S.HeaderFilterItemInput />
    </S.HeaderFilterItemWrapper>
  );
};

export default HeaderFilterItem;
