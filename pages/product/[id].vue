<template>
  <VSection v-if="product && !error">
    <VSingleProductView :product="product" />
  </VSection>
</template>

<script lang="ts" setup>
import { type Product } from '~/types/api/ProductCategories'

const { params } = useRoute()

const { data: product, error } = await useFetch<Product>(
  `/api/products?id=${params.id}`
)
</script>
