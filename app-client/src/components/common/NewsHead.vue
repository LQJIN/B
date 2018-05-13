<template>
  <div class="news-head">
    <ul>
      <li v-on:click="toIndex"><span class="fa fa-angle-left"></span></li>
      <!--<li><span class="icon-zoom-in"></span></li>-->
      <!--<li><span v-on:click="toggle()" v-bind:class="{'icon-star-empty': isEmpty, 'icon-star': !isEmpty}"></span></li>-->
    </ul>
  </div>
</template>

<style scoped>
  .news-head { height: 0.6rem; position: fixed; top: 0; width: 100%; background: #ffffff; }
  .news-head { border-bottom: 0.01rem solid #e7e7e7; z-index: 1;}
  .news-head ul li { display: inline-block; width: 0.8rem; height: 0.6rem; line-height: 0.6rem;
    text-align: center; font-size: 0.4rem; color: #c9c9c9;}
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
