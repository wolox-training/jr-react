import React from 'react';

import styles from './styles.module.scss';

interface Props {
  text: string;
  className?: 'btnGreen' | 'btnWhite';
  disabled?: boolean;
}

function Button({ text, className = 'btnGreen', disabled = false }: Props) {
  if (!styles[className]) {
    return <p>Button type not exist</p>;
  }

  return (
    <button className={`${styles.btnStructure} ${styles[className]}`} disabled={disabled} type="submit">
      {text}
    </button>
  );
}

export default Button;
