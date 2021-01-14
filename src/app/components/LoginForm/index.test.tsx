import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { setInputByLabelText } from '~utils/testUtils';

import LoginForm from './index';

const I18N_KEYS = {
  email: 'FormAuth:email',
  password: 'FormAuth:password',
  buttonLogin: 'FormAuth:btnLogin'
};

const USER_TEST = {
  email: 'federico.gomez@test.com',
  password: 'asdf1234'
};

const mockOnSubmit = jest.fn();
describe('Login Form Component', () => {
  it('Renders successfully', () => {
    const { asFragment } = render(<LoginForm onSubmit={mockOnSubmit} isLoading={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('If the form is not completed correctly, it is not sent', async () => {
    render(<LoginForm onSubmit={mockOnSubmit} isLoading={false} />);

    const buttonLogin = screen.getByRole('button', { name: I18N_KEYS.buttonLogin });

    await waitFor(() => {
      fireEvent.click(buttonLogin);
    });

    const alertErrorShow = 2;
    expect(await screen.findAllByRole('alert')).toHaveLength(alertErrorShow);
    expect(mockOnSubmit).not.toBeCalled();
  });

  test('Successful login', async () => {
    render(<LoginForm onSubmit={mockOnSubmit} isLoading={false} />);
    await waitFor(() => {
      setInputByLabelText(I18N_KEYS.email, USER_TEST.email);
      setInputByLabelText(I18N_KEYS.password, USER_TEST.password);
    });

    const buttonLogin = screen.getByRole('button', { name: I18N_KEYS.buttonLogin });

    await waitFor(() => {
      fireEvent.click(buttonLogin);
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
