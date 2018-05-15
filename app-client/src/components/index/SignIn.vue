<template>
  <div class="sign-in">
    <me-head></me-head>
    <div class="sign-content" id="sign-content">
      <div class="name input">
        <span class="fa fa-user-circle-o"></span>
        <input type="text" name="name" placeholder="Username" v-model="tel" v-on:blur="check_tel" v-on:input ="inputFunc"/>
      </div>
      <div class="pass input">
        <span class="fa fa-key"></span>
        <input type="password" name="pass" placeholder="Password 6-10 characters" v-model="password"/>
      </div>

      <!--<input class="button" type="submit" value="Continue"/>-->
      <!--<router-link to="/memainpage"><button class="button" v-on:click="check">continue</button></router-link>-->
      <router-link to="/memainpage">
        <div class="button" >Sign in</div>
      </router-link>

      <div class="create-account">
        <p>No account?<router-link to="/createAccount">Create one</router-link></p><!--p标签和a标签在一行上,把A放到P结束标记前面-->
      </div>
    </div>
    <!--<foot v-bind:class="{'isMe':isNowPage}"></foot>-->
  </div>
</template>

<style scoped>
  /*input背景提示文字颜色*/
  ::-webkit-input-placeholder { color:#c9c9c9; font-size: 0.25rem; }
  ::-moz-placeholder { color:#c9c9c9; font-size: 0.25rem;} /* firefox 19+ */
  :-ms-input-placeholder { color:#c9c9c9; font-size: 0.25rem;} /* ie */
  input:-moz-placeholder { color:#c9c9c9; font-size: 0.25rem;}


  .sign-content{width: 100%; position: absolute; top:0.8rem; bottom: 0; text-align: center;
    /*background: -webkit-linear-gradient(#1649a9, #dadada);渐变背景色*/ background: #ffffff; }

  .input{ width: 5.4rem;height: 0.8rem; line-height: 0.8rem; /*text-align: left;*/
    border-bottom: 0.01rem solid #e7e7e7; /*padding: 0.2rem 0 0.1rem 0;*/margin: 0.2rem 0.4rem;}
  .input span{ width: 0.6rem; height:0.8rem; line-height: 0.8rem; display: block; text-align: center; float: left;
    color: #c9c9c9; font-size: 0.3rem;}
  .input input{ width: 4.7rem;height: 0.8rem; line-height: 0.8rem; font-size: 0.25rem; color: #c9c9c9;
    border: none; background: transparent; outline: none; }

  .button{height: 0.8rem; line-height: 0.8rem; background: #c9c9c9; color: #ffffff;
    width: 6.2rem; font-size: 0.25rem; border-radius: 0.1rem; margin: 1rem 0.1rem ; }

  .forget-password{text-align: center; border: none; height: 1rem; line-height: 1rem; font-size: 0.25rem;}
  .forget-password a{ color: #1c4d9c; text-decoration-line: underline;}
  .create-account {font-size: 0.2rem;}
  .create-account a{color: #1c4d9c;  text-decoration-line: underline;}

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
        password:""
      }
    },
    components: {
      MeHead,
      Foot
    },

    methods:{
      // inputFunc:function () {
      //   this.
      // }
      /*check:function () {
        Axios.get('http://localhost:3000/').then((response) => {
          console.log(response.data);
        });
      },
     */
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
