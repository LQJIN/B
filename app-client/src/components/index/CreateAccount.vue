<template>
  <div class="create-account">
    <sign-head></sign-head>
    <div class="sign-content" id="sign-content">
      <div class="before-account" >{{before_account}}</div>
      <div class="name input">
        <span class="fa fa-user-circle-o"></span>
        <input type="text" name="account" id="account" placeholder="account (4-8 characters)"
               v-model="account" v-on:blur="check_username"/>
        <!--v-on:blur="check_username"blur()当输入域失去焦点触发 -->
      </div>
      <div class="pass input">
        <span class="fa fa-key"></span>
        <input type="password" name="pass" id="password" placeholder="password 6-16character&number&special symbol"
               v-model="password"/>
      </div>
      <div class="repass input">
        <span class="fa fa-lock"></span>
        <input type="password" name="repass" id="repass" placeholder="confirm password"
               v-model="repass" v-on:blur="check_password"/>
      </div>
      <div class="after-repass" >{{after_repass}}</div>
      <a>
        <div class="button" v-on:click="check">Sign up</div>
      </a>
      <div class="to-signin">
        <p>Already have an account?<router-link to="/signin" >Sign in</router-link></p>
        <!--p标签和a标签在一行上,把A放到P结束标记前面-->
      </div>
    </div>
    <!--<foot v-bind:class="{'isMe':isNowPage}"></foot>-->
  </div>
</template>

<script>
  import SignHead from '../common/SignHead.vue'
  import Foot from '../common/Foot.vue'
  import Axios from 'axios'
  import qs from 'qs'
  import $ from 'jquery'


  export default {
    data(){
      return{
        isNowPage: true,
        account:"",
        password:"",
        repass:"",
        before_account:"",
        after_repass:""
      }
    },
    components: {
      SignHead
    },
    mounted(){
      this.$store.dispatch('changeTitle', 'Sign up');
      $("input").focus(function () {
        /*当元素获得焦点时*/
        $(this).parent().css({"border-bottom": "0.01rem solid #000000"});
      });
      $("input").blur(function () {
        /*当元素失去焦点时*/
        $(this).parent().css({"border-bottom": "0.01rem solid #e7e7e7"});
      });
      $("input").on("input propertychange", function () {
        if ( ($.trim($('#account ').val()) !== "")&&($.trim($('#password').val()) !== "")
          &&($.trim($('#repass').val()) !== "")){
          $('.button').css({"background": "#1c4d9c"});
        } else {
          $('.button').css({"background": "#c9c9c9"});
        }
      });
    },
    methods:{
      /*toggle: function () {
        this.isCheck = !this.isCheck;
      },*/
      check:function () {
        var account = this.account;
        var password = this.password;
        var repass = this.repass;
        var myreg = /^[a-zA-Z0-9_-]{4,8}$/;
        var regex = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/ ;
        if( (myreg.test(account))&&(password === repass) &&(regex.test(password)))
        {
          this.insert_account();
          this.$router.push("/signin");/*$router.push和router-link to一样*/
        }
      },
      insert_account:function () {
        var account=this.account;
        var password=this.password;
        Axios.post('http://localhost:3000/users/insert_account', qs.stringify({
            account:account,
            password:password
          }),
          {headers: {
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
          }
          }).then(function(res){
          console.log(res.data);
        })
      },
      check_username:function () {
        var _this = this;
        Axios.get('http://localhost:3000/users/check_account',{
          params:{
            Account:_this.account
          }
        }).then(function(res){
          for( var key in res.data[0] ){
            //alert(key);//json对象的key
            //alert(res.data[0][key]);//json对象的值
            if(res.data[0][key] === 1){
              _this.before_account="This name is already used.";
            }else{
              _this.before_account="";
            }
          }
        })
      },
      check_password:function () {
        var _this = this;
        if(this.password === this.repass){
          _this.after_repass="";
        }else{
          _this.after_repass="Password and confirm password not consistent!";
        }
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

  .input{ width: 5.4rem; height: 0.8rem; line-height: 0.8rem; border-bottom: 0.01rem solid #e7e7e7;
    margin: 0 0.4rem 0.2rem 0.4rem; }
  .before-account {width: 100%; height: 0.8rem; line-height: 0.8rem; font-size: 0.2rem; color:red;}
  .input span{ width: 0.6rem; height:0.8rem; line-height: 0.8rem; display: block; text-align: center; float: left;
    color: #c9c9c9; font-size: 0.3rem;}
  .input input{ width: 4.7rem;height: 0.8rem; line-height: 0.8rem; font-size: 0.25rem; color: #c9c9c9;
    border: none; background: transparent; outline: none; }
  .after-repass {width: 100%; height: 0.8rem; line-height: 0.8rem; font-size: 0.2rem; color:red;}
  .button{height: 0.8rem; line-height: 0.8rem; background: #c9c9c9; color: #ffffff;
    width: 6.2rem; font-size: 0.3rem; border-radius: 0.08rem; margin: 0.1rem 0.1rem 1rem 0.1rem; }

  .forget-password{text-align: center; border: none; height: 1rem; line-height: 1rem; font-size: 0.25rem;}
  .forget-password a{ color: #1c4d9c; text-decoration-line: underline;}
  .to-signin {font-size: 0.2rem;}
  .to-signin a{color: #1c4d9c;  text-decoration-line: underline;}

</style>
