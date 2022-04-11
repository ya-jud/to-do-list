import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state: {
        isOpenModal: false,
        tasksCounter: 0,
        tasks: [],
        filteredTasks: [],
        stateFilter: "",
    },
    mutations: {
        setOpenModal(state, i) {
            state.isOpenModal = i;
        },
        setCounter(state) {
            state.tasksCounter = state.tasks.length;
        },
        setTask(state, i) {
            state.tasks.push(i);
        },
        setCompleted(state, i) {
            state.tasks[i.index].completed = i.completed;
        },
        deleteTask(state) {
            let tasks = state.tasks;
            state.tasks = tasks.filter((n) => {
                return !n.completed;
            });
        },
        setStateFilter(state, i) {
            state.stateFilter = i;
        },
        setActiveTasks(state) {
            let tasks = state.tasks;
            state.filteredTasks = tasks.filter((n) => {
                return !n.completed;
            });
        },
        setCompletedTasks(state) {
            let tasks = state.tasks;
            state.filteredTasks = tasks.filter((n) => {
                return n.completed;
            });
        }
    },
    actions: {
        changeStateModal(state, i) {
            state.commit("setOpenModal", i);
        },
        addNewTask(state, i) {
            state.commit("setTask", { text: i, completed: false });
            state.commit("setCounter");
        },
        completedTask(state, i) {
            state.commit("setCompleted", { index: i, completed: true });
        },
        deleteTask(state) {
            state.commit("deleteTask");
            state.commit("setCounter");
        },
        setFilterTasks(state, i) {
            state.commit("setStateFilter", i);
        },
        setActiveTasks(state) {
            state.commit("setActiveTasks");
        },
        setCompletedTasks(state) {
            state.commit("setCompletedTasks");
        },
    },
    plugins: [createPersistedState()],
});