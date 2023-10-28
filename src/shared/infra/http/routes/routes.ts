import { FastifyInstance } from 'fastify'
import { CreateUserController } from '../../../../module/users/controllers/CreateUser'
import { LoginUserController } from '../../../../module/users/controllers/LoginUser'
import { RefreshTokenUser } from '../../../../module/users/controllers/RefreshToken'
import { GetProductsController } from '../../../../module/users/controllers/GetProducts'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const createUserController = new CreateUserController()
const loginUserController = new LoginUserController()
const refreshTokenController = new RefreshTokenUser()
const getProductsController = new GetProductsController()

export async function Routes(app: FastifyInstance) {
  app.post('/auth/register', createUserController.handle)
  app.post('/auth/login', loginUserController.handle)
  app.post('/refreshToken', refreshTokenController.handle)
  app.get(
    '/products',
    { preHandler: ensureAuthenticated },
    getProductsController.handle,
  )
}
