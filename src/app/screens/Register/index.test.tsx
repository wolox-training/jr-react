import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';

import { setInputByLabelText } from '~utils/testUtils';
import { server } from '~mocks/servers';

import Register from './index';

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

describe('Screen Register', () => {
  it('Renders successfully', () => {
    const { asFragment } = render(<Register />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('If the form is not completed correctly, it is not sent', async () => {
    const mockSave = jest.fn();

    render(<Register mockFunction={mockSave} />);

    const buttonRegister = screen.getByRole('button', { name: I18N_KEYS.buttonRegister });
    fireEvent.click(buttonRegister);

    const alertErrorShow = 5;
    expect(await screen.findAllByRole('alert')).toHaveLength(alertErrorShow);
    expect(mockSave).not.toBeCalled();
  });

  test('Successful registration', async () => {
    render(<Register />);

    setInputByLabelText(I18N_KEYS.firstName, USER_TEST.firstName);
    setInputByLabelText(I18N_KEYS.lastName, USER_TEST.lastName);
    setInputByLabelText(I18N_KEYS.email, USER_TEST.email);
    setInputByLabelText(I18N_KEYS.password, USER_TEST.password);
    setInputByLabelText(I18N_KEYS.passwordConfirmation, USER_TEST.passwordConfirmation);

    const buttonRegister = screen.getByRole('button', { name: I18N_KEYS.buttonRegister });
    fireEvent.click(buttonRegister);

    await waitFor(() => screen.getByTestId('alert-success'));

    expect(screen.getByTestId('alert-success')).toBeInTheDocument();
  });

  test('Internal server error', async () => {
    server.use(
      rest.post('/users', (req, res, ctx) => {
        const ERROR_CODE = 500;
        return res(ctx.status(ERROR_CODE));
      })
    );

    render(<Register />);
    setInputByLabelText(I18N_KEYS.firstName, USER_TEST.firstName);
    setInputByLabelText(I18N_KEYS.lastName, USER_TEST.lastName);
    setInputByLabelText(I18N_KEYS.email, USER_TEST.email);
    setInputByLabelText(I18N_KEYS.password, USER_TEST.password);
    setInputByLabelText(I18N_KEYS.passwordConfirmation, USER_TEST.passwordConfirmation);

    const buttonRegister = screen.getByRole('button', { name: I18N_KEYS.buttonRegister });
    fireEvent.click(buttonRegister);

    await waitFor(() => screen.getByTestId('alert-error'));

    expect(screen.getByTestId('alert-error')).toBeInTheDocument();
  });
});
