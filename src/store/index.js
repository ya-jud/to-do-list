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
    // так как я не использую tasks, а вместо использую filteredTasks из getters,
    // то и мутация как таковая не нужна.
    // другого действительно не придумал
    // setCompleted(state, i) {
    //     state.tasks[i].completed = !state.tasks[i].completed;
    // },
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
      // не знаю насколько профитно, делал "по-фану".
      // По сути генерирую свой айдишник для таски.
      let uid = () => {
        let randomValue = Math.floor(Math.random() * (99 - 10) + 10) + "";
        return randomValue + this.state.tasksCounter;
      };
      state.commit("setTask", {
        uid: uid(),
        text: i.text,
        completed: false,
        createdDate: i.createdDate
      });
      state.commit("setCounter");
    },
    completedTask({commit, getters}, i) {
      // commit('setCompleted', i);
      // целесообразно ли? не мог давно решить свою проблемаму с фильтрами...
      // в итоге пришел к такому решению:
      getters.filteredTasks[i].completed = !getters.filteredTasks[i].completed
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