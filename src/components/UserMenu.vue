<script setup lang="ts">
import router from '../router'
import { onMounted } from 'vue'
import { useUserInfo } from '@/utils/useUserInfo'
import { useStorage } from '@/utils/useLocalStorage'
import { useUserStore } from '@/stores/userStore'

const store = useUserStore()
const [loading, error, getUserInfo] = useUserInfo()
onMounted(async () => {
  getUserInfo()
})
const [, , removeToken] = useStorage('token')
const [, , removeRefreshToken] = useStorage('refreshToken')
const onLogOut = () => {
  removeToken()
  removeRefreshToken()
  router.push('/auth')
}
</script>
<template>
  <div class="user-container">
    <p class="user-text">Welcome! {{ store.username }}</p>
    <button class="user-btn" @click="onLogOut">Log Out</button>
  </div>
  <div v-if="loading"></div>
  <div v-if="error"></div>
</template>
<style>
.user-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
}

.user-text {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  color: #f2f2f2;
}

.user-btn {
  background-color: #dbd5d5;
  font-size: 26px;
  border: none;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  transition:
    color 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19),
    background-color 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.user-btn:hover {
  color: azure;
  background-color: #332f2f;
}
</style>
../pinia/store/userStore @/utils/useLocalStorage
