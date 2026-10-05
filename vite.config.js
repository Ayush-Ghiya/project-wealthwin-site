import { defineConfig, loadEnv } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig(({ mode }) => {
  // '' prefix loads all keys from .env, not just VITE_*; real env vars win
  const env = loadEnv(mode, process.cwd(), "");
  const port = Number(env.PORT) || 3000;

  return {
    plugins: [preact()],
    server: { port, strictPort: Boolean(env.PORT) },
    preview: { port, strictPort: Boolean(env.PORT) },
  };
});
