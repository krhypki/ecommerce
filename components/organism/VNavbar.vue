<template>
  <nav ref="nav" class="nav sticky top-0 z-50 bg-light px-4 py-6 shadow">
    <VContainer class="flex items-center gap-3">
      <NuxtLink to="/">
        <VLogo />
      </NuxtLink>
      <VNavLinksWrapper :mobile-menu-open="mobileMenuOpen" class="ml-auto" />
      <VCartButton class="max-md:ml-auto" />
      <VMenuBars
        class="ml-10"
        v-if="isMobile"
        @toggle-mobile-menu="onMobileMenuToggle"
        :is-active="mobileMenuOpen"
      />
    </VContainer>
  </nav>
</template>
<script lang="ts" setup>
import { useMq } from '~/composable/useMq'

const { isMobile } = useMq()
const route = useRoute()
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

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

watch(isMobile, () => {
  if (!isMobile.value) {
    closeMobileMenu()
  }
})

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu()
  }
)
</script>
