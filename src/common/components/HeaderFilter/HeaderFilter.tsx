import React, { FC, useContext, useEffect, useState } from 'react';
import { S } from './HeaderFilter.styles';
import { Button, Checkbox, ClickAwayListener, MenuItem } from '@mui/material';
import FilterInput from '../../ui-kit/components/FilterInput/FilterInput';
import FilterSelect from '../../ui-kit/components/FilterSelect/FilterSelect';
import FilterDatePicker from '../../ui-kit/components/FilterDatePicker/FilterDatePicker';
import { FilterValues, HeaderFilterProps } from './HeaderFilter.interfaces';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { addData } from '../../../store/reducers/FilterValuesSlice';
import { LocalizationContext } from '../../ui-kit/LocalizationProvider/LocalizationProvider';

const HeaderFilter: FC<HeaderFilterProps> = ({
  setIsFilterForm,
  searchedValue,
}) => {
  const filters = useAppSelector((state) => state.filters);
  const { handleSubmit, control, watch } = useForm<FilterValues>();
  const dispatch = useAppDispatch();
  const [filterDisabled, setFilterDisabled] = useState<boolean>(true);
  const watchSender = watch('sender');
  const watchAddress = watch('address');
  const watchTopic = watch('topic');
  const watchSearchingWords = watch('searchedWords');
  const watchNoWords = watch('noWords');
  const watchSizeValue = watch('sizeValue');
  const watchSearchingPlace = watch('searchingPlace');
  const t = useContext(LocalizationContext);

  useEffect(() => {
    if (
      watchSender?.length ||
      watchAddress?.length ||
      watchTopic?.length ||
      watchSearchingWords?.length ||
      watchNoWords?.length ||
      watchSizeValue?.length ||
      watchSearchingPlace !== 'headerFilterSelectAllMail'
    ) {
      setFilterDisabled(false);
    } else if (!filterDisabled) {
      setFilterDisabled(true);
    }
  }, [
    watchSender,
    watchAddress,
    watchTopic,
    watchSearchingWords,
    watchNoWords,
    watchSizeValue,
    watchSearchingPlace,
    filterDisabled,
  ]);

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
              <S.HeaderFilterItemText>
                {t.headerFilterFrom}
              </S.HeaderFilterItemText>
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
              <S.HeaderFilterItemText>
                {t.headerFilterTo}
              </S.HeaderFilterItemText>
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
              <S.HeaderFilterItemText>
                {t.headerFilterSubject}
              </S.HeaderFilterItemText>
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
              <S.HeaderFilterItemText>
                {t.headerFilterHasWords}
              </S.HeaderFilterItemText>
              <Controller
                name={'searchedWords'}
                control={control}
                defaultValue={searchedValue || filters.searchedWords}
                render={({
                  field: { onChange, value },
                }): React.ReactElement => (
                  <FilterInput changeHandler={onChange} value={value} />
                )}
              />
            </S.HeaderFilterItemWrapper>
            <S.HeaderFilterItemWrapper>
              <S.HeaderFilterItemText>
                {t.headerFilterNoWords}
              </S.HeaderFilterItemText>
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
                {t.headerFilterSize}
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
                      <S.FilterMenuItem
                        id={'1'}
                        value={'headerFilterSelectGreater'}
                      >
                        {t.headerFilterSelectGreater}
                      </S.FilterMenuItem>
                      <MenuItem id={'2'} value={'headerFilterSelectLess'}>
                        {t.headerFilterSelectLess}
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
                      <S.FilterMenuItem value={'headerFilterSelectSizeUnitMB'}>
                        {t.headerFilterSelectSizeUnitMB}
                      </S.FilterMenuItem>
                      <S.FilterMenuItem value={'headerFilterSelectSizeUnitKB'}>
                        {t.headerFilterSelectSizeUnitKB}
                      </S.FilterMenuItem>
                      <S.FilterMenuItem value={'headerFilterSelectSizeUnitB'}>
                        {t.headerFilterSelectSizeUnitB}
                      </S.FilterMenuItem>
                    </FilterSelect>
                  )}
                />
              </S.HeaderFilterSelectWrapper>
            </S.HeaderFilterSelectItem>
            <S.HeaderFilterSelectItem>
              <S.HeaderFilterSelectItemText>
                {t.headerFilterDate}
              </S.HeaderFilterSelectItemText>
              <S.HeaderFilterDatePickerWrapper>
                <Controller
                  name={'datePeriod'}
                  control={control}
                  defaultValue={filters.datePeriod}
                  render={({
                    field: { onChange, value },
                  }): React.ReactElement => (
                    <FilterSelect changeHandler={onChange} value={value}>
                      <S.FilterMenuItem value={'headerFilterSelectDateOneDay'}>
                        {t.headerFilterSelectDateOneDay}
                      </S.FilterMenuItem>
                      <S.FilterMenuItem
                        value={'headerFilterSelectDateThreeDays'}
                      >
                        {t.headerFilterSelectDateThreeDays}
                      </S.FilterMenuItem>
                      <S.FilterMenuItem value={'headerFilterSelectDateOneWeek'}>
                        {t.headerFilterSelectDateOneWeek}
                      </S.FilterMenuItem>
                      <S.FilterMenuItem
                        value={'headerFilterSelectDateTwoWeeks'}
                      >
                        {t.headerFilterSelectDateTwoWeeks}
                      </S.FilterMenuItem>
                      <S.FilterMenuItem
                        value={'headerFilterSelectDateOneMonth'}
                      >
                        {t.headerFilterSelectDateOneMonth}
                      </S.FilterMenuItem>
                      <S.FilterMenuItem
                        value={'headerFilterSelectDateTwoMonth'}
                      >
                        {t.headerFilterSelectDateTwoMonth}
                      </S.FilterMenuItem>
                      <S.FilterMenuItem
                        value={'headerFilterSelectDateSixMonth'}
                      >
                        {t.headerFilterSelectDateSixMonth}
                      </S.FilterMenuItem>
                      <S.FilterMenuItem value={'headerFilterSelectDateOneYear'}>
                        {t.headerFilterSelectDateOneYear}
                      </S.FilterMenuItem>
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
              <S.HeaderFilterSelectItemText>
                {t.headerFilterSearch}
              </S.HeaderFilterSelectItemText>
              <Controller
                name={'searchingPlace'}
                control={control}
                defaultValue={filters.searchingPlace}
                render={({
                  field: { onChange, value },
                }): React.ReactElement => (
                  <FilterSelect changeHandler={onChange} value={value}>
                    <S.FilterMenuItem value={'headerFilterSelectAllMail'}>
                      {t.headerFilterSelectAllMail}
                    </S.FilterMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectInbox'}>
                      {t.headerFilterSelectInbox}
                    </S.FilterMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectStarred'}>
                      {t.headerFilterSelectStarred}
                    </S.FilterMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectSentMail'}>
                      {t.headerFilterSelectSentMail}
                    </S.FilterMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectDrafts'}>
                      {t.headerFilterSelectDrafts}
                    </S.FilterMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectChats'}>
                      {t.headerFilterSelectChats}
                    </S.FilterMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectSpam'}>
                      {t.headerFilterSelectSpam}
                    </S.FilterMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectTrash'}>
                      {t.headerFilterSelectTrash}
                    </S.FilterMenuItem>
                    <S.FilterTopBorderMenuItem
                      value={'headerFilterSelectMailSpamTrash'}
                    >
                      {t.headerFilterSelectMailSpamTrash}
                    </S.FilterTopBorderMenuItem>
                    <S.FilterTopBorderMenuItem
                      value={'headerFilterSelectReadMail'}
                    >
                      {t.headerFilterSelectReadMail}
                    </S.FilterTopBorderMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectUnreadMail'}>
                      {t.headerFilterSelectUnreadMail}
                    </S.FilterMenuItem>
                    <S.FilterTopBorderMenuItem
                      value={'headerFilterSelectSocial'}
                    >
                      {t.headerFilterSelectSocial}
                    </S.FilterTopBorderMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectUpdates'}>
                      {t.headerFilterSelectUpdates}
                    </S.FilterMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectForums'}>
                      {t.headerFilterSelectForums}
                    </S.FilterMenuItem>
                    <S.FilterMenuItem value={'headerFilterSelectPromotions'}>
                      {t.headerFilterSelectPromotions}
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
              <S.CheckboxLabel>{t.headerFilterAttachment}</S.CheckboxLabel>
            </S.CheckboxWrapper>
            <S.FormControls>
              <S.CreateFilterButton
                disabled={filterDisabled}
                variant={'outlined'}
              >
                {t.headerFilterCreateFilter}
              </S.CreateFilterButton>
              <Button variant={'contained'} type={'submit'}>
                {t.headerFilterSearchButton}
              </Button>
            </S.FormControls>
          </S.HeaderFilterForm>
        </S.HeaderFilterWrapper>
      </div>
    </ClickAwayListener>
  );
};

export default HeaderFilter;
