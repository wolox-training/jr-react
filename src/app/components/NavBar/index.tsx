import i18next from 'i18next';
import React from 'react';

import imageWolox from '../../assets/wolox.svg';

import styles from './styles.module.scss';

function NavBar() {
  return (
    <div className={`row middle shadow ${styles.contentNavbar}`}>
      <div className="item-1 text-center">
        <img src={imageWolox} alt={i18next.t('AltImages:logo') as string} className={styles.logo} />
      </div>
      <div className={`item-1 text-right ${styles.optionsNav}`}>
        <button type="button" className={styles.itemNav}>
          Salir
        </button>
      </div>
      <div />
    </div>
  );
}

export default NavBar;
