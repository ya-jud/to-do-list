<template>
    <a-modal
        v-model:visible="store.state.isOpenModal"
        title="New task"
        :afterClose="clearArea"
        @ok="setTask"
    >
        <a-space direction="vertical" justify="center">
            <a-textarea
                v-model:value="task.text"
                placeholder="What are your plans"
                auto-size
                size="large"
                allowClear
                type="textarea"
            />
        </a-space>
    </a-modal>
</template>

<script>
import { message } from 'ant-design-vue';
import { reactive } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore();

        // values
        const task = reactive({
            text: '',
        });

        // methods
        const clearArea = () => {
            task.text = '';
            store.dispatch("changeStateModal", false);
        };
        const setTask = () => {
            if(!task.text) return message.warning("You didn't write anything!");
            store.dispatch("addNewTask", {
                text: task.text,
                createdDate: new Date().toLocaleDateString(),
            });
            clearArea();
            message.success('Task added!');
        };
        
        return {
            store,
            task,
            clearArea,
            setTask,
        };
    },
}
</script>

<style scoped>
.ant-space {
    width: 100%;
}
</style>
