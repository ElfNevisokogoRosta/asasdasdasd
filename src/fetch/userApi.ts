import { axiosRequest } from './axiosRequest'

const loginUser = async (
  username: string,
  password: string
): Promise<{ token: string; refreshToken: string }> => {
  const result = await axiosRequest
    .post(username, password)
    .then((r) => r.data)
    .catch((e) => console.log(e))
  return result
}
const getUserInfo = async () => {
  const result = await axiosRequest
    .get('users')
    .then((r) => r.data)
    .catch((e) => e.message)
  return result
}
const registerUser = async (
  username: string,
  password: string
): Promise<{ token: string; refreshToken: string }> => {
  const result = await axiosRequest
    .post(username, password)
    .then((r) => r.data)
    .catch((e) => console.log(e))
  return result
}
const refreshToken = async () => {
  const result = await axiosRequest
    .get('auth/refresh')
    .then((r) => r.data())
    .catch((e) => console.log(e))
  return result
}
const logOut = async (id: string): Promise<{ id: string; username: string }> => {
  const result = await axiosRequest
    .post(`users/${id}`)
    .then((r) => r.data)
    .catch((e) => e.message)
  return result
}
export { loginUser, registerUser, refreshToken, logOut, getUserInfo }
