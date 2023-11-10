<template>
  <VSection>
    <div class="section-products mx-auto grid max-w-5xl gap-10">
      <VCategoryBox
        v-for="category in categories"
        :key="category.name"
        :category="category"
      />
    </div>
  </VSection>
</template>
<script lang="ts" setup>
import { type Category } from '~/types/api/ProductCategories'
const { data: categories } = await useFetch<Category[]>(
  '/api/product-categories'
)
</script>
<style lang="scss">
$categories: sport, clothes, food, electronics;

.section-products {
  grid-template-areas:
    'sport'
    'food'
    'clothes'
    'electronics';
  grid-template-rows: repeat(4, 150px);
  @media (min-width: 640px) {
    grid-template-rows: repeat(3, 150px);
    grid-template-areas:
      'sport sport electronics'
      'food clothes electronics'
      'food clothes electronics';
  }

  @each $category in $categories {
    &__category-box--#{$category} {
      grid-area: $category;
    }
  }
}
</style>
