import { ApiResponse } from 'apisauce';
import { Error } from '~app/hooks/useRequest';

export type Nullable<T> = T | null;

interface InfoUser{
  email: string;
  firstName: string;
  lastName: string;
  locale: string;
}

export interface UserRegister extends InfoUser{
  password: string;
  passwordConfirmation: string;
}

export interface SuccessResponse extends InfoUser{
  id: number;
}
export interface ErrorResponse {
  error: string;
  errors: {
    fullMessages: Array<string>;
  };
  status: string;
}

export type LazyRequest<D, E, P> = [Nullable<D> | unknown, boolean, Nullable<Error<E>>, (params: P) => void];

export interface ContentForm {
  onSubmit: (data: UserRegister) => void;
  request: LazyRequest<SuccessResponse, ErrorResponse, UserRegister>;
}

export type Service<Data, Error> = (data: Data) => Promise<ApiResponse<unknown, Error>>;