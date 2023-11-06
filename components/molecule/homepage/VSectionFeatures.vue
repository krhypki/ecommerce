<template>
  <VSection>
    <div
      class="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4 xl:justify-between"
    >
      <VFeature
        v-for="feature in features"
        :key="feature.icon"
        v-bind="feature"
      />
    </div>
  </VSection>
</template>
<script lang="ts" setup>
const features: Record<'heading' | 'text' | 'icon', string>[] = [
  {
    heading: 'Best prices',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, illo!',
    icon: 'sack-dollar'
  },
  {
    heading: 'Free delivery',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, illo!',
    icon: 'truck'
  },
  {
    heading: 'Best products',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, illo!',
    icon: 'shirt'
  },
  {
    heading: 'Worldwide',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, illo!',
    icon: 'globe'
  }
]
</script>
