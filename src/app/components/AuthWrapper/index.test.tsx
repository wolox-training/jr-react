import React from 'react';
import { ApiResponse } from 'apisauce';
import { render, screen } from '@testing-library/react';

import { ErrorResponse } from '~utils/types';

import AuthWrapper from './index';

const mockOnSuccess = jest.fn();
const mockService = (data: string) => new Promise<ApiResponse<any, ErrorResponse>>((resolve, reject) => {});

describe('AuthWrapper Component', () => {
  it('Renders successfully', async () => {
    function MockComponent() {
      return <div> search text </div>;
    }

    render(<AuthWrapper component={MockComponent} service={mockService} onSuccess={mockOnSuccess} />);
    expect(await screen.findByText('search text')).toBeInTheDocument();
  });
});
