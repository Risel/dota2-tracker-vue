import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/matches',
    name: 'matches',
    component: () => import(/* webpackChunkName: "matches" */ '../views/MatchesView.vue'),
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import(/* webpackChunkName: "teams" */ '../views/TeamsView.vue'),
  },
  {
    path: '/matches/:id',
    name: 'SingleMatch',
    component: () => import(/* webpackChunkName: "SingleMatch" */ '../views/SingleMatch.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
