import React from 'react';
import { render, screen } from '@testing-library/react';

import AlertMessage from './index';

describe('Component Alert', () => {
  it('Renders successfully', () => {
    const { asFragment } = render(<AlertMessage message="Registro exitoso" type="success" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Display the alert on the screen', () => {
    render(<AlertMessage message="Registro exitoso" type="success" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Registro exitoso');
  });

  it('the appearance of the alert changes depending on the type that is defined', () => {
    render(<AlertMessage message="Registro exitoso" type="success" />);
    expect(screen.getByRole('alert')).toHaveClass('success');
  });
});
