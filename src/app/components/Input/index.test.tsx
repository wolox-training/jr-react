import React from 'react';
import { render, screen } from '@testing-library/react';

import { setInputByLabelText } from '~utils/testUtils';

import InputComponent from './index';

describe('Component Alert', () => {
  it('Renders successfully', () => {
    const { asFragment } = render(
      <InputComponent labelText="Nombre" inputRef={input => input} name="firstName" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('If an error message is sent, it is displayed on the screen', () => {
    render(
      <InputComponent labelText="Email" inputRef={input => input} name="email" errorMessage="invalid email" />
    );
    expect(screen.getByRole('alert')).toHaveTextContent('invalid email');
  });

  it('the input allows to be edited by the user', () => {
    render(
      <InputComponent labelText="Email" inputRef={input => input} name="email" errorMessage="invalid email" />
    );
    setInputByLabelText('Email', 'example@gmail.com');
    expect(screen.getByLabelText('Email')).toHaveValue('example@gmail.com');
  });
});
