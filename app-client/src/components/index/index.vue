<template>
  <div class="index">
    <!--<img src="./assets/logo.png">-->
    <ahead></ahead>
    <slide-horizontal></slide-horizontal>
    <news-list></news-list>
  </div>
</template>

<style scoped>

</style>

<script>
  import Ahead from "../common/Head.vue"
  /*import Foot from "../common/Foot.vue"*/
  import SlideHorizontal from "../common/SlideHorizontal.vue"
  import NewsList from "./NewsList.vue"

  export default {

    components: {
      Ahead,
      /*Foot,*/
      SlideHorizontal,
      NewsList
    },
    data(){
      return{
        isNowPage: true
      }
    }
  }
</script>
