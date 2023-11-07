<template>
  <NuxtLink
    :to="`/products?category=${category.key}`"
    :class="`
          section-products__category-box section-products__category-box--${category.key} transition-bg after:z-1 relative flex items-center justify-center bg-cover
          bg-center 
          bg-no-repeat text-light before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0
          before:bg-black before:opacity-50 before:content-['']
          after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:scale-0 after:bg-primary after:transition
          after:duration-200 after:content-[''] hover:after:scale-100
        `"
  >
    <h2 class="relative z-10 text-3xl">
      {{ category.name }}
    </h2>
  </NuxtLink>
</template>
<script lang="ts" setup>
import type { Category } from '~/types/api/ProductCategories'

interface Props {
  category: Category
}
const props = defineProps<Props>()

const backgroundImage = computed(() => {
  return `url('/images/categories/${props.category.key}.jpg')`
})
</script>

<style>
.section-products__category-box {
  background-image: v-bind(backgroundImage);
}
</style>
