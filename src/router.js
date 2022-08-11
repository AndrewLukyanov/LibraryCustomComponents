import { 
  createWebHashHistory,
  createRouter
} from 'vue-router';

import Home from './Home.vue';
import Button from './components/ui/button/example.vue';
import Checkbox from './components/ui/checkbox/example.vue';
import Dnd from './components/ui/dnd/example.vue';
import Empty from './components/ui/empty/example.vue';
import Glyph from './components/ui/glyph/example.vue';
import ProgressBar from './components/ui/progress-bar/example.vue';
import Rte from './components/ui/rte/example.vue';
import Spinner from './components/ui/spinner/example.vue';
import User from './components/user/example.vue';  

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/button',
      name: 'button',
      component: Button,
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
      path: '/glyph',
      name: 'glyph',
      component: Glyph,
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
    {
      path: '/user',
      name: 'user',
      component: User,
    }
  ],
});

export default router;  