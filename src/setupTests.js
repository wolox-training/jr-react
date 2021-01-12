import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import '@testing-library/jest-dom';
import { server } from './mocks/servers';

beforeAll(() => {
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

configure({ adapter: new Adapter() });

jest.mock('i18next', () => ({
  t: t => t
}));
