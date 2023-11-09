<template>
  <div class="flex max-md:justify-center">
    <VButton @click="changeQuantity(-1)" small> - </VButton>
    <VInput
      id="stock"
      type="number"
      v-model.number="cModelValue"
      class="min-w-[60px] max-w-[100px] text-center"
      min="1"
      :max="max"
      :validation="validateQuantity"
    />
    <VButton @click="changeQuantity(1)" small> + </VButton>
  </div>
</template>
<script lang="ts" setup>
import { useCartStore } from '~/store/cart'

interface Props {
  quantityModel: number
  max: number
  productId: number
}
const props = defineProps<Props>()
const emit = defineEmits(['update:quantityModel'])
const { updateProductQuantity } = useCartStore()

const cModelValue = computed({
  get() {
    return props.quantityModel
  },
  set(value) {
    updateProductQuantity(props.productId, value)
    emit('update:quantityModel', value)
  }
})

const changeQuantity = (modifier: 1 | -1) => {
  const value = props.quantityModel
  const newValue = value + modifier
  if (newValue > 0 && newValue <= props.max) {
    updateProductQuantity(props.productId, modifier)
    emit('update:quantityModel', newValue)
  }
}

const validateQuantity = (value: string) => {
  if (+value > props.max) {
    return String(props.max)
  }

  return value
}
</script>
