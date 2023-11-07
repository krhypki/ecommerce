<template>
  <div class="mb-4 flex flex-col items-center lg:items-start">
    <VInput
      v-model="cModelValue"
      placeholder="Product Name"
      id="product-name"
      label="Search by product name"
      class="max-w-sm"
    />
  </div>
  <div class="flex-column mb-16 flex flex-wrap gap-4 max-md:justify-center">
    <VButton
      :variant="setButtonVariant('all')"
      @click="setActiveCategory('all')"
      small
    >
      View all
    </VButton>
    <VButton
      v-for="{ name, key } in categories"
      :key="key"
      :variant="setButtonVariant(key)"
      @click="setActiveCategory(key)"
      small
    >
      {{ name }}
    </VButton>
  </div>
</template>
<script lang="ts" setup>
import { type Category } from '~/types/api/ProductCategories'

interface Props {
  categories: Category[]
  activeCategory: string
  modelValue: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue', 'set-active-category'])

const cModelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const setButtonVariant = (category: string) => {
  return props.activeCategory === category ? 'primary' : 'outline-primary'
}

const setActiveCategory = (category: string) => {
  emit('set-active-category', category)
}
</script>
