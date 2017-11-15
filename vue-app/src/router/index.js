import Vue from 'vue';
import Router from 'vue-router';
import CatList from '@/components/CatList';
import CatSearch from '@/components/CatSearch';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/list',
  }, {
    path: '/list',
    name: 'CatList',
    component: CatList,
  }, {
    path: '/search',
    name: 'CatSearch',
    component: CatSearch,
  }],
});
