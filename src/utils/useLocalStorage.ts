import { ref } from 'vue'
import type { Ref } from 'vue'

export const useStorage = <T>(key: string): [Ref<T | null>, (newValue: T) => void, () => void] => {
  const storage: Storage = localStorage
  const value: Ref<T | null> = ref(JSON.parse(storage.getItem(key) || 'null'))

  const setItem = (newValue: T) => {
    value.value = newValue
    storage.setItem(key, JSON.stringify(newValue))
  }

  const removeItem = () => {
    storage.removeItem(key)
    value.value = null
  }

  return [value, setItem, removeItem]
}
