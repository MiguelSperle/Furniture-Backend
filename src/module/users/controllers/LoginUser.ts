import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import * as bcrypt from 'bcrypt'
import { MakeFetchUserByEmailUseCase } from '../factories/Make-fetch-user-use-case'
import { MakeCreateInfoRefreshTokenUserUseCase } from '../factories/Make-create-info-refreshToken-user-use-case'
import { GenerateTokenProvider } from '../provider/GenerateTokenProvider'
import { prisma } from '../../../shared/lib/prisma'

export class LoginUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const schemaLogin = z.object({
      email: z.string(),
      password: z.string(),
    })

    const { email, password } = schemaLogin.parse(request.body)

    if (!email && !password) {
      return reply.status(400).send({ message: 'Preencha os campos' })
    }

    if (!email) {
      return reply.status(400).send({ message: 'Preencha com o seu email' })
    } else if (!email.includes('@') || !email.includes('.com')) {
      return reply.status(400).send({ message: 'complete seu email' })
    }

    if (!password) {
      return reply.status(400).send({ message: 'Preencha com a sua senha' })
    }

    if (email.includes(' ') || password.includes(' ')) {
      return reply.status(400).send({
        message: 'Os campos não podem conter espaços entre as palavras.',
      })
    }

    const useCaseFetchUserByEmail = MakeFetchUserByEmailUseCase()

    const user = await useCaseFetchUserByEmail.execute({
      email,
    })
    console.log(user)

    if (!user) {
      return reply.status(401).send({ message: 'senha e/ou e-mail inválidos' })
    }

    if (typeof user.password === 'string') {
      const isValidPassword = await bcrypt.compare(password, user.password)
      console.log(isValidPassword)
      if (!isValidPassword) {
        return reply
          .status(400)
          .send({ message: 'senha e/ou e-mail inválidos' })
      }

      if (user && isValidPassword) {
        const generateTokenProvider = new GenerateTokenProvider()
        const token = await generateTokenProvider.execute(user.id)

        await prisma.refreshToken.deleteMany({
          where: {
            userId: user.id,
          },
        })

        const useCaseCreateRefreshToken =
          MakeCreateInfoRefreshTokenUserUseCase()

        const refreshToken = await useCaseCreateRefreshToken.execute({
          userId: user.id,
        })
        const refreshTokenId = refreshToken.id

        const authenticatedUser = {
          id: user.id,
          email: user.email,
          name: user.name,
          imageUrl: user.imageUrl,
          role: user.role,
        }

        return {
          token,
          refreshTokenId,
          authenticatedUser,
        }
      }
    }
  }
}
