import React from 'react';
import { ApiResponse } from 'apisauce';
import { render, screen } from '@testing-library/react';

import { LoginResponse } from '~screens/Login/types';
import { ErrorResponse } from '~utils/types';

import AuthWrapper from './index';

describe('AuthWrapper Component', () => {
  it('Renders successfully', async () => {
    const mockOnSuccess = (data: ApiResponse<Partial<LoginResponse>, ErrorResponse>) => {};

    const mockService = (data: string) =>
      new Promise<ApiResponse<any, ErrorResponse>>((resolve, reject) => {});

    function MockComponent() {
      return <div> search text </div>;
    }

    render(<AuthWrapper component={MockComponent} service={mockService} onSuccess={mockOnSuccess} />);
    expect(await screen.findByText('search text')).toBeInTheDocument();
  });
});
