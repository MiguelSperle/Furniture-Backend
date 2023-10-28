import { FastifyReply, FastifyRequest } from 'fastify'

export async function ensureAuthenticated(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return reply.status(401).send({ message: 'Token is missing' })
  }

  if (authHeader) {
    try {
      await request.jwtVerify()
    } catch (error) {
      return reply.status(401).send({ message: '🔐 Token is invalid' })
    }
  }
}
