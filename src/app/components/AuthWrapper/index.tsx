import React from 'react';
import i18next from 'i18next';

import { useLazyRequest } from '~app/hooks/useRequest';
import { ContentForm, ErrorResponse, Service, UserRegister } from '~utils/types';
import AlertMessage from '~components/AlertMessage';
import { getErrorMessage } from '~utils/errors';

import imageWolox from '../../assets/wolox.svg';

import styles from './styles.module.scss';

interface Props {
  component: React.FC<ContentForm>;
  service: Service<any, ErrorResponse>;
}

function AuthWrapper({ component: RenderComponent, service }: Props) {
  const request = useLazyRequest({
    request: service
  });

  const [state, , error, sendRequest] = request;

  const onSubmit = (data: UserRegister) => {
    data.locale = i18next.language;
    sendRequest(data);
    console.log(data);
  };

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
