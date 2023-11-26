import { ref } from 'vue'
import type { Ref } from 'vue'
import { loginUser } from '@/fetch/userApi'
import { useUserStore } from '@/stores/userStore'
import { useStorage } from './useLocalStorage'

export const useAuthLogin = (): [
  Ref<boolean>,
  Ref<boolean>,
  (username: string, password: string) => Promise<void>
] => {
  const [, setToken] = useStorage('token')
  const [, setRefreshToken] = useStorage('refreshToken')
  const store = useUserStore()
  const loading = ref<boolean>(false)
  const error = ref<boolean>(false)

  const login = async (username: string, password: string) => {
    loading.value = true
    try {
      const res = await loginUser(username, password)
      setToken(res.token)
      setRefreshToken(res.refreshToken)
      store.setUserData(username, password)
      loading.value = false
    } catch (e) {
      error.value = true
      loading.value = false
    }
  }
  return [loading, error, login]
}
