<template>
  <div class="me-reg">
    <div class="me-head">
      <h2>Me</h2>
      <!--<slot>
        <router-link to="/settings">
          <span class="glyphicon glyphicon-cog"></span>
        </router-link>
      </slot>-->
    </div>
    <div class="reg-in-out">
      <h4>REGISTER</h4><button>MORE</button>
    </div>
    <div class="reg-content" id="reg-content">
      <div class="input-button">

        <div class="name"><span class="icon-tablet"></span>
          <input type="text" name="name" placeholder="手机号" v-model="tel" @blur="check_tel"/>
        </div>

        <div class="verification-code"><span class="icon-lemon"></span>
          <input type="text" placeholder="短信验证码">
        </div>
        <button class="verification-code-button" >获取验证码</button>

        <div class="pass"><span class="icon-lock"></span>
          <input type="password" name="pass" placeholder="请设置8-30位字符数字特殊符号密码" v-model="password"/>
        </div>

        <div class="repass"><span class="icon-lock"></span>
          <input type="password" placeholder="确认密码" v-model="repass">
        </div>

        <!--<input class="button" type="submit" value="Continue"/>-->
        <button class="reg-button"  v-on:click="check">注册</button>

      </div>

      <div class="other-account">
        <!--<p>Sign in with other accounts</p>-->
        <p>Sign in directly</p>
        <ul class="other-account-list" >
          <li><div class="wechat"><img src="../../assets/img/wechat.png" alt="wechat"><p>wechat</p></div></li>
          <li><div class="weibo"><img src="../../assets/img/weibo.png" alt="weibo"><p>weibo</p></div></li>
          <li><router-link to="/login"><div class="count"><img src="../../assets/img/熊猫.png" alt="weibo"><p>account</p></div></router-link></li>
        </ul>

      </div>
    </div>
    <foot v-bind:class="{'isMe':isNowPage}"></foot>
  </div>
</template>

<style scoped>
  /*input背景提示文字颜色*/
  ::-webkit-input-placeholder { color:#ffffff; font-size: 0.25rem; }
  ::-moz-placeholder { color:#ffffff; font-size: 0.25rem;} /* firefox 19+ */
  :-ms-input-placeholder { color:#ffffff; font-size: 0.25rem;} /* ie */
  input:-moz-placeholder { color:#ffffff; font-size: 0.25rem;}

  .me-head { display: flex; height: 1rem; color: #fff; position: fixed; top: 0; width: 100%;
    background: #1649a9; border-bottom: 0.01rem solid #a2b7b8; z-index: 1;}
  /*.me-head span{ width: 1rem; height: 1rem; line-height: 1rem; text-align:center; font-size: 0.5rem; color: #ffffff; }*/
  .me-head h2 { flex: 1; text-align: center; text-indent: 0.2rem; line-height: 1rem; font-size: 0.5rem;}

  .me-reg{ margin-top: 1rem;}
  .reg-in-out{ height: 1rem; text-align: center; display: flex; background: #002a76; color: #ffffff;}
  .reg-in-out h4{  flex: 1;  text-indent: 1.6rem; line-height: 1rem; font-size: 0.35rem;}
  .reg-in-out button{ width: 1.3rem; height: 0.6rem; line-height: 0.6rem; margin: 0.2rem 0.1rem 0.2rem 0;
    background: #2ac395; font-size: 0.25rem; color: #ffffff; border: none;}

  .reg-content{padding: 0 0.3rem; width:5.8rem; position: absolute; top:2rem; bottom: 0; text-align: center;
    background: -webkit-linear-gradient(#1649a9, #dadada); margin: 0 0 0.7rem 0;}
  .reg-content span{ width: 0.6rem; height:0.6rem; line-height: 0.6rem; display: block; float: left; color: #ffffff; font-size: 0.4rem;}
  .reg-content input{ width: 5rem; height: 0.6rem; font-size: 0.25rem; color: #ffffff;
    line-height: 0.6rem; border: none; background: transparent; outline: none; }
  .input-button{text-align: left;}
  .input-button div{ border-bottom: 0.01rem solid #a1a1a1; padding: 0.2rem 0 0.1rem 0;}

  .verification-code-button {line-height: 0.6rem; border: none; background: #1e4fab; color: #ffffff;  width: 5.8rem; text-align: center; font-size: 0.25rem; margin-top: 0.1rem;}
  .reg-button { line-height: 0.6rem; border: none; background: #89a1d1; color: #ffffff;  width: 5.8rem; font-size: 0.25rem; margin-top: 0.1rem;}
  /*.sign-content .keep-sign{border: none; color:#ffffff; font-size: 0.25rem;}
  .sign-content .keep-sign p{display: block; width: 5rem; float: right;}*/
  .forget-password{text-align: center; border: none; height: 1rem; line-height: 1rem; font-size: 0.25rem;}
  .forget-password a{ color: #1c4d9c; text-decoration-line: underline;}

  .other-account { padding-top: 0.3rem; }
  .other-account p{color: #ffffff; font-size: 0.25rem; width: 100%; height: 0.3rem;}
  .other-account-list{ display: flex; display: -webkit-flex; /* Safari */ }
  .other-account ul li:nth-child(1){flex: 1; margin-top: 0.3rem;}
  .other-account ul li:nth-child(2){flex: 1; margin-top: 0.3rem;}
  .other-account ul li:nth-child(3){flex: 1; margin-top: 0.3rem;}
  /*.other-account .wechat{ width: 2.5rem; float: left; padding-left: 0.4rem;}
  .other-account .weibo{ width: 2.5rem; float: right; padding-right: 0.4rem;}
  !*.other-account ul li:nth-child(1){float: left;}
  .other-account ul li:nth-child(2){float: right;}*!
  .other-account img{width: 1.2rem; height: 1.2rem;}

  .clear-both{clear: both;}*/
</style>

<script>
  import MeHead from '../common/MeHead.vue'
  import Foot from '../common/Foot.vue'
  import Axios from 'axios'

  export default {
    data(){
      return{
        isCheck: true,
        isNowPage: true,
        tel:"",
        password:"",
        repass:""
      }
    },
    components: {
      MeHead,
      Foot
    },

    methods:{
      toggle: function () {
        this.isCheck = !this.isCheck;
      },
      check:function () {
        Axios.get('http://localhost:3000/').then((response) => {
          console.log(response.data);
        });
      }
      /*check:function () {
        var tel=this.tel;
        var password=this.password;
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var regex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');
        if(myreg.test(tel)&&(regex.test(password)))
        {
          this.insert_user();
          this.$router.push("/login_ma");
        }
      },
      insert_user:function () {
        var tel=this.tel;
        var password=this.password;
        Axios.get('http://localhost:3000/insert_user',{
          params:{
            tel:tel,
            password:password
          }
        }).then(function(res){
          console.log(res.data);
        })
      },
      check_tel:function () {
        var _this=this;
        Axios.get('http://localhost:3000/check_tel',{
          params:{
            value:_this.tel
          }
        }).then(function(res){
          if(res.data=="success"){
            _this.before_tel="X";
          }else if(res.data=="failed"){
            _this.before_tel="";
          }
        })
      }*/
    }
  }
</script>
