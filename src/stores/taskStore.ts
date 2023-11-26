import { defineStore } from 'pinia'
import type { ITask } from '@/interface/ITask'
import type { ITaskState } from '@/interface/ITasksState'

export const useTaskStore = defineStore('tasks', {
  state: (): ITaskState => {
    return {
      tasks: []
    }
  },
  getters: {
    getDone: () => {},
    getUndone: () => {},
    getInit: () => {}
  },
  actions: {
    initTask(tasks: ITask[]): void {
      this.$state.tasks = tasks
    },
    addTask: (task: ITask) => {},
    removeTask: (id: string) => {},
    updateTask: (id: string) => {}
  }
})
