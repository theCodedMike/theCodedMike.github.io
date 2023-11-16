import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as r,c as u,a as n,b as s,d as o,w as a}from"./app-449a43fe.js";const k={},d=n("h2",{id:"一、题目描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、题目描述","aria-hidden":"true"},"#"),s(" 一、题目描述")],-1),_=n("p",null,[s("编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组"),n("code",null,"s"),s("的形式给出。")],-1),h={href:"https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"原地",-1),b=n("code",null,"O(1)",-1),v=n("p",null,[n("strong",null,"示例 1"),n("br"),s(' 输入: s = ["h", "e", "l", "l", "o"]'),n("br"),s(' 输出: ["o", "l", "l", "e", "h"]')],-1),w=n("p",null,[n("strong",null,"示例 2"),n("br"),s(' 输入: s = ["H", "a", "n", "n", "a", "h"]'),n("br"),s(' 输出: ["h", "a", "n", "n", "a", "H"]')],-1),g=n("p",null,[n("strong",null,"提示")],-1),f=n("li",null,"1 <= s.length <= 10⁵",-1),y=n("code",null,"s[i]",-1),E={href:"https://zh.wikipedia.org/wiki/ASCII#%E5%8F%AF%E6%98%BE%E7%A4%BA%E5%AD%97%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"},A=n("strong",null,"可显示字符",-1),x=n("p",null,[n("strong",null,"相关主题")],-1),C=n("ul",null,[n("li",null,"双指针"),n("li",null,"字符串")],-1),B=n("h2",{id:"二、题解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二、题解","aria-hidden":"true"},"#"),s(" 二、题解")],-1),I=n("h3",{id:"方法-1-双指针",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法-1-双指针","aria-hidden":"true"},"#"),s(" 方法 1: 双指针")],-1),V=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"reverse_string"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token keyword"},"mut"),s(),n("span",{class:"token class-name"},"Vec"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"char"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" l "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" r "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"while"),s(" l "),n("span",{class:"token operator"},"<"),s(" r "),n("span",{class:"token punctuation"},"{"),s(`
        s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),s("l"),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        l `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        r `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"reverseString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" l "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" r "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("l "),n("span",{class:"token operator"},"<"),s(" r"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"char"),s(" temp "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"["),s("l"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        s`),n("span",{class:"token punctuation"},"["),s("l"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"["),s("r"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        s`),n("span",{class:"token punctuation"},"["),s("r"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
        l`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        r`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function F(N,S){const l=c("ExternalLinkIcon"),i=c("CodeTabs");return r(),u("div",null,[d,_,n("p",null,[s("不要给另外的数组分配额外的空间，你必须"),n("a",h,[m,o(l)]),s("修改输入数组，使用"),b,s("的额外空间解决这一问题。")]),v,w,g,n("ul",null,[f,n("li",null,[y,s(" 都是ASCII码表中的"),n("a",E,[A,o(l)])])]),x,C,B,I,o(i,{id:"51",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:e,isActive:t})=>[s("Rust")]),title1:a(({value:e,isActive:t})=>[s("Java")]),tab0:a(({value:e,isActive:t})=>[V]),tab1:a(({value:e,isActive:t})=>[j]),_:1})])}const H=p(k,[["render",F],["__file","344_reverse_string.html.vue"]]);export{H as default};
