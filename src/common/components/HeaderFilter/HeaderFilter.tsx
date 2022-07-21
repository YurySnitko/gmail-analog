import React, { FC } from 'react';
import { S } from './HeaderFilter.styles';
import HeaderFilterItem from '../HeaderFilterItem/HeaderFilterItem';
import { Button, Checkbox, MenuItem } from '@mui/material';
import FilterInput from '../../ui-kit/components/FilterInput/FilterInput';
import FilterSelect from '../../ui-kit/components/FilterSelect/FilterSelect';
import FilterDatePicker from '../../ui-kit/components/FilterDatePicker/FilterDatePicker';

const HeaderFilter: FC = React.forwardRef(() => {
  return (
    <S.HeaderFilterWrapper>
      <S.HeaderFilterForm>
        <HeaderFilterItem label={'От'} />
        <HeaderFilterItem label={'Кому'} />
        <HeaderFilterItem label={'Тема'} />
        <HeaderFilterItem label={'Содержит слова'} />
        <HeaderFilterItem label={'Не содержит слова'} />
        <S.HeaderFilterSelectItem>
          <S.HeaderFilterSelectItemText>Размер</S.HeaderFilterSelectItemText>
          <S.HeaderFilterSelectWrapper>
            <FilterSelect defaultValue={'больше'}>
              <MenuItem value={'больше'}>больше</MenuItem>
              <MenuItem value={'меньше'}>меньше</MenuItem>
            </FilterSelect>
            <FilterInput />
            <FilterSelect defaultValue={'МБ'}>
              <MenuItem value={'МБ'}>МБ</MenuItem>
              <MenuItem value={'КБ'}>КБ</MenuItem>
              <MenuItem value={'Б'}>Б</MenuItem>
            </FilterSelect>
          </S.HeaderFilterSelectWrapper>
        </S.HeaderFilterSelectItem>
        <S.HeaderFilterSelectItem>
          <S.HeaderFilterSelectItemText>Дата</S.HeaderFilterSelectItemText>
          <S.HeaderFilterDatePickerWrapper>
            <FilterSelect defaultValue={'1 день'}>
              <MenuItem value={'1 день'}>1 день</MenuItem>
              <MenuItem value={'3 дня'}>3 дня</MenuItem>
              <MenuItem value={'1 неделя'}>1 неделя</MenuItem>
              <MenuItem value={'2 недели'}>2 недели</MenuItem>
              <MenuItem value={'1 месяц'}>1 месяц</MenuItem>
              <MenuItem value={'2 месяца'}>2 месяца</MenuItem>
              <MenuItem value={'6 месяцев'}>2 месяцев</MenuItem>
              <MenuItem value={'1 год'}>1 год</MenuItem>
            </FilterSelect>
            <FilterDatePicker />
          </S.HeaderFilterDatePickerWrapper>
        </S.HeaderFilterSelectItem>
        <S.HeaderFilterSelectItem>
          <S.HeaderFilterSelectItemText>Поиск</S.HeaderFilterSelectItemText>
          <FilterSelect defaultValue={'1 день'}>
            <MenuItem value={'1 день'}>1 день</MenuItem>
            <MenuItem value={'3 дня'}>3 дня</MenuItem>
            <MenuItem value={'1 неделя'}>1 неделя</MenuItem>
            <MenuItem value={'2 недели'}>2 недели</MenuItem>
            <MenuItem value={'1 месяц'}>1 месяц</MenuItem>
            <MenuItem value={'2 месяца'}>2 месяца</MenuItem>
            <MenuItem value={'6 месяцев'}>2 месяцев</MenuItem>
            <MenuItem value={'1 год'}>1 год</MenuItem>
          </FilterSelect>
        </S.HeaderFilterSelectItem>
        <S.CheckboxWrapper>
          <Checkbox size={'small'} />
          <S.CheckboxLabel>Есть прикрепленные файлы</S.CheckboxLabel>
        </S.CheckboxWrapper>
        <S.FormControls>
          <S.CreateFilterButton disabled variant={'outlined'}>
            Создать фильтр
          </S.CreateFilterButton>
          <Button variant={'contained'}>Поиск</Button>
        </S.FormControls>
      </S.HeaderFilterForm>
    </S.HeaderFilterWrapper>
  );
});

HeaderFilter.displayName = 'HeaderFilter';

export default HeaderFilter;
