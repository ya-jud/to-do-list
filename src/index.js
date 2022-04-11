import * as Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = Vue.createApp(App);

app.use(router);
app.use(store);
app.use(Antd);

app.mount('#app');