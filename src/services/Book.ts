import i18next from 'i18next';

import api from '~config/api';
import { BooksPayload, BooksResponse } from '~screens/Home/types';
import { ErrorResponse } from '~utils/types';

export const apiBooks = (payload: BooksPayload) => api.get<BooksResponse, ErrorResponse>('/books', payload);
