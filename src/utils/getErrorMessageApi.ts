import { Error } from '~app/hooks/useRequest';
import { ErrorResponse } from '~services/Auth';

export const getErrorMessage = (error: Error<ErrorResponse>) => {
  if (!error?.problem) {
    return '';
  }

  if (error.problem === 'CLIENT_ERROR' && error.errorData) {
    return error.errorData.errors.fullMessages.toString().replaceAll(',', '\n');
  }

  return error.problem;
};
