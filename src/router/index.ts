import { createRouter, createWebHistory } from 'vue-router';
import ListEditor from '@/views/ListEditor.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListEditor,
    },
  ]
});

export default router;
