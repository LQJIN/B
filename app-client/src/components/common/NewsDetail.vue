<template>
  <div class="news-detail">
    <article>
      <h2>入门Webpack，看这篇就够了.</h2>
      <h6>Updated: December 30,2017</h6>
      <img src="../../assets/img/p2.png" alt="">
      <p>阅读本文之前，先看下面这个webpack的配置文件，如果每一项你都懂，那本文能带给你的收获也许就比较有限，
        你可以快速浏览或直接跳过；如果你和十天前的我一样，对很多选项存在着疑惑，那花一段时间慢慢阅读本文，
        你的疑惑一定一个一个都会消失；如果你以前没怎么接触过Webpack，而你又你对webpack感兴趣，
        那么动手跟着本文中那个贯穿始终的例子写一次，写完以后你会发现你已明明白白的走进了Webpack的大门。
      </p>
      <p>什么是WebPack，为什么要使用它？
        为什要使用WebPack
        现今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法

        模块化，让我们可以把复杂的程序细化为小的文件;
        类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能转换为JavaScript文件使浏览器可以识别；
        Scss，less等CSS预处理器
        ...
        这些改进确实大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常繁琐的，这就为WebPack类的工具的出现提供了需求。

        什么是Webpack
        WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

        WebPack和Grunt以及Gulp相比有什么特性
        其实Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack在很多场景下可以替代Gulp/Grunt类的工具。

        Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，工具之后可以自动替你完成这些任务。
      </p>
    </article>
  </div>
</template>

<style scoped>
  .news-detail{margin-top: 0.92rem; color: #2c3e50;}
  .news-detail h2{font-size: 0.3rem; font-weight: bold;}
  .news-detail h6{font-size: 0.2rem;}
  .news-detail p{font-size: 0.22rem; }
  .news-detail article{display: block; padding: 0.2rem; width: 6rem; word-wrap:break-word; }
  .news-detail img{ width: 5.6rem; height: 2.5rem; margin: 0.2rem;}
</style>

<!--标签内英文换行，两个属性word-wrap:break-word;word-break:break-all;前提是加上宽度。-->
