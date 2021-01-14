export type Nullable<T> = T | null;

export interface InfoUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  locale: string;
}

export interface UserRegister extends InfoUser {
  password: string;
  passwordConfirmation: string;
}

export interface ErrorResponse {
  error: string;
  errors: {
    fullMessages: Array<string>;
  };
  status: string;
}

export interface ContentForm {
  onSubmit: (data: UserRegister) => void;
  isLoading: boolean;
}

export interface Login {
  email: string;
  password: string;
}
