<template>
    <a-row>
        <a-col v-for="index in tasks" :key="index"><Task></Task></a-col>
    </a-row>
</template>

<script>
import Task from './Task.vue'

export default {
    data() {
        return {
            tasks: []
        }
    },
    components: {
        Task,
    }
}
</script>

<style scoped>
</style>