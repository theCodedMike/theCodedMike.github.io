import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as i,d as o,w as a,e as k,a as n,b as s}from"./app-8f575944.js";const r={},d=k('<h2 id="i-problem" tabindex="-1"><a class="header-anchor" href="#i-problem" aria-hidden="true">#</a> I Problem</h2><p>Given a string s containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p><p>An input string is valid if:</p><ol><li>Open brackets must be closed by the same type of brackets.</li><li>Open brackets must be closed in the correct order.</li><li>Every close bracket has a corresponding open bracket of the same type.</li></ol><p><strong>Example 1</strong><br> Input: s = <code>&quot;()&quot;</code><br> Output: true</p><p><strong>Example 2</strong><br> Input: s = <code>&quot;()[]{}&quot;</code><br> Output: true</p><p><strong>Example 3</strong><br> Input: s = <code>&quot;(]&quot;</code><br> Output: false</p><p><strong>Constraints</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10⁴</code></li><li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li></ul><p><strong>Related Topics</strong></p><ul><li>String</li><li>Stack</li></ul><h2 id="ii-solution" tabindex="-1"><a class="header-anchor" href="#ii-solution" aria-hidden="true">#</a> II Solution</h2><h3 id="approach-1-use-stack" tabindex="-1"><a class="header-anchor" href="#approach-1-use-stack" aria-hidden="true">#</a> Approach 1: Use Stack</h3>',13),m=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"/// Time Complexity: O(n)"),s(`
`),n("span",{class:"token comment"},"///"),s(`
`),n("span",{class:"token comment"},"/// Space Complexity: O(n)"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"is_valid"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" is_match "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("l_char"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},","),s(" r_char"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"char"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"match"),s(),n("span",{class:"token punctuation"},"("),s("l_char"),n("span",{class:"token punctuation"},","),s(" r_char"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"'('"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"')'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"'{'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'}'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"'['"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"']'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            _ `),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" ch "),n("span",{class:"token keyword"},"in"),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chars"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"match"),s(" ch "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token char"},"'('"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token char"},"'{'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token char"},"'['"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("ch"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token char"},"')'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token char"},"'}'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token char"},"']'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"match"),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"None"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token class-name"},"Some"),n("span",{class:"token punctuation"},"("),s("l_ch"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"is_match"),n("span",{class:"token punctuation"},"("),s("l_ch"),n("span",{class:"token punctuation"},","),s(" ch"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            _ `),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token macro property"},"panic!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Unsupported char: {}"'),n("span",{class:"token punctuation"},","),s(" ch"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"is_empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token class-name"},"BiFunction"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Character"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Character"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Boolean"),n("span",{class:"token punctuation"},">")]),s(" isMatch "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("l_char"),n("span",{class:"token punctuation"},","),s(" r_char"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("l_char"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token char"},"'('"),s(),n("span",{class:"token operator"},"->"),s(" r_char "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token char"},"')'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token char"},"'{'"),s(),n("span",{class:"token operator"},"->"),s(" r_char "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token char"},"'}'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token char"},"'['"),s(),n("span",{class:"token operator"},"->"),s(" r_char "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token char"},"']'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Time Complexity: O(n)"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"// Space Complexity: O(n)"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isValid"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Deque"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Character"),n("span",{class:"token punctuation"},">")]),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayDeque"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"char"),s(" ch "),n("span",{class:"token operator"},":"),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toCharArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("ch"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token char"},"'('"),n("span",{class:"token operator"},":"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token char"},"'{'"),n("span",{class:"token operator"},":"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token char"},"'['"),n("span",{class:"token operator"},":"),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("ch"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token char"},"')'"),n("span",{class:"token operator"},":"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token char"},"'}'"),n("span",{class:"token operator"},":"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token char"},"']'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("isMatch"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" ch"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(`
                `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"UnsupportedOperationException"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Unsupported char"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h3",{id:"approach-2-optimize-use-stack",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#approach-2-optimize-use-stack","aria-hidden":"true"},"#"),s(" Approach 2: Optimize Use Stack")],-1),h=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"/// Time Complexity: O(n)"),s(`
`),n("span",{class:"token comment"},"///"),s(`
`),n("span",{class:"token comment"},"/// Space Complexity: O(n + ∣Σ∣)"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"is_valid"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"HashMap"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"')'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'('"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"'}'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'{'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"']'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'['"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" ch "),n("span",{class:"token keyword"},"in"),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chars"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"match"),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("ch"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"None"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("ch"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token class-name"},"Some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("map_l_ch"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"match"),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"None"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token class-name"},"Some"),n("span",{class:"token punctuation"},"("),s("stack_l_ch"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(" map_l_ch "),n("span",{class:"token operator"},"!="),s(" stack_l_ch "),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"is_empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"// Time Complexity: O(n)"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"// Space Complexity: O(n + ∣Σ∣)"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isValid"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Deque"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Character"),n("span",{class:"token punctuation"},">")]),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayDeque"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"Map"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Character"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Character"),n("span",{class:"token punctuation"},">")]),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HashMap"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"')'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'('"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"'}'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'{'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"']'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'['"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"char"),s(" ch "),n("span",{class:"token operator"},":"),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toCharArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"containsKey"),n("span",{class:"token punctuation"},"("),s("ch"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("ch"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("ch"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(f,_){const c=l("CodeTabs");return u(),i("div",null,[d,o(c,{id:"71",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[m]),tab1:a(({value:t,isActive:e})=>[b]),_:1}),v,o(c,{id:"82",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[h]),tab1:a(({value:t,isActive:e})=>[y]),_:1})])}const C=p(r,[["render",w],["__file","20_valid_parentheses.html.vue"]]);export{C as default};