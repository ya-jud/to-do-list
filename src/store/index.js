import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state: {
        isOpenModal: false,
        tasksCounter: 0,
        tasks: [],
        stateFilter: "",
    },
    getters: {
        filteredTasks(state) {
            switch(state.stateFilter) {
                case 'tasks':
                    return state.tasks;
                case 'active':
                    return state.tasks.filter((task) =>  !task.completed);
                case 'completed':
                    return state.tasks.filter((task) => task.completed);
                default:
                    return null // catch((err) => {})
            }
        }
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
        deleteListTasks(state) {
            state.tasks = state.tasks.filter((task) => !task.completed);
        },
        deleteTask(state, i) {
            state.tasks.splice(i, 1);
        },
        setStateFilter(state, i) {
            state.stateFilter = i;
        }
    },
    actions: {
        changeStateModal(state, i) {
            state.commit("setOpenModal", i);
        },
        addNewTask(state, i) {
            state.commit("setTask", {
                text: i.text,
                completed: false,
                createdDate: i.createdDate
            });
            state.commit("setCounter");
        },
        completedTask(state, i) {
            state.commit("setCompleted", { index: i.idTask, completed: i.completed });
        },
        deleteListTasks(state) {
            state.commit("deleteListTasks");
            state.commit("setCounter");
        },
        deleteTask(state, i) {
            state.commit("deleteTask", i)
            state.commit("setCounter");
        },
        setFilterTasks(state, i) {
            state.commit("setStateFilter", i);
        }
    },
    plugins: [createPersistedState()],
});