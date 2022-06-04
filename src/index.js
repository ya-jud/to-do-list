import * as Vue from 'vue';
import App from './App.vue';
import * as Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import router from './router';
import store from './store';
// import * as serviceWorker from './serviceWorker';

// if ('serviceWorker' in navigator) {
//   ServiceWorkerContainer.register('service-worker.js', { scope: './' }).then(function(registration) {
//     console.log('Service worker зарегистрирован:', registration);
//   }).catch(function(error) {
//     console.log('Ошибка при регистрации service worker-а:', error);
//   });
// } else {
//   console.log('Текущий браузер не поддерживает service worker-ы');
// }

const app = Vue.createApp(App);

app.use(router);
app.use(store);
app.use(Antd);

app.mount('#app');