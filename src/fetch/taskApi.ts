import { axiosRequest } from './axiosRequest'

const getAll = async () => {
  const result = await axiosRequest
    .get('tasks')
    .then((r) => r.data)
    .catch((e) => console.log(e))
  return result
}
const addTask = async (id: number, task: { title: string; dis: string }) => {
  const result = await axiosRequest
    .post(`tasks/${id}`, { ...task })
    .then((r) => r.data)
    .catch((e) => console.log(e))
  return result
}
const removeTask = async (id: string) => {
  const result = await axiosRequest
    .delete(`tasks/${id}`)
    .then((r) => r.data)
    .catch((e) => console.log(e))
  return result
}
const updateTask = async (id: string) => {
  const result = await axiosRequest
    .patch(`tasks/list/${id}`)
    .then((r) => r.data)
    .catch((e) => console.log(e))
  return result
}
export { addTask, getAll, removeTask, updateTask }
