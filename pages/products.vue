<template>
  <VSection v-if="products && products.length">
    <VProductsView :products="products" :categories="categories || []" />
  </VSection>
  <VSection v-else>
    <h1 class="text-center text-xl">No products found</h1>
  </VSection>
</template>
<script lang="ts" setup>
import { type Product, type Category } from '~/types/api/ProductCategories'

const { data: products } = await useFetch<Product[]>(`/api/products`)
const { data: categories } = await useFetch<Category[]>(
  '/api/product-categories'
)
</script>
