import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

interface Props {
  message: string;
  type: 'error' | 'success' | 'warning';
}

function AlertMessage({ message, type }: Props) {
  const getTitle = () => {
    switch (type) {
      case 'error':
        return i18next.t('AlertMessage:titleError');
      case 'success':
        return i18next.t('AlertMessage:titleSuccess');
      case 'warning':
        return i18next.t('AlertMessage:titleWarning');
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.alertMessage} ${styles[type]}`} role="alert">
      <div className={styles.title}>{getTitle()}</div>
      {message}
    </div>
  );
}

export default AlertMessage;
