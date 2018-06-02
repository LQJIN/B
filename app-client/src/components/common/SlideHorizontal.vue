<template>
  <div class="slide-horizontal">
      <ul class="carousel-tag">
        <li v-for="(tag, index) in tagList " v-on:click="thisTag(index)"
            v-bind:class="{'active':ind === index}">
          <router-link v-bind:to="'/'+ tag.name ">{{tag.name}}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
  import Axios from 'axios'
  import $ from 'jquery';

  export default {
    data(){
      return{
        tagList:[],
        ind: ''
      }
    },
    mounted:function () {
      this.loadTagData();
    },
    methods:{
      loadTagData(){
        Axios.defaults.withCredentials = true;
        Axios.get('http://localhost:3000/tag').then((res)=>{
          //console.log(res.data);
          this.tagList = this.tagList.concat(res.data);
        })
      },
      thisTag:function (index) {
        this.ind = index;
        console.log(this.ind);
      }
    }
  }

</script>

<style scoped>
  .slide-horizontal { background: #00457e; overflow: auto; width: 6.4rem;
    position: fixed; top: 0.6rem; padding-left: 0rem;}
  /*.carousel { overflow-x: scroll;}
  设置导航栏左右滚动，在滚动元素ul的父元素设置overflow-x: scroll;*/
  .slide-horizontal .carousel-tag { width: 7.8rem; height: 0.6rem; line-height: 0.6rem;}
  .slide-horizontal ul li {float: left; height: 0.6rem; text-align: center;
    font-size: 0.25rem; padding: 0 0.2rem; }
  .slide-horizontal a{color: #ffffff; text-decoration:none; border: none;}
  .active {background: #ff5532;}
</style>
