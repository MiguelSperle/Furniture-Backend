import { app } from '../../../shared/infra/http/app'

export class GenerateTokenProvider {
  async execute(userId: string) {
    const accessToken: string = await app.jwt.sign(
      {
        sub: userId,
      },
      {
        expiresIn: '10s',
      },
    )

    return accessToken
  }
}
