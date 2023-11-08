import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as u,o as l,c as i,d as c,w as a,e as k,a as n,b as s}from"./app-8e5ce12e.js";const r={},d=k('<h2 id="i-problem" tabindex="-1"><a class="header-anchor" href="#i-problem" aria-hidden="true">#</a> I Problem</h2><p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return <em>an array of their intersection</em>. Each element in the result must appear as many times as it shows in both arrays and you may return the result in <strong>any order</strong> .</p><p><strong>Example 1</strong><br> Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]<br> Output: [2, 2]</p><p><strong>Example 2</strong><br> Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]<br> Output: [4, 9]<br> Explanation: [9, 4] is also accepted.</p><p><strong>Constraints</strong></p><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li><li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li></ul><p><strong>Follow Up</strong></p><ul><li>What if the given array is already sorted? How would you optimize your algorithm?</li><li>What if <code>nums1</code>&#39;s size is small compared to <code>nums2</code>&#39;s size? Which algorithm is better?</li><li>What if elements of <code>nums2</code> are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?</li></ul><p><strong>Related Topics</strong></p><ul><li>Array</li><li>Hash Table</li><li>Two Pointers</li><li>Binary Search</li><li>Sorting</li></ul><h2 id="ii-solution" tabindex="-1"><a class="header-anchor" href="#ii-solution" aria-hidden="true">#</a> II Solution</h2><h3 id="approach-1-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-1-brute-force" aria-hidden="true">#</a> Approach 1: Brute Force</h3>',12),m=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"intersect"),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" nums2"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},".."),s("nums1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(" j "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},".."),s("nums2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" nums1"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(" nums2"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
                res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                nums2`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token constant"},"MIN"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"intersect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" num1 "),n("span",{class:"token operator"},":"),s(" nums1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" nums2"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("num1 "),n("span",{class:"token operator"},"=="),s(" nums2"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("num1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                nums2`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"MIN_VALUE"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mapToInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token operator"},"::"),n("span",{class:"token function"},"intValue"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h3",{id:"approach-2-use-hash",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#approach-2-use-hash","aria-hidden":"true"},"#"),s(" Approach 2: Use Hash")],-1),y=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"intersect"),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" nums2"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" map "),n("span",{class:"token operator"},"="),s(`
        nums1
            `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"into_iter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fold"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"HashMap"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"with_capacity"),n("span",{class:"token punctuation"},"("),s("nums2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),n("span",{class:"token keyword"},"mut"),s(" map"),n("span",{class:"token punctuation"},","),s(" num"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token punctuation"},"{"),s(`
                map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"entry"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"and_modify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("v"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token operator"},"*"),s("v "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"or_insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                map
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    nums2
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"into_iter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("num"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token keyword"},"match"),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get_mut"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"None"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token class-name"},"Some"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),s("v"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token operator"},"*"),s("v "),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                count `),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"collect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"intersect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Map"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HashMap"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" num"),n("span",{class:"token operator"},":"),s(" nums1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},","),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getOrDefault"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stream"),n("span",{class:"token punctuation"},"("),s("nums2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Integer"),s(" count "),n("span",{class:"token operator"},"="),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getOrDefault"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},","),s(" count "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" count "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h3",{id:"approach-3-sorting-two-pointers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#approach-3-sorting-two-pointers","aria-hidden":"true"},"#"),s(" Approach 3: Sorting + Two Pointers")],-1),w=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"intersect"),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" nums2"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    nums1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort_unstable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    nums2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort_unstable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" i1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" i2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(" i1 "),n("span",{class:"token operator"},"<"),s(" nums1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(" i2 "),n("span",{class:"token operator"},"<"),s(" nums2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" nums1"),n("span",{class:"token punctuation"},"["),s("i1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(" nums2"),n("span",{class:"token punctuation"},"["),s("i2"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
            i2 `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(" nums1"),n("span",{class:"token punctuation"},"["),s("i1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" nums2"),n("span",{class:"token punctuation"},"["),s("i2"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
            i1 `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},"["),s("i1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            i1 `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            i2 `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"intersect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("nums2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},">")]),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" i1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" i2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("i1 "),n("span",{class:"token operator"},"<"),s(" nums1"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"&&"),s(" i2 "),n("span",{class:"token operator"},"<"),s(" nums2"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},"["),s("i1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" nums2"),n("span",{class:"token punctuation"},"["),s("i2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            i1`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},"["),s("i1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(" nums2"),n("span",{class:"token punctuation"},"["),s("i2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            i2`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},"["),s("i1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            i1`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
            i2`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mapToInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token operator"},"::"),n("span",{class:"token function"},"intValue"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(A,x){const e=u("CodeTabs");return l(),i("div",null,[d,c(e,{id:"83",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:o})=>[s("Rust")]),title1:a(({value:t,isActive:o})=>[s("Java")]),tab0:a(({value:t,isActive:o})=>[m]),tab1:a(({value:t,isActive:o})=>[b]),_:1}),v,c(e,{id:"94",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:o})=>[s("Rust")]),title1:a(({value:t,isActive:o})=>[s("Java")]),tab0:a(({value:t,isActive:o})=>[y]),tab1:a(({value:t,isActive:o})=>[h]),_:1}),f,c(e,{id:"105",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:o})=>[s("Rust")]),title1:a(({value:t,isActive:o})=>[s("Java")]),tab0:a(({value:t,isActive:o})=>[w]),tab1:a(({value:t,isActive:o})=>[g]),_:1})])}const V=p(r,[["render",_],["__file","350_intersection_of_two_arrays_ii.html.vue"]]);export{V as default};
