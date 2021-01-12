import { screen, fireEvent } from '@testing-library/react';

export const setInputByLabelText = (name: string, value: string) => {
  fireEvent.input(screen.getByLabelText(name), {
    target: {
      value
    }
  });
};
