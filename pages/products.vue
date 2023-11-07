<template>
  <VSection v-if="products && products.length">
    {{ searchValue }}
    <VFilterBox
      :categories="categories"
      :active-category="activeCategory"
      v-model="searchValue"
      @set-active-category="activeCategory = $event"
    />
    <VResultsBox :products="filteredProducts" @clear-filters="clearFilters" />
  </VSection>
  <VSection v-else>
    <h1 class="text-center text-xl">No products found</h1>
  </VSection>
</template>
<script lang="ts" setup>
import { type Product, type Category } from '~/types/api/ProductCategories'

const { query } = useRoute()
const activeCategory = ref(query.category || 'all')
const searchValue = ref('a')
const { data: products } = await useFetch<Product[]>(`/api/products`)
const { data: categories } = await useFetch<Category[]>(
  '/api/product-categories'
)
const filteredProducts = computed(() => {
  if (!products.value) {
    return []
  }

  return products.value.filter((product) => {
    if (activeCategory.value === 'all') {
      return checkIfProductIncludesSearchValue(product)
    }

    return (
      product.category === activeCategory.value &&
      checkIfProductIncludesSearchValue(product)
    )
  })
})

const clearFilters = () => {
  activeCategory.value = 'all'
  searchValue.value = ''
}

const checkIfProductIncludesSearchValue = (product: Product) =>
  product.name.toLowerCase().includes(searchValue.value.toLowerCase())
</script>
