import { MailListEndItems } from './MailListEndItems';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/MailListEndItems',
  component: MailListEndItems,
} as ComponentMeta<typeof MailListEndItems>;

const Template: ComponentStory<typeof MailListEndItems> = (args) => (
  <MailListEndItems {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isHover: false,
  date: '22 июн. 2022 г., 00:22',
};

export const Hover = Template.bind({});
Hover.args = {
  isHover: true,
  date: '22 июн. 2022 г., 00:22',
};
