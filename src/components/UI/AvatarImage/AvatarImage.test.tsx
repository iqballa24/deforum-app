/**
 * skenario testing
 *
 * - AvatarImage component
 *   - should render image correctly
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarImage from '@/components/UI/AvatarImage';

test('should render avatar image correctly', () => {
  render(<AvatarImage name="tester" size={24} />);

  const img = screen.getByRole('img');

  expect(img).toBeInTheDocument();
});
