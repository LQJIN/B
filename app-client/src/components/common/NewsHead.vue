<template>
  <div class="news-head">
    <ul>
      <li v-on:click="toIndex"><span class="icon-chevron-left"></span></li>
      <!--<li><span class="icon-zoom-in"></span></li>-->
      <li><span v-on:click="toggle()" v-bind:class="{'icon-star-empty': isEmpty, 'icon-star': !isEmpty}"></span></li>
    </ul>
  </div>
</template>

<style scoped>
  .news-head { height: 0.9rem; position: fixed; top: 0; width: 100%; background: #ffffff; }
  .news-head { border-bottom: 0.02rem solid #a2b7b8; z-index: 1;}

  .news-head ul li { display: inline-block; width: 0.8rem; height: 0.8rem; line-height: 0.8rem;
    text-align: center; font-size: 0.5rem; color: #0d4473; padding-top: 0.1rem;}

  .news-head ul li:nth-child(2){  float: right;}
  /*.news-head ul li:nth-child(2){  float: right;}*/
</style>

<script>
  export default {
    data(){
      return{
        isEmpty: true,
      }
    },
    methods:{
      toIndex:function(){
        history.back();
      },
      toggle:function () {
        this.isEmpty = !this.isEmpty;
      }
    }
  }
</script>
