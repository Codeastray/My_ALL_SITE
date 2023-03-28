import { useUserStore } from '~/store'
export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useUserStore($pinia)
    }
  }
})