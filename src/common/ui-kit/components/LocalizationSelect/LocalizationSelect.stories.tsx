import LocalizationSelect from './LocalizationSelect';
import { ComponentMeta } from '@storybook/react';
import { MenuItem, SelectChangeEvent } from '@mui/material';

export default {
  title: 'UI-KIT/LocalizationSelect',
  component: LocalizationSelect,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof LocalizationSelect>;

export const Default = () => {
  const changeHandler = (event: SelectChangeEvent<unknown>): void => {};

  return (
    <LocalizationSelect value={'ru'} onChange={changeHandler}>
      <MenuItem value={'ru'}>ru</MenuItem>
      <MenuItem value={'en'}>en</MenuItem>
    </LocalizationSelect>
  );
};
