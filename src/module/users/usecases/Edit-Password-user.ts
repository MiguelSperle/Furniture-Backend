import { UsersRepositoryType } from '../repositories/users-repository'

interface UpdatePasswordUserDTO {
  email: string
  newPassword: string
}

export class EditPasswordUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private usersRepository: UsersRepositoryType) {}
  // O usersRepository é privado, o que significa que ele só pode ser acessado de dentro dessa classe

  async execute({ email, newPassword }: UpdatePasswordUserDTO) {
    const user = await this.usersRepository.editPasswordUser(email, newPassword)

    return user
  }
}
