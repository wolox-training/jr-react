import React from 'react';
import { render, screen } from '@testing-library/react';

import AlertComponent from './index';

describe('Component Alert', () => {
  it('Renders successfully', () => {
    const { asFragment } = render(<AlertComponent message="Registro exitoso" type="success" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Display the alert on the screen', () => {
    render(<AlertComponent message="Registro exitoso" type="success" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Registro exitoso');
  });

  it('the appearance of the alert changes depending on the type that is defined', () => {
    render(<AlertComponent message="Registro exitoso" type="success" />);
    expect(screen.getByRole('alert')).toHaveClass('success');
  });
});
