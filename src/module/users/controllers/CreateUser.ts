import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { randomInt } from 'crypto'
import { hash } from 'bcrypt'
import { MakeCreateUserUseCase } from '../factories/Make-create-user-use-case'
import { MakeFetchUserByEmailUseCase } from '../factories/Make-fetch-user-use-case'

export class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const schemaRegister = z.object({
      email: z.string(),
      name: z.string(),
      password: z.string(),
    })

    const { email, name, password } = schemaRegister.parse(request.body)

    if (!email && !password && !name) {
      return reply.status(400).send({ message: 'Preencha os campos' })
    }

    if (!email) {
      return reply.status(400).send({ message: 'Preencha com o seu email' })
    } else if (!email.includes('@') || !email.includes('.com')) {
      return reply.status(400).send({ message: 'complete seu email' })
    }

    if (!password) {
      return reply.status(400).send({ message: 'Preencha com a sua senha' })
    } else if (password.length < 5) {
      return reply
        .status(400)
        .send({ message: 'Senha deve conter 5 ou mais caracteres' })
    }

    if (!name) {
      return reply.status(400).send({ message: 'Preencha com seu nome' })
    }

    if (email.includes(' ') || name.includes(' ') || password.includes(' ')) {
      return reply.status(400).send({
        message: 'Os campos não podem conter espaços entre as palavras.',
      })
    }

    const useCaseFetchUserByEmail = MakeFetchUserByEmailUseCase()

    const user = await useCaseFetchUserByEmail.execute({
      email,
    })

    if (user) {
      return reply
        .status(400)
        .send({ message: 'Já possui uma conta com este email' })
    }

    const useCaseCreateUser = MakeCreateUserUseCase()

    const randowSalt = randomInt(10, 16) // Cada usuario vai ter um salt especifico para ele
    const passwordHash = await hash(password, randowSalt) // Quando criado o hash, vai ser um quatidade diferente de bytes para cada usuario

    const newUser = await useCaseCreateUser.execute({
      email,
      imageUrl:
        'https://res.cloudinary.com/dnsxuxnto/image/upload/v1691878181/bm6z0rap3mkstebtopol.png',
      password: passwordHash,
      name,
      role: 'costumer',
    })

    console.log(newUser)
    return reply.status(201).send({ message: 'Parabéns! Seja bem-vindo.' })
  }
}
