<template>
  <div class="news-list">
    <ul class="news-list-ul">
      <!--<li class="news-list-li" >
        <router-link to="/news">
          <div class="text">
            <h4>Iconfont+ 完美的图标字体</h4>
            <div class="text-p">
              <p class="introduction">阿里妈妈MUX倾力打造的矢量图标管理、交流平台。
                设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。</p>
            </div>
            <ul>
              <li class="tag">Icon</li>
              <li class="date">2018.01.01</li>
              <li class="comment"><span class="glyphicon glyphicon-comment"></span> 0</li>
            </ul>
          </div>
          <div class="img">
            <img src="../../assets/img/p1.png" alt="" />
          </div>
        </router-link>
      </li>-->
      <li class="news-list-ulli" v-for="news in newsList">
        <router-link to="/news">
          <div class="text">
            <h5>{{news.title}}</h5>
            <div class="text-p">
              <p class="introduction">{{news.content}}</p>
            </div>
            <ul>
              <li class="tag">{{news.tag}}</li>
              <li class="date">{{news.time}}</li>
              <li class="comment"><span class="glyphicon glyphicon-comment"></span>{{news.hits}}</li>
            </ul>
          </div>
          <!--<div class="img">
            <img :src="news.images.small" alt="" />
          </div>-->
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

  export default {
    data(){
      return {
        newsList:[],
        show:false
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
        Axios.get('http://localhost:3000/index').then((res)=>{
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
  .news-list{ padding: 0 0.2rem; margin-top: 1.2rem;}
  .news-list-ulli{ display: inline-block; padding: 0.2rem 0; border-bottom: 0.02rem solid #f8f8f8;}
  .text{ float: left; text-align: left; font-size: 0.2rem; width: 4.2rem; /*height: 1.2rem;*/}
  .text h5{ font-size: 0.25rem; font-weight:bold; color: #2c3e50; margin-bottom: 0.1rem;}
  .text-p{ font-size: 0.2rem; color: #b9b9b9; display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden; margin-bottom: 0.2rem;}
  .text ul li{ display: inline-block; margin-right: 0.05rem;}
  .text ul li span{ z-index: -1;}
  .img{ float: right; width: 1.4rem; height: 1.2rem; line-height: 1.4rem; text-align: center;}
  .tag{ color: #023b6b;}
  .date{ color: #b9b9b9;}
  .comment{ color: #104775; }
  .comment span{margin-right: 0.1rem;}
</style>
