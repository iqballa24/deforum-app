import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from '../components/UI/SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
Default.args = { value: '' };
