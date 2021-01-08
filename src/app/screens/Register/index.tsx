/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import i18next from 'i18next';

import AuthWrapper from '~components/AuthWrapper';
import { UserRegister } from '~utils/types';
import RegisterForm from '~components/RegisterForm';
import { useLazyRequest } from '~app/hooks/useRequest';
import { apiRegister } from '~services/Auth';

function Register() {
  const statusApi = useLazyRequest({
    request: apiRegister
  });

  const sendRequestPosition = 3;
  const sendRequest = statusApi[sendRequestPosition];

  const onSubmit = (data: UserRegister) => {
    data.locale = i18next.language;
    console.log(data);
    sendRequest(data);
  };
  return (
    <AuthWrapper>
      <RegisterForm onSubmit={onSubmit} statusApi={[...statusApi]} />
    </AuthWrapper>
  );
}

export default Register;
