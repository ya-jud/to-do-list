import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
    // {
    //     path: "/Textarea",
    //     name: "Textarea",
    //     component: Textarea
    // },
    // {
    //     path: "/TableResult",
    //     name: "Tableresult",
    //     component: TableResult
    // }
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});