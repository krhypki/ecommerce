<template>
  <button
    @click="onClick"
    class="nav__menu-bars bg-transparent relative h-7 w-10 border-t-[3px] p-2 transition-transform duration-300 after:transition-transform after:duration-300"
    :class="{ active: isActive }"
  ></button>
</template>
<script lang="ts" setup>
interface Props {
  isActive: boolean
}

defineProps<Props>()

const emit = defineEmits(['toggle-mobile-menu'])

const onClick = () => {
  emit('toggle-mobile-menu')
}
</script>
<style lang="scss">
.nav__menu-bars {
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 3px solid theme('colors.black');
  }
  &::before {
    transform: translateY(10px);
  }
  &::after {
    transform: translateY(23px);
  }

  &.active {
    transform: rotate(45deg);
    border: none;
    &::after {
      transform: rotate(-90deg) translateX(-10px);
    }
  }
}
</style>
