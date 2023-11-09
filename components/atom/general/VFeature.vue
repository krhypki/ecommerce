<template>
  <div
    ref="target"
    :class="`
      relative rounded px-7 pb-10 pt-4 text-xl
      after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-10 after:origin-bottom-right after:rounded 
      after:border-2 after:border-primary after:transition-transform after:duration-300  after:ease-out after:content-[''] ${
        targetIsVisible ? 'after:scale-x-100' : 'after:scale-x-0'
      }
    `"
  >
    <VIcon
      :name="icon"
      class="absolute -top-8 left-3 z-20 bg-light p-3 text-2xl text-primary delay-300"
      :class="contentVisibilityClassList"
    />
    <h3 class="mb-6 text-2xl delay-500" :class="contentVisibilityClassList">
      {{ heading }}
    </h3>
    <p class="delay-500" :class="contentVisibilityClassList">
      {{ text }}
    </p>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  icon: string
  heading: string
  text: string
}

defineProps<Props>()

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

const contentVisibilityClassList = computed(() => {
  return `transition-opacity duration-300 ease-out ${
    targetIsVisible.value ? 'opacity-100' : 'opacity-0'
  }`
})
</script>
