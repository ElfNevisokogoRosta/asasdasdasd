<script setup lang="ts">
import TaskList from '@/components/TaskList.vue'
import TaskForm from '@/components/TaskForm.vue'
import UserMenu from '../components/UserMenu.vue'
</script>

<template>
  <main>
    <UserMenu />
    <div class="componet-wraper">
      <TaskForm />
      <TaskList />
    </div>
  </main>
</template>
<style>
@keyframes rotating {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.loader-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140x;
  width: 140px;
  margin-left: 40px;
  animation: rotating 2s infinite;
}

.loader-icon {
  width: 100%;
  height: 100%;
}

.loader-icon > path {
  fill: #c2c2c2;
}

.subheade-wraper {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.image-wraper {
  width: 50px;
  height: 50px;
  position: relative;
  padding-top: 0%;
}

.logo-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.componet-wraper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}
</style>
