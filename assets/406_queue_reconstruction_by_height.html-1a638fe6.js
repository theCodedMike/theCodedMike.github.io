import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as u,o as l,c as i,d as c,w as a,e as k,a as n,b as s}from"./app-ac1c6b2c.js";const r={},d=k('<h2 id="i-problem" tabindex="-1"><a class="header-anchor" href="#i-problem" aria-hidden="true">#</a> I Problem</h2><p>You are given an array of people, <code>people</code>, which are the attributes of some people in a queue (not necessarily in order). Each <code>people[i] = [hi, ki]</code> represents the <code>iᵗʰ</code> person of height <code>hi</code> with <strong>exactly</strong> <code>ki</code> other people in front who have a height greater than or equal to <code>hi</code>.</p><p>Reconstruct and return <em>the queue that is represented by the input array <code>people</code></em>. The returned queue should be formatted as an array <code>queue</code>, where <code>queue[j] = [hj, kj]</code> is the attributes of the <code>jᵗʰ</code> person in the queue (<code>queue[0]</code> is the person at the front of the queue).</p><p><strong>Example 1</strong><br> Input: people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]<br> Output: [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]<br> Explanation:<br> Person <code>0</code> has height <code>5</code> with no other people taller or the same height in front.<br> Person <code>1</code> has height <code>7</code> with no other people taller or the same height in front.<br> Person <code>2</code> has height <code>5</code> with two persons taller or the same height in front, which is person <code>0</code> and <code>1</code>.<br> Person <code>3</code> has height <code>6</code> with one person taller or the same height in front, which is person <code>1</code>.<br> Person <code>4</code> has height <code>4</code> with four people taller or the same height in front, which are people <code>0, 1, 2, and 3</code>.<br> Person <code>5</code> has height <code>7</code> with one person taller or the same height in front, which is person <code>1</code>.<br> Hence [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]] is the reconstructed queue.</p><p><strong>Example 2</strong><br> Input: people = [[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]<br> Output: [[4, 0], [5, 0], [2, 2], [3, 2], [1, 4], [6, 0]]</p><p><strong>Constraints</strong></p><ul><li><code>1 &lt;= people.length &lt;= 2000</code></li><li><code>0 &lt;= hi &lt;= 10⁶</code></li><li><code>0 &lt;= ki &lt; people.length</code></li><li>It is guaranteed that the queue can be reconstructed.</li></ul><p><strong>Related Topics</strong></p><ul><li>Binary Indexed Tree</li><li>Segment Tree</li><li>Array</li><li>Sorting</li></ul><h2 id="ii-solution" tabindex="-1"><a class="header-anchor" href="#ii-solution" aria-hidden="true">#</a> II Solution</h2><h3 id="approach-1-consider-from-low-to-high" tabindex="-1"><a class="header-anchor" href="#approach-1-consider-from-low-to-high" aria-hidden="true">#</a> Approach 1: Consider From Low to High</h3>',11),b=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"reconstruct_queue"),n("span",{class:"token punctuation"},"("),s("people"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    people`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort_unstable_by"),n("span",{class:"token punctuation"},"("),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(" a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cmp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cmp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" len "),n("span",{class:"token operator"},"="),s(" people"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(" len"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" p "),n("span",{class:"token keyword"},"in"),s(" people "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" spaces "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},".."),s("len "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" res"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"is_empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                spaces `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(" spaces "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    res`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"reconstructQueue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" people"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s(`
            people`),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token class-name"},"Comparator"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"comparingInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" o"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(" o"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"thenComparing"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("o1"),n("span",{class:"token punctuation"},","),s(" o2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(" o2"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-"),s(" o1"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" len "),n("span",{class:"token operator"},"="),s(" people"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),s("len"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" p "),n("span",{class:"token operator"},":"),s(" people"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" spaces "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" len"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                spaces`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("spaces "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    res`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"reconstructQueue"),n("span",{class:"token punctuation"},"("),s("people "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Slice"),n("span",{class:"token punctuation"},"("),s("people"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
        a`),n("span",{class:"token punctuation"},","),s(" b "),n("span",{class:"token operator"},":="),s(" people"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" people"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"||"),s(" a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(" a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    size `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("people"),n("span",{class:"token punctuation"},")"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" p "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" people "),n("span",{class:"token punctuation"},"{"),s(`
        spaces `),n("span",{class:"token operator"},":="),s(" p"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" res"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
                spaces`),n("span",{class:"token operator"},"--"),s(`
                `),n("span",{class:"token keyword"},"if"),s(" spaces "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    res`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` p
                    `),n("span",{class:"token keyword"},"break"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h3",{id:"approach-2-consider-from-high-to-low",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#approach-2-consider-from-high-to-low","aria-hidden":"true"},"#"),s(" Approach 2: Consider From High to Low")],-1),w=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"reconstruct_queue"),n("span",{class:"token punctuation"},"("),s("people"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    people`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort_unstable_by"),n("span",{class:"token punctuation"},"("),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cmp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cmp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"with_capacity"),n("span",{class:"token punctuation"},"("),s("people"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" p "),n("span",{class:"token keyword"},"in"),s(" people "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" idx "),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),n("span",{class:"token punctuation"},";"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("idx"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"reconstructQueue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" people"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s(`
            people`),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token class-name"},"Comparator"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"comparingInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" o"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(" o"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reversed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"thenComparingInt"),n("span",{class:"token punctuation"},"("),s("o "),n("span",{class:"token operator"},"->"),s(" o"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" len "),n("span",{class:"token operator"},"="),s(" people"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),s("len"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" p "),n("span",{class:"token operator"},":"),s(" people"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),s("len"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"reconstructQueue"),n("span",{class:"token punctuation"},"("),s("people "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Slice"),n("span",{class:"token punctuation"},"("),s("people"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
        a`),n("span",{class:"token punctuation"},","),s(" b "),n("span",{class:"token operator"},":="),s(" people"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" people"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"||"),s(" a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(" a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" p "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" people "),n("span",{class:"token punctuation"},"{"),s(`
        idx `),n("span",{class:"token operator"},":="),s(" p"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
        res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),s("idx"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),s("p"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function g(_,x){const o=u("CodeTabs");return l(),i("div",null,[d,c(o,{id:"71",data:[{id:"Rust"},{id:"Java"},{id:"Go"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),title2:a(({value:t,isActive:e})=>[s("Go")]),tab0:a(({value:t,isActive:e})=>[b]),tab1:a(({value:t,isActive:e})=>[m]),tab2:a(({value:t,isActive:e})=>[v]),_:1}),h,c(o,{id:"85",data:[{id:"Rust"},{id:"Java"},{id:"Go"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),title2:a(({value:t,isActive:e})=>[s("Go")]),tab0:a(({value:t,isActive:e})=>[w]),tab1:a(({value:t,isActive:e})=>[y]),tab2:a(({value:t,isActive:e})=>[f]),_:1})])}const j=p(r,[["render",g],["__file","406_queue_reconstruction_by_height.html.vue"]]);export{j as default};