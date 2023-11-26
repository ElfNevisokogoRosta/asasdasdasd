import axios from 'axios'
import type { AxiosResponse } from 'axios'
import router from '@/router'
import { useStorage } from '@/utils/useLocalStorage'
import { refreshToken } from './userApi'
export const axiosRequest = axios.create({
  baseURL: '127.0.0.1:3232/'
})

axiosRequest.interceptors.request.use(
  (config: any) => {
    const [token, ,] = useStorage('token')
    if (token && !config?.url?.includes('auth/refresh')) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

axiosRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },

  async (error: any) => {
    const originalRequest = error.config
    const [, , removeToken] = useStorage('token')
    const [, , removeRefreshToken] = useStorage('refreshToken')
    //функція виходу з аккаунту

    if (error.response.status === 401 && originalRequest.url.includes('auth/refresh')) {
      removeToken()
      removeRefreshToken()
      return
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        await refreshToken()
        return axiosRequest(originalRequest)
      } catch (err) {
        return Promise.reject(err)
      }
    }

    await router.push('/login')
    return Promise.reject(error)
  }
)
