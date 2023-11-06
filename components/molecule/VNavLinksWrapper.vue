<template>
  <div
    class="nav__links-wrapper left:0 left-0 flex-col items-center gap-y-5 transition-transform duration-500 max-sm:fixed max-sm:z-40 max-sm:flex max-sm:h-full max-sm:w-full max-sm:bg-light max-sm:pt-10"
    :class="
      mobileMenuOpen
        ? 'translate-x-0 transition-transform'
        : 'max-sm:translate-x-full'
    "
  >
    <VNavLink v-for="{ text, url } in links" :key="text" :to="url">
      {{ text.toUpperCase() }}
    </VNavLink>
  </div>
</template>
<script lang="ts" setup>
type NavLink = {
  text: string
  url: string
}

interface Props {
  mobileMenuOpen: boolean
}

defineProps<Props>()

const links = new Set<NavLink>([
  { text: 'products', url: '/products' },
  { text: 'about us', url: '/about-us' },
  { text: 'contact', url: '/contact' }
])
</script>
<style>
.nav__links-wrapper {
  top: var(--nav-height);
}
</style>
