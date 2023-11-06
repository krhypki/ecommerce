<template>
  <NuxtLink
    class="group inline-block w-64 overflow-hidden rounded shadow-lg transition-all hover:shadow-sm"
  >
    <NuxtImg
      :src="`/images/categories/${product.category}.jpg`"
      class="w-64 transition-all duration-200 group-hover:scale-110"
    ></NuxtImg>
    <div class="px-3 py-7 text-center">
      <p class="mb-4 text-xl font-semibold">
        {{ product.name }}
      </p>
      <span class="text-lg"> ${{ product.price }} </span>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { type Product } from '~/types/api/ProductCategories'

interface Props {
  product: Product
}
defineProps<Props>()
</script>
