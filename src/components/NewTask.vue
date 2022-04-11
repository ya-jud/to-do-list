<template>
    <a-modal
        v-model:visible="$store.state.isOpenModal"
        title="New task"
        :afterClose="clearArea"
        @ok="setTask"
    >
        <a-space direction="vertical" justify="center">
            <a-textarea
                v-model:task="task.text"
                placeholder="What are your plans"
                auto-size
                size="large"
            />
            <p>{{ task.text }}</p>
        </a-space>
    </a-modal>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore();

        // values
        const task = ref({
            text: "",
        });

        // methods
        const clearArea = function() {
            store.dispatch("changeStateModal", false);
        };
        const setTask = function() {
            console.log(task.value.text)
            // task.text = ""
            // store.dispatch("changeStateModal", false);
        }
        
        return {
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
