/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import AuthWrapper from '~components/AuthWrapper';
import Input from '~components/Input';
import { emailRegex } from '~utils/inputValidations';
import { AUTH_FIELDS } from '~constants/fields';
import { useLazyRequest } from '~app/hooks/useRequest';
import { apiRegister } from '~services/Auth';
import AlertMessage from '~components/AlertMessage';
import { User } from '~utils/types';

import styles from './styles.module.scss';

function Register() {
  const { register, handleSubmit, errors, formState, watch } = useForm<User>({
    mode: 'all'
  });

  const validatePassword = (passwordConfirmation: string) =>
    passwordConfirmation === watch('password') ? true : 'FormValidations:passwordNotMatch';

  const [state, loading, error, sendRequest] = useLazyRequest({
    request: apiRegister
  });

  const onSubmit = handleSubmit(data => {
    data.locale = i18next.language;
    data.first_name = data.firstName;
    data.last_name = data.lastName;
    data.password_confirmation = data.passwordConfirmation;
    sendRequest(data);
  });

  const getErrorMessage = () => {
    if (!error?.errorData) {
      return '';
    }

    if (error.errorData.status.toString() === '500') {
      return error.errorData.error;
    }
    return error.errorData.errors.full_messages.toString().replaceAll(',', '\n');
  };

  return (
    <AuthWrapper>
      <form className={styles.body} onSubmit={onSubmit}>
        {error?.errorData && <AlertMessage type="error" message={getErrorMessage()} />}

        {state && <AlertMessage type="success" message={i18next.t('Register:messageSuccess')} />}

        <Input
          labelText={i18next.t('Register:firstName')}
          name={AUTH_FIELDS.firstName}
          inputRef={register({
            required: { value: true, message: 'FormValidations:errorRequired' }
          })}
          errorMessage={errors.firstName?.message}
        />

        <Input
          labelText={i18next.t('Register:lastName')}
          name={AUTH_FIELDS.lastName}
          inputRef={register({
            required: { value: true, message: 'FormValidations:errorRequired' }
          })}
          errorMessage={errors.lastName?.message}
        />
        <Input
          labelText={i18next.t('FormAuth:email')}
          name={AUTH_FIELDS.email}
          inputRef={register({
            required: { value: true, message: 'FormValidations:errorRequired' },
            pattern: {
              value: emailRegex,
              message: 'FormValidations:errorEmail'
            }
          })}
          type="email"
          errorMessage={errors.email?.message}
        />
        <Input
          labelText={i18next.t('FormAuth:password')}
          name={AUTH_FIELDS.password}
          inputRef={register({
            required: { value: true, message: 'FormValidations:errorRequired' }
          })}
          type="password"
          errorMessage={errors.password?.message}
        />
        <Input
          labelText={i18next.t('Register:passwordConfirmation')}
          name={AUTH_FIELDS.passwordConfirmation}
          inputRef={register({
            required: { value: true, message: 'FormValidations:errorRequired' },
            validate: validatePassword
          })}
          type="password"
          errorMessage={errors.passwordConfirmation?.message}
        />

        <button type="submit" disabled={!formState.isValid || loading} className="button btn-green">
          {i18next.t('FormAuth:btnRegister')}
        </button>
      </form>
      <div className={styles.footer}>
        <button type="button" className="button btn-white">
          {i18next.t('FormAuth:btnLogin')}
        </button>
      </div>
    </AuthWrapper>
  );
}

export default Register;
