/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * skenario testing
 *
 * - FormLogin component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormLogin from '@/components/Form/FormLogin';

describe('FormLogin component', () => {
  it('should handle email typing correctly', async () => {
    // arrange
    render(<FormLogin submitHandler={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Your email address');

    // action
    await userEvent.type(emailInput, 'email test input');

    // asserts
    expect(emailInput).toHaveValue('email test input');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<FormLogin submitHandler={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Your password');

    // action
    await userEvent.type(passwordInput, 'password test input');

    // asserts
    expect(passwordInput).toHaveValue('password test input');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = jest.fn();
    render(<FormLogin submitHandler={mockLogin} />);

    const emailInput = await screen.getByPlaceholderText('Your email address');
    await userEvent.type(emailInput, 'doduoaj@gmail.com');

    const passwordInput = await screen.getByPlaceholderText('Your password');
    await userEvent.type(passwordInput, 'Tester24');

    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // action
    await userEvent.click(loginButton);

    // asserts
    expect(mockLogin).toBeCalled();
  });
});
