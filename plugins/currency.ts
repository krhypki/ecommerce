import type { DirectiveBinding } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const setValue = (el: HTMLElement, binding: DirectiveBinding) => {
    const { value } = binding
    el.innerText = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Number(value))
  }

  nuxtApp.vueApp.directive('currency', {
    mounted(el, binding) {
      setValue(el, binding)
    },
    updated(el, binding) {
      setValue(el, binding)
    }
  })
})
