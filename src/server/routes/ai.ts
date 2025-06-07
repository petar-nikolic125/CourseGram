import { Router } from "express";
import { AISession } from "../aiSession";

const sessions = new Map<string, AISession>();

const router = Router();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
router.post("/simulation/start", async (req: any, res: any) => {
  try {
    const { basics } = req.body;
    const session = new AISession(basics);
    const out = await session.start();
    sessions.set(session.id, session);
    res.json({ simId: session.id, ...out });
  } catch (err: unknown) {
    const e = err as Error & { message?: string };
    res.status(502).json({ error: "AI_ERROR", message: String(e.message || e) });
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
router.post("/simulation/next-step", async (req: any, res: any) => {
  try {
    const { simId, metrics } = req.body;
    const session = sessions.get(simId);
    if (!session) return res.status(404).json({ error: "invalid simId" });
    const out = await session.next(metrics);
    res.json(out);
  } catch (err: unknown) {
    const e = err as Error & { message?: string };
    res.status(502).json({ error: "AI_ERROR", message: String(e.message || e) });
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
router.post("/simulation/end", async (req: any, res: any) => {
  try {
    const { simId } = req.body;
    const session = sessions.get(simId);
    if (!session) return res.status(404).json({ error: "invalid simId" });
    const out = await session.end();
    sessions.delete(simId);
    res.json(out);
  } catch (err: unknown) {
    const e = err as Error & { message?: string };
    res.status(502).json({ error: "AI_ERROR", message: String(e.message || e) });
  }
});

export default router;
