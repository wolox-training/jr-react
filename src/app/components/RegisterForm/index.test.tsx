import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { setInputByLabelText } from '~utils/testUtils';

import RegisterForm from './index';

const I18N_KEYS = {
  firstName: 'Register:firstName',
  lastName: 'Register:lastName',
  email: 'FormAuth:email',
  password: 'FormAuth:password',
  passwordConfirmation: 'Register:passwordConfirmation',
  buttonRegister: 'FormAuth:btnRegister'
};

const USER_TEST = {
  email: 'federico.gomez@test.com',
  firstName: 'Federico',
  lastName: 'Gomez',
  password: 'asdf1234',
  passwordConfirmation: 'asdf1234'
};

const mockOnSubmit = jest.fn();

describe('Register Form Component', () => {
  it('Renders successfully', () => {
    const { asFragment } = render(<RegisterForm onSubmit={mockOnSubmit} isLoading={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('If the form is not completed correctly, it is not sent', async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} isLoading={false} />);

    const buttonRegister = screen.getByRole('button', { name: I18N_KEYS.buttonRegister });

    await waitFor(() => {
      fireEvent.click(buttonRegister);
    });

    const alertErrorShow = 5;
    expect(await screen.findAllByRole('alert')).toHaveLength(alertErrorShow);
    expect(mockOnSubmit).not.toBeCalled();
  });

  test('Successful registration', async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} isLoading={false} />);
    await waitFor(() => {
      setInputByLabelText(I18N_KEYS.firstName, USER_TEST.firstName);
      setInputByLabelText(I18N_KEYS.lastName, USER_TEST.lastName);
      setInputByLabelText(I18N_KEYS.email, USER_TEST.email);
      setInputByLabelText(I18N_KEYS.password, USER_TEST.password);
      setInputByLabelText(I18N_KEYS.passwordConfirmation, USER_TEST.passwordConfirmation);
    });

    const buttonRegister = screen.getByRole('button', { name: I18N_KEYS.buttonRegister });

    await waitFor(() => {
      fireEvent.click(buttonRegister);
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
