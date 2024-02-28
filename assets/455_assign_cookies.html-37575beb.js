import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as i,d as c,w as a,e as k,a as n,b as s}from"./app-f3510c46.js";const r={},d=k('<h2 id="一、题目描述" tabindex="-1"><a class="header-anchor" href="#一、题目描述" aria-hidden="true">#</a> 一、题目描述</h2><p>假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。</p><p>对每个孩子<code>i</code>，都有一个胃口值<code>g[i]</code>，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干<code>j</code>，都有一个尺寸<code>s[j]</code>。如果<code>s[j] &gt;= g[i]</code>，我们可以将这个饼干<code>j</code>分配给孩子<code>i</code>，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。</p><p><strong>示例 1</strong><br> 输入: g = [1, 2, 3], s = [1, 1]<br> 输出: 1<br> 解释: 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。所以你应该输出1。</p><p><strong>示例 2</strong><br> 输入: g = [1, 2], s = [1, 2, 3]<br> 输出: 2<br> 解释: 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。你拥有的饼干数量和尺寸都足以让所有孩子满足。所以你应该输出2.</p><p><strong>提示</strong></p><ul><li><code>1 &lt;= g.length &lt;= 3 * 10⁴</code></li><li><code>0 &lt;= s.length &lt;= 3 * 10⁴</code></li><li><code>1 &lt;= g[i], s[j] &lt;= 2³¹ - 1</code></li></ul><p><strong>相关主题</strong></p><ul><li>贪心</li><li>数组</li><li>双指针</li><li>排序</li></ul><h2 id="二、题解" tabindex="-1"><a class="header-anchor" href="#二、题解" aria-hidden="true">#</a> 二、题解</h2><h3 id="方法-1-暴力解法" tabindex="-1"><a class="header-anchor" href="#方法-1-暴力解法" aria-hidden="true">#</a> 方法 1: 暴力解法</h3>',11),m=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"find_content_children"),n("span",{class:"token punctuation"},"("),s("g"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort_unstable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" map "),n("span",{class:"token operator"},"="),s(` g
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"into_iter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fold"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"BTreeMap"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),n("span",{class:"token keyword"},"mut"),s(" map"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token punctuation"},"{"),s(`
            map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"entry"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"and_modify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("c"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token operator"},"*"),s("c "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"or_insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            map
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" j "),n("span",{class:"token keyword"},"in"),s(" s "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"is_empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token class-name"},"Some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"mut"),s(" entry"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"first_entry"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" j "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token operator"},"*"),s("entry"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"key"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                res `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token operator"},"*"),s("entry"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get_mut"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"*"),s("entry"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    entry`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"remove_entry"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"findContentChildren"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" g"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"TreeMap"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"TreeMap"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},":"),s(" g"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getOrDefault"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"int"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" j "),n("span",{class:"token operator"},":"),s(" s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token class-name"},"Integer"),s(" key "),n("span",{class:"token operator"},"="),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"firstKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},">="),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
            map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h3",{id:"方法-2-双指针-贪心算法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法-2-双指针-贪心算法","aria-hidden":"true"},"#"),s(" 方法 2: 双指针 + 贪心算法")],-1),y=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"find_content_children"),n("span",{class:"token punctuation"},"("),s("g"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    g`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort_unstable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort_unstable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("g"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"mut"),s(" i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"mut"),s(" j"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(" i "),n("span",{class:"token operator"},"<"),s(" m "),n("span",{class:"token operator"},"&&"),s(" j "),n("span",{class:"token operator"},"<"),s(" n "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" j "),n("span",{class:"token operator"},"<"),s(" n "),n("span",{class:"token operator"},"&&"),s(" g"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(" s"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
            j `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" j "),n("span",{class:"token operator"},"<"),s(" n "),n("span",{class:"token punctuation"},"{"),s(`
            res `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        i `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        j `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"findContentChildren"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" g"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("g"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"int"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" m "),n("span",{class:"token operator"},"="),s(" g"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" n "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" m "),n("span",{class:"token operator"},"&&"),s(" j "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"<"),s(" n "),n("span",{class:"token operator"},"&&"),s(" g"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(" s"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            j`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(g,h){const o=l("CodeTabs");return u(),i("div",null,[d,c(o,{id:"66",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[m]),tab1:a(({value:t,isActive:e})=>[b]),_:1}),v,c(o,{id:"77",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[y]),tab1:a(({value:t,isActive:e})=>[f]),_:1})])}const x=p(r,[["render",w],["__file","455_assign_cookies.html.vue"]]);export{x as default};