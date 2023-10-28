import { FastifyRequest } from 'fastify'
import { z } from 'zod'
import { MakeFetchRefreshTokenUserUseCase } from '../factories/Make-fetch-refreshToken-user-use-case'

export class RefreshTokenUser {
  async handle(request: FastifyRequest) {
    const schemaLogin = z.object({
      RefreshToken: z.string(),
    })

    const { RefreshToken } = schemaLogin.parse(request.body)

    const useCaseFetchRefreshToken = MakeFetchRefreshTokenUserUseCase()

    const refreshToken = await useCaseFetchRefreshToken.execute({
      RefreshToken,
    })

    return { refreshToken }
  }
}
