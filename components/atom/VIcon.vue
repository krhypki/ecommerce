<template>
  <i :class="`fa-solid fa-${name}`"></i>
</template>
<script lang="ts" setup>
interface Props {
  name: string
}

defineProps<Props>()
</script>
