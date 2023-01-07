/**
 * skenario testing
 *
 * - label component
 *  - should render label component correctly
 *
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from '@/components/UI/Label';

test('should render label component correctly', async() => {
  render(<Label category="react" />);

  const label = await screen.getByText('react');

  expect(label).toBeInTheDocument();
});
