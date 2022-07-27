import React, { FC } from 'react';
import { S } from './FilterInput.styles';
import { FilterInputProps } from './FilterInput.interfaces';

const FilterInput: FC<FilterInputProps> = ({ value, changeHandler }) => {
  return <S.FilterItemInput defaultValue={value} onChange={changeHandler} />;
};

export default FilterInput;
