import { getAll } from '@/fetch/taskApi'
import { useTaskStore } from '@/stores/taskStore'
import { ref, type Ref } from 'vue'

export const useTaskList = (): [Ref<boolean>, Ref<boolean>, () => Promise<void>] => {
  const loading = ref<boolean>(false)
  const error = ref<boolean>(false)
  const store = useTaskStore()
  const getTaskList = async () => {
    loading.value = true
    try {
      const res = await getAll()
      store.initTask(res)
      loading.value = false
    } catch (e) {
      error.value = true
      loading.value = false
    }
  }
  return [loading, error, getTaskList]
}
