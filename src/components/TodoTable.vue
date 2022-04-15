<template>
    <div class="scrollable">
        <!-- у ант есть свои фильтры, переписать надо -->
       <Task
            v-for="(task, index) in filteredTasks"
            :key="task.id"
            :class="{ active: filteredTasks[index].completed }"
            :idTask="index"
        >
        <!--             @click="store.dispatch('completedTask', index)" -->
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
import Task from './Task.vue'
import { computed } from 'vue';
import { useStore } from 'vuex'

export default {
    components: {
        Task,
    },
    setup() {
        const store = useStore();

        // computed
        const filteredTasks = computed(() => {
            switch(store.state.stateFilter) {
                case 'tasks':
                    return store.state.tasks;
                case 'active':
                    return store.state.tasks.filter((task) =>  !task.completed );
                case 'completed':
                    return store.state.tasks.filter((task) => task.completed);
                default:
                    return null // catch((err) => {})
            };
        });

        return {
            store,
            filteredTasks
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