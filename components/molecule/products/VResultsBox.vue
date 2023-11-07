<template>
  <div
    v-if="products.length"
    class="grid grid-cols-1 justify-items-center gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  >
    <TransitionGroup name="list" class="flex">
      <VProductBox
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="transition-all duration-300"
      />
    </TransitionGroup>
  </div>
  <div v-else class="text-center">
    <h1 class="mb-8 text-center text-xl">No products found</h1>
    <VButton variant="primary" @click="onClear">Clear results</VButton>
  </div>
</template>

<script setup lang="ts">
import { type Product } from '~/types/api/ProductCategories'
interface Props {
  products: Product[]
}

defineProps<Props>()

const emit = defineEmits(['clear-filters'])
const onClear = () => {
  emit('clear-filters')
}
</script>
<style scoped>
.list-enter {
  transform: scale(0.5);
  opacity: 0;
}

.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  z-index: -1;
}
</style>
