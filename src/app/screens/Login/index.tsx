import { ApiResponse } from 'apisauce';
import React from 'react';
import { useHistory } from 'react-router';

import AuthWrapper from '~components/AuthWrapper';
import LoginForm from '~components/LoginForm';
import { PATHS } from '~constants/paths';
import { apiLogin } from '~services/Auth';
import { ErrorResponse } from '~utils/types';

import { LoginResponse } from './types';

function Login() {
  const history = useHistory();

  const handleSuccess = (data: ApiResponse<Partial<LoginResponse>, ErrorResponse>) => {
    if (data) {
      history.replace(PATHS.principal);
    }
  };
  return <AuthWrapper service={apiLogin} component={LoginForm} onSuccess={handleSuccess} saveToken />;
}

export default Login;
