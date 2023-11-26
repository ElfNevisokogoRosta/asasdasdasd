<script setup lang="ts">
import { reactive } from 'vue'
import { useUserStore } from '../pinia/store/userStore'
import { useTasksStore } from '../pinia/store/tasksStore'
const task = reactive({
  title: '',
  dis: '',
  isLoading: '',
  isError: null
})
const taskStore = useTasksStore()
const store = useUserStore()
const taskHandler = (e) => {
  const fieldName = e.target.name
  task[fieldName] = e.target.value
}

const addTask = async (e) => {
  const { title, dis } = task
  if (title === '') {
    return alert('enter task title')
  }
  if (dis === '') {
    return alert('enter task discription')
  }
  const newTask = { title, dis, list: 'undone' }
  await taskStore.addNewTask(store.id, newTask)
  // task.isLoading = true
  // try {
  //   taskApi.addNew(store.id, newTask)
  //   task.isLoading = false
  // } catch (error) {
  //   task.isError = error
  // }

  e.target.reset()
}
</script>
<template>
  <div class="container">
    <h2 class="title">Add some task</h2>
    <form @submit.prevent="addTask">
      <div class="form-container">
        <label class="input-box" for="title">
          <input
            @change="taskHandler"
            id="title"
            class="input-title"
            name="title"
            type="text"
            maxlength="50"
            placeholder="Task title"
            :value="task.title"
          />
        </label>
        <label class="input-box" for="story">
          <textarea
            @change="taskHandler"
            class="input-des"
            id="story"
            name="dis"
            rows="5"
            cols="33"
            placeholder="Task description"
            :value="task.description"
          >
          </textarea>
        </label>
        <button class="task-form-button">Add task</button>
      </div>
    </form>
  </div>
</template>
<style></style>
../pinia/store/userStore
