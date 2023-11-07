<template>
  <Transition name="fade">
    <div
      v-if="modelValue"
      class="mb-4 flex justify-between rounded px-4 py-3"
      :class="variantClassList"
    >
      <slot />
      <button @click="$emit('update:modelValue', false)">
        <VIcon class="text-xl" name="circle-xmark" />
      </button>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
interface Props {
  variant: 'error' | 'info'
  modelValue: boolean
}

const props = defineProps<Props>()

const variantClassList = computed(() => {
  switch (props.variant) {
    case 'error':
      return 'bg-red-400 border-red-700'
    case 'info':
      return 'bg-blue-400 border-blue-700 text-light'
    default:
      return ''
  }
})
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
