import React from 'react';
import { render, screen } from '@testing-library/react';

import Alert from './index';

describe('Alert Component', () => {
  it('Renders successfully', () => {
    const { asFragment } = render(<Alert message="Registro exitoso" type="success" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Display the alert on the screen', () => {
    render(<Alert message="Registro exitoso" type="success" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Registro exitoso');
  });

  it('the appearance of the alert changes depending on the type that is defined', () => {
    render(<Alert message="Registro exitoso" type="success" />);
    expect(screen.getByRole('alert')).toHaveClass('success');
  });
});
