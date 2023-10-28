import Fastify from 'fastify'
import jwt from '@fastify/jwt'
import { env } from '../../env'
import { Routes } from './routes/routes'

export const app = Fastify()

app.register(jwt, {
  secret: env.JWT_SECRET_KEY,
})

Routes(app)
require('./../../../config/cloudinary')
