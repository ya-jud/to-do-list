<template>
    <div class="addButton" @click="addTask">
        <a-button shape="circle" size="large">+</a-button>
    </div>
</template>

<script>
export default {
    setup() {},
    methods: {
        addTask() {
            this.$store.dispatch("changeStateModal", true);
        }
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
