<template>
<div class="center">
    <a-row justify="space-between" align="middle">
        <a-select
            v-model:value="value"
            style="width: 30vh"
            
            autofocus
        >
        <!-- @change="handleChange"  -->
            <a-select-option value="jack">All tasks</a-select-option>
            <a-select-option value="lucy">Active</a-select-option>
            <a-select-option value="Yiminghe">Completed</a-select-option>
        </a-select>

        <a-col :span="6" align="middle">
            <span style="vertical-align: middle">Total tasks: </span>
        </a-col>
        
    </a-row>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const value = ref([]);
        return {
            value,
            // hundleChange,
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