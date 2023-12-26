import { config } from 'dotenv' // dotenv serve para gerenciar as variáveis de ambiente dentro de um projeto Node. js
import { z } from 'zod'

config() // Esse config ele carrega as variáveis de ambiente definidas no .env ao rodar o projeto

const envShema = z.object({
  PORT: z.coerce.number(),
  DATABASE_URL: z.string(),
  JWT_SECRET_KEY: z.string(),
})

const _env = envShema.safeParse(process.env)
// validando as variáveis de ambiente, presentes em process.env

if (!_env.success) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}
// se a validação não foi bem sucessida, vai cair nesse erro

export const env = _env.data
