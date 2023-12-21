import { prisma } from '../../../shared/lib/prisma'

export class GetProductsController {
  async handle() {
    const products = await prisma.products.findMany({
      where: {
        name: 'Furniture',
      },
    })

    return products
  }
}
