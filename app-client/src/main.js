// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

/*引入第三方文件rem.js，在全局都起作用*/
require('./assets/js/rem.js');
/*引入第三方文件侧栏滑动slideout.js，在全局都起作用
require('./assets/js/slideout.js');*/

/*引入图标文件,在全局都起作用*/
require('./assets/fonts/glyphicons/css/glyphicons.css');
require('./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css');
/* 有公共样式reset.css,作用域设为全局 */
require ("./assets/css/reset.css");

Vue.config.productionTip = false;

Vue.use(MintUI);

router.beforeEach((to,from,next) => {//路由校验
  if(to.matched.some( m => m.meta.auth)){
  // 对路由进行验证
    if(store.state.isLogin === '100') { // 已经登陆
      next();  // 正常跳转到你设置好的页面
    }else{
    // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({path:'/signin',query:{ Rurl: to.fullPath} });
    }
  }else{
      next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  MintUI,
  template: '<App/>',
  components: { App }
});
/*main.js是整个项目的主js文件，入口文件
当npm run dev的时候，默认会把main.js和index.html关联，
webpack会给打包。*/
