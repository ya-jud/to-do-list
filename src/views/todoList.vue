<template>
    <a-layout>

        <a-layout-header style="text-align: center">
            <h1 class="title">TodoList</h1>
        </a-layout-header>

        <a-layout-content style="padding: 25px 20px">
            <ConstrolPanel></ConstrolPanel>

            <TodoTable></TodoTable>
        </a-layout-content>

    </a-layout>
    <AddTask></AddTask>
    <NewTask></NewTask>
</template>

<script>
import TodoTable from '../components/TodoTable.vue'
import ConstrolPanel from '../components/ControlPanel.vue'
import AddTask from '../components/AddTask.vue'
import NewTask from '../components/NewTask.vue'

export default {
    components: {
        TodoTable,
        ConstrolPanel,
        AddTask,
        NewTask,
    }
}
</script>

<style scoped>
.title {
    color: white;
    cursor: default;
}

.ant-layout {
    position: relative;
    height: 100%;
    width: 100%;
}
.ant-layout-content {
    height: 100%;
    width: 100%;
}

.ant-space {
    width: 100%;
}
</style>