<template>
  <div class="settings">
    <div class="content-head">
      <span v-on:click="toBlog" class="icon-arrow-left"></span>
      <h4>SETTINGS</h4>
    </div>
    <div class="block">
      <div class="block1">
        <ul>
          <li v-on:change="change">
            Auto Update
            <div class="switch">
             <mt-switch v-model="value"></mt-switch>
            </div>
          </li>
          <li>More Apps</li>
          <li>Clear Cache</li>
        </ul>
      </div>
      <div class="block1">
        <ul>
          <li>subscribe to CD MMS News</li>
          <li>Follow us on Weibo</li>
        </ul>
      </div>
      <div class="block1">
        <ul>
          <li>Share This App</li>
          <li>Send Feedback</li>
          <li>Rate This APP</li>
          <li>Help</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .settings{ background: #ffffff;}

  .content-head { display: flex; height: 0.9rem; background: #ffffff; position: fixed; top: 0; width: 100%; border-bottom: 0.01rem solid #d7d7d7;  z-index: 1;}
  .content-head span{ width: 0.9rem; height: 0.86rem; line-height: 0.86rem; text-align:center; font-size: 0.5rem; color: #0d4473; padding-top: 0.04rem;}
  .content-head h4 { flex: 1; height: 0.86rem; line-height: 0.86rem; text-align: center; text-indent: -0.6rem; font-size: 0.36rem;  color: #0d4473; padding-top: 0.04rem;}

  .settings .block{margin-top: 1.3rem;}
  .settings .block1{ background: #f7f7f7; border-bottom: 0.02rem solid #d7d7d7;
    border-top: 0.02rem solid #d7d7d7; margin:  0 0 0.4rem 0;}
  .settings .block1 ul li{ width: 6rem; height: 1rem; line-height: 1rem;
    color: #000000; border-bottom: 0.02rem solid #d7d7d7; margin-left: 0.3rem; font-size: 0.25rem;}
  .settings .block1 ul li:last-child{border: none;}

  .settings .block1 .switch{float: right; padding-top: 0.2rem;}

</style>

<script>

  export default{
    data(){
      return{
        value: false
      }
    },
    methods:{
      change:function () {
        console.log('sssssss');
      },
      toBlog:function () {
        history.back();
      }
    }
  }

</script>

<!--备注：
1.mint-ui上的事件只能使用change，不能使用click。-->
