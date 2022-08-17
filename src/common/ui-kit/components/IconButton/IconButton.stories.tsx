import { IconButton } from './IconButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EmailOutlined } from '@mui/icons-material';

export default {
  title: 'UI-kit/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <EmailOutlined />
  </IconButton>
);

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
};

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
};
