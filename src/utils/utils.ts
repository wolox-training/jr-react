import i18next from 'i18next';

export const getTitleAlert = (type: string): string => {
  switch (type) {
    case 'error':
      return i18next.t('AlertMessage:titleError');
    case 'success':
      return i18next.t('AlertMessage:titleSuccess');
    case 'warning':
      return i18next.t('AlertMessage:titleWarning');
    default:
      return '';
  }
};
