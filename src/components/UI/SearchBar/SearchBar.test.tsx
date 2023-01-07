/**
 * Skenario testing
 *
 * - Searchbar component
 *  - should render search component correctly
 *  - should handle search typing correctly
 *
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import SearchBar from '@/components/UI/SearchBar';

describe('Searchbar component', () => {
  it('should render search component correctly', async () => {
    render(<SearchBar onSearchHandler={() => jest.fn()} value="" />);

    const search = await screen.getByPlaceholderText('Search for a title...');

    expect(search).toBeInTheDocument();
  });

  it('should handle search typing correctly', async () => {
    render(<SearchBar onSearchHandler={() => jest.fn()} value="" />);
    const search = await screen.getByPlaceholderText('Search for a title...');

    await userEvent.type(search, 'search test input');

    expect(search).toHaveValue('search test input');
  });
});
