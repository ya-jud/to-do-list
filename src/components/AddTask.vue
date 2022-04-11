<template>
    <div class="addButton" @click="store.dispatch('changeStateModal', true)">
        <a-button shape="circle" size="large">+</a-button>
    </div>
</template>

<script>
import { useStore } from "vuex";

export default {
    setup() {
        const store = useStore();

        return {
            store
        }
    },
}
</script>

<style scoped>
.addButton {
    position: absolute;
    right: 5vh;
    bottom: 5vh;
}
</style>
