<template>
  <div class="sign-in">
    <sign-head></sign-head>
    <div class="sign-content" id="sign-content">
      <div class="before-account" >{{before_account}}</div>
      <div class="name input">
        <span class="fa fa-user-circle-o"></span>
        <input type="text" name="name" id="account" placeholder="account"
               v-model="account" />
      </div>
      <div class="pass input">
        <span class="fa fa-key"></span>
        <input type="password" name="pass" id="password" placeholder="password"
               v-model="password"/>
      </div>
      <a>
        <div class="button" v-on:click="signin">Sign in</div>
      </a>

      <div class="create-account">
        <p>No account?<router-link to="/createaccount" >Create one</router-link></p>
        <!--p标签和a标签在一行上,把A放到P结束标记前面-->
      </div>
    </div>
    <!--<foot v-bind:class="{'isMe':isNowPage}"></foot>-->
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
        isCheck: true,
        isNowPage: true,
        account:"",
        password:"",
        before_account:""
      }
    },
    components: {
      SignHead
    },
    mounted(){
      this.$store.dispatch('changeTitle', 'Sign in');

      $("input").focus(function () {
        $(this).parent().css({"border-bottom": "0.01rem solid #000000"});
      });
      $("input").blur(function () {
        $(this).parent().css({"border-bottom": "0.01rem solid #e7e7e7"});
      });
      $("input").on("input propertychange", function () {
        if ( ($.trim($('#account ').val()) !== "")&&($.trim($('#password').val()) !== "")){
          $('.button').css({"background": "#1c4d9c"});
        } else {
          $('.button').css({"background": "#c9c9c9"});
        }
      });
    },
    methods:{
      signin:function() {
        var _this = this;
        Axios.post('http://localhost:3000/users/sign_in', qs.stringify({
            account : _this.account,
            password : _this.password
          }),
          {headers: {
              'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
            }
          }).then(function(res){
          /*console.log(res.data[0].userid);//测试对应的userid*/
          var token = res.data[0].userid;
          document.cookie = "logined=" + token;
          document.cookie = "login_id=" + res.data[0].userid;
          _this.$router.push("/personal");
        });
        /*changeTitle: function(){
        this.$store.dispatch('changeTitle', 'Sign in');
        //this.$store.dispatch是固定的，去触发vuex下的方法，changeTitle是store里actions下的方法
      }*/
      }
    }
  }
</script>

<style scoped>
  /*input背景提示文字颜色*/
  ::-webkit-input-placeholder { color:#c9c9c9; font-size: 0.25rem; }
  ::-moz-placeholder { color:#c9c9c9; font-size: 0.25rem;} /* firefox 19+ */
  :-ms-input-placeholder { color:#c9c9c9; font-size: 0.25rem;} /* ie */
  input:-moz-placeholder { color:#c9c9c9; font-size: 0.25rem;}


  .sign-content{width: 100%; position: absolute; top:0.8rem; bottom: 0; text-align: center;
    /*background: -webkit-linear-gradient(#1649a9, #dadada);渐变背景色*/ background: #ffffff; }

  .input{ width: 5.4rem;height: 0.8rem; line-height: 0.8rem; /*text-align: left;*/
    border-bottom: 0.01rem solid #e7e7e7; /*padding: 0.2rem 0 0.1rem 0;*/margin: 0 0.4rem 0.2rem 0.4rem;}

  .before-account {width: 100%; height: 0.8rem; line-height: 0.8rem; font-size: 0.2rem; color:red;}


  .input span{ width: 0.6rem; height:0.8rem; line-height: 0.8rem; display: block; text-align: center; float: left;
    color: #c9c9c9; font-size: 0.3rem;}
  .input input{ width: 4.7rem;height: 0.8rem; line-height: 0.8rem; font-size: 0.25rem; color: #c9c9c9;
    border: none; background: transparent; outline: none; }

  .button{height: 0.8rem; line-height: 0.8rem; background: #c9c9c9; color: #ffffff;
    width: 6.2rem; font-size: 0.3rem; border-radius: 0.08rem; margin: 1rem 0.1rem ; }

  .forget-password{text-align: center; border: none; height: 1rem; line-height: 1rem; font-size: 0.25rem;}
  .forget-password a{ color: #1c4d9c; text-decoration-line: underline;}
  .create-account {font-size: 0.2rem;}
  .create-account a{color: #1c4d9c;  text-decoration-line: underline;}

</style>
