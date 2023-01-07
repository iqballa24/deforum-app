/**
 * Skenario testing
 *
 * - Button component
 *  - should render button correctly
 *  - should have attribut disabled when passed disabled props
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '@/components/UI/Button';

describe('button component', () => {
  it('should render button correctly', () => {
    render(
      <Button title="tester" type="button" onClick={() => jest.fn()}>
        Tester
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Tester' });

    expect(button).toBeInTheDocument();
  });

  it('should have attribut disabled when passed disabled props', () => {
    render(
      <Button title="tester" type="button" onClick={() => jest.fn()} disabled>
        Tester
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Tester' });

    expect(button).toBeDisabled();
  });
});
