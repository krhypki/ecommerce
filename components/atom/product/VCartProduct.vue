<template>
  <div
    class="grid grid-cols-2 items-center justify-between justify-items-center gap-y-2 px-4 py-8 sm:grid-cols-4"
  >
    <NuxtImg
      :src="`/images/categories/${product.category}.jpg`"
      :alt="product.name"
      class="rounded-lg sm:mr-6"
    />
    <div>
      <h3 class="text-xl font-semibold md:text-2xl">
        {{ product.name }}
      </h3>
      <span v-currency="product.price"></span>
    </div>

    <div>
      <p>Quantity: {{ pickedQuantity }}</p>
      <strong class="mb-4 block">Price: ${{ totalPrice }}</strong>
      <VQuantityControls
        v-model:quantity-model="pickedQuantity"
        :max="product.stock"
        :product-id="productId"
      />
    </div>
    <VButton
      @click="removeProduct(productId)"
      variant="outline-primary"
      small
      class="order-0 ml-auto rounded-full"
    >
      <VIcon name="close" />
    </VButton>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cart'
interface Props {
  productId: number
}
const props = defineProps<Props>()
const { getProduct, removeProduct } = useCartStore()
const product = getProduct(props.productId)
const pickedQuantity = ref<number>(product?.quantity || 0)

const totalPrice = computed(() => {
  return (pickedQuantity.value * product!.price).toFixed(2)
})
</script>
