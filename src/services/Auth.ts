import api from '~config/api';
import { ErrorResponse, UserRegister } from '~utils/types';

export const apiRegister = (data: UserRegister) => api.post<unknown, ErrorResponse>('/users', data);
