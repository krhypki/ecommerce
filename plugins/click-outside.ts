export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el, binding) {
      el.clickOutsideEvent = (event: Event) => {
        const target = event.target as HTMLElement
        const { additionalSelector, handler } = binding.value
        const additionalElements = additionalSelector
          ? [...document.querySelectorAll(additionalSelector)]
          : []

        const method = handler || binding.value
        if (
          !(
            el === target ||
            el.contains(target) ||
            (event.currentTarget &&
              additionalElements.includes(event.currentTarget))
          )
        ) {
          method()
        }
      }
      document.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted: (el) => {
      document.removeEventListener('click', el.clickOutsideEvent)
    }
  })
})
