import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { MakeCreateEditPasswordUserUseCase } from '../factories/Make-edit-password-user-use-case'
import { MakeFetchUserByEmailUseCase } from '../factories/Make-fetch-user-use-case'

export class EditPasswordController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const schemaEditPassword = z.object({
      email: z.string(),
      currentPassword: z.string(),
      newPassword: z.string(),
    })

    const { email, currentPassword, newPassword } = schemaEditPassword.parse(
      request.body,
    )

    const useCaseEditPasswordUser = MakeCreateEditPasswordUserUseCase()
    const useCaseFetchUserByEmail = MakeFetchUserByEmailUseCase()

    const user = await useCaseFetchUserByEmail.execute({
      email,
    })

    if (
      user?.email === email &&
      user?.password === currentPassword &&
      newPassword
    ) {
      const newPasswordWithUser = await useCaseEditPasswordUser.execute({
        email,
        newPassword,
      })
      return { newPasswordWithUser }
    } else {
      return reply
        .status(404)
        .send({ message: 'senha e/ou email atual erradas' })
    }
  }
}
