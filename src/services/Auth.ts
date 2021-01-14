import i18next from 'i18next';

import api from '~config/api';
import { LoginBody, LoginResponse } from '~screens/Login/types';
import { RegisterBody, RegisterResponse } from '~screens/Register/types';
import { ErrorResponse } from '~utils/types';

export const apiRegister = (data: RegisterBody) => {
  data.locale = i18next.language;

  // TODO: Type this exact type (SuccessResponse)
  return api.post<RegisterResponse, ErrorResponse>('/users', data);
};

export const apiLogin = (data: LoginBody) =>
// TODO: Type this exact type (SuccessResponse)
  api.post<LoginResponse, ErrorResponse>('/users/sign_in', data);
