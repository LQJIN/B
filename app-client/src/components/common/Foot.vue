<template>
  <div class="foot fixed">
    <ul>
      <li>
        <router-link to="/">
          <span class="glyphicon glyphicon-list-alt"></span>
          <h5>NEWS</h5>
        </router-link>
      </li>
      <li>
        <router-link to="/me">
          <span class="glyphicon glyphicon-user"></span>
          <h5>ME</h5>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>

  .foot{position:fixed;width: 100%; bottom: 0; }

  ul {display: flex; height: 0.7rem;line-height: 0.7rem;}
  ul li {flex: 1;  background-color: #dee2e3; text-align: center; font-size: 0.3rem}
  ul li:nth-child(1){border-right: 0.03rem solid #d9d9d9; }

  .foot a{display: inline-block; width: 100%;height: 100%; color: #989898; text-align:center;}

  .foot span{width: 0.45rem; height: 0.7rem; line-height: 0.7rem;  font-size: 0.36rem;}
  .foot h5{ display: inline-block; text-align: center; position: relative;
    bottom: 0.09rem; font-size: 0.2rem;}
  .isNews li:first-child a{ color: #0d4473;}
  .isMe li:last-child a{color: #0d4473;}
</style>

<!-- 可以看到foot.vue使用了<router-link>标签，该标签主要实现跳转链接功能，
属性to='/'即是跳转到path为'/'的路径（即我们在路由配置中定义的Index路由） -->
<!-- 在<style>标签上添加scoped，声明作用域，样式效果只在该页面内生效，不污染全局。 -->
