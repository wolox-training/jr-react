import i18next from 'i18next';

import api from '~config/api';
import { ErrorResponse, SuccessResponse, UserRegister } from '~utils/types';

export const apiRegister = (data: UserRegister) => {
  data.locale = i18next.language;
  return api.post<SuccessResponse, ErrorResponse>('/users', data);
};

export const apiLogin = (data: UserRegister) =>
  api.post<SuccessResponse, ErrorResponse>('/users/sign_in', JSON.stringify(data));
