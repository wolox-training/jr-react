import React from 'react';
import { useHistory } from 'react-router';

import { Success } from '~app/hooks/useRequest';
import AuthWrapper from '~components/AuthWrapper';
import LoginForm from '~components/LoginForm';
import { KEYS } from '~constants/localStorage';
import { PATHS } from '~constants/paths';
import { apiLogin } from '~services/Auth';
import localStorage from '~services/LocalStorageService';
import { SuccessResponse } from '~utils/types';

function Login() {
  const history = useHistory();

  const success: Success<SuccessResponse> = data => {
    if (data && data.headers.accessToken) {
      localStorage.setValue(KEYS.token, data.headers.accessToken);
      history.replace(PATHS.principal);
    }
  };

  return <AuthWrapper service={apiLogin} component={LoginForm} success={success} />;
}

export default Login;
