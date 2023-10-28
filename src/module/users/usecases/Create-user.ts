// No use case você usa métodos do repositories para manipular o banco de dados

import { randomUUID } from 'crypto'
import { ICreateUserDTO } from '../DTOs/ICreateUserDTO'
import { UsersRepositoryType } from '../repositories/users-repository'

export class CreateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private usersRepository: UsersRepositoryType) {}
  // O usersRepository é privado, o que significa que ele só pode ser acessado de dentro dessa classe

  async execute({ email, name, password, imageUrl, role }: ICreateUserDTO) {
    const newUser = await this.usersRepository.createUser({
      id: randomUUID(),
      email,
      password,
      imageUrl,
      name,
      role,
    })

    return {
      newUser,
    }
  }
}
