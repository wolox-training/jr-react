import i18next from 'i18next';
import React from 'react';
import { useHistory } from 'react-router';

import { KEYS } from '~constants/localStorage';
import { PATHS } from '~constants/paths';
import localStorage from '~services/LocalStorageService';

import imageWolox from '../../assets/wolox.svg';

import styles from './styles.module.scss';

function NavBar() {
  const history = useHistory();

  const logout = () => {
    localStorage.removeValue(KEYS.token);
    history.replace(PATHS.principal);
  };

  return (
    <div className={`row middle shadow ${styles.contentNavbar}`}>
      <div className="item-1 text-left">
        <img src={imageWolox} alt={i18next.t('AltImages:logo') as string} className={styles.logo} />
      </div>
      <div className={`item-1 text-right ${styles.optionsNav}`}>
        <button type="button" className={styles.itemNav} onClick={logout}>
          Salir
        </button>
      </div>
      <div />
    </div>
  );
}

export default NavBar;
