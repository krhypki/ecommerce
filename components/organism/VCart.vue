<template>
  <Transition name="slide-down">
    <div
      v-if="store.isOpen"
      class="cart fixed right-0 z-30 w-full max-w-[900px] bg-light px-6 shadow"
      v-click-outside="{
        handler: closeCart,
        additionalSelector: '[data-cart-trigger]'
      }"
    >
      <TransitionGroup name="slide">
        <VCartProduct
          v-for="product in store.products"
          :key="product.id"
          :product-id="product.id"
        />
      </TransitionGroup>
      <p
        v-if="store.products.length"
        class="sticky bottom-0 z-10 mt-10 bg-light py-6 text-right"
      >
        Total price: <strong v-currency="store.totalPrice"></strong>
      </p>
      <p v-else class="mt-10">Cart is empty</p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cart'
const store = useCartStore()

const closeCart = () => {
  store.isOpen = false
}
</script>
<style scoped>
.cart {
  top: var(--nav-height);
  height: 100%;
  max-height: calc(100vh - var(--nav-height) - 200px);
  overflow: auto;
}
</style>
