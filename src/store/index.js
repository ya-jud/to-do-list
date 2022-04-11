import { createStore } from 'vuex';

export default createStore({
    state: {
        isOpenModal: false,
    },
    mutations: {
        setOpenModal(state, i) {
            state.isOpenModal = i;
        }
    },
    actions: {
        changeStateModal(state, i) {
            state.commit("setOpenModal", i);
        }
    }
});