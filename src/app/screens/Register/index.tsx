import React, { useState } from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';
import imageWolox from '../../assets/wolox.svg';
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
    <div className={styles.contentPage}>
      <div className={styles.header}>
        <img src={imageWolox} alt={i18next.t('Register:logoAlt') as string} />
      </div>
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
        <Button text={i18next.t('Register:btnRegister')} disabled={!formState.isValid} />
      </form>
      <div className={styles.footer}>
        <Button text={i18next.t('Register:btnLogin')} className="btnWhite" />
        <button onClick={changeLang} type="button" className={styles.language}>
          {i18next.t('Register:btnLanguage')}
        </button>
      </div>
    </div>
  );
}

export default Register;
