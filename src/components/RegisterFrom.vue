<script setup lang="ts">
import { reactive } from 'vue'
import { useRegister } from '@/utils/useRegister'
import router from '@/router'

const [loading, error, register] = useRegister()
const inputData = reactive({ username: '', password: '', confirmPassword: '' })

const registerHanlder = async (e: Event) => {
  const target = e.target as HTMLFormElement
  const username = inputData.username.trim()
  const password = inputData.password.trim()
  const confirmPassword = inputData.confirmPassword.trim()
  if (username === '') {
    return alert('Enter user name')
  }
  if (password === '') {
    return alert('Enter password')
  }
  if (password.length < 7) {
    return alert('Password must be at least 7 characters')
  }
  if (password !== confirmPassword) {
    return alert('Password and confirm password must be the same')
  }
  register(username, password)
  if (!error) {
    router.push('/')
  }
  ;(inputData.username = ''), (inputData.password = ''), (inputData.confirmPassword = '')
  target.reset()
  return
}
</script>

<template>
  <main class="main-container">
    <div class="form-wraper">
      <form @submit.prevent="registerHanlder" action="">
        <h2 class="form-title">Register form</h2>
        <div class="form-container">
          <lable class="input-container" for="loginEmail"
            ><input
              class="form-input"
              id="loginEmail"
              type="text"
              autocomplete="off"
              autp
              placeholder="Enter username"
              v-model="inputData.username"
            />
          </lable>
          <lable class="input-container" for="loginPass"
            ><input
              class="form-input"
              id="loginPass"
              type="password"
              autocomplete="new-password"
              placeholder="Enter password"
              v-model="inputData.password"
            />
          </lable>
          <lable class="input-container" for="loginRepeatPass"
            ><input
              class="form-input"
              id="loginRepeatPass"
              type="password"
              autocomplete="new-password"
              placeholder="Repeat password"
              v-model="inputData.confirmPassword"
          /></lable>
          <button v-if="loading" class="submit-btn">Register</button>
          <div v-if="error"></div>
        </div>
      </form>
    </div>
  </main>
</template>
