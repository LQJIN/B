<template>
  <div class="news-foot">
    <ul class="foot-list">
      <!--<li>
        <a v-on:click="msgAdd()">
          <h5>{{msg}}</h5>
          <span class="fa fa-thumbs-o-up"></span>
        </a>
      </li>-->
      <li v-for="num in commentNum">
        <router-link to="/comment">
          <h5>{{num.comm}}</h5>
          <span class="fa fa-commenting-o"></span>
        </router-link>
      </li>
      <!--li>
        <a>
          <span v-on:click="toggle()" v-bind:class="{'fa fa-sticky-note-o': isEmpty, 'fa fa-sticky-note': !isEmpty}"></span>
        </a>
      </li>-->
      <li>
        <a><span class="fa fa-share-alt"></span></a>
      </li>
    </ul>
    <div class="popup">
      <div class="popup-content">
        <ul class="other-account-list" >
          <li>
            <div class="block">
              <img src="../../assets/img/message.png" alt="Twitter">
              <i>Message</i>
            </div>
          </li>
          <li><div class="block"><img src="../../assets/img/weibo.png" alt="Weibo"><i>Weibo</i></div></li>
          <li><div class="block"><img src="../../assets/img/wechat.png" alt="WeChat"><i>WeChat</i></div></li>
          <li><div class="block"><img src="../../assets/img/Moments.png" alt="weibo"><i>Moments</i></div></li>
          <li><div class="block"><img src="../../assets/img/mail.png" alt="Mail"><i>Mail</i></div></li>
          <li><div class="block"><img src="../../assets/img/twitter.png" alt="Message"><i>Twitter</i></div></li>
          <li><div class="block"><img src="../../assets/img/browser.png" alt="Browser"><i>Browser</i></div></li>
          <li>
            <div class="block">
              <img src="../../assets/img/FaceBook.png" alt="FaceBook">
              <i>FaceBook</i>
            </div>
          </li>
        </ul>
        <button class="close">Close</button>
      </div>
      <!--<div class="popup-bg"></div>-->
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import $ from 'jquery'

  export default {
    data(){
      return{
        newsId: this.$route.params,//this.$route.params.是固定的,获取url传来的参数nid
        commentNum:[]
      }
    },
    mounted:function () {
      $(document).ready(function () {
        $('.fa-share-alt, .close, .popup-bg').click(function(e){
          e.preventDefault(); //阻止默认点击事件
          $('.popup').toggleClass('show');
        })
      });
      this.loadData();
    },
    methods:{
      loadData(){
        /*测试输出url上的nid
        console.log(this.newsId.nid);*/
        var nid = this.newsId.nid;
        Axios.defaults.withCredentials = true;
        Axios.get('http://localhost:3000/newsCommentNum',{params: {newsId: nid}}).then((res)=>{
          /*获取vue路由上传来的参数nid，作为get请求的参数传给server*/
          /*测试数据请求*/
          console.log(res.data);
          this.commentNum = this.commentNum.concat(res.data);
        });
      }
      /*msgAdd(){
        this.msg++;
      },
      toggle:function () {
        this.isEmpty = !this.isEmpty;
      }*/
    }
  }
</script>

<style scoped>
  .news-foot{position:fixed; width: 100%; bottom: 0; }

  .foot-list {display: flex; height: 0.6rem;line-height: 0.6rem; border-top: 0.02rem solid #e7e7e7;}
  .foot-list li {flex: 1;  background-color: #ffffff; text-align: center; font-size: 0.3rem;}
  .foot-list li:nth-child(3){padding-top: 0.02rem;}
  .news-foot a{display: inline-block; width: 100%;height: 100%; color: #999999; text-align:center;}

  .news-foot span{width: 0.44rem; height: 0.6rem; line-height: 0.6rem;  font-size: 0.3rem;}
  .news-foot h5{ display: inline-block; text-align: center; position: relative; font-size: 0.25rem;}
  /*解决了foot.vue和BlogFoot.vue中图标和文字不能对齐的问题。
      文字在<h5>标签中，给h5设置为inline-block行块，然后通过定位控制了文字与图标的位置。*/


  /*弹出图层*/
  .other-account-list{ display: flex; display: -webkit-flex; /* Safari */ flex-wrap: wrap;  text-align: center;}
  .other-account-list li { background: #f0f0f0; text-align: center; padding-top: 0.1rem;}

  .block {display: inline-block; width: 1.3rem; height: 1.3rem; background-color: #f0f0f0;}
  .block img{ width: 0.8rem; height: 0.8rem;position: absolute;}
  .block i{ font-size: 0.2rem; position: relative; top: 0.7rem;}

  .other-account-list li:nth-child(1){flex: 1; margin-left: 0.18rem;}
  .other-account-list li:nth-child(2){flex: 1; }

  .other-account-list li:nth-child(3){flex: 1; }
  .other-account-list li:nth-child(4){flex: 1; }
  .other-account-list li:nth-child(5){flex: 1; }
  .other-account-list li:nth-child(6){flex: 1; }
  .other-account-list li:nth-child(7){flex: 1; }
  .other-account-list li:nth-child(8){flex: 1; }
  .popup {transition: all .5s; -webkit-transition: all .5s; visibility: hidden; opacity: 0;}
  .popup.show{visibility: visible; opacity: 1;}
  .popup {position: fixed; top:0; left: 0; width: 100%; height: 100%;}
  /*.popup.show{transform: translateY(0rem); -webkit-transform: translateY(0rem);}*/
  .popup-content {
    /*设置定位方式为绝对定位，且设置较高的z-index值，使其浮于其他元素上方*/
    position: absolute; z-index: 200;
    /*设置元素大小*/
    width: 100%; height: 3.6rem; padding:0.2rem 0 0 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /*使元素居中显示*/
    bottom: 0;
    /*设置背景、阴影等外观样式*/
    background: #f0f0f0; box-shadow: 0 0.1rem 0.15rem rgba(0,0,0,.2);
  }
  .close {position: absolute; bottom: 0; width: 100%; height: 0.7rem; border: 0; font-size: 0.3rem;
    padding: 0 0.5rem; color: #000000; background-color: #ffffff;}
  .popup-bg{ position: relative; z-index: 100; width: 100%; height: 100%; background: rgba(0,0,0,.3); }
</style>

