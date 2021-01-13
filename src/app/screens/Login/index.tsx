import React from 'react';

import { Success } from '~app/hooks/useRequest';
import AuthWrapper from '~components/AuthWrapper';
import LoginForm from '~components/LoginForm';
import { apiLogin } from '~services/Auth';
import { SuccessResponse } from '~utils/types';

function Login() {
  const success: Success<SuccessResponse> = data => {
    if (data) {
      console.log(data.headers.accessToken);
    }
  };
  return <AuthWrapper service={apiLogin} component={LoginForm} success={success} />;
}

export default Login;
