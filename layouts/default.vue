<template>
  <div class="flex min-h-screen flex-col">
    <VNavbar />
    <VCart />
    <main>
      <slot />
    </main>
    <VFooter class="mt-auto" />
  </div>
</template>
