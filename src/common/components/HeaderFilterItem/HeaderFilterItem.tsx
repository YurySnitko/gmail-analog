import React, { FC } from 'react';
import { S } from './HeaderFilterItem.styles';
import { HeaderFilterItemProps } from './HeaderFilterItem.interfaces';
import FilterInput from '../../ui-kit/components/FilterInput/FilterInput';

const HeaderFilterItem: FC<HeaderFilterItemProps> = ({ label }) => {
  return (
    <S.HeaderFilterItemWrapper>
      <S.HeaderFilterItemText>{label}</S.HeaderFilterItemText>
      <FilterInput />
    </S.HeaderFilterItemWrapper>
  );
};

export default HeaderFilterItem;
