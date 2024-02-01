import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as i,d as c,w as a,e as k,a as n,b as s}from"./app-a31fbc07.js";const r={},d=k(`<h2 id="i-problem" tabindex="-1"><a class="header-anchor" href="#i-problem" aria-hidden="true">#</a> I Problem</h2><p>Find all valid combinations of <code>k</code> numbers that sum up to <code>n</code> such that the following conditions are true:</p><ul><li>Only numbers <code>1</code> through <code>9</code> are used.</li><li>Each number is used <strong>at most once</strong>.</li></ul><p>Return <em>a list of all possible valid combinations</em>. The list must not contain the same combination twice, and the combinations may be returned in any order.</p><p><strong>Example 1</strong><br> Input: k = 3, n = 7<br> Output: [[1, 2, 4]]<br> Explanation: <code>1 + 2 + 4 = 7</code>, There are no other valid combinations.</p><p><strong>Example 2</strong><br> Input: k = 3, n = 9<br> Output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]<br> Explanation:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are no other valid combinations.</p><p><strong>Example 3</strong><br> Input: k = 4, n = 1<br> Output: []<br> Explanation: There are no valid combinations. Using 4 different numbers in the range [1, 9], the smallest sum we can get is <code>1 + 2 + 3 + 4 = 10</code> and since <code>10 &gt; 1</code>, there are no valid combination.</p><p><strong>Constraints</strong></p><ul><li><code>2 &lt;= k &lt;= 9</code></li><li><code>1 &lt;= n &lt;= 60</code></li></ul><p><strong>Related Topics</strong></p><ul><li>Array</li><li>Backtracking</li></ul><h2 id="ii-solution" tabindex="-1"><a class="header-anchor" href="#ii-solution" aria-hidden="true">#</a> II Solution</h2><h3 id="approach-1-backtracking" tabindex="-1"><a class="header-anchor" href="#approach-1-backtracking" aria-hidden="true">#</a> Approach 1: Backtracking</h3>`,15),m=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"combination_sum3"),n("span",{class:"token punctuation"},"("),s("k"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"DFS"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(`
        `),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("idx"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},","),s(" combine"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" k "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(" n "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("combine"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(" idx"),n("span",{class:"token punctuation"},"..="),n("span",{class:"token number"},"9"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(" n "),n("span",{class:"token operator"},"<"),s(" i "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"=="),s(" i "),n("span",{class:"token operator"},"&&"),s(" k "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                combine`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token constant"},"DFS"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" k "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" n "),n("span",{class:"token operator"},"-"),s(" i"),n("span",{class:"token punctuation"},","),s(" combine"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                combine`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token constant"},"DFS"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(" res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@FunctionalInterface"),s(`
`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"QuintConsumer"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"A"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"B"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"C"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"D"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"A"),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"B"),s(" b"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"C"),s(" c"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"D"),s(" d"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"E"),s(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token class-name"},"QuintConsumer"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" dfs "),n("span",{class:"token operator"},"="),s(`
        `),n("span",{class:"token punctuation"},"("),s("idx"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},","),s(" combine"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("k "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),s("combine"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(" idx"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"<"),s(" i "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"=="),s(" i "),n("span",{class:"token operator"},"&&"),s(" k "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                combine`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addLast"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" k "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" n "),n("span",{class:"token operator"},"-"),s(" i"),n("span",{class:"token punctuation"},","),s(" combine"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                combine`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeLast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"combinationSum3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" k"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h3",{id:"approach-2-subset-enumeration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#approach-2-subset-enumeration","aria-hidden":"true"},"#"),s(" Approach 2: Subset Enumeration")],-1),y=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"combination_sum3"),n("span",{class:"token punctuation"},"("),s("k"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" combine "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" check "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("mask"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},","),s(" combine"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token punctuation"},"{"),s(`
        combine`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},".."),n("span",{class:"token number"},"9"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<<"),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&"),s(" mask "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
                sum `),n("span",{class:"token operator"},"+="),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                combine`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        combine`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"=="),s(" k "),n("span",{class:"token operator"},"&&"),s(" sum "),n("span",{class:"token operator"},"=="),s(` n
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" mask "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"check"),n("span",{class:"token punctuation"},"("),s("mask"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(" combine"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("combine"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@FunctionalInterface"),s(`
`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"QuadrPredicate"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"A"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"B"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"C"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"D"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"A"),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"B"),s(" b"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"C"),s(" c"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"D"),s(" d"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token class-name"},"QuadrPredicate"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" check "),n("span",{class:"token operator"},"="),s(`
        `),n("span",{class:"token punctuation"},"("),s("mask"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},","),s(" combine"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
            combine`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"int"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<<"),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&"),s(" mask"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    sum `),n("span",{class:"token operator"},"+="),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                    combine`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            
            `),n("span",{class:"token keyword"},"return"),s(" combine"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" k "),n("span",{class:"token operator"},"&&"),s(" sum "),n("span",{class:"token operator"},"=="),s(" n"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"combinationSum3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" k"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" combine "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" mask "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" max "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},";"),s(" mask "),n("span",{class:"token operator"},"<"),s(" max"),n("span",{class:"token punctuation"},";"),s(" mask"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("check"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("mask"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},","),s(" combine"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),s("combine"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(h,g){const o=l("CodeTabs");return u(),i("div",null,[d,c(o,{id:"70",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[m]),tab1:a(({value:t,isActive:e})=>[b]),_:1}),v,c(o,{id:"81",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[y]),tab1:a(({value:t,isActive:e})=>[w]),_:1})])}const I=p(r,[["render",f],["__file","216_combination_sum_iii.html.vue"]]);export{I as default};
