<template>
  <component
    :is="tag"
    :class="variantClassList"
    class="rounded border px-4 py-4 transition-all duration-300 ease-in-out"
  >
    <slot />
  </component>
</template>
<script lang="ts" setup>
interface Props {
  to?: 'string'
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

const NuxtLink = resolveComponent('nuxt-link')

const tag = computed(() => (props.to ? NuxtLink : 'button'))
const variantClassList = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary text-light border-primary hover:bg-light hover:text-primary'
    case 'secondary':
      return 'bg-transparent text-light border-light hover:bg-light hover:text-primary'
    default:
      return ''
  }
})
</script>
