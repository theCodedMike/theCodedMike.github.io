import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as l,c as o,a,d as h,w as d,e as t,b as e}from"./app-c8c4930e.js";const s={},c=t('<h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h2><h3 id="动态规划概述" tabindex="-1"><a class="header-anchor" href="#动态规划概述" aria-hidden="true">#</a> 动态规划概述</h3><p><strong>动态规划</strong>(dynamic programming)是运筹学的一个分支，是求解决策过程(decision process)最优化的数学方法。</p><p>在现实生活中，有一类活动的过程，由于它的特殊性，可将过程分解成若干个互相联系的阶段，在它的每一个阶段都需要作出决策，从而使整个过程达到最好的活动效果。因此各个阶段决策的选取不能任意确定，它依赖于当前面临的状态，又影响以后的发展。当各个阶段决策确定后，就组成一个决策序列，因而也就确定了整个过程的一条活动路线。这种把一个问题看做是一个前后关联具有链状结构的多阶段过程就称为<strong>多阶段决策过程</strong>，这种问题称为<strong>多阶段决策最优化问题</strong>。</p><h3 id="动态规划算法的基本思想" tabindex="-1"><a class="header-anchor" href="#动态规划算法的基本思想" aria-hidden="true">#</a> 动态规划算法的基本思想</h3><p>动态规划算法通常用于求解具有某种最优性质的问题。在这类问题中，可能会有许多可行解。每一个解都对应于一个值，我们希望找到具有最优值的解。动态规划算法与分治法类似，其基本思想也是将待求解问题分解成若干个子问题，先求解子问题，然后从这些子问题的解中得到原问题的解。与分治法不同的是，适用于动态规划求解的问题，经分解后得到的子问题往往不是互相独立的。若用分治法来解这类问题，则分解得到的子问题数目太多，有些子问题被重复计算了很多次。如果我们能够保存已解决的子问题的答案，而在需要时再找出已求得的答案，这样就可以避免大量的重复计算，节省时间。我们可以用一个表来记录所有已解的子问题的答案。不管该子问题以后是否被用到，只要它被计算过，就将其结果填入表中。这就是动态规划法的基本思路。</p><h3 id="动态规划算法的基本模型" tabindex="-1"><a class="header-anchor" href="#动态规划算法的基本模型" aria-hidden="true">#</a> 动态规划算法的基本模型</h3><ol><li>确定问题的决策对象</li><li>对决策过程划分阶段</li><li>对各阶段确定状态变量</li><li>根据状态变量确定费用函数和目标函数</li><li>建立各阶段状态变量的转移过程，确定状态转移方程</li></ol><h3 id="动态规划算法的适用条件" tabindex="-1"><a class="header-anchor" href="#动态规划算法的适用条件" aria-hidden="true">#</a> 动态规划算法的适用条件</h3><ol><li>最优化原理（最优子结构性质）：整个问题的最优解可以通过求解子问题得到（通过子问题的最优解构造出全局最优解）。</li><li>无后效性：将各阶段按照一定的次序排列好之后，对于某个给定的阶段状态，它以前各阶段的状态无法直接影响它未来的决策，而只能通过当前的这个状态。</li><li>子问题的重叠性：如果有大量的重叠子问题，可以用空间将这些子问题的解存储下来，避免重复求解相同的子问题，从而提升效率。</li></ol><h2 id="习题" tabindex="-1"><a class="header-anchor" href="#习题" aria-hidden="true">#</a> 习题</h2><h3 id="基础题目" tabindex="-1"><a class="header-anchor" href="#基础题目" aria-hidden="true">#</a> 基础题目</h3>',12),f=a("br",null,null,-1),b=a("br",null,null,-1),_=a("br",null,null,-1),u=a("br",null,null,-1),p=a("br",null,null,-1),m=a("br",null,null,-1),x=a("h3",{id:"矩阵",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#矩阵","aria-hidden":"true"},"#"),e(" 矩阵")],-1),I=t('<br><a href="">64: 最小路径和</a><br><a href="">63: 不同路径II</a><br><a href="">120: 三角形最小路径和</a><br><a href="">931: 下降路径最小和</a><br><a href="">221: 最大正方形</a>',10),g=t('<h3 id="背包问题" tabindex="-1"><a class="header-anchor" href="#背包问题" aria-hidden="true">#</a> 背包问题</h3><p><a href="">416: 分割等和子集</a><br><a href="">1049: 最后一块石头的重量II</a><br><a href="">494: 目标和</a><br><a href="">474: 一和零</a></p><h3 id="完全背包" tabindex="-1"><a class="header-anchor" href="#完全背包" aria-hidden="true">#</a> 完全背包</h3><p><a href="">518: 零钱兑换II</a><br><a href="">322: 零钱兑换</a><br><a href="">279: 完全平方数</a><br><a href="">377: 组合总和IV</a><br><a href="">139: 单词拆分</a></p><h3 id="动态规划在树的应用" tabindex="-1"><a class="header-anchor" href="#动态规划在树的应用" aria-hidden="true">#</a> 动态规划在树的应用</h3><p><a href="">213: 打家劫舍II</a><br><a href="">337: 打家劫舍III</a><br><a href="">96: 不同的二叉搜索树</a><br><a href="">95: 不同的二叉搜索树II</a><br><a href="">124: 二叉树中的最大路径和</a></p><h3 id="买卖股票的最佳时间-状态机" tabindex="-1"><a class="header-anchor" href="#买卖股票的最佳时间-状态机" aria-hidden="true">#</a> 买卖股票的最佳时间/状态机</h3><p><a href="">121: 买卖股票的最佳时机</a><br><a href="">123: 买卖股票的最佳时机III</a><br><a href="">188: 买卖股票的最佳时机IV</a><br><a href="">309: 最佳买卖股票时机含冷冻期</a></p><h3 id="子序列-不连续" tabindex="-1"><a class="header-anchor" href="#子序列-不连续" aria-hidden="true">#</a> 子序列（不连续）</h3><p><a href="">1143: 最长公共子序列</a><br><a href="">1035: 不相交的线</a><br><a href="">300: 最长递增子序列</a><br><a href="">673: 最长递增子序列的个数</a><br><a href="">1312: 让字符串成为回文串的最少插入次数</a><br><a href="">646: 最长数对链</a><br><a href="">1218: 最长定差子序列</a><br><a href="">1027: 最长等差数列</a><br><a href="">354: 俄罗斯套娃信封问题</a><br><a href="">1964: 找出到每个位置为止最长的有效障碍赛跑路线</a></p><h3 id="子序列-连续" tabindex="-1"><a class="header-anchor" href="#子序列-连续" aria-hidden="true">#</a> 子序列（连续）</h3><p><a href="">674: 最长连续递增序列</a><br><a href="">718: 最长重复子数组</a></p><h3 id="编辑距离" tabindex="-1"><a class="header-anchor" href="#编辑距离" aria-hidden="true">#</a> 编辑距离</h3><p><a href="">392: 判断子序列</a><br><a href="">115: 不同的子序列</a><br><a href="">583: 两个字符串的删除操作</a><br><a href="">712: 两个字符串的最小ASCII删除和</a><br><a href="">72: 编辑距离</a></p><h3 id="回文" tabindex="-1"><a class="header-anchor" href="#回文" aria-hidden="true">#</a> 回文</h3><p><a href="">5: 最长回文子串</a><br><a href="">647: 回文子串</a><br><a href="">516: 最长回文子序列</a></p><h3 id="动态规划-一维" tabindex="-1"><a class="header-anchor" href="#动态规划-一维" aria-hidden="true">#</a> 动态规划：一维</h3><p><a href="">2140: 解决智力问题</a><br><a href="">2466: 统计构造好字符串的方案数</a><br><a href="">91: 解码方法</a><br><a href="">983: 最低票价</a><br><a href="">790: 多米诺和托米诺平铺</a></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>',19);function z(V,k){const r=n("RouterLink");return l(),o("div",null,[c,a("p",null,[h(r,{to:"/zh/algorithm/leetcode/dp/509_fibonacci_number.html"},{default:d(()=>[e("509: 斐波那契数")]),_:1}),f,h(r,{to:"/zh/algorithm/leetcode/dp/70_climbing_stairs.html"},{default:d(()=>[e("70: 爬楼梯")]),_:1}),b,h(r,{to:"/zh/algorithm/leetcode/dp/1137_nth_tribonacci_number.html"},{default:d(()=>[e("1137: 第N个泰波那契数")]),_:1}),_,h(r,{to:"/zh/algorithm/leetcode/dp/746_min_cost_climbing_stairs.html"},{default:d(()=>[e("746: 使用最小花费爬楼梯")]),_:1}),u,h(r,{to:"/zh/algorithm/leetcode/dp/740_delete_and_earn.html"},{default:d(()=>[e("740: 删除并获得点数")]),_:1}),p,h(r,{to:"/zh/algorithm/leetcode/dp/198_house_robber.html"},{default:d(()=>[e("198: 打家劫舍")]),_:1}),m,h(r,{to:"/zh/algorithm/leetcode/dp/343_integer_break.html"},{default:d(()=>[e("343: 整数拆分")]),_:1})]),x,a("p",null,[h(r,{to:"/zh/algorithm/leetcode/dp/62_unique_paths.html"},{default:d(()=>[e("62: 不同路径")]),_:1}),I]),g])}const B=i(s,[["render",z],["__file","index.html.vue"]]);export{B as default};
