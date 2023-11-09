<template>
  <label v-if="label" :for="id" class="mb-3 mr-3">
    {{ label }}
  </label>
  <input
    :id="id"
    :type="type"
    v-bind="$attrs"
    :value="modelValue"
    @input="onInput"
    class="w-full rounded border border-gray p-2 shadow-sm"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number
  type?: string
  id: string
  label?: string
  validation?: (value: string) => string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event: Event): void => {
  const target = event.target as HTMLInputElement

  if (props.validation) {
    target.value = props.validation(target.value)
  }

  emit('update:modelValue', target.value)
}
</script>
<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
