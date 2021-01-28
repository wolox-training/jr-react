import { ApiResponse } from 'apisauce';
import React from 'react';
import { useHistory } from 'react-router';

import AuthWrapper from '~components/AuthWrapper';
import LoginForm from '~components/LoginForm';
import { KEYS } from '~constants/localStorage';
import { PATHS } from '~constants/paths';
import { apiLogin } from '~services/Auth';
import { ErrorResponse } from '~utils/types';

import { LoginResponse } from './types';


import localStorage from '~services/LocalStorageService';

function Login() {
  const history = useHistory();

  const handleSuccess = (data: ApiResponse<Partial<LoginResponse>, ErrorResponse>) => {
    if (data) {
      // localStorage.setValue(KEYS.token, data.headers.accessToken);
      // history.replace(PATHS.principal);
      // eslint-disable-next-line no-console
    }
    console.log(data);
  };
  return <AuthWrapper service={apiLogin} component={LoginForm} onSuccess={handleSuccess} />;
}

export default Login;
