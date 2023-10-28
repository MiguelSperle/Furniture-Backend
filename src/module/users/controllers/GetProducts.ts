import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query'],
})

export class GetProductsController {
  async handle() {
    const products = await prisma.products.findMany({
      where: {
        name: 'Furniture',
      },
    })
    console.log(products)
    return products
  }
}
