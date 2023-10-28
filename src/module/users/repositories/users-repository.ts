// Estou tipando o que cada função vai receber, quando for criar elas no prisma-repositories...
// justamente para separar, o que é para interagir com o banco, e o código fica arrumado.

import { IRefreshTokenDTO } from '../DTOs/IRefreshTokenDTO'
import { IUserDTO } from '../DTOs/IUserDTO'

export interface UsersRepositoryType {
  createUser(data: IUserDTO): Promise<IUserDTO>
  findUserByEmail(email: string): Promise<IUserDTO | null>
  createInfoRefreshToken(userId: string): Promise<IRefreshTokenDTO>
  findRefreshToken(
    RefreshToken: string,
  ): Promise<IRefreshTokenDTO | null | string>
}
// Promise ele retorna algo
