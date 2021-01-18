import { ApiResponse } from 'apisauce';
import React from 'react';

import AuthWrapper from '~components/AuthWrapper';
import LoginForm from '~components/LoginForm';
import { apiLogin } from '~services/Auth';
import { ErrorResponse } from '~utils/types';

import { LoginResponse } from './types';

function Login() {
  const handleSuccess = (data: ApiResponse<Partial<LoginResponse>, ErrorResponse>) => {
    if (data && data.ok) {
      // eslint-disable-next-line no-console
      console.log(data);
    }
  };
  return <AuthWrapper service={apiLogin} component={LoginForm} onSuccess={handleSuccess} />;
}

export default Login;
