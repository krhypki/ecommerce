<template>
  <VSection>
    <div class="grid justify-items-center max-md:text-center md:grid-cols-2">
      <img
        :src="`/images/categories/${product.category}.jpg`"
        class="lg:mt-8"
      />
      <div>
        <h1 class="mb-8 text-3xl">{{ product.name }}</h1>
        <strong class="mb-6 block text-xl">${{ product.price }}</strong>
        <p class="mb-12">{{ product.desc }}</p>
        <p class="mb-3">Available: {{ product.stock }} in stock</p>
        <div class="mb-12 flex max-md:justify-center">
          <VButton @click="changeQuantity(-1)" small> - </VButton>
          <VInput
            type="number"
            v-model.number="quantity"
            class="max-w-[100px] text-center"
            min="1"
            :max="product.stock"
            :validation="validateQuantity"
          />
          <VButton @click="changeQuantity(1)" small> + </VButton>
        </div>
        <VButton variant="outline-primary" class="min-w-[250px]">
          Add to cart
        </VButton>
      </div>
    </div>
  </VSection>
</template>

<script lang="ts" setup>
import { type Product } from '~/types/api/ProductCategories'

const { params } = useRoute()
const quantity = ref(1)
const { data: product } = await useFetch<Product>(
  `/api/products?id=${params.id}`
)

const changeQuantity = (modifier: 1 | -1) => {
  const { value } = quantity
  if (value + modifier > 0 && value + 1 < modifier + product.value!.stock) {
    quantity.value += modifier
  }
}

watch(quantity, (value) => {
  if (product.value && value > product.value!.stock) {
    return product.value.stock
  }
  return value
})

const validateQuantity = (value: string) => {
  if (!product.value) {
    return value
  }

  const { stock } = product.value

  if (+value > stock) {
    return String(stock)
  }

  return value
}
</script>
