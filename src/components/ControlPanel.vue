<template>
<div class="center">
    <a-row justify="space-between" align="middle">
        <a-select
            ref="select"
            v-model:value="value"
            style="width: 30vh"
            @change="handleChange"
            :options="options"
        >
        </a-select>

        <a-col :span="6" align="middle">
            <span style="vertical-align: middle">Total tasks: {{ store.state.tasksCounter }}</span>
        </a-col>
        
        <a-button v-if="completed" @click="store.dispatch('deleteTask')">Clear completed</a-button>

    </a-row>
</div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore();
        const completed =
            computed( function() {
                let tasks = store.state.tasks
                for(let i = 0; i < tasks.length; i++) {
                    if(tasks[i].completed) {
                        return true
                    }
                };
            }
        );

        // state
        const options = ref([{
            value: 'tasks',
            label: 'All tasks',
        }, {
            value: 'active',
            label: 'Active',
        }, {
            value: 'completed',
            label: 'Completed',
        },]);

        // methods
        const handleChange = value => {
            store.dispatch("setFilterTasks", value);
        };
        return {
            store,
            completed,
            handleChange,
            value: ref('tasks'),
            options
        };
    }
}
</script>

<style scoped>
.ant-row {
    flex-flow: nowrap;
}
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