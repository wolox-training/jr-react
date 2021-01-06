import React from 'react';

import { ALERT_TITLES } from '~constants/fields';

import styles from './styles.module.scss';

interface Props {
  message: string;
  type: 'error' | 'success' | 'warning';
}

function AlertMessage({ message, type }: Props) {
  return (
    <div className={`${styles.alertMessage} ${styles[type]}`} role="alert" data-testid={`alert-${type}`}>
      <h2 className={styles.title}>{ALERT_TITLES[type]}</h2>
      {message}
    </div>
  );
}

export default AlertMessage;
