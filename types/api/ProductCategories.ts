export type Product = {
  name: string
  price: number
  stock: number
  category: string
  featured?: boolean
}

export type Category = {
  key: string
  name: string
  products: Product[]
}
