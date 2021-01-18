import { LoginBody } from '~screens/Login/types';
import { RegisterBody } from '~screens/Register/types';

export type Nullable<T> = T | null;

export interface InfoUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  locale: string;
}

export interface ErrorResponse {
  error: string;
  errors: {
    fullMessages: Array<string>;
  };
  status: string;
}

export interface ContentForm {
  onSubmit: (data: LoginBody | RegisterBody) => void;
  isLoading: boolean;
}

export interface Login {
  email: string;
  password: string;
}
