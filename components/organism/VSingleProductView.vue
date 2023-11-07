<template>
  <VAlert v-model="error.show" variant="error"> {{ error.msg }} </VAlert>
  {{ stockIncludingStore }}
  <div class="grid justify-items-center max-md:text-center md:grid-cols-2">
    <img :src="`/images/categories/${product.category}.jpg`" class="lg:mt-8" />
    <div>
      <h1 class="mb-8 text-3xl">{{ product.name }}</h1>
      <strong class="mb-6 block text-xl">${{ product.price }}</strong>
      <p class="mb-12">{{ product.desc }}</p>
      <p class="mb-3">Available: {{ stockIncludingStore }} in stock</p>
      <div class="mb-12 flex max-md:justify-center">
        <VButton @click="changeQuantity(-1)" small> - </VButton>
        <VInput
          id="stock"
          type="number"
          v-model.number="quantity"
          class="max-w-[100px] text-center"
          min="1"
          :max="stockIncludingStore"
          :validation="validateQuantity"
        />
        <VButton @click="changeQuantity(1)" small> + </VButton>
      </div>
      <VButton
        @click="addToCart"
        variant="outline-primary"
        class="min-w-[250px]"
        :disabled="stockIncludingStore === 0"
      >
        Add to cart
      </VButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Product } from '~/types/api/ProductCategories'
import { useCartStore } from '~/store/cart'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const store = useCartStore()
const quantity = ref(1)
const error = reactive({
  show: false,
  msg: ''
})

const stockIncludingStore = computed(() => {
  return (
    props.product.stock - (store.getProduct(props.product.id)?.quantity || 0)
  )
})

const changeQuantity = (modifier: 1 | -1) => {
  const { value } = quantity
  if (
    value + modifier > 0 &&
    value + 1 < modifier + stockIncludingStore.value
  ) {
    quantity.value += modifier
  }
}

const addToCart = () => {
  try {
    store.addProduct({ ...props.product!, quantity: quantity.value })
  } catch (err) {
    error.show = true
    if (err instanceof Error) {
      error.msg = err.message
    }
  }
  quantity.value = 1
}

const validateQuantity = (value: string) => {
  if (!props.product) {
    return value
  }

  if (+value > stockIncludingStore.value) {
    return String(stockIncludingStore.value)
  }

  return value
}
</script>
