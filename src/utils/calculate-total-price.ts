import { Order } from '@/components/orders/model/data/order'

export const totalPrice = (order: Order | null) => {
  return order?.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity
  }, 0)
}
