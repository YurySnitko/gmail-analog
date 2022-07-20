import React, { FC } from 'react';
import { S } from './HeaderFilter.styles';
import HeaderFilterItem from '../HeaderFilterItem/HeaderFilterItem';

const HeaderFilter: FC = React.forwardRef(() => {
  return (
    <S.HeaderFilterWrapper>
      <S.HeaderFilterForm>
        <HeaderFilterItem label={'От'} />
        <HeaderFilterItem label={'Кому'} />
        <HeaderFilterItem label={'Тема'} />
        <HeaderFilterItem label={'Содержит слова'} />
        <HeaderFilterItem label={'Не содержит слова'} />
      </S.HeaderFilterForm>
    </S.HeaderFilterWrapper>
  );
});

HeaderFilter.displayName = 'HeaderFilter';

export default HeaderFilter;
