import i18next from 'i18next';

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
