import {  ApiResponse } from 'apisauce';
import React from 'react';

import AuthWrapper from '~components/AuthWrapper';
import RegisterForm from '~components/RegisterForm';
import { apiRegister } from '~services/Auth';
import { ErrorResponse } from '~utils/types';
import { RegisterResponse } from './types';

function Register() {
  const handleSuccess = (data: ApiResponse<RegisterResponse, ErrorResponse>) => {
    if (data && data.ok) {
      console.log(data);
    }
  };

  return <AuthWrapper service={apiRegister} component={RegisterForm} onSuccess={handleSuccess} />;
}

export default Register;
