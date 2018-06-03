import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/index.vue';
import newsHome from '@/components/index/newsHome.vue';
import newsChina from '@/components/index/newsChina.vue';
import newsWorld from '@/components/index/newsWorld.vue';
import newsBusiness from '@/components/index/newsBusiness.vue';
import newsSports from '@/components/index/newsSports.vue';
import newsOpinion from '@/components/index/newsOpinion.vue';
import newsLife from '@/components/index/newsLife.vue';
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
      redirect:'/Home'
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        { path: "/Home", component: newsHome },
        { path: "/China", component: newsChina },
        { path: "/World", component: newsWorld },
        { path: "/Business", component: newsBusiness },
        { path: "/Sports", component: newsSports },
        { path: "/Opinion", component: newsOpinion },
        { path: "/Life", component: newsLife }
      ]
    },
    {
      path: '/news/:nid',/*获取组件中的nid*/
      name: 'News',
      component: News
    },
    {
      path: '/comment/:nid',/*获取组件中的nid*/
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
