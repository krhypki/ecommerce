<template>
  <component
    :is="tag"
    :class="[variantClassList, sizeClassList]"
    class="rounded border transition-all duration-300 ease-in-out"
  >
    <slot />
  </component>
</template>
<script lang="ts" setup>
interface Props {
  to?: 'string'
  variant?: 'primary' | 'outline-primary' | 'outline-light'
  small?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  small: false
})

const NuxtLink = resolveComponent('nuxt-link')

const tag = computed(() => (props.to ? NuxtLink : 'button'))
const variantClassList = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary text-light border-primary hover:opacity-80'
    case 'outline-primary':
      return 'bg-transparent text-primary border-primary hover:bg-primary hover:text-light'
    case 'outline-light':
      return 'bg-transparent text-light border-light hover:bg-light hover:text-primary'
    default:
      return ''
  }
})

const sizeClassList = computed(() => {
  return props.small ? 'text-sm py-2 px-4' : 'p-4'
})
</script>
