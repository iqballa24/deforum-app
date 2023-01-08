import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/UI/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Button',
  type: 'button',
  children: 'Button',
  isPrimary: true,
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  title: 'Button',
  type: 'button',
  children: 'Button',
  isDanger: true,
  disabled: false,
};
