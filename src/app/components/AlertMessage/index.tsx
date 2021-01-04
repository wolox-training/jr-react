import React from 'react';

import { getTitleAlert } from '~utils/utils';

import styles from './styles.module.scss';

interface Props {
  message: string;
  type: 'error' | 'success' | 'warning';
}

function AlertMessage({ message, type }: Props) {
  return (
    <div className={`${styles.alertMessage} ${styles[type]}`} role="alert">
      <h2 className={styles.title}>{getTitleAlert(type)}</h2>
      {message}
    </div>
  );
}

export default AlertMessage;
