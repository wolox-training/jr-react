import { Error } from '~app/hooks/useRequest';

import { ErrorResponse } from './types';

export const getErrorMessage = (error: Error<ErrorResponse>) => {
  if (!error?.problem) {
    return '';
  }

  if (error.problem === 'CLIENT_ERROR' && error.errorData) {
    if (error.errorData.errors) {
      if (Array.isArray(error.errorData.errors)) {
        return error.errorData.errors.toString().replaceAll(',', '\n');
      }
    }

    if (error.errorData.errors.fullMessages && Array.isArray(error.errorData.errors.fullMessages)) {
      return error.errorData.errors.fullMessages.toString().replaceAll(',', '\n');
    }

    return error.errorData.error;
  }

  return error.problem;
};
