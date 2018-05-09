<template>
  <div class="me-main-page">
    <me-head></me-head>
    <div class="me-main-page-content">

      <div class="account">
        <router-link to="/mechange">
        <img class="img" src="../../assets/img/p4.png" alt="">

        <h4 class="name">account name</h4>
        </router-link>
      </div>
      <div class="features">
        <ul>
          <li><router-link to="">
            <div class="block"><span class="icon-download-alt"></span><h5>DOWNLOAD</h5></div>
          </router-link></li>
          <li><router-link to="">
            <div class="block"><span class="icon-comment-alt"></span><h5>MY COMMENTS</h5></div>
          </router-link></li>
          <li><router-link to="">
            <div class="block"><span class="icon-lightbulb"></span><h5>DARK</h5></div>
          </router-link></li>
          <li><router-link to="">
            <div class="block"><span class="icon-star-empty"></span><h5>SAVED</h5></div>
          </router-link></li>
        </ul>
      </div>
    </div>
    <foot v-bind:class="{'isMe':isNowPage}"></foot>
  </div>
</template>

<style scoped>

  .me-main-page-content {padding: 0 0.3rem; width:5.8rem; position: absolute; top:1rem; bottom: 0; text-align: center;
    background: -webkit-linear-gradient(#1649a9, #dadada); margin: 0 0 0.7rem 0;}

  .account{ height: 2.5rem; width: 100%; margin-top: 0.4rem;}
  .account .img{ width: 1.4rem; height: 1.4rem; border-radius: 50%; background-color: transparent; }
  .account .name{ color: #ffffff; padding-top: 0.2rem;}

  .features { display: flex; flex-wrap: wrap;}
  .features .block{ width: 2.4rem; height: 2rem; background: #ffffff; text-align: center;}
  .features .block span{color: #1649a9;}
  .features .block h5{color: #0d4473;}
  .features ul li {display: inline-block; font-size: 0.8rem; padding: 0.2rem;}
  .features ul li:nth-child(1){flex: 1;}
  .features ul li:nth-child(2){flex: 1;}
  .features ul li:nth-child(3){flex: 1;}
  .features ul li:nth-child(4){flex: 1;}
</style>

<script>
  import MeHead from '../common/MeHead.vue'
  import Foot from '../common/Foot.vue'

  export default {
    components:{
      MeHead,
      Foot
    },
    data(){
      return{
        isNowPage: true
      }
    }
  }
</script>
