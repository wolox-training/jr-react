import api from '~config/api';
import { ErrorResponse, SuccessResponse, UserRegister } from '~utils/types';

export const apiRegister = (data: UserRegister) => api.post<SuccessResponse, ErrorResponse>('/users', data);
