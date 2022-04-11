<template>
    <div class="scrollable">
       <Task
            v-for="(task, index) in filteredTasks"
            :key="task.id"
            @click="store.dispatch('completedTask', index)"
            :class="{ active: filteredTasks[index].completed }"
        >
            <template #task>
                {{ task.text }}
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

        const filteredTasks = computed( function() {
            if(store.state.stateFilter === "active") {
                store.dispatch("setActiveTasks");
                return store.state.filteredTasks;
            }
            if(store.state.stateFilter === "completed") {
                store.dispatch("setCompletedTasks");
                return store.state.filteredTasks;
            }
            else return store.state.tasks;
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