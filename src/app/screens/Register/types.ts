
import { InfoUser } from '~utils/types';

export type RegisterResponse = InfoUser;

export interface RegisterBody extends Omit<InfoUser, 'id'> {
  password: string;
  passwordConfirmation: string;
}