<template>
  <div class="head">
    <ul>
      <li><p class="icon">NewsDaily</p></li>
      <li><span class="icon icon-search"></span></li>
      <li><router-link to="/me"><span class="icon icon-user"></span></router-link></li>
    </ul>
  </div>
</template>

<style scoped>
  .head { display: flex; height: 0.6rem; line-height: 0.6rem;
    position: fixed; top: 0; width: 100%; background-color: #ffffff;}

  .head ul {display: flex; width: 100%;}
  .head ul li {text-align: center;}
  .head ul li:nth-child(1){flex: 8; float: left; text-align: left;
    font-size: 0.3rem; padding-left: 0.4rem; }
  .head ul li:nth-child(2){flex: 1; float: right; }
  .head ul li:nth-child(3){flex: 1; float: right; }

  .head ul li .icon { color: #c9c9c9;}

  .head span{ width: 0.6rem; height: 0.6rem; line-height: 0.6rem;
    text-align:center; float: right; font-size: 0.3rem; color: #ffffff; }
</style>

<script>
  export default {

  }
</script>
