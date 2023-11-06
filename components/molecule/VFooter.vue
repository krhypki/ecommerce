<template>
  <footer class="mt-16 bg-black py-10">
    <VContainer class="flex justify-center md:justify-end">
      <VNavLink v-for="link in links" :key="link" variant="light">
        {{ link }}
      </VNavLink>
    </VContainer>
  </footer>
</template>
<script lang="ts" setup>
const links = ['About', 'Contact', 'FAQ', 'Job offers']
</script>
