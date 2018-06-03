<template>
  <div class="personal">
    <div class="me-head">
      <i v-on:click="toIndex"><span class="fa fa-angle-left"></span></i>
      <h2>My comments</h2>
    </div>
    <div class="personal-content">
      <div class="account">
        <ul class="news-list-ul">
          <li class="news-list-ulli" v-for="news in commentList">
            <div class="comment-words">
              <p>{{news.text}}</p>
              <a>{{news.addtime}}</a>
              <span class="fa fa-trash-o"></span>
            </div>
            <router-link v-bind:to="'/news/'+ news.nid ">
              <div class="news">
                <img src="../../assets/img/p5.png" alt="">
                <div class="name-date">
                  <div class="name">{{news.title}}</div>
                </div>
              </div>
            </router-link>
        </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import SignHead from '../common/SignHead.vue'
  import Axios from 'axios'
  import qs from 'qs'
  import $ from 'jquery'


  export default {
    data(){
      return{
        isNowPage: true,
        login_id:0,
        commentList:[]
      }
    },
    components:{
      SignHead
    },
    mounted(){
      //this.$store.dispatch('changeTitle', 'Personal center');

      console.log(document.cookie);
      if(document.cookie !== ""){
        var arr = document.cookie.split(";")[1];
        var new_arr = arr.split("=")[1];
        this.login_id = new_arr;
      }
      var _this=this;
      Axios.get('http://localhost:3000/personalcomment', {params: {id: _this.login_id}}).then((res)=>{
        this.commentList = this.commentList.concat(res.data);
      });
    },
    methods:{
      toIndex:function(){
        history.go(-1);
      }
    }
  }
</script>

<style scoped>
  .personal-content {width: 100%; position: absolute; top:0.8rem; bottom:0;
    text-align: center;
    /*background: -webkit-linear-gradient(#1649a9, #dadada);渐变背景色*/ }

  .me-head { display: flex; height: 0.8rem; color: #fff; position: fixed; top: 0; width: 100%;
    background: #ffffff; border-bottom: 0.01rem solid #e7e7e7; z-index: 1;}
  .me-head span{ width: 0.8rem; height: 0.8rem; line-height: 0.8rem; text-align:center; font-size: 0.3rem; color: #c9c9c9; }
  .me-head h2 { flex: 1; text-align: center; text-indent: -0.8rem; line-height: 0.8rem; font-size: 0.3rem;
    font-weight: bold; color: #000000;}

  .news-list-ul{background: #f0f0f0;}
  .news-list-ulli{ position: relative; display: inline-block; padding: 0.2rem; font-size: 0.2rem;}
  /*.news-list-ulli img{ left: 0; top: 0; width: 1rem; height: 1rem; float: left; margin: 0.1rem 0.2rem 0 0;  text-align: center;}*/
  .comment-words {display: flex; width:6rem; padding: 0.1rem 0;}
  .comment-words p{flex: 3; height: auto; font-size:0.25rem; word-wrap:break-word; word-break:break-all;overflow: hidden;}
  .comment-words a{flex: 2; color: #ababab; font-size: 0.15rem;}
  .comment-words span{flex: 1; padding-top: 0.1rem; font-size: 0.2rem;}
  .news {width:6rem;display: flex; padding-bottom: 0.2rem;border-bottom: 0.02rem solid #d7d7d7; }
 /* .comment-words{ clear: both; margin-bottom: 0.4rem;}*/
  .news img{flex:1 ; width:0.8rem; height: 0.8rem;}
  .name-date{ flex: 5;color: #ababab; margin: 0 0 0.3rem 0; }
  .news .name{ font-size: 0.25rem;}

</style>
