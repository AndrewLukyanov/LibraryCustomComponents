import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Router from './router';
import Components from './components/index';
import '@mdi/font/css/materialdesignicons.css';
import './styles/index.sass';

const app = createApp(App);
const pinia = createPinia();

Components(app);
app.use(Router);
app.use(pinia);
app.mount('#app');
