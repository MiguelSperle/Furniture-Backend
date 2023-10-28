import { ICreateRefreshTokenDTO } from '../DTOs/ICreateRefreshTokenDTO'
import { UsersRepositoryType } from '../repositories/users-repository'

export class CreateInfoRefreshTokenUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private usersRepository: UsersRepositoryType) {}
  // O usersRepository é privado, o que significa que ele só pode ser acessado de dentro dessa classe

  async execute({ userId }: ICreateRefreshTokenDTO) {
    const infoRefreshToken = await this.usersRepository.createInfoRefreshToken(
      userId,
    )

    return infoRefreshToken
  }
}
