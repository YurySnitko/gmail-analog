import React, { FC, useEffect, useState } from 'react';
import { S } from './HeaderFilter.styles';
import { Button, Checkbox, ClickAwayListener, MenuItem } from '@mui/material';
import FilterInput from '../../ui-kit/components/FilterInput/FilterInput';
import FilterSelect from '../../ui-kit/components/FilterSelect/FilterSelect';
import FilterDatePicker from '../../ui-kit/components/FilterDatePicker/FilterDatePicker';
import { FilterValues, HeaderFilterProps } from './HeaderFilter.interfaces';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { addData } from '../../../store/reducers/FilterValuesSlice';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';

const HeaderFilter: FC<HeaderFilterProps> = ({ setIsFilterForm }) => {
  const filters = useAppSelector((state) => state.filters);
  const { handleSubmit, control, watch } = useForm<FilterValues>();
  const watchSender = watch('sender');
  const [filterDisabled, setFilterDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (watchSender && watchSender?.length > 0) {
      setFilterDisabled(false);
    } else if (!filterDisabled && watchSender?.length === 0) {
      setFilterDisabled(true);
    }
  }, [watchSender]);

  console.log(filterDisabled, watchSender);

  const dispatch = useAppDispatch();

  const clickAwayHandler = (): void => {
    dispatch(addData(watch()));
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
              <Controller
                name={'sender'}
                control={control}
                defaultValue={filters.sender}
                render={({
                  field: { onChange, value },
                }): React.ReactElement => (
                  <FilterInput changeHandler={onChange} value={value} />
                )}
              />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterItemWrapper>
              <S.HeaderFilterItemText>Кому</S.HeaderFilterItemText>
              <Controller
                name={'address'}
                control={control}
                defaultValue={filters.address}
                render={({
                  field: { onChange, value },
                }): React.ReactElement => (
                  <FilterInput changeHandler={onChange} value={value} />
                )}
              />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterItemWrapper>
              <S.HeaderFilterItemText>Тема</S.HeaderFilterItemText>
              <Controller
                name={'topic'}
                control={control}
                defaultValue={filters.topic}
                render={({
                  field: { onChange, value },
                }): React.ReactElement => (
                  <FilterInput changeHandler={onChange} value={value} />
                )}
              />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterItemWrapper>
              <S.HeaderFilterItemText>Содержит слова</S.HeaderFilterItemText>
              <Controller
                name={'searchedWords'}
                control={control}
                defaultValue={filters.searchedWords}
                render={({
                  field: { onChange, value },
                }): React.ReactElement => (
                  <FilterInput changeHandler={onChange} value={value} />
                )}
              />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterItemWrapper>
              <S.HeaderFilterItemText>Не содержит слова</S.HeaderFilterItemText>
              <Controller
                name={'noWords'}
                control={control}
                defaultValue={filters.noWords}
                render={({
                  field: { onChange, value },
                }): React.ReactElement => (
                  <FilterInput changeHandler={onChange} value={value} />
                )}
              />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterSelectItem>
              <S.HeaderFilterSelectItemText>
                Размер
              </S.HeaderFilterSelectItemText>
              <S.HeaderFilterSelectWrapper>
                <Controller
                  name={'size'}
                  control={control}
                  defaultValue={filters.size}
                  render={({
                    field: { onChange, value },
                  }): React.ReactElement => (
                    <FilterSelect changeHandler={onChange} value={value}>
                      <S.FilterMenuItem id={'1'} value={'больше'}>
                        больше
                      </S.FilterMenuItem>
                      <MenuItem id={'2'} value={'меньше'}>
                        меньше
                      </MenuItem>
                    </FilterSelect>
                  )}
                />
                <Controller
                  name={'sizeValue'}
                  control={control}
                  defaultValue={filters.sizeValue}
                  render={({
                    field: { onChange, value },
                  }): React.ReactElement => (
                    <FilterInput changeHandler={onChange} value={value} />
                  )}
                />
                <Controller
                  name={'sizeUnit'}
                  control={control}
                  defaultValue={filters.sizeUnit}
                  render={({
                    field: { onChange, value },
                  }): React.ReactElement => (
                    <FilterSelect changeHandler={onChange} value={value}>
                      <S.FilterMenuItem value={'МБ'}>МБ</S.FilterMenuItem>
                      <S.FilterMenuItem value={'КБ'}>КБ</S.FilterMenuItem>
                      <S.FilterMenuItem value={'Б'}>Б</S.FilterMenuItem>
                    </FilterSelect>
                  )}
                />
              </S.HeaderFilterSelectWrapper>
            </S.HeaderFilterSelectItem>
            <S.HeaderFilterSelectItem>
              <S.HeaderFilterSelectItemText>Дата</S.HeaderFilterSelectItemText>
              <S.HeaderFilterDatePickerWrapper>
                <Controller
                  name={'datePeriod'}
                  control={control}
                  defaultValue={filters.datePeriod}
                  render={({
                    field: { onChange, value },
                  }): React.ReactElement => (
                    <FilterSelect changeHandler={onChange} value={value}>
                      <S.FilterMenuItem value={'1 день'}>
                        1 день
                      </S.FilterMenuItem>
                      <S.FilterMenuItem value={'3 дня'}>3 дня</S.FilterMenuItem>
                      <S.FilterMenuItem value={'1 неделя'}>
                        1 неделя
                      </S.FilterMenuItem>
                      <S.FilterMenuItem value={'2 недели'}>
                        2 недели
                      </S.FilterMenuItem>
                      <S.FilterMenuItem value={'1 месяц'}>
                        1 месяц
                      </S.FilterMenuItem>
                      <S.FilterMenuItem value={'2 месяца'}>
                        2 месяца
                      </S.FilterMenuItem>
                      <S.FilterMenuItem value={'6 месяцев'}>
                        2 месяцев
                      </S.FilterMenuItem>
                      <S.FilterMenuItem value={'1 год'}>1 год</S.FilterMenuItem>
                    </FilterSelect>
                  )}
                />
                <Controller
                  name={'date'}
                  control={control}
                  defaultValue={filters.date}
                  render={({
                    field: { onChange, value },
                  }): React.ReactElement => (
                    <FilterDatePicker value={value} changeHandler={onChange} />
                  )}
                />
              </S.HeaderFilterDatePickerWrapper>
            </S.HeaderFilterSelectItem>
            <S.HeaderFilterSelectItem>
              <S.HeaderFilterSelectItemText>Поиск</S.HeaderFilterSelectItemText>
              <Controller
                name={'searchingPlace'}
                control={control}
                defaultValue={filters.searchingPlace}
                render={({
                  field: { onChange, value },
                }): React.ReactElement => (
                  <FilterSelect changeHandler={onChange} value={value}>
                    <S.FilterMenuItem value={'Вся почта'}>
                      Вся почта
                    </S.FilterMenuItem>
                    <S.FilterMenuItem value={'Входящие'}>
                      Входящие
                    </S.FilterMenuItem>
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
                    <S.FilterMenuItem value={'Корзина'}>
                      Корзина
                    </S.FilterMenuItem>
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
                )}
              />
            </S.HeaderFilterSelectItem>
            <S.CheckboxWrapper>
              <Controller
                name={'isAttachedFiles'}
                control={control}
                defaultValue={filters.isAttachedFiles}
                render={({
                  field: { onChange, value },
                }): React.ReactElement => (
                  <Checkbox
                    size={'small'}
                    checked={value}
                    onChange={onChange}
                  />
                )}
              />
              <S.CheckboxLabel>Есть прикрепленные файлы</S.CheckboxLabel>
            </S.CheckboxWrapper>
            <S.FormControls>
              <S.CreateFilterButton
                disabled={filterDisabled}
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
