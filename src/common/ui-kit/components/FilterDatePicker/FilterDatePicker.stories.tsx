import FilterDatePicker from './FilterDatePicker';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'UI-KIT/FilterDatePicker',
  component: FilterDatePicker,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof FilterDatePicker>;

const Template: ComponentStory<typeof FilterDatePicker> = (args) => {
  const [date, setDate] = useState<Date | null>(args.value);

  const changeHandler = (newValue: unknown) => {
    setDate(newValue as Date);
  };

  return <FilterDatePicker value={date} changeHandler={changeHandler} />;
};

export const DatePicker = Template.bind({});
DatePicker.args = {
  value: new Date(),
};
