import React from 'react';

import { Book } from '~utils/types';

import styles from './styles.module.scss';

interface Props {
  books: Book[];
}

function BookList({ books }: Props) {
  return (
    <div className={styles.grid}>
      {books.map(book => (
        <div key={book.id} className={`${styles.item} shadow`}>
          <img src={book.imageUrl} alt={book.author} className={styles.image} />
          <p className={`${styles.title} m-top-2`}>{book.title}</p>
          <p className={`${styles.author} m-top-2`}>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
