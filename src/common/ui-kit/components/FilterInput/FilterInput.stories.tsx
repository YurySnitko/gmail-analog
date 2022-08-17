import FilterInput from './FilterInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'UI-KIT/FilterInput',
  component: FilterInput,
} as ComponentMeta<typeof FilterInput>;

const Template: ComponentStory<typeof FilterInput> = (args) => (
  <FilterInput {...args} />
);

export const Input = Template.bind({});
Input.args = {
  value: 'input',
};
