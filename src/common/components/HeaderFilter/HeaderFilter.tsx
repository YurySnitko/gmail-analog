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
              <S.FilterMenuItem id={'1'} value={'больше'}>
                больше
              </S.FilterMenuItem>
              <MenuItem id={'2'} value={'меньше'}>
                меньше
              </MenuItem>
            </FilterSelect>
            <FilterInput />
            <FilterSelect defaultValue={'МБ'}>
              <S.FilterMenuItem value={'МБ'}>МБ</S.FilterMenuItem>
              <S.FilterMenuItem value={'КБ'}>КБ</S.FilterMenuItem>
              <S.FilterMenuItem value={'Б'}>Б</S.FilterMenuItem>
            </FilterSelect>
          </S.HeaderFilterSelectWrapper>
        </S.HeaderFilterSelectItem>
        <S.HeaderFilterSelectItem>
          <S.HeaderFilterSelectItemText>Дата</S.HeaderFilterSelectItemText>
          <S.HeaderFilterDatePickerWrapper>
            <FilterSelect defaultValue={'1 день'}>
              <S.FilterMenuItem value={'1 день'}>1 день</S.FilterMenuItem>
              <S.FilterMenuItem value={'3 дня'}>3 дня</S.FilterMenuItem>
              <S.FilterMenuItem value={'1 неделя'}>1 неделя</S.FilterMenuItem>
              <S.FilterMenuItem value={'2 недели'}>2 недели</S.FilterMenuItem>
              <S.FilterMenuItem value={'1 месяц'}>1 месяц</S.FilterMenuItem>
              <S.FilterMenuItem value={'2 месяца'}>2 месяца</S.FilterMenuItem>
              <S.FilterMenuItem value={'6 месяцев'}>2 месяцев</S.FilterMenuItem>
              <S.FilterMenuItem value={'1 год'}>1 год</S.FilterMenuItem>
            </FilterSelect>
            <FilterDatePicker />
          </S.HeaderFilterDatePickerWrapper>
        </S.HeaderFilterSelectItem>
        <S.HeaderFilterSelectItem>
          <S.HeaderFilterSelectItemText>Поиск</S.HeaderFilterSelectItemText>
          <FilterSelect defaultValue={'Вся почта'}>
            <S.FilterMenuItem value={'Вся почта'}>Вся почта</S.FilterMenuItem>
            <S.FilterMenuItem value={'Входящие'}>Входящие</S.FilterMenuItem>
            <S.FilterMenuItem value={'Помеченные'}>Помеченные</S.FilterMenuItem>
            <S.FilterMenuItem value={'Отправленные'}>
              Отправленные
            </S.FilterMenuItem>
            <S.FilterMenuItem value={'Черновики'}>Черновики</S.FilterMenuItem>
            <S.FilterMenuItem value={'Чаты'}>Чаты</S.FilterMenuItem>
            <S.FilterMenuItem value={'Спам'}>Спам</S.FilterMenuItem>
            <S.FilterMenuItem value={'Корзина'}>Корзина</S.FilterMenuItem>
            <S.FilterTopBorderMenuItem value={'Письма, спам и корзина'}>
              Письма, спам и корзина
            </S.FilterTopBorderMenuItem>
            <S.FilterTopBorderMenuItem value={'Прочитанные письма'}>
              Прочитанные письма
            </S.FilterTopBorderMenuItem>
            <S.FilterMenuItem value={'Не прочитанные письма'}>
              Не прочитанные письма
            </S.FilterMenuItem>
            <S.FilterTopBorderMenuItem value={'Соцсети'}>
              Соцсети
            </S.FilterTopBorderMenuItem>
            <S.FilterMenuItem value={'Оповещения'}>Оповещения</S.FilterMenuItem>
            <S.FilterMenuItem value={'Форумы'}>Форумы</S.FilterMenuItem>
            <S.FilterMenuItem value={'Промоакции'}>Промоакции</S.FilterMenuItem>
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
