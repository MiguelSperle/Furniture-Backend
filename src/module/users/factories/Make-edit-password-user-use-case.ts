import { EditPasswordUserUseCase } from '../usecases/Edit-Password-user'
import { PrismaUsersRepository } from '../repositories/prisma/prisma-users-repository'

export function MakeCreateEditPasswordUserUseCase() {
  const usersRepository = new PrismaUsersRepository() // Instanciando a class, vou usar como argumento para o casos de uso, métodos para o banco de dados
  const useCaseEditPasswordUser = new EditPasswordUserUseCase(usersRepository) // EditPasswordUserUseCase esperar receber os argumentos que vem do repositoryController para interagir com o banco

  return useCaseEditPasswordUser
}
