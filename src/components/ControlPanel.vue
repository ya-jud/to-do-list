<template>
  <div class="center">
    <a-row justify="space-between" align="middle" :wrap="false">
      <a-select
        ref="select"
        v-model:value="value"
        style="width: 30vh"
        @change="handleChange"
        :options="options"
      >
      </a-select>

      <a-col :span="6" align="middle">
        <span style="vertical-align: middle">
          Total tasks: {{ store.state.tasksCounter }}
        </span>
      </a-col>
      
      <a-button
        v-show="completed"
        @click="store.dispatch('deleteListTasks')"
      >
        Clear completed
      </a-button>
    </a-row>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();

  const options = ref([
    {
      value: 'tasks',
      label: 'All tasks',
    },
    {
      value: 'active',
      label: 'Active',
    },
    {
      value: 'completed',
      label: 'Completed',
    },
  ]);

  const completed = computed(() => {
    return store.state.tasks.some((task) => task.completed)
  });

  const handleChange = value => {
    store.dispatch('setFilterTasks', value);
  };
</script>

<style scoped>
  .ant-row > .ant-col {
    margin: 0 3vh;
  }
  .center {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
</style>