import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { AUTH_FIELDS, USER_TEST } from '~constants/fields';

import Register from './index';

const setInputByRole = (name: string, value: string) => {
  fireEvent.input(screen.getByRole('textbox', { name }), {
    target: {
      value
    }
  });
};

const setInputByLabelText = (name: string, value: string) => {
  fireEvent.input(screen.getByLabelText(name), {
    target: {
      value
    }
  });
};

const server = setupServer(rest.post('/users', (req, res, ctx) => res(ctx.json({ data: req.body }))));

describe('Register Form', () => {
  beforeAll(() => server.listen());
  beforeEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Render', async () => {
    await render(<Register />);
    expect(screen.getByRole('textbox', { name: AUTH_FIELDS.firstName })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: AUTH_FIELDS.lastName })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: AUTH_FIELDS.email })).toBeInTheDocument();
    expect(screen.getByLabelText(AUTH_FIELDS.password)).toBeInTheDocument();
    expect(screen.getByLabelText(AUTH_FIELDS.passwordConfirmation)).toBeInTheDocument();

    const buttonRegister = screen.getByRole('button', { name: 'Register' });
    expect(buttonRegister).toHaveAttribute('disabled');
  });

  it('Required fields', async () => {
    await render(<Register />);
    setInputByRole(AUTH_FIELDS.firstName, '');
    setInputByRole(AUTH_FIELDS.lastName, '');
    setInputByRole(AUTH_FIELDS.email, '');
    setInputByLabelText(AUTH_FIELDS.password, '');
    setInputByLabelText(AUTH_FIELDS.passwordConfirmation, '');

    const buttonRegister = screen.getByRole('button', { name: 'Register' });
    expect(buttonRegister).toHaveAttribute('disabled', '');

    const alertErrorShow = 5;
    expect(await screen.findAllByRole('alert')).toHaveLength(alertErrorShow);
  });

  it('Field validation', async () => {
    await render(<Register />);
    setInputByRole(AUTH_FIELDS.email, 'name');
    setInputByLabelText(AUTH_FIELDS.password, 'asdf');
    setInputByLabelText(AUTH_FIELDS.passwordConfirmation, 'fdsa');

    const buttonRegister = screen.getByRole('button', { name: 'Register' });
    expect(buttonRegister).toHaveAttribute('disabled', '');

    const alertErrorShow = 2;
    expect(await screen.findAllByRole('alert')).toHaveLength(alertErrorShow);
  });

  it('Form filled out without errors', async () => {
    await render(<Register />);
    setInputByRole(AUTH_FIELDS.firstName, USER_TEST.firstName);
    setInputByRole(AUTH_FIELDS.lastName, USER_TEST.lastName);
    setInputByRole(AUTH_FIELDS.email, USER_TEST.email);
    setInputByLabelText(AUTH_FIELDS.password, USER_TEST.password);
    setInputByLabelText(AUTH_FIELDS.passwordConfirmation, USER_TEST.passwordConfirmation);

    const buttonRegister = screen.getByRole('button', { name: 'Register' });
    expect(buttonRegister).not.toHaveAttribute('disabled', false);
  });

  test('Successful registration', async () => {
    render(<Register />);
    setInputByRole(AUTH_FIELDS.firstName, USER_TEST.firstName);
    setInputByRole(AUTH_FIELDS.lastName, USER_TEST.lastName);
    setInputByRole(AUTH_FIELDS.email, USER_TEST.email);
    setInputByLabelText(AUTH_FIELDS.password, USER_TEST.password);
    setInputByLabelText(AUTH_FIELDS.passwordConfirmation, USER_TEST.passwordConfirmation);

    const buttonRegister = screen.getByRole('button', { name: 'Register' });
    fireEvent.click(buttonRegister);

    await waitFor(() => screen.getByRole('alert', { name: 'success' }));

    expect(screen.getByRole('alert', { name: 'success' })).toBeInTheDocument();
  });

  test('Internal server error', async () => {
    server.use(
      rest.post('/users', (req, res, ctx) => {
        const ERROR_CODE = 500;
        return res(ctx.status(ERROR_CODE));
      })
    );

    render(<Register />);
    setInputByRole(AUTH_FIELDS.firstName, USER_TEST.firstName);
    setInputByRole(AUTH_FIELDS.lastName, USER_TEST.lastName);
    setInputByRole(AUTH_FIELDS.email, USER_TEST.email);
    setInputByLabelText(AUTH_FIELDS.password, USER_TEST.password);
    setInputByLabelText(AUTH_FIELDS.passwordConfirmation, USER_TEST.passwordConfirmation);

    const buttonRegister = screen.getByRole('button', { name: 'Register' });
    fireEvent.click(buttonRegister);

    await waitFor(() => screen.getByRole('alert', { name: 'error' }));

    expect(screen.getByRole('alert', { name: 'error' })).toBeInTheDocument();
  });
});
