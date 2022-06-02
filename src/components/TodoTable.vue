<template>
  <div class="scrollable">
    <Task
      v-for="(task, index) in store.getters.filteredTasks"
      :key="task.uid"
      :class="{ active: store.getters.filteredTasks[index].completed }"
      :idTask="index"
    >
      <template #task>
        {{ task.text }}
      </template>
      <template #createdDate>
        {{ task.createdDate }}
      </template>
    </Task>
  </div>
</template>

<script setup>
  import Task from './Task.vue';
  import { useStore } from 'vuex';

  const store = useStore();
</script>

<style scoped>
  .scrollable {
    margin: 20px 0;
    height: 90%;
    overflow: auto;
  }
  .active > :first-child {
    color: rgb(151, 151, 151);
    background: rgb(196, 255, 211);
  }
</style>