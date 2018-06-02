<template>
  <div class="head">
    <ul class="head-ul">
      <li><p class="fa">NewsDaily</p></li>
      <li><span class="fa fa-search"></span></li>
      <li><router-link to="/personal"><span class="fa fa-user"></span></router-link></li>
     <!-- <li><router-link to="/signin" ><span class="fa fa-user"></span></router-link></li>-->
    </ul>

  </div>
</template>


<style scoped>
  .head { display: flex; height: 0.6rem; line-height: 0.6rem;
    position: fixed; top: 0; width: 100%; background-color: #ffffff;}

  .head-ul {display: flex; width: 100%;}
  .head-ul li {text-align: center;}
  .head-ul li:nth-child(1){flex: 8; float: left; text-align: left;
    font-size: 0.25rem; padding-left: 0.3rem; }
  .head-ul li:nth-child(2){flex: 1; float: right; }
  .head-ul li:nth-child(3){flex: 1; float: right; }

  .head-ul li .fa { color: #c9c9c9;}

  .head-ul span{ width: 0.6rem; height: 0.6rem; line-height: 0.6rem;
    text-align:center; float: right; font-size: 0.25rem; color: #ffffff; }
</style>
