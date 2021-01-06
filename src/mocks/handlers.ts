import { rest } from 'msw';

export const handlers = [
  rest.post('/users', (req, res, ctx) => res(ctx.set('ok', 'true'), ctx.json({ data: true })))
];
