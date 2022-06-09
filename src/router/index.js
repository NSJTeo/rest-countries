import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Country from '../views/Country.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // delete after
  // {
  //   path: '/country',
  //   name: 'Country',
  //   component: Country,
  // },
  {
    path: '/country/:id',
    name: 'Country',
    component: Country,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
