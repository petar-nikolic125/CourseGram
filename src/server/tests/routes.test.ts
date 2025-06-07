/** @jest-environment node */
import request from 'supertest';
import { createExpressApp } from '../index';
import { chat } from '../openaiHelper';

process.env.OPENAI_KEY = 'test';

jest.mock('../openaiHelper', () => ({ chat: jest.fn() }));

const mockedChat = chat as jest.MockedFunction<typeof chat>;

const app = createExpressApp();

test('POST /api/simulation/start', async () => {
  mockedChat.mockResolvedValue('{"pricing":[],"weekPlan":{"tasks":[]},"forecast":{}}');
  const res = await request(app).post('/api/simulation/start').send({ basics: { niche:'x', productType:'y', targetPriceRange:'$' } });
  expect(res.status).toBe(200);
  expect(res.body.simId).toBeDefined();
});
