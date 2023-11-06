// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'vue3-carousel-nuxt',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/scss/style.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})
