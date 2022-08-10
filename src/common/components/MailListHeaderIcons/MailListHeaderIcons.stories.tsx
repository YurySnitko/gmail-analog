import MailListHeaderIcons from './MailListHeaderIcons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/MailListHeaderIcons',
  component: MailListHeaderIcons,
} as ComponentMeta<typeof MailListHeaderIcons>;

const Template: ComponentStory<typeof MailListHeaderIcons> = (args) => (
  <MailListHeaderIcons {...args} />
);

export const HasSelectedItems = Template.bind({});
HasSelectedItems.args = {
  selectedMailsIds: ['1'],
};

export const NotSelectedItems = Template.bind({});
NotSelectedItems.args = {
  selectedMailsIds: [],
};
