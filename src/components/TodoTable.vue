<template>
    <div class="scrollable">
       <Task
            v-for="(task, index) in store.state.tasks"
            :key="task.id"
            :class="{ active: store.state.tasks[index].completed }"
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

<script>
import Task from './Task.vue';
import { useStore } from 'vuex';

export default {
    components: {
        Task,
    },
    setup() {
        const store = useStore();
        return {
            store,
        }
    },
}
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