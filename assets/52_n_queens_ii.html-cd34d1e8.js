import{_ as c}from"./n_queens_51-800724f2.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as i,d as k,w as a,e as r,b as s,a as n}from"./app-b9124f00.js";const d={},m=r('<h2 id="一、题目描述" tabindex="-1"><a class="header-anchor" href="#一、题目描述" aria-hidden="true">#</a> 一、题目描述</h2><p><code>n</code><strong>皇后问题</strong>研究的是如何将<code>n</code>个皇后放置在<code>n×n</code>的棋盘上，并且使皇后彼此之间不能相互攻击。</p><p>给你一个整数<code>n</code>，返回所有不同的<code>n</code><strong>皇后问题</strong>的解决方案的数量。</p><p><strong>示例 1</strong><br><img src="'+c+'" alt="" loading="lazy"><br> 输入: n = 4<br> 输出: 2<br> 解释: 如上图所示，<code>4</code>皇后问题存在两个不同的解法。</p><p><strong>示例 2</strong><br> 输入: n = 1<br> 输出: 1</p><p><strong>提示</strong></p><ul><li><code>1 &lt;= n &lt;= 9</code></li></ul><p><strong>相关主题</strong></p><ul><li>回溯</li></ul><h2 id="二、题解" tabindex="-1"><a class="header-anchor" href="#二、题解" aria-hidden="true">#</a> 二、题解</h2><h3 id="方法-1-回溯" tabindex="-1"><a class="header-anchor" href="#方法-1-回溯" aria-hidden="true">#</a> 方法 1: 回溯</h3>',11),b=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"total_n_queens"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"DFS"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(` 
        `),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("row"),n("span",{class:"token punctuation"},","),s(" len"),n("span",{class:"token punctuation"},","),s(" pos"),n("span",{class:"token punctuation"},","),s(" total"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" row "),n("span",{class:"token operator"},"=="),s(" len "),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token operator"},"*"),s("total "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token keyword"},"for"),s(" col "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},".."),s("len "),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(" pos"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"iter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"any"),n("span",{class:"token punctuation"},"("),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),n("span",{class:"token operator"},"&"),n("span",{class:"token punctuation"},"("),s("r"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token comment"},"// same column"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(" c "),n("span",{class:"token operator"},"=="),s(" col "),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token keyword"},"let"),s(" slope "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("row "),n("span",{class:"token operator"},"-"),s(" r"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"f64"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token punctuation"},"("),s("col "),n("span",{class:"token operator"},"-"),s(" c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"f64"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token comment"},"// same diagonal"),s(`
                    slope `),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1.0"),s(),n("span",{class:"token operator"},"||"),s(" slope "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1.0"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`

                pos`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("row"),n("span",{class:"token punctuation"},","),s(" col"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token constant"},"DFS"),n("span",{class:"token punctuation"},"("),s("row "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" len"),n("span",{class:"token punctuation"},","),s(" pos"),n("span",{class:"token punctuation"},","),s(" total"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                pos`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token constant"},"DFS"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(" res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@FunctionalInterface"),s(`
`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"QuadrConsumer"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"A"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"B"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"C"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"D"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"A"),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"B"),s(" b"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"C"),s(" c"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"D"),s(" d"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token class-name"},"QuadrConsumer"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),s(" dfs "),n("span",{class:"token operator"},"="),s(`
        `),n("span",{class:"token punctuation"},"("),s("row"),n("span",{class:"token punctuation"},","),s(" len"),n("span",{class:"token punctuation"},","),s(" pos"),n("span",{class:"token punctuation"},","),s(" total"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Objects"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"equals"),n("span",{class:"token punctuation"},"("),s("row"),n("span",{class:"token punctuation"},","),s(" len"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                total`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" col "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" col "),n("span",{class:"token operator"},"<"),s(" len"),n("span",{class:"token punctuation"},";"),s(" col"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"int"),s(" finalCol "),n("span",{class:"token operator"},"="),s(" col"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("pos"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"anyMatch"),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token comment"},"// 同一列"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(" finalCol"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token keyword"},"double"),s(" slope "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"double"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),s("row "),n("span",{class:"token operator"},"-"),s(" p"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token punctuation"},"("),s("finalCol "),n("span",{class:"token operator"},"-"),s(" p"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token comment"},"// 同一斜线"),s(`
                    `),n("span",{class:"token keyword"},"return"),s(" slope "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"||"),s(" slope "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`

                pos`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addLast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"{"),s("row"),n("span",{class:"token punctuation"},","),s(" col"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),s("row "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" len"),n("span",{class:"token punctuation"},","),s(" pos"),n("span",{class:"token punctuation"},","),s(" total"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                pos`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeLast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"totalNQueens"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dfs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"accept"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(y,f){const e=l("CodeTabs");return u(),i("div",null,[m,k(e,{id:"41",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:o})=>[s("Rust")]),title1:a(({value:t,isActive:o})=>[s("Java")]),tab0:a(({value:t,isActive:o})=>[b]),tab1:a(({value:t,isActive:o})=>[v]),_:1})])}const C=p(d,[["render",w],["__file","52_n_queens_ii.html.vue"]]);export{C as default};
