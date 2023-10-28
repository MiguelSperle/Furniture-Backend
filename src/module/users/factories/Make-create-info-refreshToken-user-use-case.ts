import { CreateInfoRefreshTokenUseCase } from '../usecases/Create-InfoRefreshToken-user'
import { PrismaUsersRepository } from '../repositories/prisma/prisma-users-repository'

export function MakeCreateInfoRefreshTokenUserUseCase() {
  const usersRepository = new PrismaUsersRepository() // Instanciando a class, vou usar como argumento para o casos de uso, métodos para o banco de dados
  const useCaseCreateInfoRefreshToken = new CreateInfoRefreshTokenUseCase(
    usersRepository,
  ) // CreateInfoRefreshTokenUseCase esperar receber os argumentos que vem do repositoryController para interagir com o banco

  return useCaseCreateInfoRefreshToken
}
