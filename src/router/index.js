import { nextTick } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Index.vue'),
    meta: {
      title: '早餐店菜單',
      description: '可以查看早餐店所有餐點。',
    },
  },
  {
    path: '/calculation',
    component: () => import('@/views/PriceCalculation.vue'),
    meta: {
      title: '菜單試算',
      description: '可以試算早餐店餐點價格。',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});
const defaultTitle = 'breakfast_menu';
router.beforeEach((to) => {
  console.dir(document);
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description);
  nextTick();
});

export default router;
