import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,d as u,w as a,e as r,b as s,a as n}from"./app-ac1c6b2c.js";const k={},d=r('<h2 id="i-problem" tabindex="-1"><a class="header-anchor" href="#i-problem" aria-hidden="true">#</a> I Problem</h2><p>You are given an integer array <code>cost</code> where <code>cost[i]</code> is the cost of <code>iᵗʰ</code> step on a staircase. Once you pay the cost, you can either climb one or two steps.</p><p>You can either start from the step with index <code>0</code>, or the step with index <code>1</code>.</p><p>Return <em>the minimum cost to reach the top of the floor</em>.</p><p><strong>Example 1</strong><br> Input: cost = [10, 15, 20]<br> Output: 15<br> Explanation: You will start at index <code>1</code>.</p><ul><li>Pay <code>15</code> and climb two steps to reach the top.<br> The total cost is <code>15</code>.</li></ul><p><strong>Example 2</strong><br> Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]<br> Output: 6<br> Explanation: You will start at index <code>0</code>.</p><ul><li>Pay <code>1</code> and climb two steps to reach index <code>2</code>.</li><li>Pay <code>1</code> and climb two steps to reach index <code>4</code>.</li><li>Pay <code>1</code> and climb two steps to reach index <code>6</code>.</li><li>Pay <code>1</code> and climb one step to reach index <code>7</code>.</li><li>Pay <code>1</code> and climb two steps to reach index <code>9</code>.</li><li>Pay <code>1</code> and climb one step to reach the top.<br> The total cost is <code>6</code>.</li></ul><p><strong>Constraints</strong></p><ul><li><code>2 &lt;= cost.length &lt;= 1000</code></li><li><code>0 &lt;= cost[i] &lt;= 999</code></li></ul><p><strong>Related Topics</strong></p><ul><li>Array</li><li>Dynamic Programming</li></ul><h2 id="ii-solution" tabindex="-1"><a class="header-anchor" href="#ii-solution" aria-hidden="true">#</a> II Solution</h2><h3 id="approach-1-dynamic-programming" tabindex="-1"><a class="header-anchor" href="#approach-1-dynamic-programming" aria-hidden="true">#</a> Approach 1: Dynamic Programming</h3>',14),m=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"min_cost_climbing_stairs"),n("span",{class:"token punctuation"},"("),s("cost"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//Self::dp(cost)"),s(`
    `),n("span",{class:"token keyword"},"Self"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"optimize_dp"),n("span",{class:"token punctuation"},"("),s("cost"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/// Time Complexity: O(n)"),s(`
`),n("span",{class:"token comment"},"/// Space Complexity: O(n)"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"dp"),n("span",{class:"token punctuation"},"("),s("cost"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" len "),n("span",{class:"token operator"},"="),s(" cost"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" len "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"..="),s("len "),n("span",{class:"token punctuation"},"{"),s(`
        dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("cmp"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" cost"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" cost"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    dp`),n("span",{class:"token punctuation"},"["),s("len"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/// Time Complexity: O(n)"),s(`
`),n("span",{class:"token comment"},"/// Space Complexity: O(1)"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"optimize_dp"),n("span",{class:"token punctuation"},"("),s("cost"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"mut"),s(" prev"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"mut"),s(" curr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"..="),s("cost"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("cmp"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("curr "),n("span",{class:"token operator"},"+"),s(" cost"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" prev "),n("span",{class:"token operator"},"+"),s(" cost"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"("),s("prev"),n("span",{class:"token punctuation"},","),s(" curr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},","),s(" next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    curr
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"minCostClimbingStairs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" cost"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//return this.dp(cost);"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"optimizeDP"),n("span",{class:"token punctuation"},"("),s("cost"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"dp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" cost"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" len "),n("span",{class:"token operator"},"="),s(" cost"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),s("len "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" len"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" cost"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" cost"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("len"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"optimizeDP"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" cost"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" curr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" cost"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("curr "),n("span",{class:"token operator"},"+"),s(" cost"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" prev "),n("span",{class:"token operator"},"+"),s(" cost"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        prev `),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},";"),s(`
        curr `),n("span",{class:"token operator"},"="),s(" next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" curr"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"minCostClimbingStairs"),n("span",{class:"token punctuation"},"("),s("cost "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//return dp(cost)"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"optimizeDP"),n("span",{class:"token punctuation"},"("),s("cost"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"dp"),n("span",{class:"token punctuation"},"("),s("cost "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    size `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("cost"),n("span",{class:"token punctuation"},")"),s(`
    dp `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" size"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
        dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"+"),s("cost"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"+"),s("cost"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("size"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"optimizeDP"),n("span",{class:"token punctuation"},"("),s("cost "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    prev`),n("span",{class:"token punctuation"},","),s(" curr "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),s(`
    
    `),n("span",{class:"token keyword"},"for"),s(" i"),n("span",{class:"token punctuation"},","),s(" size "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("cost"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" size"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
        next `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token operator"},"+"),s("cost"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" prev"),n("span",{class:"token operator"},"+"),s("cost"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
        prev`),n("span",{class:"token punctuation"},","),s(" curr "),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},","),s(` next
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(` curr
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function y(w,h){const e=p("CodeTabs");return l(),i("div",null,[d,u(e,{id:"93",data:[{id:"Rust"},{id:"Java"},{id:"Go"}]},{title0:a(({value:t,isActive:o})=>[s("Rust")]),title1:a(({value:t,isActive:o})=>[s("Java")]),title2:a(({value:t,isActive:o})=>[s("Go")]),tab0:a(({value:t,isActive:o})=>[m]),tab1:a(({value:t,isActive:o})=>[b]),tab2:a(({value:t,isActive:o})=>[v]),_:1})])}const _=c(k,[["render",y],["__file","746_min_cost_climbing_stairs.html.vue"]]);export{_ as default};