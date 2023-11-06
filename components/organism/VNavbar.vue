<template>
  <nav ref="nav" class="nav sticky top-0 z-50 bg-light px-4 py-6 shadow">
    <div class="container flex items-center justify-between">
      <NuxtLink to="/">
        <VLogo />
      </NuxtLink>
      <VNavLinksWrapper :mobile-menu-open="mobileMenuOpen" />
      <VMenuBars
        v-if="isMobile"
        @toggle-mobile-menu="onMobileMenuToggle"
        :is-active="mobileMenuOpen"
      />
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { useMq } from '~/composable/useMq'

const { isMobile } = useMq()
const nav = ref<HTMLElement>()
const mobileMenuOpen = ref(false)

onMounted(() => {
  document.documentElement.style.setProperty(
    '--nav-height',
    `${nav.value?.clientHeight || 0}px`
  )
})

const onMobileMenuToggle = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

watch(isMobile, () => {
  if (!isMobile.value) {
    mobileMenuOpen.value = false
  }
})
</script>
