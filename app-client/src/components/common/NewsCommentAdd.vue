<template>
  <div class="news-comment-add">
    <div class="me-head">
      <i v-on:click="goBack"><span class="fa fa-angle-left"></span></i>
      <h2>Comments</h2>
    </div>
    <div class="comment-content">
      <div class="comment-li">
        <ul>
          <li v-for="detail in commentDetail">
            <img src="../../assets/img/p6.png" alt="">
            <div class="comments">
              <div class="name-date">
                <div class="name">{{detail.account}}</div>
                <div class="date">{{detail.addtime}}</div>
              </div>
              <div class="comment-words">
                <p>{{detail.text}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="comment-sent">
        <form action="" method="post">
          <input type="text" title="comment" placeholder="make comments"/>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <div class="content-bg"></div>
  </div>
</template>

<script>
  import Axios from 'axios'

  export default {
    data(){
      return{
        newsId: this.$route.params,//this.$route.params.是固定的,获取NewsFoot.vue url传来的参数nid
        commentDetail:[]
      }
    },
    mounted: function () {
      this.loadData();
    },
    methods: {
      goBack:function () {
        history.back();
      },
      loadData(){
        /*测试输出url上的nid
        console.log(this.newsId.nid);*/
        var nid = this.newsId.nid;
        Axios.defaults.withCredentials = true;
        Axios.get('http://localhost:3000/commentDetail',{params: {newsId: nid}}).then((res)=>{
          /*获取vue路由上传来的参数nid，作为get请求的参数传给server*/
          /*测试数据请求*/
          //console.log(res.data);
          this.commentDetail = this.commentDetail.concat(res.data);
        });
      }
    }
  }
</script>

<style scoped>
  .me-head { display: flex; height: 0.6rem; color: #fff; position: fixed; top: 0; width: 100%;
    background: #ffffff; border-bottom: 0.01rem solid #e7e7e7; z-index: 1;}
  .me-head span{ width: 0.8rem; height: 0.6rem; line-height: 0.6rem; text-align:center; font-size: 0.3rem; color: #c9c9c9; }
  .me-head h2 { flex: 1; text-align: center; text-indent: -0.5rem; line-height: 0.6rem; font-size: 0.3rem;
    font-weight: bold; color: #000000;}

  .comment-li {margin: 0.62rem 0.2rem 1.2rem 0.2rem; }
  .comment-li ul li{ position: relative; padding: 0.2rem 0 0 0; display: inline-block; font-size: 0.2rem;}
  .comment-li img{ left: 0; top: 0; width: 1rem; height: 1rem; float: left; margin: 0.1rem 0.2rem 0 0;  text-align: center; border-radius: 50%;}

  .comments {width:4.8rem; float: right; border-bottom: 0.02rem solid #d7d7d7; }
  .comment-words{ clear: both; margin-bottom: 0.4rem;}
  .name-date{ color: #ababab; margin: 0 0 0.3rem 0;}
  .comments .name{ float: left; font-size: 0.25rem;}
  .comments .date{ float: right;}

  .comment-sent{ position: fixed; bottom: 0; width: 100%; height: 1.2rem; background: #eeeeee; }
  .comment-sent form{margin: 0.2rem 0.2rem 0.2rem 0.22rem;}
  .comment-sent input{ width: 4.2rem; height: 0.8rem; font-size: 0.22rem; border: none; padding-left: 0.2rem;}
  .comment-sent button{ width: 1.4rem; height: 0.8rem; background: #1c4d9c;
    border: none; color: #ffffff; margin-left: 0.1rem; font-size: 0.25rem;}
</style>
