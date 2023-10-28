import { FetchRefreshTokenUseCase } from '../usecases/Fetch-RefreshToken-user'
import { PrismaUsersRepository } from '../repositories/prisma/prisma-users-repository'

export function MakeFetchRefreshTokenUserUseCase() {
  const usersRepository = new PrismaUsersRepository() // Instanciando a class, vou usar como argumento para o casos de uso, métodos para o banco de dados
  const useCaseFetchRefreshToken = new FetchRefreshTokenUseCase(usersRepository) // FetchRefreshTokenUseCase esperar receber os argumentos que vem do repositoryController para interagir com o banco

  return useCaseFetchRefreshToken
}
