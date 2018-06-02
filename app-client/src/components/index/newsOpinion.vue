<template>
  <div class="news-World">
    <ul class="news-list-ul">
      <li class="news-list-ulli" v-for="news in newsList">
        <router-link v-bind:to="'/news/'+ news.nid "><!--传输nid给路由-->
          <div class="text">
            <h5>{{news.title}}</h5>
            <!--测试nid<h5>{{news.nid}}</h5>-->
            <div class="text-p">
              <p class="introduction">{{news.content}}</p>
            </div>
            <ul>
              <li class="tag">{{news.name}}</li>
              <li class="date">{{news.time}}</li>
              <!--<li class="comment"><span class="glyphicon glyphicon-comment"></span>{{news.comm}}</li>-->
            </ul>
          </div>
          <!--<div class="img">
            <img :src="news.images.small" alt="" />
          </div>-->
          <div class="img">
            <img src="../../assets/img/p5.png" alt="" />
          </div>
        </router-link>
      </li>
    </ul>
    <div class="loading" v-show="show">
      <span><img src="../../assets/img/loading.gif"></span>
    </div>
  </div>
</template>
<script>
  import Axios from 'axios'
  import $ from 'jquery'

  export default{
    data(){
      return {
        newsList:[],
        show:false,
      }
    },
    mounted:function () {
      this.loadData();
      var _this = this;
      $(window).scroll(function(){
        var windowHeight = $(this).height();
        var scrollTop = $(this).scrollTop();
        var height = $(document).height();
        if(windowHeight + scrollTop >= height){
          _this.show = true;
          _this.loadData();
        }
      });
    },
    methods:{
      loadData(){
        var length = this.newsList.length;
        Axios.defaults.withCredentials = true;
        Axios.get('http://localhost:3000/newsOpinion').then((res)=>{
          /*get获取news数据*/
          //测试数据请求
          //console.log(res.data);
          this.newsList = this.newsList.concat(res.data);
          this.show = false;
        })
      }
    }
  }
</script>

<style scoped>
  .news-World{  margin-top: 1.2rem;}

  .news-list-ul{padding: 0 0.2rem;}
  .news-list-ulli{ display: inline-block; padding: 0.2rem 0; border-bottom: 0.02rem solid #f8f8f8;}
  .text{ float: left; text-align: left; font-size: 0.2rem; width: 4.2rem; /*height: 1.2rem;*/}
  .text h5{ font-size: 0.25rem; font-weight:bold; color: #2c3e50; margin-bottom: 0.1rem;}
  .text-p{ font-size: 0.2rem; color: #b9b9b9; display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden; margin-bottom: 0.2rem;}
  .text ul li{ display: inline-block; margin-right: 0.05rem;}
  .text ul li span{ z-index: -1;}
  .img{ float: right; width: 1.6rem; height: 1.4rem; line-height: 1.4rem; padding-top: 0.4rem; text-align: center;}
  .tag{ color: #023b6b;}
  .date{ color: #b9b9b9;}
  .comment{ color: #104775; }
  .comment span{margin-right: 0.1rem;}
</style>
