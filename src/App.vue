<template>
    <div>
        <div class="content">
             <router-view />
        </div>
    </div>
</template>

<script>
import store from './store/index'
import router from './router/index'

export default {
    mounted() {
        const component = this;
        this.handler = function (e) {
            component.$emit('keydown', e);
            if(e.key === 'Enter' && !store.state.isOpenModal){
                store.dispatch("changeStateModal", true);
            }
            if(e.key === 'Enter' && store.state.isOpenModal) {
                console.log('ok')
                // store.dispatch("changeStateModal", false)
            }
            else return null
        }
        window.addEventListener('keydown', this.handler);
        router.push({ path: "/todolist" }).catch(() => {});
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handler);
    }
}

</script>

<style scoped>
.content {
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 360px;
}
</style>