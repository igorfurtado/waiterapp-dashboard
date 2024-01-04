import { Product, ProductFromDomain } from '../data/product'

export const productMapper = (fullProduct: ProductFromDomain[]): Product[] => {
  return fullProduct.map((product) => ({
    id: product._id,
    quantity: product.quantity,
    product: {
      name: product.product.name,
      imagePath: product.product.imagePath,
      price: product.product.price
    }
  }))
}
