import React, { useState } from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import AuthWrapper from '~components/AuthWrapper';

import Input from '../../components/Input';
import { emailRegex } from '../../../utils/inputValidations';

import styles from './styles.module.scss';

interface DataForm {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
  locale: string;
}

function Register() {
  const { register, handleSubmit, errors, formState, watch } = useForm<DataForm>({
    mode: 'all'
  });

  const [language, setLanguage] = useState(i18next.language);

  const submitForm = (data: DataForm) => {
    data.locale = language;
    const user = {
      user: data
    };
    console.log(user);
  };

  const validatePassword = (passwordConfirmation: string) =>
    passwordConfirmation === watch('password') ? true : 'Register:passwordNotMatch';

  const changeLang = () => {
    const translationTo = i18next.language === 'es' ? 'en' : 'es';

    i18next.changeLanguage(translationTo, () => {
      setLanguage(i18next.language);
    });
  };

  return (
    <AuthWrapper>
      <form className={styles.body} onSubmit={handleSubmit(submitForm)}>
        <Input
          labelText={i18next.t('Register:firstName')}
          name="firstName"
          inputRef={register({
            required: { value: true, message: 'Register:errorRequired' }
          })}
          errorMessage={errors.firstName?.message && (i18next.t(errors.firstName?.message) as string)}
        />

        <Input
          labelText={i18next.t('Register:lastName')}
          name="lastName"
          inputRef={register({
            required: { value: true, message: 'Register:errorRequired' }
          })}
          errorMessage={errors.lastName?.message && (i18next.t(errors.lastName?.message) as string)}
        />
        <Input
          labelText={i18next.t('Register:email')}
          name="email"
          inputRef={register({
            required: { value: true, message: 'Register:errorRequired' },
            pattern: {
              value: emailRegex,
              message: 'Register:errorEmail'
            }
          })}
          type="email"
          errorMessage={errors.email?.message && (i18next.t(errors.email?.message) as string)}
        />
        <Input
          labelText={i18next.t('Register:password')}
          name="password"
          inputRef={register({
            required: { value: true, message: 'Register:errorRequired' }
          })}
          type="password"
          errorMessage={errors.password?.message && (i18next.t(errors.password?.message) as string)}
        />
        <Input
          labelText={i18next.t('Register:passwordConfirmation')}
          name="passwordConfirmation"
          inputRef={register({
            required: { value: true, message: 'Register:errorRequired' },
            validate: value => validatePassword(value)
          })}
          type="password"
          errorMessage={
            errors.passwordConfirmation?.message &&
            (i18next.t(errors.passwordConfirmation?.message) as string)
          }
        />

        <button type="submit" disabled={!formState.isValid} className="btn-structure btn-green">
          {i18next.t('Register:btnRegister')}
        </button>
      </form>
      <div className={styles.footer}>
        <button type="button" className="btn-structure btn-white">
          {i18next.t('Register:btnLogin')}
        </button>
        <button onClick={changeLang} type="button" className={styles.language}>
          {i18next.t('Register:btnLanguage')}
        </button>
      </div>
    </AuthWrapper>
  );
}

export default Register;
