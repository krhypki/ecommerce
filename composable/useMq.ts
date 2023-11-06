import { onMounted, ref } from 'vue'

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const breakpointSizes = new Map<Breakpoint, number>([
  ['sm', 640],
  ['md', 768],
  ['lg', 1024],
  ['xl', 1280],
  ['2xl', 1536]
])

export const useMq = () => {
  const isMobile = ref(false)
  const breakpoint = ref<Breakpoint>('sm')

  onMounted(() => {
    updateData(window.innerWidth)
    window.addEventListener('resize', onResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })

  const updateData = (windowWidth: number) => {
    isMobile.value = breakpointSizes.get('sm')! >= windowWidth

    breakpoint.value = getCurrentBreakpoint(windowWidth)
  }

  const getCurrentBreakpoint = (windowWidth: number): Breakpoint => {
    const currentBreakpoint = [...breakpointSizes].find(
      ([name, value], index, arr) => {
        const nextEl = arr[index + 1]

        if (!nextEl) {
          return true
        }

        return windowWidth < value
      }
    )

    return currentBreakpoint ? currentBreakpoint[0] : '2xl'
  }

  const onResize = () => updateData(window.innerWidth)

  return {
    isMobile,
    breakpoint
  }
}
