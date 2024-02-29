import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,f as e}from"./app-2b47ad19.js";const r={},o=e('<h2 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h2><ul><li>[x] 表设计</li><li>[x] 抽奖领域模块开发</li></ul><h2 id="学习过程" tabindex="-1"><a class="header-anchor" href="#学习过程" aria-hidden="true">#</a> 学习过程</h2><ol><li>查询分库分表相关知识点，了解到垂直和水平分库分表，主要是为了解决数据量过大导致 MySQL 查询慢、单体容量过大问题</li><li>开始写代码 <ol><li>编写基础的持久化对象 (PO)</li><li>编写 Mapper 接口</li><li>编写对应的 Mapper.xml</li><li>设计抽奖策略顶级接口，主要是入参出参，如何封装，要封装哪些数据</li><li>编写顶级接口的基础实现，实现里面公用的方法，比如把初始化方法、哈希计算的方法以及判断是否初始化完成</li><li>编写两种算法的实现</li><li>算法单元测试</li></ol></li></ol><h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2><ol><li><p>为什么在设计阶段就考虑分库分表等问题</p><p>在之前的学习过程中，并没有项目环境的支撑，导致了这个问题，一个大的项目，如果要兼顾性能以及代码的可扩展性，那么在数据库设计阶段就应该想到这些，那些是热点数据，那些数据会进行大量的插入，没有全局把控的观念，只有了解这些，才能设计出一个性能良好且代码可维护性高的项目，这个需要项目积累，这是一个很重要的东西，以后在学习的时候一定要多注意这方面，多看看别人的数据库是怎么设计的，以及为什么要这么设计，要有全局把控的观念</p></li><li><p>抽奖算法是怎么实现的呢</p><p>首先这个初始化的时候，传入奖品和对应的概率，然后概率乘以 100，就是对应的下标范围，一个奖品一个范围，是不会重复的，然后经过斐波那契哈希散列算法，将这个对应的下标进行加工，使其均匀的分布在数组中，在对下标进行加工的过程中，确保了无论传入什么数字，都会在 0 ~ 128 的范围内</p><ol><li><p>SingleRateRandomDrawAlgorithm</p><p>这种策略是生成一个 1 ~ 100 的随机数，然后经过 hashIdx 计算对应的下标，然后去上面初始化好的数组中去取奖品</p></li><li><p>DefaultRateRandomDrawAlgorithm</p><p>这是一种必中奖策略，先排除掉不在抽奖范围内的奖品ID，然后生成随机数，然后判断这个随机数是否在指定的范围内，如果不在，那么这个奖品就没中，然后看下一个奖品，重新生成随机数，然后看是否在指定的中奖概率内加上上次生成的随机数范围内</p></li></ol></li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>今天主要把抽奖算法给搞定了，虽然代码不多，但是很难理解，最开始都搞不清楚为什么这样子就实现了抽奖算法，不懂这个概率是如何保证的，然后 debug 了好久，发现其实就是一个 128 长度的数组，然后经过哈希散列排列，保证随机的均匀性，其实这 128 长度的数组就已经保证了抽奖的概率，假设不经过哈希算法，直接放进去，假设两个的抽奖概率是 0.1 和 0.2，那么放进去的时候就是下标 1~10 全是第一个奖品，下标 11 ~ 30 全是第二个奖品，随机数生成的是 1 ~ 100，那么第一个奖品也就是有 10 个数字能中奖，那不就是 10% 的中奖概率了么，加哈希散列只是为了均匀分布，增加随机性和公平性</p><p>收获：</p><ol><li>对 DDD 有更深的了解，知道什么类该写在什么包下，比昨天更清楚代码该如何组织了</li><li>了解了分库分表，虽然是第一次接触，但是至少知道了为什么要分库分表，随着项目的进行，就会学会如何分库分表了吧</li><li>了解了 Hash 散列算法，后续看看源码，要搞清楚底层是如何运作的</li></ol>',10),h=[o];function t(d,p){return i(),a("div",null,h)}const s=l(r,[["render",t],["__file","day02.html.vue"]]);export{s as default};
