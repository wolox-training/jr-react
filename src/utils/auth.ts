import { KEYS } from '~constants/localStorage';
import localStorage from '~services/LocalStorageService';

import { AccessHeaders } from './types';

export function isAutenticated(): AccessHeaders {
  return localStorage.getValue(KEYS.accessHeaders);
}

export function saveAccessHeaders(headers: AccessHeaders) {
  localStorage.setValue(KEYS.accessHeaders, headers);
}
