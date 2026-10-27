import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Runs /api/chat inside the Vite dev server, so the assistant works locally
// without the Vercel CLI. Put GEMINI_API_KEY in .env.local (git-ignored).
function devApi(env) {
  return {
    name: 'dev-api',
    configureServer(server) {
      Object.assign(process.env, env)
      server.middlewares.use('/api/chat', async (req, res) => {
        let raw = ''
        for await (const chunk of req) raw += chunk
        const { default: handler } = await server.ssrLoadModule('/api/chat.js')
        req.body = raw
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (payload) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(payload))
        }
        await handler(req, res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), devApi(loadEnv(mode, process.cwd(), ''))],
}))
