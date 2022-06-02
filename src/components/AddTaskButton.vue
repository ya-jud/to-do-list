<template>
  <div class="addButton" @click="store.dispatch('changeStateModal', true)">
    <a-button shape="circle" size="large">
      <template #icon><plus-outlined /></template>
    </a-button>
  </div>
</template>

<script setup>
  import { PlusOutlined } from "@ant-design/icons-vue";
  import { useStore } from "vuex";
  const store = useStore();
</script>

<style scoped>
  .addButton {
    position: absolute;
    right: 5vh;
    bottom: 5vh;
  }
</style>
