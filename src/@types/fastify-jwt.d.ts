import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      sub: string
    }
  }
}
// Eu tipo as informações que eu vou tirar de dentro do token, sub = id do user
