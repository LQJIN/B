<template>
  <div class="news-foot">
    <ul>
      <li>
        <a v-on:click="msgAdd()">
          <div>
            <h5>{{msg}}</h5>
            <span class="icon-thumbs-up"></span>
          </div>
        </a>
      </li>
      <li>
        <router-link to="/comment">
          <h5>6</h5>
          <span class=" icon-comments"></span>
        </router-link>
      </li>
      <li>
        <a><span class="icon-share"></span></a>
      </li>
    </ul>
    <div class="popup">
      <div class="popup-content">
        <ul class="other-account-list" >
          <li><div class="block"><img src="../../assets/img/twitter.png" alt="Twitter"><p>Twitter</p></div></li>
          <li><div class="block"><img src="../../assets/img/weibo.png" alt="Weibo"><p>Weibo</p></div></li>
          <li><div class="block"><img src="../../assets/img/wechat.png" alt="WeChat"><p>WeChat</p></div></li>
          <li><div class="block"><img src="../../assets/img/Moments.png" alt="weibo"><p>WeChat Moments</p></div></li>
          <li><div class="block"><img src="../../assets/img/mail.png" alt="Mail"><p>Mail</p></div></li>
          <li><div class="block"><img src="../../assets/img/message.png" alt="Message"><p>Message</p></div></li>
          <li><div class="block"><img src="../../assets/img/browser.png" alt="Browser"><p>Browser</p></div></li>
          <li><div class="block"><img src="../../assets/img/FaceBook.png" alt="FaceBook"><p>FaceBook</p></div></li>
        </ul>
        <button class="close">Cancel</button>
      </div>
      <div class="popup-bg"></div>
    </div>
  </div>
</template>

<style scoped>
  .news-foot{position:fixed; width: 100%; bottom: 0; }

  ul {display: flex; height: 0.7rem;line-height: 0.7rem;}
  ul li {flex: 1;  background-color: #ffffff; text-align: center; font-size: 0.3rem;}
  ul li:nth-child(3){padding-top: 0.03rem;}
  .news-foot a{display: inline-block; width: 100%;height: 100%; color: #1c4d9c; text-align:center;}

  .news-foot span{width: 0.45rem; height: 0.7rem; line-height: 0.7rem;  font-size: 0.4rem;}
  .news-foot h5{ display: inline-block; text-align: center; position: relative; font-size: 0.25rem;}
  /*解决了foot.vue和BlogFoot.vue中图标和文字不能对齐的问题。
      文字在<h5>标签中，给h5设置为inline-block行块，然后通过定位控制了文字与图标的位置。*/


  /*弹出图层*/
  .other-account-list{ display: flex; display: -webkit-flex; /* Safari */ flex-wrap: wrap;  text-align: center;}
  .other-account-list div{width: 1.1rem; height: 1.4rem; padding: 0.2rem 0.2rem 0 0.2rem }
  .other-account-list img{ width: 1rem; height: 1rem;}
  .other-account-list p{ display: block; width: 1.1rem ; height: 0.3rem; font-size: 0.15rem}
  .other-account-list ul li:nth-child(1){flex: 1; }
  .other-account-list ul li:nth-child(2){flex: 1; }
  .other-account-list ul li:nth-child(3){flex: 1; }
  .other-account-list ul li:nth-child(4){flex: 1; }
  .other-account-list ul li:nth-child(5){flex: 1; }
  .other-account-list ul li:nth-child(6){flex: 1; }

  .popup {transition: all .5s; -webkit-transition: all .5s; visibility: hidden; opacity: 0;}
  .popup.show{visibility: visible; opacity: 1;}
  .popup {position: fixed; top:0; left: 0; width: 100%; height: 100%;}
  /*.popup.show{transform: translateY(0rem); -webkit-transform: translateY(0rem);}*/
  .popup-content {
    /*设置定位方式为绝对定位，且设置较高的z-index值，使其浮于其他元素上方*/
    position: absolute; z-index: 200;
    /*设置元素大小*/
    width: 100%; height: 4rem; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;
    /*使元素居中显示*/
    bottom: 0;
    /*设置背景、阴影等外观样式*/
    background: #FFF; box-shadow: 0 0.1rem 0.15rem rgba(0,0,0,.2);
  }
  .popup-content button{position: absolute; bottom: 0; color: #FFF; background: #E74C3C; width: 100%; border: 0; font-size: 0.4rem; padding: 0.1rem 0.5rem;}
  .popup-bg{ position: relative; z-index: 100; width: 100%; height: 100%; background: rgba(0,0,0,.3); }
</style>

<script>
  export default {
    data(){
      let msg = 0;
      return {
        msg
      }
    },
    mounted:function () {
      $(document).ready(function () {
        $('.icon-share, .close, .popup-bg').click(function(e){
          e.preventDefault(); //阻止默认点击事件
          $('.popup').toggleClass('show');
        })
      })
    },
    methods:{
      msgAdd(){
        this.msg++;
      }
    }
  }
</script>
