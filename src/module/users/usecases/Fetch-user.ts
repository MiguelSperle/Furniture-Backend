// No use case você usa métodos do repositories para manipular o banco de dados

import { UsersRepositoryType } from '../repositories/users-repository'

interface FetchUsersDTO {
  email: string
}

export class FetchUserUseCase {
  // eslint-disable-next-line prettier/prettier, no-useless-constructor
  constructor(private  usersRepository: UsersRepositoryType){}
  // O usersRepository é privado, o que significa que ele só pode ser acessado de dentro dessa classe

  async execute({ email }: FetchUsersDTO) {
    // Desestruturando, para extrair propriedades específicas do objeto passado como argumento para a função.
    const user = await this.usersRepository.findUserByEmail(email)

    return user
  }
}
