<script setup lang="ts">
import { reactive } from 'vue'
import { useAuthLogin } from '@/utils/useAuthLogin'
import router from '@/router'

const inputData = reactive({
  username: '',
  password: ''
})
const [loading, error, login] = useAuthLogin()
const loginHandler = async () => {
  const username = inputData.username.trim()
  const password = inputData.password.trim()
  if (username === '') {
    return alert('Enter user name')
  }
  if (password === '') {
    return alert('Enter password')
  }
  if (password.length < 7) {
    return alert('Password must be at least 7 characters')
  }
  await login(username, password)
  if (!error) {
    router.push('/')
  }
  inputData.username = ''
  inputData.password = ''
  return
}
</script>
<template>
  <main class="main-container">
    <div class="form-wraper">
      <form @submit.prevent="loginHandler" action="">
        <h2 class="form-title">Login form</h2>
        <div class="form-container">
          <lable class="input-container" for="loginEmail"
            ><input
              class="form-input"
              id="loginEmail"
              type="text"
              placeholder="Enter username"
              v-model="inputData.username"
          /></lable>
          <lable class="input-container" for="loginPass"
            ><input
              class="form-input"
              id="loginPass"
              type="password"
              autocomplete="off"
              placeholder="Enter password"
              v-model="inputData.password"
          /></lable>
          <button :disabled="loading" class="submit-btn">Login</button>
          <div v-if="error">Some data is wrong</div>
        </div>
      </form>
    </div>
  </main>
</template>

<style>
.main-container {
  width: 1280px;
  margin: 0 auto;
}

.form-wraper {
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px 16px;
  display: flex;
  justify-content: center;
  border-radius: 32px;
}

.form-wraper > form {
  width: 100%;
}

.form-title {
  text-align: center;
  font-size: 24px;
  margin: 0px 0px 20px 0px;
}

.form-container {
  display: flex;
  gap: 16px;
}

.input-container {
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 12px 12px 12px 32px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  border: none;
  border-radius: 16px;
  background-color: #292929;
  color: #fff;
}

.submit-btn {
  width: 160px;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 16px;
  border: none;
  font-size: 24px;
  font-weight: 700;
  color: #292929;
  transition:
    color 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19),
    background-color 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.submit-btn:hover {
  background-color: #292929;
  color: #fff;
}
</style>
