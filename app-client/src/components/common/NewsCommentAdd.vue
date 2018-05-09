<template>
  <div class="news-comment-add">
    <div class="comment-content">
      <div class="content-head">
        <span v-on:click="toNews" class="icon-remove"></span>
        <h4>COMMENTS</h4>
      </div>
      <div class="comment-li">
        <ul>
          <li>
            <img src="../../assets/img/p6.png" alt="">
            <div class="comments">
              <div class="name-date">
                <div class="name">user的名子</div>
                <div class="date">2017-09-18 15:58</div>
              </div>
              <div class="comment-words">
                <p>The business magnate also shared with people how Alibaba has grown into what it is today.
                  The business magnate also shared with people how Alibaba has grown into what it is today.
                  The business magnate also shared with people how Alibaba has grown into what it is today.
                </p>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/img/p4.png" alt="">
            <div class="comments">
              <div class="name-date">
                <div class="name">user的名子</div>
                <div class="date">2017-09-18 14:58</div>
              </div>
              <div class="comment-words">
                <p>relationship need to look at today's .</p>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/img/p7.png" alt="">
            <div class="comments">
              <div class="name-date">
                <div class="name">user的名子</div>
                <div class="date">2017-09-18 14:58</div>
              </div>
              <div class="comment-words">
                <p>relationship need to look at today's .</p>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/img/p6.png" alt="">
            <div class="comments">
              <div class="name-date">
                <div class="name">user的名子</div>
                <div class="date">2017-09-18 15:58</div>
              </div>
              <div class="comment-words">
                <p>The business magnate also shared with people how Alibaba has grown into what it is today.
                  The business magnate also shared with people how Alibaba has grown into what it is today.
                  The business magnate also shared with people how Alibaba has grown into what it is today.
                </p>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/img/p4.png" alt="">
            <div class="comments">
              <div class="name-date">
                <div class="name">user的名子</div>
                <div class="date">2017-09-18 14:58</div>
              </div>
              <div class="comment-words">
                <p>relationship need to look at today's .</p>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/img/p7.png" alt="">
            <div class="comments">
              <div class="name-date">
                <div class="name">user的名子</div>
                <div class="date">2017-09-18 14:58</div>
              </div>
              <div class="comment-words">
                <p>relationship need to look at today's .</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="comment-sent">
        <form action="" method="get">
          <input type="text" title="comment" placeholder="make comments"/>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <div class="content-bg"></div>
  </div>
</template>

<style scoped>

  .content-head { display: flex; height: 0.9rem; background: #ffffff; position: fixed; top: 0; width: 100%;  border-bottom: 0.02rem solid #d7d7d7;  z-index: 1;}
  .content-head span{ width: 0.9rem; height: 0.86rem; line-height: 0.86rem; text-align:center; font-size: 0.5rem; color: #0d4473; padding-top: 0.04rem;}
  .content-head h4 { flex: 1; height: 0.86rem; line-height: 0.86rem; text-align: center; text-indent: -0.6rem; font-size: 0.35rem; color: #0d4473; padding-top: 0.04rem;}
  .comment-li {margin: 1.02rem 0.2rem 1.2rem 0.2rem; }
  .comment-li ul li{ position: relative; padding: 0.2rem 0 0 0; display: inline-block; font-size: 0.2rem;}
  .comment-li img{ left: 0; top: 0; width: 1rem; height: 1rem; float: left; margin: 0.1rem 0.2rem 0 0;  text-align: center; border-radius: 50%;}

  .comments {width:4.8rem; float: right; border-bottom: 0.02rem solid #d7d7d7; }
  .comment-words{ clear: both; margin-bottom: 0.4rem;}
  .name-date{ color: #ababab; margin: 0 0 0.3rem 0;}
  .comments .name{ float: left;}
  .comments .date{ float: right;}

  .comment-sent{ position: fixed; bottom: 0; width: 100%; height: 1.2rem; background: #eeeeee; }
  .comment-sent form{margin: 0.2rem 0.2rem 0.2rem 0.22rem;}
  .comment-sent input{ width: 4.2rem; height: 0.8rem; font-size: 0.22rem; border: none; padding-left: 0.2rem;}
  .comment-sent button{ width: 1.4rem; height: 0.8rem; background: #1c4d9c;
    border: none; color: #ffffff; margin-left: 0.1rem; font-size: 0.25rem;}
</style>

<script>
  export default {
    methods:{
      toNews:function () {
        history.back();
      }
    }
  }
</script>
