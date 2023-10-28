import { FetchUserUseCase } from '../usecases/Fetch-user'
import { PrismaUsersRepository } from '../repositories/prisma/prisma-users-repository'

export function MakeFetchUserByEmailUseCase() {
  const usersRepository = new PrismaUsersRepository() // Instanciando a class, vou usar como argumento para o casos de uso, métodos para o banco de dados
  const useCaseFetchUserByEmail = new FetchUserUseCase(usersRepository) // FetchUserUseCase esperarr receber os argumentos que vem do repositoryController para interagir com o banco

  return useCaseFetchUserByEmail
}
