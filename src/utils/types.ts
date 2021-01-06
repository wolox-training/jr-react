export type Nullable<T> = T | null;

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  locale: string;
  password: string;
  passwordConfirmation: string;
}

export interface FunctionForTest {
  mockFunction?: () => void;
}
