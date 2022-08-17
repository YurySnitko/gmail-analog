import MailListItem from './MailListItem';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/MailItem',
  component: MailListItem,
} as ComponentMeta<typeof MailListItem>;

const Template: ComponentStory<typeof MailListItem> = (args) => (
  <MailListItem
    {...args}
    senderName={'Notification Innowise'}
    title={'Introducing Table Visualization'}
    text={"Say hello to dynamic charts, Confluence's new integration"}
    date={'22 июн. 2022 г., 00:22'}
  />
);

export const Normal = Template.bind({});
Normal.args = {
  isViewed: false,
  isChecked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  isViewed: false,
  isChecked: true,
};

export const Viewed = Template.bind({});
Viewed.args = {
  isViewed: true,
  isChecked: false,
};
