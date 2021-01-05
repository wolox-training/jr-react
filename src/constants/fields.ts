import i18next from 'i18next';

import { User } from '~utils/types';

export const AUTH_FIELDS = {
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  password: 'password',
  passwordConfirmation: 'passwordConfirmation'
};

export const ALERT_TITLES = {
  error: i18next.t('AlertMessage:titleError'),
  success: i18next.t('AlertMessage:titleSuccess'),
  warning: i18next.t('AlertMessage:titleWarning')
};

export const USER_TEST: User = {
  email: 'federico.gomez@test.com',
  firstName: 'Federico',
  lastName: 'Gomez',
  locale: 'es',
  password: 'asdf1234',
  passwordConfirmation: 'asdf1234'
};
