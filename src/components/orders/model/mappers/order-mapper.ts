import { statusMapping } from '../../utils/status-management'
import { Order, OrderFromDomain } from '../data/order'
import { productMapper } from './product-mapper'

export const orderMapper = (orders: OrderFromDomain[]): Order[] => {
  return orders.map((order) => ({
    id: order._id,
    status: order.status ? statusMapping(order.status) : 'Fila de espera',
    table: order.table,
    products: order.products ? productMapper(order.products) : []
  }))
}
