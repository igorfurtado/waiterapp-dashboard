import { Product, ProductFromDomain } from './product'

export type Order = {
  id: string
  table: string
  status: 'Pronto!' | 'Em preparação' | 'Fila de espera'
  products: Product[]
}

export type OrderFromDomain = {
  _id: string
  table: string
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
  products: ProductFromDomain[]
  createdAt: string
  __v: number
}
