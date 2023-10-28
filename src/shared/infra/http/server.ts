import { app } from './app'
import { env } from '../../env'

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`🚀 HTTP server running on http://localhost:${env.PORT}`)
  })
