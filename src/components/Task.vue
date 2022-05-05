<template>
    <a-row>
        <a-card hoverable>
            <a-checkbox
                class="checkbox"
                v-model:checked="store.state.tasks[idTask].completed"
                @change="changeTaskStatus"
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

<script>
import { CloseOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import { reactive } from 'vue';

export default {
    components: {
        CloseOutlined,
    },
    props: {
        idTask: {
            type: Number,
            default: 0,
        }
    },
    setup(props) {
        const store = useStore();

        // values
        // const task = reactive({
        //     completed: store.state.tasks[props.idTask].completed,
        // });

        const changeTaskStatus = () => {
            store.dispatch('completedTask', props.idTask);
        }

        return {
            store,
            // task,
            changeTaskStatus,
        }
    }
}
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