import api from '~config/api';
import { User } from '~utils/types';

interface ErrorResponse {
  error: string;
  errors: {
    full_messages: Array<string>;
  };
  status: string;
}

export const apiRegister = (data: User) => api.post<unknown, ErrorResponse>('/users', data);
