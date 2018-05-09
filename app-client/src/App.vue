<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
::-webkit-scrollbar {/*隐藏滚轮*/
  display: none;
}
  /*::-webkit-scrollbar{
    width:0;
    height:0;
  }*//*移动端 去除滚动条 设置滚动条宽度高度为零 */
</style>
<!--App.vue是整个项目的主组件。
其中的<router-view></router-view>会加载路由文件index.js中定义的路由组件。
所有组件都通过加载到<router-view></router-view>上显示在页面上。
-->
