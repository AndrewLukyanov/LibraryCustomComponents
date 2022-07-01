import { 
  createWebHashHistory,
  createRouter
} from 'vue-router';

import Home from './pages/home.vue';
import Checkbox from './pages/checkbox.vue';
import Dnd from './pages/dnd.vue';
import Empty from './pages/empty.vue';
import ProgressBar from './pages/progress-bar.vue';
import Rte from './pages/rte.vue';
import Spinner from './pages/spinner.vue'; 

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: Checkbox,
    },
    {
      path: '/dnd',
      name: 'dnd',
      component: Dnd,
    },
    {
      path: '/empty',
      name: 'empty',
      component: Empty,
    },
    {
      path: '/progress-bar',
      name: 'progress-bar',
      component: ProgressBar,
    },
    {
      path: '/rte',
      name: 'rte',
      component: Rte,
    },
    {
      path: '/spinner',
      name: 'spinner',
      component: Spinner,
    },
  ],
});

export default router;  