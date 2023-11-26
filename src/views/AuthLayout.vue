<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
import RegisterFrom from '@/components/RegisterFrom.vue'

const authStatus = ref('login')
const authToggle = () => {
  if (authStatus.value === 'login') {
    return (authStatus.value = 'register')
  }
  return (authStatus.value = 'login')
}
</script>
<template>
  <nav class="auth-navigation">
    <ul class="nav-list">
      <li class="nav-element">
        <button
          class="nav-btn"
          :class="{ active: authStatus === 'login' }"
          :disabled="authStatus === 'login'"
          @click="authToggle"
        >
          Login
        </button>
      </li>
      <li class="nav-element">
        <button
          class="nav-btn"
          :class="{ active: authStatus === 'register' }"
          :disabled="authStatus === 'register'"
          @click="authToggle"
        >
          Register
        </button>
      </li>
    </ul>
  </nav>
  <LoginForm v-if="authStatus === 'login'" />
  <RegisterFrom v-if="authStatus === 'register'" />
</template>
<style>
.auth-navigation {
  width: 1280px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.nav-list {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style-type: none;
}
.nav-element {
  width: 256px;
}
.nav-btn {
  width: 100%;
  font-size: 16px;
  padding: 16px 64px;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  color: #292929;
  border-radius: 16px;
  background: #e2d6d6;
  transition:
    background-color 250ms cubic-bezier(0.55, 0.085, 0.68, 0.53),
    color 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.auth-navigation .active {
  background: rgb(255, 255, 255);
  color: rgb(181, 211, 199);
}
.nav-btn:hover {
  background: rgb(255, 255, 255);
  color: rgb(181, 211, 199);
}
</style>
