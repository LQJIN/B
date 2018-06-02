<template>
  <div class="news-detail">
    <article v-for="detail in newsDetail">
      <h2>{{detail.title}}</h2>
      <h6>updated:{{detail.time}}</h6>
     <!-- <img src="../../assets/img/p2.png" alt="">-->
      <p v-model="detail.content">{{detail.content}}</p>
    </article>
  </div>
</template>

<script>
  import Axios from 'axios'

  export default {
    data(){
      return{
        newsId: this.$route.params,//this.$route.params.是固定的,获取url传来的参数nid
        newsDetail:[]
      }
    },
    mounted: function () {
      this.loadData();
    },
    methods: {
      loadData(){
        /*测试输出url上的nid
        console.log(this.newsId.nid);*/
        var nid = this.newsId.nid;
        Axios.defaults.withCredentials = true;
        Axios.get('http://localhost:3000/newsDetail',{params: {newsId: nid}}).then((res)=>{
          /*获取vue路由上传来的参数nid，作为get请求的参数传给server*/
          /*测试数据请求*/
          //console.log(res.data);
          this.newsDetail = this.newsDetail.concat(res.data);
        });
      }
    }
  }


</script>

<style scoped>
  .news-detail{margin-top: 0.6rem;}
  .news-detail h2{font-size: 0.3rem; font-weight: bold; color: #000000;}
  .news-detail h6{font-size: 0.2rem; color: #999999; padding: 0.2rem 0;}
  .news-detail p{font-size: 0.22rem; }
  .news-detail article{display: block; padding: 0.2rem; width: 6rem; word-wrap:break-word; }
  .news-detail img{ width: 5.6rem; height: 2.5rem; margin: 0.2rem;}
</style>

<!--标签内英文换行，两个属性word-wrap:break-word;word-break:break-all;前提是加上宽度。-->
