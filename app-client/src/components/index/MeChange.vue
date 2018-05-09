<template>
    <div class="me-change">
      <div class="head">
        <ul>
          <li v-on:click="gotoback"><span class="icon-chevron-left"></span></li>
          <li ><router-link to="/memainpage"><span class="glyphicon glyphicon-ok"></span></router-link></li>
        </ul>
      </div>
      <div class="content">
        <div class="account">
            <img class="img" src="../../assets/img/p4.png" alt="">
            <h4 class="remind">Upload Photo</h4>
        </div>
        <div class="change-name">
          <input type="text" placeholder="username">
        </div>
        <router-link to="/login"><button class="button">Sign out</button></router-link>
      </div>
      <div class="popup">
        <div class="popup-content">
          <ul class="other-account-list" >
            <li>Photo</li>
            <li>Select the local picture</li>
          </ul>
          <button class="close">Cancel</button>
        </div>
        <div class="popup-bg"></div>
      </div>
    </div>
</template>

<script>
    export default {
      data:function () {
        return{

        }
      },
      mounted:function () {
        $(document).ready(function () {
          $('.account, .close, .popup-bg').click(function(e){
            e.preventDefault(); //阻止默认点击事件
            $('.popup').toggleClass('show');
          })
        })
      },
      methods:{
        gotoback:function(){
          history.back();
        }
      }
    }
</script>

<style scoped>
  /*input背景提示文字颜色*/
  ::-webkit-input-placeholder { color:#ffffff; font-size: 0.25rem; }
  ::-moz-placeholder { color:#ffffff; font-size: 0.25rem;} /* firefox 19+ */
  :-ms-input-placeholder { color:#ffffff; font-size: 0.25rem;} /* ie */
  input:-moz-placeholder { color:#ffffff; font-size: 0.25rem;}

  .head { height: 0.9rem; position: fixed; top: 0; width: 100%; background: #1649a9; }
  .head { border-bottom: 0.01rem solid #a2b7b8; z-index: 1;}
  .head ul li { display: inline-block; width: 0.8rem; height: 0.8rem; line-height: 0.8rem;
    text-align: center; font-size: 0.5rem; color: #fff; padding-top: 0.1rem;}
  .head a{color: #fff;}
  .head ul li:nth-child(2){ float: right;}

  .content{padding: 0 0.3rem; width:5.8rem; position: absolute; top:0.9rem; bottom: 0; text-align: center;
    background: -webkit-linear-gradient(#1649a9, #dadada); margin: 0;}

  .content .button{line-height: 0.6rem; border: none; background: #89a1d1; color: #ffffff;
    width: 5.4rem; font-size: 0.25rem; margin-top: 0.4rem;}

  .account{ height: 2.2rem; width: 100%; margin-top: 0.4rem;}
  .account .img{ width: 1.4rem; height: 1.4rem; border-radius: 50%; background-color: transparent; }
  .account .remind{ padding-top: 0.2rem; color: navy;}

  .change-name input{width: 100%; height: 0.8rem; border:none; outline: none; cursor: pointer;
    border-bottom: 0.01rem solid #ffffff; background: transparent;}

  /*弹出图层*/
  .other-account-list{ text-align: center; color: royalblue; font-size: 0.3rem; background: #ffffff;}
  .other-account-list li{ display: block; height: 0.6rem; line-height: 0.6rem; border-bottom: 0.01rem solid #989898; }

  .popup {transition: all .5s; -webkit-transition: all .5s; visibility: hidden; opacity: 0;}
  .popup.show{visibility: visible; opacity: 1;}
  .popup {position: fixed; top:0; left: 0; width: 100%; height: 100%;}
  /*.popup.show{transform: translateY(0rem); -webkit-transform: translateY(0rem);}*/
  .popup-content {
    /*设置定位方式为绝对定位，且设置较高的z-index值，使其浮于其他元素上方*/
    position: absolute; z-index: 200;
    /*设置元素大小*/
    width: 5.8rem; height: 2rem; margin: 0 0.3rem; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;
    /*使元素居中显示*/
    bottom: 0;
    /*设置背景、阴影等外观样式*/
    background: transparent; box-shadow: 0 0.1rem 0.15rem rgba(0,0,0,.2);
  }
  .popup-content button{position: absolute; bottom: 0; color: #FFF; background: #E74C3C; width: 100%; border: 0; font-size: 0.4rem; padding: 0.1rem 0.5rem;}
  .popup-bg{ position: absolute; z-index: 100; width: 100%; height: 100%; background: rgba(0,0,0,.3); }
</style>
