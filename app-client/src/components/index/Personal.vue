<template>
  <div class="personal">
    <div class="me-head">
      <i v-on:click="toIndex"><span class="fa fa-angle-left"></span></i>
      <!--<h2>{{$store.state.title}}</h2>//这里使用store下的state-->
      <!--<h2>{{$store.state.title}}</h2>-->
      <h2>Personal center</h2>
      <slot>
        <router-link to="/settings">
          <span class="fa fa-gear"></span>
        </router-link>
      </slot>
    </div>
    <div class="personal-content">
      <div class="account"><img src="../../assets/img/p4.png" alt="">{{user_info.account}}</div>
      <ul class="ul">
        <li><router-link to="">
          <span class="fa fa-commenting-o"></span> My comments<span class="fa fa-angle-right"></span>
        </router-link></li>
        <!--<li><router-link to="">
          <span class="fa fa-file-o"></span> My profile<span class="fa fa-angle-right"></span>
        </router-link></li>-->
        <li><router-link to="">
          <span class="fa fa-lock"></span> Reset password<span class="fa fa-angle-right"></span>
        </router-link></li>
      </ul>
    </div>
    <div class="sign-out" v-on:click="signout">Sign out</div>
    <!--<foot v-bind:class="{'isMe':isNowPage}"></foot>-->
  </div>
</template>

<script>
  import SignHead from '../common/SignHead.vue'
  import Axios from 'axios'
  import qs from 'qs'
  import $ from 'jquery'
  import Foot from '../common/Foot.vue'

  export default {
    data(){
      return{
        isNowPage: true,
        user_info:{},
        login_id:0,
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

      Axios.post('http://localhost:3000/users/account_by_id',
        qs.stringify({
          id:_this.login_id
        }),
        {headers: {
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }).then(function (res) {
        // _this.user_info=JSON.parse(res.data);
        console.log(res.data[0]);
        _this.user_info=res.data[0];
      });
    },
    methods:{
      toIndex:function(){
        this.$router.push("/");
      },
      signout: function() {
        /*this.account =  ;*/
        //res.clearCookie('account');
        document.cookie = "logined=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "login_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        this.$store.dispatch('changeLogin','1');//判断登陆，登陆后设置isLogin为100，登出后设置为1
        this.$router.push("/signin");
        /*changeTitle: function(){
        this.$store.dispatch('changeTitle', 'Sign in');
        //this.$store.dispatch是固定的，去触发vuex下的方法，changeTitle是store里actions下的方法
      }*/
      }
    }
  }
</script>

<style scoped>
  .personal-content {width: 100%; position: absolute; top:0.8rem; bottom: 1rem;
    text-align: center; background: #f0f0f0;
    /*background: -webkit-linear-gradient(#1649a9, #dadada);渐变背景色*/ }

  .me-head { display: flex; height: 0.8rem; color: #fff; position: fixed; top: 0; width: 100%;
    background: #ffffff; border-bottom: 0.01rem solid #e7e7e7; z-index: 1;}
  .me-head span{ width: 0.8rem; height: 0.8rem; line-height: 0.8rem; text-align:center; font-size: 0.3rem; color: #c9c9c9; }
  .me-head h2 { flex: 1; text-align: center; text-indent: 0rem; line-height: 0.8rem; font-size: 0.3rem;
    font-weight: bold; color: #000000;}

  .account{width:100%; height: 1rem; line-height: 1rem; border-bottom: 0.005rem solid #e7e7e7;
    background: #ffffff; text-align: left; font-size: 0.3rem;padding: 0 0 0 0.2rem;}
  .account img{width: 0.8rem; height: 0.8rem; line-height: 0.8rem;padding: 0.1rem 0.2rem 0 0;}

  .ul {background: #ffffff;}
  .personal a{color: #000000;}
  .ul li{width: 6.1rem; height:0.8rem; line-height: 0.8rem; border-bottom: 0.01rem solid #e7e7e7;
  margin: 0 0.15rem; font-size: 0.25rem; text-align: left;}
  .ul .fa-angle-right{float: right;}
  .ul li:nth-child(3){}
  .ul span{ width: 0.6rem; height:0.8rem; line-height: 0.8rem;
    display: block; text-align: center; float: left;
    color: #c9c9c9; /*font-size: 0.2rem;*/}
  .ul input{ width: 4.7rem;height: 0.8rem; line-height: 0.8rem;
    font-size: 0.25rem; color: #c9c9c9;
    border: none; background: transparent; outline: none; }

  .sign-out{ width: 100%; height: 1rem; line-height: 1rem; font-size: 0.3rem;
    text-align: center; color: #00457e; position: absolute; bottom: 0;}
</style>
