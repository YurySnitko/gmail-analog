import React, { FC, useState } from 'react';
import { S } from './FilterDatePicker.styles';
import { TextFieldProps } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FilterDatePicker: FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  const changeDateHandler = (newValue: unknown): void => {
    setDate(newValue as Date);
  };

  const datePickerRenderInput = (
    params: TextFieldProps
  ): React.ReactElement => {
    return <S.DatePickerTextField variant={'standard'} {...params} />;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={date}
        onChange={changeDateHandler}
        renderInput={datePickerRenderInput}
      />
    </LocalizationProvider>
  );
};

export default FilterDatePicker;
