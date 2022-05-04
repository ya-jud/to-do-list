<template>
    <div class="addButton" @click="store.dispatch('changeStateModal', true)">
        <a-button shape="circle" size="large">
            <template #icon><plus-outlined /></template>
        </a-button>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { PlusOutlined } from '@ant-design/icons-vue';

export default {
    setup() {
        const store = useStore();

        return {
            store
        }
    },
    components: {
        PlusOutlined
    }
}
</script>

<style scoped>
.addButton {
    position: absolute;
    right: 5vh;
    bottom: 5vh;
}
</style>
