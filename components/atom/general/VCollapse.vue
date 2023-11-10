<template>
  <Transition
    name="collapse"
    @enter="enter"
    @leave="leave"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @after-leave="afterLeave"
  >
    <component :is="element!" v-show="modelValue">
      <slot />
    </component>
  </Transition>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: boolean
  element?: string
}
withDefaults(defineProps<Props>(), {
  element: 'div'
})

const emit = defineEmits([
  'show',
  'shown',
  'hide',
  'hidden',
  'update:modelValue'
])

const beforeEnter = (el: HTMLElement) => {
  el.style.height = '0px'
  emit('show')
}

const enter = (el: HTMLElement) => {
  setHeight(el)
  emit('shown')
}

const afterEnter = (el: HTMLElement) => {
  el.style.height = ''
}

const beforeLeave = (el: HTMLElement) => {
  setHeight(el)
  emit('hide')
}

const leave = (el: HTMLElement) => {
  setHeight(el)
  el.style.height = '0px'
  emit('hidden')
}

const afterLeave = (el: HTMLElement) => {
  el.style.height = ''
}

const setHeight = (el: HTMLElement) => {
  el.style.height = `${el.scrollHeight}px`
}
</script>

<style scoped lang="scss">
.collapse-enter-active,
.collapse-leave-active {
  @apply overflow-hidden transition-all duration-300 ease-in-out;
}
</style>
