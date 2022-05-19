import { createApp } from 'vue'
import App from './App.vue'
import Router from './router';
import Components from './components/index';

const app = createApp(App);
Components(app);
app.use(Router);
app.mount('#app')
