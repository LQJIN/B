import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/index.vue';
import News from '@/components/index/News.vue';
import NewsCommentAdd from '@/components/common/NewsCommentAdd.vue';
import Me from '@/components/index/MeReg.vue';
import MeMainPage from '@/components/index/MeMainPage.vue';
import MeChange from '@/components/index/MeChange.vue';
import Login from '@/components/index/MeSignIn.vue';
import Settings from '@/components/index/Settings.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/news/:nid',
      name: 'News',
      component: News
    },
    {
      path: '/comment',
      name: 'NewsCommentAdd',
      component: NewsCommentAdd
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/memainpage',
      name: 'MeMainPage',
      component: MeMainPage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mechange',
      name: 'MeChange',
      component: MeChange
    }
  ]
});
