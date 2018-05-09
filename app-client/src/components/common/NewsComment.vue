<template>
  <div class="news-comment">
    <h5 class="news-comm-nav">
      Latest Comments
    </h5>
    <div class="user-comment">
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
  </div>
</template>
<style scoped>
  .news-comment{ margin: 0 0.2rem 0.7rem 0.2rem;}
  .news-comm-nav{ color: #5876a0; font-weight: bold;  border-bottom: 0.05rem solid #5876a0; font-size: 0.2rem;}
  .user-comment ul li{ position: relative; padding: 0.2rem 0 0 0; display: inline-block; font-size: 0.2rem;}
  .user-comment img{ left: 0; top: 0; width: 1rem; height: 1rem; float: left; margin: 0.1rem 0.2rem 0 0;
    text-align: center; border-radius: 50%;}
  .comments {width:4.8rem; float: right; border-bottom: 0.02rem solid #5876a0; }
  .comment-words{ clear: both; margin-bottom: 0.4rem;}
  .name-date{ color: #ababab; margin: 0 0 0.3rem 0;}
  .comments .name{ float: left;}
  .comments .date{ float: right;}
</style>
<!--评论的头像和内容定位不起作用，后来给li加上了display: inline-block; img相对于li的定位就好用了。
而且评论区高度随着评论内容的多少而自动变化。
-->
