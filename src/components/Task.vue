<template>
  <a-row>
    <a-card hoverable>
      <a-checkbox
        class="checkbox"
        v-model:checked="taskStatus"
      ></a-checkbox>
      <span><slot name="task"></slot></span>
      <span class="create-date">
        <slot name="createdDate"></slot>
      </span>
      <span class="close-task">
        <a-button type="text" shape="circle" size="small" @click="store.dispatch('deleteTask', idTask)">
          <template #icon><close-outlined /></template>
        </a-button>
      </span>
    </a-card>
  </a-row>
</template>

<script setup>
  import { CloseOutlined } from "@ant-design/icons-vue";
  import { useStore } from "vuex";
  import { computed } from "vue";

  const store = useStore();

  const props = defineProps({
    idTask: {
      type: Number,
      default: 0,
    }
  });

  const taskStatus = computed({
    get() { return store.getters.filteredTasks[props.idTask].completed },
    set() { store.dispatch("completedTask", props.idTask) }
  });
</script>

<style scoped>
  .ant-row {
    padding: 10px;
  }
  .ant-row > div {
    width: 100%;
    position: relative;
  }
  .create-date {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: .9em;
    padding: 10px;
    color: #8b8b8b;
  }
  .close-task {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
    color: #8b8b8b;
  }
  .checkbox {
    padding: 0 20px 0 0;
  }
</style>