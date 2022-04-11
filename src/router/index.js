import { createWebHashHistory, createRouter } from 'vue-router';
import todoList from '../views/todoList.vue'

const routes = [
    {
        path: "/todolist",
        name: "todo List",
        component: todoList
    },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});