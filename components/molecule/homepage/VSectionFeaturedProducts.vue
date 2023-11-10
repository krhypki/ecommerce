<template>
  <VSection>
    <h2 class="mb-10 text-5xl max-lg:text-center">Featured Products</h2>
    <div class="flex flex-wrap gap-x-8 gap-y-10 max-lg:justify-center">
      <VProductBox
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </VSection>
</template>
<script lang="ts" setup>
import { type Product } from '~/types/api/ProductCategories'

const { data: products } = await useFetch<Product[]>('/api/products?featured')
</script>
