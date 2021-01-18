/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import Input from '~components/Input';
import { emailRegex } from '~utils/inputValidations';
import { AUTH_FIELDS } from '~constants/fields';
import { ContentForm } from '~utils/types';
import { LoginBody } from '~screens/Login/types';

import styles from './styles.module.scss';

function LoginForm({ onSubmit, isLoading }: ContentForm) {
  const { register, handleSubmit, errors, formState } = useForm<LoginBody>({
    mode: 'all'
  });

  const submit = handleSubmit(data => {
    onSubmit(data);
  });

  return (
    <>
      <form className={styles.body} onSubmit={submit}>
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
        <button type="submit" disabled={!formState.isValid || isLoading} className="button btn-green">
          {i18next.t('FormAuth:btnLogin')}
        </button>
      </form>
      <div className={styles.footer}>
        <button type="button" className="button btn-white">
          {i18next.t('FormAuth:btnRegister')}
        </button>
      </div>
    </>
  );
}

export default LoginForm;
