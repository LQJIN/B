<template>
  <div class="me">
    <me-head></me-head>
    <me-content></me-content>
    <foot v-bind:class="{'isMe':isNowPage}"></foot>
  </div>
</template>


<script>
  import MeHead from '../common/MeHead.vue'
  import Foot from '../common/Foot.vue'
  import MeContent from '../common/MeContent.vue'

  export default {
    components:{
      MeHead,
      MeContent,
      Foot
    },
    data(){
      return{
        isNowPage: true
      }
    }
  }
</script>
