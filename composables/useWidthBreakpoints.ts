import { useBreakpoints } from '@vueuse/core'

export const useWidthBreakpoints = () => {
  const { lg, md, xl, between, smallerOrEqual } = useBreakpoints({
    md: 768,
    lg: 1200,
    xl: 1530
  })

  return {
    md,
    lg,
    laptop: between('lg', 'xl'),
    xl,
    smallerOrEqual
  }
}
