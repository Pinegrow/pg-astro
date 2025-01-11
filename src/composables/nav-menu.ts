import siteMeta from '@/site'
import { useBrowserLocation } from '@vueuse/core'

export const useNavMenu = () => {
  const navs = siteMeta.navs

  const allNavs = Object.values(navs).reduce((acc, navMenu) => {
    return [...acc, ...navMenu]
  }, [])

  const currentPath = computed(() => {
    return useBrowserLocation().value.pathname
  })

  return {
    allNavs,
    navsPrimary: navs.primary,
    navsSecondary: navs.secondary,
    currentPath,
  }
}
