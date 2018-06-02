import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/index.vue';
import News from '@/components/index/News.vue';
import NewsCommentAdd from '@/components/common/NewsCommentAdd.vue';
import CreateAccount from '@/components/index/CreateAccount.vue';
import Personal from '@/components/index/Personal.vue';
import MeChange from '@/components/index/MeChange.vue';
import SignIn from '@/components/index/SignIn.vue';
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
      path: '/news/:nid',/*获取组件中的nid*/
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
      path: '/createaccount',
      name: 'CreateAccount',
      component: CreateAccount,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta:{ auth : true } // 设置当前路由需要校验  不需要校验的路由就不用写
    },
    {
      path: '/mechange',
      name: 'MeChange',
      component: MeChange
    }
  ]
});
