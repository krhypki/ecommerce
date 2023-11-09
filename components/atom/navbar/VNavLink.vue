<template>
  <nuxt-link
    class="inline-block cursor-pointer px-2 font-medium transition-all duration-200 hover:scale-110"
    :class="variantClassList"
  >
    <slot />
  </nuxt-link>
</template>
<script lang="ts" setup>
interface Props {
  variant?: 'dark' | 'light'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'dark'
})

const variantClassList = computed(() => {
  switch (props.variant) {
    case 'dark':
      return 'hover:text-primary'
    case 'light':
      return 'text-light hover:text-secondary'
    default:
      return 'hover:text-primary'
  }
})
</script>
