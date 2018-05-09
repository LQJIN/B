<template>
  <div class="me-head">
    <h2>Me</h2>
    <slot>
      <router-link to="/settings">
        <span class="glyphicon glyphicon-cog"></span>
      </router-link>
    </slot>
  </div>
</template>

<style scoped>
  .me-head { display: flex; height: 1rem; color: #fff; position: fixed; top: 0; width: 100%;
              background: #1649a9; border-bottom: 0.01rem solid #a2b7b8; z-index: 1;}
  .me-head span{ width: 1rem; height: 1rem; line-height: 1rem; text-align:center; font-size: 0.5rem; color: #ffffff; }
  .me-head h2 { flex: 1; text-align: center; text-indent: 1.2rem; line-height: 1rem; font-size: 0.5rem;}
</style>

