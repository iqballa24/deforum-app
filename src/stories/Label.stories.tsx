import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Label from '../components/UI/Label';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = { category: 'React' };
