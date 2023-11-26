import { ref } from 'vue'
import type { Ref } from 'vue'
import { useUserStore } from '../stores/userStore'
export const useUserInfo = (): [Ref<boolean>, Ref<boolean>, () => Promise<void>] => {
  const store = useUserStore()
  const loading = ref<boolean>(false)
  const error = ref<boolean>(false)
  const getUserInfo = async () => {
    loading.value = true
    try {
      const res = await getUserInfo()
      store.setUserData(res.id, res.name)
      loading.value = false
    } catch (e) {
      error.value = true
      loading.value = false
    }
  }
  return [loading, error, getUserInfo]
}
