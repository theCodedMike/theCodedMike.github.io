import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as i,d as c,w as a,e as k,a as n,b as s}from"./app-20b3f173.js";const r={},d=k('<h2 id="i-problem" tabindex="-1"><a class="header-anchor" href="#i-problem" aria-hidden="true">#</a> I Problem</h2><p>Given two strings s and t, return true if they are equal when both are typed into empty text editors. &#39;#&#39; means a backspace character.</p><p>Note that after backspacing an empty text, the text will continue empty.</p><p><strong>Example 1:</strong><br> Input: s = &quot;ab#c&quot;, t = &quot;ad#c&quot;<br> Output: true<br> Explanation: Both s and t become &quot;ac&quot;.</p><p><strong>Example 2:</strong><br> Input: s = &quot;ab##&quot;, t = &quot;c#d#&quot;<br> Output: true<br> Explanation: Both s and t become &quot;&quot;.</p><p><strong>Example 3:</strong><br> Input: s = &quot;a#c&quot;, t = &quot;b&quot;<br> Output: false<br> Explanation: s becomes &quot;c&quot; while t becomes &quot;b&quot;.</p><p><strong>Constraints:</strong></p><ul><li>1 &lt;= s.length, t.length &lt;= 200</li><li>s and t only contain lowercase letters and &#39;#&#39; characters.</li></ul><p><strong>Follow up:</strong><br> Can you solve it in O(n) time and O(1) space?</p><p><strong>Related Topics</strong></p><ul><li>Two Pointers</li><li>String</li><li>Stack</li><li>Simulation</li></ul><h2 id="ii-solution" tabindex="-1"><a class="header-anchor" href="#ii-solution" aria-hidden="true">#</a> II Solution</h2><h3 id="approach-1-build-string" tabindex="-1"><a class="header-anchor" href="#approach-1-build-string" aria-hidden="true">#</a> Approach 1: Build String</h3>',13),m=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"///  Time Complexity: O(M+N)"),s(`
`),n("span",{class:"token comment"},"///"),s(`
`),n("span",{class:"token comment"},"/// Space Complexity: O(M+N)"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"backspace_compare"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(" t"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" build "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),n("span",{class:"token keyword"},"str"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"for"),s(" c "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token keyword"},"str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chars"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"match"),s(" c "),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token char"},"'#'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                _ `),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        res
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"backspaceCompare"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" t"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Function"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},">")]),s(" build "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" str"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Stack"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Character"),n("span",{class:"token punctuation"},">")]),s(" chars "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Stack"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"char"),s(" ch "),n("span",{class:"token operator"},":"),s(" str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toCharArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("ch "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token char"},"'#'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("chars"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    chars`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                chars`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("ch"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),s("chars"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" build"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"equals"),n("span",{class:"token punctuation"},"("),s("build"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h3",{id:"approach-2-two-pointers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#approach-2-two-pointers","aria-hidden":"true"},"#"),s(" Approach 2: Two Pointers")],-1),w=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"///  Time Complexity: O(M+N)"),s(`
`),n("span",{class:"token comment"},"///"),s(`
`),n("span",{class:"token comment"},"/// Space Complexity: O(1)"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"backspace_compare"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(" t"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" s_idx "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" t_idx "),n("span",{class:"token operator"},"="),s(" t"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" s_sharp_count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" t_sharp_count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"while"),s(" s_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" t_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" s_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"index"),n("span",{class:"token punctuation"},"("),s("s_idx "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),n("span",{class:"token punctuation"},".."),s("s_idx "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"#"'),s(),n("span",{class:"token punctuation"},"{"),s(`
                s_sharp_count `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                s_idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(" s_sharp_count "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
                s_sharp_count `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                s_idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"while"),s(" t_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" t"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"index"),n("span",{class:"token punctuation"},"("),s("t_idx "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),n("span",{class:"token punctuation"},".."),s("t_idx "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"#"'),s(),n("span",{class:"token punctuation"},"{"),s(`
                t_sharp_count `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                t_idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(" t_sharp_count "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
                t_sharp_count `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                t_idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// If two characters are different"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" s_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" t_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(` 
           s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"index"),n("span",{class:"token punctuation"},"("),s("s_idx "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),n("span",{class:"token punctuation"},".."),s("s_idx "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(" t"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"index"),n("span",{class:"token punctuation"},"("),s("t_idx "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),n("span",{class:"token punctuation"},".."),s("t_idx "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// If char vs nothing"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("s_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token punctuation"},"("),s("t_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        s_idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        t_idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"backspaceCompare"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" t"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" s_idx "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"length"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" t_idx "),n("span",{class:"token operator"},"="),s(" t"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"length"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" s_sharp_count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" t_sharp_count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("s_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" t_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("s_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("s_idx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token char"},"'#'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                s_sharp_count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
                s_idx`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("s_sharp_count "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                s_sharp_count`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
                s_idx`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("t_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("t_idx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token char"},"'#'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                t_sharp_count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
                t_idx`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("t_sharp_count "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                t_sharp_count`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
                t_idx`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// If two characters are different"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("s_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" t_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("s_idx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(" t"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("t_idx"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// If char vs nothing"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("s_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token punctuation"},"("),s("t_idx "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        s_idx`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
        t_idx`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function y(h,f){const o=l("CodeTabs");return u(),i("div",null,[d,c(o,{id:"67",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[m]),tab1:a(({value:t,isActive:e})=>[b]),_:1}),v,c(o,{id:"78",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[w]),tab1:a(({value:t,isActive:e})=>[_]),_:1})])}const S=p(r,[["render",y],["__file","844_backspace_string_compare.html.vue"]]);export{S as default};
