import { InfoUser } from '~utils/types';

export interface LoginResponse {
  data: {
    allowPasswordChange: boolean;
    provider: string;
    uid: string;
  } & InfoUser;
}

export interface LoginBody {
  email: string;
  password: string;
}
