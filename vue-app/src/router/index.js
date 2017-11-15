import Vue from 'vue';
import Router from 'vue-router';
import CatList from '@/components/CatList';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'CatList',
    component: CatList,
  }, ],
});
