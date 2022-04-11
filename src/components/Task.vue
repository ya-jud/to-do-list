<template>
    <a-row>
        <a-card hoverable>
            <p><slot name="task"></slot></p>
        </a-card>
    </a-row>
</template>

<script>
import { useStore } from "vuex"

export default {
    setup() {
        const store = useStore();
        
        return {
            store
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
}
</style>