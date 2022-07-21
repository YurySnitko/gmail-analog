import React, { FC } from 'react';
import { S } from './FilterSelect.styles';
import { FilterSelectProps } from './FilterSelect.interfaces';

const FilterSelect: FC<FilterSelectProps> = ({ children, defaultValue }) => {
  return (
    <S.FilterWrapper>
      <S.FilterSelect value={defaultValue} variant={'standard'}>
        {children}
      </S.FilterSelect>
    </S.FilterWrapper>
  );
};

export default FilterSelect;
