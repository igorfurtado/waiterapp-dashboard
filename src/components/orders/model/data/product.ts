export type Product = {
  id: string
  quantity: number
  product: {
    name: string
    imagePath: string
    price: number
  }
}

export type ProductFromDomain = {
  product: {
    _id: string
    name: string
    description: string
    imagePath: string
    price: number
    ingredients: {
      name: string
      icon: string
      _id: string
    }[]
    category: string
    __v: number
  }
  quantity: number
  _id: string
}
