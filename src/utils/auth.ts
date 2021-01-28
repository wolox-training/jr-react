import { KEYS } from '~constants/localStorage';
import localStorage from '~services/LocalStorageService';

export function isAutenticated() {
  return localStorage.getValue(KEYS.token);
}

export function saveTokenLocalStorage(token: string){
  localStorage.setValue(KEYS.token, token);
}