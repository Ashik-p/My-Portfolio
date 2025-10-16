import { Hono } from "hono";

// If Cloudflare Workers `Env` type isn't available locally, define a minimal fallback
type WorkerEnv = Record<string, unknown>;

const app = new Hono<{ Bindings: WorkerEnv }>();

export default app;
