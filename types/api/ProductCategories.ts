export type Product = {
  id: number
  name: string
  price: number
  stock: number
  category: string
  featured?: boolean
  desc: string
}

export type Category = {
  key: string
  name: string
  products?: Product[]
}
