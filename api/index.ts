import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono().basePath('/api')
const prisma = new PrismaClient().$extends(withAccelerate())

app.get('/', (c) =>
  c.json({
    message: 'Hello  Hono!',
    env: process.env.DATABASE_URL?.slice(0, 21),
  }),
)

// dev-server
if (process.env.NODE_ENV === 'development') {
  import('@hono/node-server').then((m) => {
    m.serve(app, (info) => {
      console.log(`Listening on http://localhost:${info.port}`)
    })
  })
}

export const config = {
  runtime: 'edge',
}

export default handle(app)
