/**
 * Skenario testing
 *
 * - EmptyState component
 *  - should contain title text correctly
 *  - should contain paragraph text correctly
 */

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import EmptyState from '@/components/UI/EmptyState';
import store from '@/store';

describe('EmptyState component', () => {
  it('should contain title text correctly', () => {
    const { language } = store.getState().ui;
    const titleState = 'tester';
    renderWithContext(<EmptyState titleState={titleState} />);

    const title =
      language === 'id'
        ? `Anda belum memiliki ${titleState} apapun`
        : `You hasn't ${titleState} anything`;
    const emptyState = screen.getByText(title);

    expect(emptyState).toBeInTheDocument();
  });

  it('should contain paragraph text correctly', () => {
    const { language } = store.getState().ui;
    const titleState = 'tester';
    renderWithContext(<EmptyState titleState={titleState} />);

    const paragraph =
      language === 'id'
        ? `Ketika Anda melakukannya, ${titleState} Anda akan muncul di sini.`
        : `When you do, your ${titleState} will show up here.`;
    const emptyState = screen.getByText(paragraph);

    expect(emptyState).toBeInTheDocument();
  });
});

function renderWithContext(element: React.ReactElement) {
  render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
}
