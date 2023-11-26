<script setup lang="ts">
import TaskElement from './TaskElement.vue'
import { computed, onMounted } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import { useUserStore } from '@/stores/userStore'
import { useTaskList } from '@/utils/useTaskList'

const userStore = useUserStore()
const taskStore = useTaskStore()
const [loading, error, getTaskList] = useTaskList()
onMounted(async () => {
  getTaskList()
})

const done = computed(() => {
  return taskStore.getDone
})
const undone = computed(() => {
  return taskStore.getUndone
})
const startDrag = (e, i) => {
  e.dataTransfer.dropEffect = 'move'
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('itemID', i.id)
}
const onDrop = async (e) => {
  const id = e.dataTransfer.getData('itemID')
}
</script>

<template>
  <div class="task-holder">
    <div v-if="loading" class="task-loader">
      <svg class="task-icon">
        <rect width="100" height="100" />
      </svg>
    </div>
    <div class="task-column">
      <h2 class="task-column-title">In Progress</h2>
      <ul class="task-list" @drop="onDrop($event, 'undone')" @dragenter.prevent @dragover.prevent>
        <TaskElement
          v-for="task in undone"
          :key="`${task.id} ${task.list}`"
          draggable="true"
          @dragstart="startDrag($event, task)"
          :task="task"
        />
      </ul>
    </div>
    <div class="task-column">
      <h2 class="task-column-title-done task-column-title">Done</h2>
      <ul class="task-list" @drop="onDrop($event, 'done')" @dragenter.prevent @dragover.prevent>
        <TaskElement
          v-for="task in done"
          :key="task.id"
          draggable="true"
          @dragstart="startDrag($event, task)"
          :task="task"
        />
      </ul>
    </div>
  </div>
</template>

<style>
.task-holder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  position: relative;
}
.task-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 254, 253, 0.226);
}
.task-icon {
  width: 80px;
  height: 80px;
}
.task-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px 6px 0px 0px;
  border: 1px solid #454545;
  background-color: #454545;
}

.task-column-title {
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #1c5a7c;
  border-radius: 6px 6px 0px 0px;
  padding: 9px 0px;
  text-align: center;
  color: #fff;
}

.task-column-title-done {
  background-color: #106354;
}

.task-list {
  width: 100%;
  height: 100%;
  display: inline-flex;
  padding: 16px 10px;
  margin: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 0px 0px 6px 6px;
  border: 1px solid #454545;
  background: #454545;
  min-height: 40px;
}
</style>
../pinia/store/userStore
