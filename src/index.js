import * as Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { DatePicker } from 'ant-design-vue';

const app = Vue.createApp(App);

app.use(router);
app.use(store);
app.use(DatePicker);

app.mount('#app');