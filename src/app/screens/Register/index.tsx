/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import AuthWrapper from '~components/AuthWrapper';
import RegisterForm from '~components/RegisterForm';
import { apiRegister } from '~services/Auth';

function Register() {
  return <AuthWrapper service={apiRegister} component={RegisterForm} />;
}

export default Register;
