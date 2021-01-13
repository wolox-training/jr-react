import React from 'react';
import i18next from 'i18next';

import { Success, useLazyRequest } from '~app/hooks/useRequest';
import { ContentForm, ErrorResponse, Service, SuccessResponse, UserRegister } from '~utils/types';
import AlertMessage from '~components/AlertMessage';
import { getErrorMessage } from '~utils/errors';

import imageWolox from '../../assets/wolox.svg';

import styles from './styles.module.scss';

interface Props {
  component: React.FC<ContentForm>;
  service: Service<UserRegister, ErrorResponse>;
  success?: Success<SuccessResponse>;
}

function AuthWrapper({ component: RenderComponent, service, success }: Props) {
  const request = useLazyRequest<UserRegister, SuccessResponse, ErrorResponse>({
    request: service,
    withPostSuccess: success
  });

  const [state, , error, sendRequest] = request;

  function onSubmit(data: UserRegister) {
    sendRequest(data);
  }

  return (
    <div className={styles.contentPage}>
      <div className={styles.header}>
        <img
          className={`${styles.imgLogo} full-width`}
          src={imageWolox}
          alt={i18next.t('AuthWrapper:logoAlt') as string}
        />
      </div>

      {error?.problem && <AlertMessage type="error" message={getErrorMessage(error)} />}

      {state && <AlertMessage type="success" message={i18next.t('Register:messageSuccess')} />}

      <RenderComponent onSubmit={onSubmit} request={request} />
    </div>
  );
}

export default AuthWrapper;
