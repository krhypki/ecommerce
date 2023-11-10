<template>
  <VFilterBox
    :categories="categories"
    :active-category="activeCategory"
    v-model="searchValue"
    @set-active-category="activeCategory = $event"
  />
  <VResultsBox :products="filteredProducts" @clear-filters="clearFilters" />
</template>
<script lang="ts" setup>
import { type Product, type Category } from '~/types/api/ProductCategories'

interface Props {
  products: Product[]
  categories: Category[]
}

const props = defineProps<Props>()
const { query } = useRoute()
const activeCategory = ref((query.category as string) || 'all')
const searchValue = ref('')

const filteredProducts = computed(() => {
  if (!props.products) {
    return []
  }

  return props.products.filter((product) => {
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
