import { KEYS } from '~constants/localStorage';
import localStorage from '~services/LocalStorageService';

export function isAutenticated() {
  return localStorage.getValue(KEYS.token);
}
