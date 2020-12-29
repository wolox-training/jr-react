import React from 'react';
import clsx from 'clsx';
import i18next from 'i18next';

import styles from './styles.module.scss';

interface Props {
  labelText: string;
  type?: string;
  inputRef: (ref: HTMLInputElement) => void;
  name: string;
  errorMessage?: string;
}

function Input({ labelText, type = 'text', inputRef, name, errorMessage = '' }: Props) {
  return (
    <div className={styles.contentInput}>
      <label className={styles.label} htmlFor="">
        {labelText}
      </label>
      <input
        type={type}
        ref={inputRef}
        name={name}
        className={clsx('full-width', styles.input, { 'input-error': errorMessage })}
      />
      {errorMessage && <span className="text-error">{i18next.t(errorMessage)}</span>}
    </div>
  );
}

export default Input;
