import FilterDatePicker from './FilterDatePicker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'UI-KIT/FilterDatePicker',
  component: FilterDatePicker,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof FilterDatePicker>;

const Template: ComponentStory<typeof FilterDatePicker> = (args) => (
  <FilterDatePicker {...args} />
);

export const DatePicker = Template.bind({});
DatePicker.args = {
  value: new Date(),
};
