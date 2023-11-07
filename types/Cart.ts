import { type Product } from '~/types/api/ProductCategories'

export type CartProduct = Product & {
  quantity: number
}

export type Cart = {
  products: CartProduct[]
}
