import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      username: '',
      id: ''
    }
  },
  actions: {
    setUserData(id: string, username: string) {
      this.$state.id = id
      this.$state.username = username
    }
  }
})
