import { defineStore } from 'pinia'
import { type Cart, type CartProduct } from '~/types/Cart'

export const useCartStore = defineStore('cart', {
  state: (): Cart => {
    return {
      products: [
        {
          id: 3,
          name: 'Apple',
          category: 'food',
          price: 5.99,
          stock: 10,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem ducimus exercitationem facere ipsam nesciunt quae quaerat unde. Quia, tempore!',
          quantity: 1
        }
      ],
      isOpen: false,
      totalPrice: 5.99
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
    },
    getTotalPrice(): number {
      return this.totalPrice
    }
  },
  actions: {
    addProduct(product: CartProduct) {
      const productInCartIndex = this.products.findIndex(
        (el) => el.id === product.id
      )

      if (productInCartIndex < 0) {
        this.products.push(product)
      } else {
        const currentItem = this.products[productInCartIndex]

        if (currentItem.quantity + product.quantity > currentItem.stock) {
          throw new Error('No more products in stock')
        } else {
          currentItem.quantity += product.quantity
        }
      }

      this.updateTotalPrice()
    },
    updateTotalPrice() {
      this.totalPrice = this.products.reduce((total, product) => {
        return (total += product.price * product.quantity)
      }, 0)
    },
    updateProductQuantity(id: number, quantity: number) {
      if (!id) {
        return
      }
      const productIndex = this.products.findIndex(
        (product) => product.id === id
      )
      this.products[productIndex].quantity += quantity
      this.updateTotalPrice()
    },
    removeProduct(id: number) {
      this.products = this.products.filter((product) => product.id !== id)
      this.updateTotalPrice()
    }
  }
})
