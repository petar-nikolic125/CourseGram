/** @jest-environment node */
import { AISession } from '../aiSession';
import { chat } from '../openaiHelper';

process.env.OPENAI_KEY = 'test';

jest.mock('../openaiHelper', () => ({ chat: jest.fn() }));

const mockedChat = chat as jest.MockedFunction<typeof chat>;

beforeEach(() => {
  mockedChat.mockReset();
});

test('start parses AI response', async () => {
  mockedChat.mockResolvedValue('{"pricing":[],"weekPlan":{"tasks":[]},"forecast":{"months":[]}}');
  const session = new AISession({ niche: 'x', productType: 'y', targetPriceRange: '$' });
  const out = await session.start();
  expect(out.weekPlan).toBeDefined();
  expect(mockedChat).toHaveBeenCalled();
});

test('next returns parsed output', async () => {
  mockedChat.mockResolvedValueOnce('{"pricing":[],"weekPlan":{"tasks":[]},"forecast":{"months":[]}}');
  const session = new AISession({ niche: 'x', productType: 'y', targetPriceRange: '$' });
  await session.start();
  mockedChat.mockResolvedValueOnce('{"updatedPlan":{"tasks":[]},"forecast":{},"advice":"ok"}');
  const out = await session.next({ sales:1, traffic:2, cvr:0.1 });
  expect(out.advice).toBe('ok');
});
