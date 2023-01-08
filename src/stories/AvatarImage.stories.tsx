import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AvatarImage from '../components/UI/AvatarImage';

export default {
  title: 'AvatarImage',
  component: AvatarImage,
} as ComponentMeta<typeof AvatarImage>;

const Template: ComponentStory<typeof AvatarImage> = (args) => (
  <AvatarImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Iqbal Nugraha',
  size: 36,
};
