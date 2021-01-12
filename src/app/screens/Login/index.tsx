import React from 'react';

import AuthWrapper from '~components/AuthWrapper';
import LoginForm from '~components/LoginForm';
import { apiLogin } from '~services/Auth';

function Login() {
  return <AuthWrapper service={apiLogin} component={LoginForm} />;
}

export default Login;
