<template>
  <div class="me-content">
    <div class="img-name">
      <img src="../../assets/img/p4.png" alt="">
      <h4>UserName</h4>
    </div>
    <div class="blog-block">
        <div class="block1"><span class="glyphicon glyphicon-download-alt"></span><h6>DOWNLOAD</h6></div>
        <div class="block2"><span class="glyphicon glyphicon-comment"></span><h6>MY COMMENTS</h6></div>
        <div class="block3"><span class="glyphicon glyphicon-adjust"></span><h6>DARK</h6></div>
        <div class="block4"><span class="glyphicon glyphicon-star-empty"></span><h6>SAVED</h6></div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<style scoped>
  .me-content{  width:6.4rem;  height:auto; background:
    -webkit-linear-gradient(#1649a9, #dadada); margin: 1.01rem 0 0.7rem 0;}
  .img-name{ text-align: center; padding-top: 0.5rem;}
  .img-name img{width: 1.8rem; height: 1.8rem; border-radius: 50%; padding-bottom: 0.2rem;}
  .img-name h4{font-size: 0.3rem; color: #ffffff;}

  .blog-block{ margin: 0.4rem 0.5rem 0 0.5rem; }
  .blog-block div{ width: 2.2rem; height: 1.8rem; line-height: 1.8rem;  text-align: center;
    background: #ffffff; padding: 0.1rem; }
  .blog-block .block1{float: left;}
  .blog-block .block2{margin-left: 0.5rem; float: right;}
  .blog-block .block3{margin-top: 0.7rem; float: left; margin-bottom: 1.52rem;}
  .blog-block .block4{margin-left: 0.5rem; margin-top: 0.7rem; float: right; margin-bottom: 1.52rem;}
  .blog-block div span{  display: block; width: 1rem; height: 1rem;  font-size: 0.8rem; color: #5c9ef5;
    padding: 0.2rem 0  0 0.6rem;}
  .blog-block div h6{ font-size: 0.2rem; color: #5c9ef5; width: 2rem;height:0.6rem;
    display: block; position: relative; bottom: 0.8rem; margin-left: 0.1rem;}

  .clear{clear: both;}
</style>
