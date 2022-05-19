import { createWebHashHistory, createRouter } from 'vue-router';

import App from './App.vue';

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
    }
  ]
});

export default router;  