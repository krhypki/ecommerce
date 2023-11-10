<template>
  <button
    class="cart-btn relative"
    :class="beforeClassList"
    :data-count="store.getTotalCount"
    @click.stop="toggleCart"
  >
    <VIcon name="cart-shopping" class="text-2xl" />
  </button>
</template>
<script lang="ts" setup>
import { useCartStore } from '~/store/cart'
const store = useCartStore()

const beforeClassList = computed(() => {
  if (!store.getTotalCount) {
    return false
  }
  return `before:content-[attr(data-count)] before:absolute before:-right-5 before:-top-3 before:rounded-full before:bg-secondary before:w-6 before:h-6 before:font-semibold`
})

const toggleCart = () => {
  store.isOpen = !store.isOpen
}
</script>
