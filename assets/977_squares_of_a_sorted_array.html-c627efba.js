import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as i,d as c,w as a,e as r,a as n,b as s}from"./app-afb2394a.js";const k={},d=r('<h2 id="i-problem" tabindex="-1"><a class="header-anchor" href="#i-problem" aria-hidden="true">#</a> I Problem</h2><p>Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.</p><p><strong>Example 1:</strong><br> Input: nums = [-4, -1, 0, 3, 10]<br> Output: [0, 1, 9, 16, 100]<br> Explanation: After squaring, the array becomes [16, 1, 0, 9, 100]. After sorting, it becomes [0, 1, 9, 16, 100].</p><p><strong>Example 2:</strong><br> Input: nums = [-7, -3, 2, 3, 11]<br> Output: [4, 9, 9, 49, 121]</p><p><strong>Constraints:</strong></p><ul><li>1 &lt;= nums.length &lt;= 10⁴</li><li>-10⁴ &lt;= nums[i] &lt;= 10⁴</li><li>nums is sorted in non-decreasing order.</li></ul><p><strong>Follow up:</strong><br> Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?</p><p><strong>Related Topics</strong></p><ul><li>Array</li><li>Two Pointers</li><li>Sorting</li></ul><h2 id="ii-solution" tabindex="-1"><a class="header-anchor" href="#ii-solution" aria-hidden="true">#</a> II Solution</h2><h3 id="approach-1-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-1-brute-force" aria-hidden="true">#</a> Approach 1: Brute Force</h3>',11),m=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"sorted_squares"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"into_iter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("v"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(" v "),n("span",{class:"token operator"},"*"),s(" v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"collect"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),s("_"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort_unstable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"sortedSquares"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        nums`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*="),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" nums"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h3",{id:"approach-2-two-pointers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#approach-2-two-pointers","aria-hidden":"true"},"#"),s(" Approach 2: Two Pointers")],-1),f=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"sorted_squares"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//Self::two_pointers_1(nums)"),s(`
    `),n("span",{class:"token keyword"},"Self"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"two_pointers_2"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"two_pointers_1"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" len "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" right "),n("span",{class:"token operator"},"="),s(" len "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" len"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" idx "),n("span",{class:"token operator"},"="),s(" len "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"loop"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" square_of_left "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" square_of_right "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" square_of_left "),n("span",{class:"token operator"},">"),s(" square_of_right "),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" square_of_left"),n("span",{class:"token punctuation"},";"),s(`
            idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            left `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(" square_of_left "),n("span",{class:"token operator"},"<"),s(" square_of_right "),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" square_of_right"),n("span",{class:"token punctuation"},";"),s(`
            idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            right `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" square_of_right"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" left "),n("span",{class:"token operator"},"=="),s(" right "),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" square_of_left"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" left "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"=="),s(" right "),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            right `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            left `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"two_pointers_2"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" right "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" idx "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token macro property"},"vec!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"while"),s(" left "),n("span",{class:"token operator"},"<="),s(" right "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" square_of_left "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("left "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" square_of_right "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("right "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        res`),n("span",{class:"token punctuation"},"["),s("idx "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"usize"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"if"),s(" square_of_left "),n("span",{class:"token operator"},">"),s(" square_of_right "),n("span",{class:"token punctuation"},"{"),s(`
            left `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            square_of_left
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            right `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            square_of_right
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        idx `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    res
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"sortedSquares"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//return this.twoPointers1(nums);"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"twoPointers2"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"twoPointers1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),s("nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" right "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" idx "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" square_of_left "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*"),s(" nums"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" square_of_right "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*"),s(" nums"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("square_of_left "),n("span",{class:"token operator"},">"),s(" square_of_right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" square_of_left"),n("span",{class:"token punctuation"},";"),s(`
            idx`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
            left`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("square_of_left "),n("span",{class:"token operator"},"<"),s(" square_of_right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" square_of_right"),n("span",{class:"token punctuation"},";"),s(`
            idx`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
            right`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" square_of_right"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"=="),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            idx`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" square_of_left"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"=="),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            idx`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
            left`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
            right`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"twoPointers2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),s("nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" idx "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" left "),n("span",{class:"token operator"},"<="),s(" right"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" square_of_left "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*"),s(" nums"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" square_of_right "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*"),s(" nums"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("square_of_left "),n("span",{class:"token operator"},">"),s(" square_of_right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" square_of_left"),n("span",{class:"token punctuation"},";"),s(`
            left`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res`),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" square_of_right"),n("span",{class:"token punctuation"},";"),s(`
            right`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function y(_,h){const o=l("CodeTabs");return u(),i("div",null,[d,c(o,{id:"61",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[m]),tab1:a(({value:t,isActive:e})=>[b]),_:1}),v,c(o,{id:"72",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[f]),tab1:a(({value:t,isActive:e})=>[w]),_:1})])}const x=p(k,[["render",y],["__file","977_squares_of_a_sorted_array.html.vue"]]);export{x as default};