import React from 'react';
import { render, screen } from '@testing-library/react';

import AuthWrapper from './index';

const mockOnSuccess = jest.fn();
const mockService = jest.fn(data => Promise.resolve(data));

describe('AuthWrapper Component', () => {
  it('Renders successfully', async () => {
    function MockComponent() {
      return <div> search text </div>;
    }

    render(<AuthWrapper component={MockComponent} service={mockService} onSuccess={mockOnSuccess} />);
    expect(await screen.findByText('search text')).toBeInTheDocument();
  });
});
