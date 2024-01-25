import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as r}from"./app-2a37641e.js";const n={},d=r(`<h2 id="回溯" tabindex="-1"><a class="header-anchor" href="#回溯" aria-hidden="true">#</a> 回溯</h2><p>回溯算法实际上是一个类似枚举的搜索尝试过程，主要是在搜索尝试过程中寻找问题的解，当发现已不满足求解条件时，就<strong>回溯</strong>返回，尝试别的路径。</p><p>回溯是递归的副产品，只要有递归就会有回溯。</p><p>回溯法并不是什么⾼效的算法，如果想让回溯法⾼效⼀些，可以加⼀些剪枝的操作，但也改不了回溯法就是穷举的本质。</p><p>回溯法解决的问题可以概括如下：</p><ul><li>组合问题：N个数⾥⾯按⼀定规则找出k个数的集合</li><li>切割问题：⼀个字符串按⼀定规则有⼏种切割⽅式</li><li>⼦集问题：⼀个N个数的集合⾥有多少符合条件的⼦集</li><li>排列问题：N个数按⼀定规则全排列，有⼏种排列⽅式</li><li>棋盘问题：N皇后，解数独等等</li></ul><p>回溯法解决的问题都可以抽象为树形结构。</p><p>回溯算法模板框架如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void backtracking(参数) {
    if (终⽌条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中孩⼦节点的数量就是集合的⼤⼩）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="习题" tabindex="-1"><a class="header-anchor" href="#习题" aria-hidden="true">#</a> 习题</h2><h3 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合</h3><p>[77: 组合]<br> [17: 电话号码的字母组合]<br> [39: 组合总和]<br> [40: 组合总和II]<br> [216: 组合总和III]</p><h3 id="分割" tabindex="-1"><a class="header-anchor" href="#分割" aria-hidden="true">#</a> 分割</h3><p>[131: 分割回文串]<br> [93: 复原IP地址]</p><h3 id="子集" tabindex="-1"><a class="header-anchor" href="#子集" aria-hidden="true">#</a> 子集</h3><p>[78: 子集]<br> [90: 子集II]</p><h3 id="排列" tabindex="-1"><a class="header-anchor" href="#排列" aria-hidden="true">#</a> 排列</h3><p>[46: 全排列]<br> [47: 全排列II]</p><h3 id="棋盘问题" tabindex="-1"><a class="header-anchor" href="#棋盘问题" aria-hidden="true">#</a> 棋盘问题</h3><p>[51: N皇后]<br> [52: N皇后II]<br> [37: 解数独]</p><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><p>[491: 递增子序列]<br> [332: 重新安排行程]</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>`,23),s=[d];function l(h,c){return a(),i("div",null,s)}const o=e(n,[["render",l],["__file","index.html.vue"]]);export{o as default};
