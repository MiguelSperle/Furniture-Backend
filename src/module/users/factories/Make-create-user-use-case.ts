import { CreateUserUseCase } from '../usecases/Create-user'
import { PrismaUsersRepository } from '../repositories/prisma/prisma-users-repository'

export function MakeCreateUserUseCase() {
  const usersRepository = new PrismaUsersRepository() // Instanciando a class, vou usar como argumento para o casos de uso, métodos para o banco de dados
  const useCaseCreateUser = new CreateUserUseCase(usersRepository) // CreateUserUseCase esperar receber os argumentos que vem do repositoryController para interagir com o banco

  return useCaseCreateUser
}
