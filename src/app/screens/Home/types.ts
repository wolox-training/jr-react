import { Book } from '~utils/types';

export interface BooksResponse {
  count: number;
  currentPage: number;
  nextPage: number;
  page: Book[];
  totalCount: number;
  totalPages: number;
}

export interface BooksPayload {
  limit?: number;
  page?: number;
}
