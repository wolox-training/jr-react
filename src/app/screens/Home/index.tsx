import React, { useState } from 'react';
import i18next from 'i18next';

import NavBar from '~components/NavBar';
import { useRequest } from '~app/hooks/useRequest';
import { apiBooks } from '~services/Book';
import { ROWS_PAGE } from '~constants/pagination';
import BookList from '~components/BookList';
import AlertMessage from '~components/AlertMessage';

import styles from './styles.module.scss';

function Home() {
  const [state] = useRequest(
    {
      request: apiBooks,
      payload: { limit: ROWS_PAGE }
    },
    []
  );

  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        {state ? (
          <BookList books={state?.page} />
        ) : (
          <AlertMessage type="success" message={i18next.t('Home:emptyBookList')} />
        )}
      </div>
    </div>
  );
}

export default Home;
