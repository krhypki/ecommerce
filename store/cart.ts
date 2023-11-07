import { defineStore } from 'pinia'
import { type Cart, type CartProduct } from '~/types/Cart'

export const useCartStore = defineStore('cart', {
  state: (): Cart => {
    return {
      products: []
    }
  },
  getters: {
    getTotalCount(): number {
      return this.products.reduce((total, product) => {
        return (total += product.quantity)
      }, 0)
    },
    getProduct(state) {
      return (id: number) => state.products.find((product) => product.id === id)
    }
  },
  actions: {
    addProduct(product: CartProduct) {
      const productInCartIndex = this.products.findIndex(
        (el) => el.id === product.id
      )

      if (productInCartIndex < 0) {
        this.products.push(product)
        return
      }

      const currentItem = this.products[productInCartIndex]

      if (currentItem.quantity + product.quantity > currentItem.stock) {
        throw new Error('No more products in stock')
      } else {
        currentItem.quantity += product.quantity
      }
    }
  }
})
