import { UsersRepositoryType } from '../repositories/users-repository'

interface FetchRefreshTokenDTO {
  RefreshToken: string
}

export class FetchRefreshTokenUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private usersRepository: UsersRepositoryType) {}
  // O usersRepository é privado, o que significa que ele só pode ser acessado de dentro dessa classe

  async execute({ RefreshToken }: FetchRefreshTokenDTO) {
    const refreshToken = await this.usersRepository.findRefreshToken(
      RefreshToken,
    )

    if (!refreshToken) {
      throw new Error('Refresh Token invalid')
    }

    return refreshToken
  }
}
