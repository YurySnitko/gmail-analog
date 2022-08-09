import React, { FC } from 'react';
import { S } from './LocalizationSelect.styles';
import { LocalizationSelectProps } from './LocalizationSelect.interfaces';

const LocalizationSelect: FC<LocalizationSelectProps> = ({
  children,
  value,
  onChange,
}) => {
  return (
    <S.SelectWrapper>
      <S.Select variant={'outlined'} value={value} onChange={onChange}>
        {children}
      </S.Select>
    </S.SelectWrapper>
  );
};

export default LocalizationSelect;
