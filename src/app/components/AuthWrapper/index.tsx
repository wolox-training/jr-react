import React from 'react';
import i18next from 'i18next';
import { ApiResponse } from 'apisauce';

import { useLazyRequest } from '~app/hooks/useRequest';
import { ContentForm, ErrorResponse } from '~utils/types';
import { LoginBody } from '~screens/Login/types';
import { RegisterBody } from '~screens/Register/types';
import AlertMessage from '~components/AlertMessage';
import { getErrorMessage } from '~utils/errors';

import imageWolox from '../../assets/wolox.svg';

import styles from './styles.module.scss';

interface Props {
  component: React.FC<ContentForm>;
  service: (payload: any) => Promise<ApiResponse<any, ErrorResponse>>;
  onSuccess: (response: ApiResponse<any, ErrorResponse>) => void;
}

function AuthWrapper({ component: RenderComponent, service, onSuccess }: Props) {
  const [state, isLoading, error, sendRequest] = useLazyRequest({
    request: service,
    withPostFetch: onSuccess
  });

  const onSubmit = (data: LoginBody | RegisterBody) => {
    sendRequest(data);
  }

  return (
    <div className={styles.contentPage}>
      <div className={styles.header}>
        <img
          className={`${styles.imgLogo} full-width`}
          src={imageWolox}
          alt={i18next.t('AltImages:logo') as string}
        />
      </div>
      {error?.problem && <AlertMessage type="error" message={getErrorMessage(error)} />}
      {state && <AlertMessage type="success" message={i18next.t('Register:messageSuccess')} />}
      <RenderComponent onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
}

export default AuthWrapper;
