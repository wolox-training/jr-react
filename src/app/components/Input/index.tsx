import React from 'react';

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
      <label htmlFor="">{labelText}</label>
      <input type={type} ref={inputRef} name={name} className={errorMessage ? 'input-error' : ''} />
      {errorMessage && <span className="text-error">{errorMessage}</span>}
    </div>
  );
}

export default Input;
