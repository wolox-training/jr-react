/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import Input from '~components/Input';
import { emailRegex } from '~utils/inputValidations';
import { AUTH_FIELDS } from '~constants/fields';
import AlertMessage from '~components/AlertMessage';
import { ContentForm, UserRegister } from '~utils/types';
import { getErrorMessage } from '~utils/errors';

import styles from './styles.module.scss';

function RegisterForm({ onSubmit, statusApi }: ContentForm) {
  const { register, handleSubmit, errors, formState, watch } = useForm<UserRegister>({
    mode: 'all'
  });

  const validatePassword = (passwordConfirmation: string) =>
    passwordConfirmation === watch('password') ? true : 'FormValidations:passwordNotMatch';

  const [state, loading, error] = statusApi;
  return (
    <>
      <form className={styles.body} onSubmit={handleSubmit(onSubmit)}>
        {error?.problem && <AlertMessage type="error" message={getErrorMessage(error)} />}

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
    </>
  );
}

export default RegisterForm;
