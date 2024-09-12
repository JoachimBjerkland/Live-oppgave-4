import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Node.js!'))

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log('Running on localhost:3000')