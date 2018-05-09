<template>
  <div class="slide-horizontal">
      <ul class="carousel-tag">
        <li v-for="(tag, index) in tagList "
            v-on:click="thisTag(index)"
            v-bind:class="{'active':ind === index}">{{tag}}</li>
      </ul>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    data(){
      return{
        tagList:['Home', 'Popular', 'China', 'Business', 'Opinion', 'Other'],
        ind: ''
      }
    },
    methods:{
      thisTag:function (index) {
        this.ind = index;
        console.log(this.ind);
      }
    }
  }

</script>

<style scoped>
  .slide-horizontal { background: #00558e; overflow: auto; width: 6.4rem;
    position: fixed; top: 0.6rem;}
  /*.carousel { overflow-x: scroll;}
  设置导航栏左右滚动，在滚动元素ul的父元素设置overflow-x: scroll;*/
  .slide-horizontal .carousel-tag { width: 8.2rem; height: 0.6rem; line-height: 0.6rem;}
  .slide-horizontal ul li {float: left; height: 0.6rem; text-align: center;
    color: #ffffff; font-size: 0.3rem; padding: 0 0.2rem;}
  .active {background: #00446e;}
</style>
