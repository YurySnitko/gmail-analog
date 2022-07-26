import React, { FC } from 'react';
import { S } from './FilterDatePicker.styles';
import { TextFieldProps } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FilterDatePickerProps } from './FilterDatePicker.interfaces';

const FilterDatePicker: FC<FilterDatePickerProps> = ({
  value,
  changeHandler,
}) => {
  const datePickerRenderInput = (
    params: TextFieldProps
  ): React.ReactElement => {
    return <S.DatePickerTextField variant={'standard'} {...params} />;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={changeHandler}
        renderInput={datePickerRenderInput}
      />
    </LocalizationProvider>
  );
};

export default FilterDatePicker;
