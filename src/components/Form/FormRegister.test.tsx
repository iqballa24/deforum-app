/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * skenario testing
 *
 * - FormRegister component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should handle confirmation password typing correctly
 *   - should call submitHandler function when Register button is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormRegister from '@/components/Form/FormRegister';

describe('FormRegister component', () => {
  it('should handle name typing correctly', async () => {
    // arrange
    render(<FormRegister submitHandler={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Your name');

    // action
    await userEvent.type(nameInput, 'email test input');

    // asserts
    expect(nameInput).toHaveValue('email test input');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<FormRegister submitHandler={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Your email address');

    // action
    await userEvent.type(emailInput, 'email test input');

    // asserts
    expect(emailInput).toHaveValue('email test input');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<FormRegister submitHandler={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Your password');

    // action
    await userEvent.type(passwordInput, 'password test input');

    // asserts
    expect(passwordInput).toHaveValue('password test input');
  });

  it('should handle confirmation password typing correctly', async () => {
    // arrange
    render(<FormRegister submitHandler={() => {}} />);
    const confirmPasswordInput = await screen.getByPlaceholderText('Confirm password');

    // action
    await userEvent.type(confirmPasswordInput, 'password test input');

    // asserts
    expect(confirmPasswordInput).toHaveValue('password test input');
  });

  it('should call register function when login button is clicked', async () => {
    // arrange
    const mockLogin = jest.fn();
    render(<FormRegister submitHandler={mockLogin} />);

    const nameInput = await screen.getByPlaceholderText('Your name');
    await userEvent.type(nameInput, 'email test input');

    const emailInput = await screen.getByPlaceholderText('Your email address');
    await userEvent.type(emailInput, 'doduoaj@gmail.com');

    const passwordInput = await screen.getByPlaceholderText('Your password');
    await userEvent.type(passwordInput, 'Tester24');

    const confirmPasswordInput = await screen.getByPlaceholderText('Confirm password');
    await userEvent.type(confirmPasswordInput, 'Tester24');

    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // action
    await userEvent.click(registerButton);

    // asserts
    expect(mockLogin).toBeCalled();
  });
});
