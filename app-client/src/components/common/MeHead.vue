<template>
  <div class="me-head">
    <i v-on:click="toIndex"><span class="fa fa-angle-left"></span></i>
    <h2>Sign In</h2>
    <slot>
      <router-link to="/settings">
        <span class="glyphicon glyphicon-cog"></span>
      </router-link>
    </slot>
  </div>
</template>
<script>
  export default {
    methods:{
      toIndex:function(){
        history.back();
      },
    }
  }
</script>
<style scoped>
  .me-head { display: flex; height: 0.6rem; color: #fff; position: fixed; top: 0; width: 100%;
              background: #ffffff; border-bottom: 0.01rem solid #e7e7e7; z-index: 1;}
  .me-head span{ width: 0.8rem; height: 0.6rem; line-height: 0.6rem; text-align:center; font-size: 0.3rem; color: #c9c9c9; }
  .me-head h2 { flex: 1; text-align: center; text-indent: 0rem; line-height: 0.6rem; font-size: 0.3rem; color: #000000;}
</style>

