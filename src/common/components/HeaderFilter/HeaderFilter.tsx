import React, { FC, useState } from 'react';
import { S } from './HeaderFilter.styles';
import {
  Button,
  Checkbox,
  ClickAwayListener,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import FilterInput from '../../ui-kit/components/FilterInput/FilterInput';
import FilterSelect from '../../ui-kit/components/FilterSelect/FilterSelect';
import FilterDatePicker from '../../ui-kit/components/FilterDatePicker/FilterDatePicker';
import { FilterValues, HeaderFilterProps } from './HeaderFilter.interfaces';
import { useAppSelector } from '../../../hooks/redux.hook';
//import { addData } from '../../../store/reducers/FilterValuesSlice';
import { SubmitHandler, useForm } from 'react-hook-form';

const HeaderFilter: FC<HeaderFilterProps> = ({ setIsFilterForm }) => {
  const filters = useAppSelector((state) => state.filters);
  const { register, handleSubmit } = useForm<FilterValues>();

  // const [sender, setSender] = useState<string>(filters.sender);
  const [address, setAddress] = useState<string>(filters.address);
  const [topic, setTopic] = useState<string>(filters.topic);
  const [searchedWords, setSearchedWords] = useState<string>(
    filters.searchedWords
  );
  const [noWords, setNoWords] = useState<string>(filters.noWords);
  const [size, setSize] = useState<string>(filters.size);
  const [sizeUnit, setSizeUnit] = useState<string>(filters.sizeUnit);
  const [datePeriod, setDatePeriod] = useState<string>(filters.datePeriod);
  const [date, setDate] = useState<Date | null>(filters.date);
  const [searchingPlace, setSearchingPlace] = useState<string>(
    filters.searchingPlace
  );
  const [isAttachedFiles, setIsAttachedFiles] = useState<boolean>(
    filters.isAttachedFiles
  );
  const [sizeValue, setSizeValue] = useState<string>(filters.sizeValue);
  // const dispatch = useAppDispatch();

  const setSizeHandler = (event: SelectChangeEvent<unknown>): void => {
    setSize(event.target.value as string);
  };

  const setSizeUnitHandler = (event: SelectChangeEvent<unknown>): void => {
    setSizeUnit(event.target.value as string);
  };

  const setDatePeriodHandler = (event: SelectChangeEvent<unknown>): void => {
    setDatePeriod(event.target.value as string);
  };

  const setSearchingPlaceHandler = (
    event: SelectChangeEvent<unknown>
  ): void => {
    setSearchingPlace(event.target.value as string);
  };

  const setDateHandler = (newValue: unknown): void => {
    setDate(newValue as Date);
  };

  const checkboxChecked = (): void => {
    setIsAttachedFiles((prev) => !prev);
  };

  // const setSenderHandler = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   setSender(event.target.value);
  // };

  const setAddressHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setAddress(event.target.value);
  };

  const setTopicsHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTopic(event.target.value);
  };

  const setSearchedWordsHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchedWords(event.target.value);
  };

  const setNoWordsHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNoWords(event.target.value);
  };

  const setSizeValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSizeValue(event.target.value);
  };

  const setIsAttachedHandler = (): void => {
    setIsAttachedFiles((prev) => !prev);
  };

  const clickAwayHandler = (): void => {
    // dispatch(
    //   addData({
    //     address: address,
    //     date: date,
    //     datePeriod: datePeriod,
    //     isAttachedFiles: isAttachedFiles,
    //     noWords: noWords,
    //     searchedWords: searchedWords,
    //     searchingPlace: searchingPlace,
    //     sender: sender,
    //     size: size,
    //     sizeUnit: sizeUnit,
    //     sizeValue: sizeValue,
    //     topic: topic,
    //   })
    // );
    setIsFilterForm(false);
  };

  const formSubmit: SubmitHandler<FilterValues> = (data) => {
    console.log(data);
  };

  return (
    <ClickAwayListener mouseEvent={'onMouseUp'} onClickAway={clickAwayHandler}>
      <div>
        <S.HeaderFilterWrapper>
          <S.HeaderFilterForm onSubmit={handleSubmit(formSubmit)}>
            <S.HeaderFilterItemWrapper>
              <S.HeaderFilterItemText>От</S.HeaderFilterItemText>
              <FilterInput value={filters.sender} {...register('sender')} />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterItemWrapper>
              <S.HeaderFilterItemText>Кому</S.HeaderFilterItemText>
              <FilterInput value={address} changeHandler={setAddressHandler} />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterItemWrapper>
              <S.HeaderFilterItemText>Тема</S.HeaderFilterItemText>
              <FilterInput value={topic} changeHandler={setTopicsHandler} />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterItemWrapper>
              <S.HeaderFilterItemText>Содержит слова</S.HeaderFilterItemText>
              <FilterInput
                value={searchedWords}
                changeHandler={setSearchedWordsHandler}
              />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterItemWrapper>
              <S.HeaderFilterItemText>Не содержит слова</S.HeaderFilterItemText>
              <FilterInput value={noWords} changeHandler={setNoWordsHandler} />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterSelectItem>
              <S.HeaderFilterSelectItemText>
                Размер
              </S.HeaderFilterSelectItemText>
              <S.HeaderFilterSelectWrapper>
                <FilterSelect
                  changeHandler={setSizeHandler}
                  defaultValue={size}
                >
                  <S.FilterMenuItem id={'1'} value={'больше'}>
                    больше
                  </S.FilterMenuItem>
                  <MenuItem id={'2'} value={'меньше'}>
                    меньше
                  </MenuItem>
                </FilterSelect>
                <FilterInput
                  value={sizeValue}
                  changeHandler={setSizeValueHandler}
                />
                <FilterSelect
                  changeHandler={setSizeUnitHandler}
                  defaultValue={sizeUnit}
                >
                  <S.FilterMenuItem value={'МБ'}>МБ</S.FilterMenuItem>
                  <S.FilterMenuItem value={'КБ'}>КБ</S.FilterMenuItem>
                  <S.FilterMenuItem value={'Б'}>Б</S.FilterMenuItem>
                </FilterSelect>
              </S.HeaderFilterSelectWrapper>
            </S.HeaderFilterSelectItem>
            <S.HeaderFilterSelectItem>
              <S.HeaderFilterSelectItemText>Дата</S.HeaderFilterSelectItemText>
              <S.HeaderFilterDatePickerWrapper>
                <FilterSelect
                  changeHandler={setDatePeriodHandler}
                  defaultValue={datePeriod}
                >
                  <S.FilterMenuItem value={'1 день'}>1 день</S.FilterMenuItem>
                  <S.FilterMenuItem value={'3 дня'}>3 дня</S.FilterMenuItem>
                  <S.FilterMenuItem value={'1 неделя'}>
                    1 неделя
                  </S.FilterMenuItem>
                  <S.FilterMenuItem value={'2 недели'}>
                    2 недели
                  </S.FilterMenuItem>
                  <S.FilterMenuItem value={'1 месяц'}>1 месяц</S.FilterMenuItem>
                  <S.FilterMenuItem value={'2 месяца'}>
                    2 месяца
                  </S.FilterMenuItem>
                  <S.FilterMenuItem value={'6 месяцев'}>
                    2 месяцев
                  </S.FilterMenuItem>
                  <S.FilterMenuItem value={'1 год'}>1 год</S.FilterMenuItem>
                </FilterSelect>
                <FilterDatePicker value={date} changeHandler={setDateHandler} />
              </S.HeaderFilterDatePickerWrapper>
            </S.HeaderFilterSelectItem>
            <S.HeaderFilterSelectItem>
              <S.HeaderFilterSelectItemText>Поиск</S.HeaderFilterSelectItemText>
              <FilterSelect
                changeHandler={setSearchingPlaceHandler}
                defaultValue={searchingPlace}
              >
                <S.FilterMenuItem value={'Вся почта'}>
                  Вся почта
                </S.FilterMenuItem>
                <S.FilterMenuItem value={'Входящие'}>Входящие</S.FilterMenuItem>
                <S.FilterMenuItem value={'Помеченные'}>
                  Помеченные
                </S.FilterMenuItem>
                <S.FilterMenuItem value={'Отправленные'}>
                  Отправленные
                </S.FilterMenuItem>
                <S.FilterMenuItem value={'Черновики'}>
                  Черновики
                </S.FilterMenuItem>
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
                <S.FilterMenuItem value={'Оповещения'}>
                  Оповещения
                </S.FilterMenuItem>
                <S.FilterMenuItem value={'Форумы'}>Форумы</S.FilterMenuItem>
                <S.FilterMenuItem value={'Промоакции'}>
                  Промоакции
                </S.FilterMenuItem>
              </FilterSelect>
            </S.HeaderFilterSelectItem>
            <S.CheckboxWrapper>
              <Checkbox
                size={'small'}
                checked={isAttachedFiles}
                onChange={setIsAttachedHandler}
              />
              <S.CheckboxLabel>Есть прикрепленные файлы</S.CheckboxLabel>
            </S.CheckboxWrapper>
            <S.FormControls>
              <S.CreateFilterButton
                disabled
                onChange={checkboxChecked}
                variant={'outlined'}
              >
                Создать фильтр
              </S.CreateFilterButton>
              <Button variant={'contained'} type={'submit'}>
                Поиск
              </Button>
            </S.FormControls>
          </S.HeaderFilterForm>
        </S.HeaderFilterWrapper>
      </div>
    </ClickAwayListener>
  );
};

export default HeaderFilter;
