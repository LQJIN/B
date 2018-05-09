<template>
  <div class="news">
    <news-head></news-head>
    <news-detail></news-detail>
    <news-comment></news-comment>
    <news-foot></news-foot>
  </div>
</template>

<style scoped>

</style>

<script>
  import NewsHead from '../common/NewsHead.vue'
  import NewsDetail from '../common/NewsDetail.vue'
  import NewsFoot from '../common/NewsFoot.vue'
  import NewsComment from '../common/NewsComment.vue'

  export default {
    components:{
      NewsHead,
      NewsDetail,
      NewsComment,
      NewsFoot
    }
  }
</script>
