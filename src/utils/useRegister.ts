import { ref } from 'vue'
import type { Ref } from 'vue'
import { registerUser } from '@/fetch/userApi'
import { useStorage } from './useLocalStorage'
export const useRegister = (): [
  Ref<boolean>,
  Ref<boolean>,
  (username: string, password: string) => Promise<void>
] => {
  const loading = ref<boolean>(false)
  const error = ref<boolean>(false)
  const [, setToken] = useStorage('token')
  const [, setRefreshToken] = useStorage('refreshToken')
  const register = async (username: string, password: string) => {
    loading.value = true
    try {
      const res = await registerUser(username, password)
      setRefreshToken(res.refreshToken)
      setToken(res.token)
      loading.value = false
    } catch (e) {
      error.value = true
      loading.value = false
    }
  }
  return [loading, error, register]
}
