import React from 'react';
import i18next from 'i18next';

import imageWolox from '../../assets/wolox.svg';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

function AuthWrapper({ children = null }: Props) {
  return (
    <div className={styles.contentPage}>
      <div className={styles.header}>
        <img
          className={`${styles.imgLogo} full-width`}
          src={imageWolox}
          alt={i18next.t('AuthWrapper:logoAlt') as string}
        />
      </div>
      {children}
    </div>
  );
}

export default AuthWrapper;
