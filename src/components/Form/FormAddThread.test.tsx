/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * skenario testing
 *
 * - FormAddThread component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call submitHandler function when Send button is clicked
 */

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormAddThread from '@/components/Form/FormAddThread';
import store from '@/store';

describe('FormAddThread component', () => {
  it('should handle title typing correctly', async () => {
    // arrange
    renderWithContext(<FormAddThread onClose={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Title');

    // action
    await userEvent.type(titleInput, 'title test input');

    // asserts
    expect(titleInput).toHaveValue('title test input');
  });

  it('should handle category typing correctly', async () => {
    // arrange
    renderWithContext(<FormAddThread onClose={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Category');

    // action
    await userEvent.type(categoryInput, 'category test input');

    // asserts
    expect(categoryInput).toHaveValue('category test input');
  });

//   it('should handle body typing correctly', async () => {
//     // arrange
//     renderWithContext(<FormAddThread onClose={() => {}} />);
//     const bodyInput = await screen.getByTitle('body');

//     // action
//     await userEvent.type(bodyInput, 'body test input');

//     // asserts
//     expect(bodyInput).toHaveValue('<p>body test input<p>');
//   });

//   it('should call register function when login button is clicked', async () => {
//     // arrange
//     const mockLogin = jest.fn();
//     renderWithContext(<FormAddThread onClose={mockLogin} />);

//     const nameInput = await screen.getByPlaceholderText('Your name');
//     await userEvent.type(nameInput, 'email test input');

//     const emailInput = await screen.getByPlaceholderText('Your email address');
//     await userEvent.type(emailInput, 'doduoaj@gmail.com');

//     const passwordInput = await screen.getByPlaceholderText('Your password');
//     await userEvent.type(passwordInput, 'Tester24');

//     const confirmPasswordInput = await screen.getByPlaceholderText(
//       'Confirm password'
//     );
//     await userEvent.type(confirmPasswordInput, 'Tester24');

//     const registerButton = await screen.getByRole('button', {
//       name: 'Register',
//     });

//     // action
//     await userEvent.click(registerButton);

//     // asserts
//     expect(mockLogin).toBeCalled();
//   });
});

function renderWithContext(element: React.ReactElement) {
  render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
}
