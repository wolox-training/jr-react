import React from 'react';
import { mount } from 'enzyme';

type Hook = () => any;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const TestHook = ({ hook }: { hook: Hook }) => {
  hook();
  return null;
};

export const testHook = (hook: Hook) => {
  mount(<TestHook hook={hook} />);
};
