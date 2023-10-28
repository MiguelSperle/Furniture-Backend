// A pasta repositories guarda os métodos de manipulação diretamente com o  banco de dados
import { prisma } from '../../../../shared/lib/prisma'
import { UsersRepositoryType } from '../users-repository'
import { IUserDTO } from '../../DTOs/IUserDTO'
import { ICreateUserDTO } from '../../DTOs/ICreateUserDTO'
import { IRefreshTokenDTO } from '../../DTOs/IRefreshTokenDTO'
import dayjs from 'dayjs'
import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider'

// class PrismaRepositoryControllers deve fornecer implementações... que seria os métodos do interface RepositoryControllersType
export class PrismaUsersRepository implements UsersRepositoryType {
  async createUser(data: ICreateUserDTO): Promise<IUserDTO> {
    const newUser = await prisma.user.create({
      data,
    })
    return newUser
  }

  async findUserByEmail(email: string): Promise<IUserDTO | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }

  async createInfoRefreshToken(userId: string): Promise<IRefreshTokenDTO> {
    const expiresIn = dayjs().add(60, 'seconds').unix()

    const infoRefreshToken = await prisma.refreshToken.create({
      data: {
        userId,
        expiresIn,
      },
    })

    return infoRefreshToken
  }

  async findRefreshToken(
    RefreshToken: string,
  ): Promise<IRefreshTokenDTO | null | string> {
    const refreshToken = await prisma.refreshToken.findFirst({
      where: {
        id: RefreshToken,
      },
    })

    if (refreshToken !== null) {
      const refreshTokenExpired = dayjs().isAfter(
        dayjs.unix(refreshToken.expiresIn),
      )

      if (refreshTokenExpired) {
        await prisma.refreshToken.deleteMany({
          where: {
            userId: refreshToken.userId,
          },
        })

        const expiresIn = dayjs().add(30, 'seconds').unix()

        const newRefreshToken = await prisma.refreshToken.create({
          data: {
            userId: refreshToken.userId,
            expiresIn,
          },
        })

        return newRefreshToken
      }

      const generateTokenProvider = new GenerateTokenProvider()
      const token = await generateTokenProvider.execute(refreshToken.userId)

      return token
    }

    return null
  }
}
