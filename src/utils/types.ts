export type Nullable<T> = T | null;

export interface InfoUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  locale: string;
}

export interface ErrorResponse {
  error: string;
  errors: {
    fullMessages: Array<string>;
  };
  status: string;
}

export interface ContentForm {
  onSubmit: (data: Record<string, any>) => void;
  isLoading: boolean;
}

export interface Login {
  email: string;
  password: string;
}
