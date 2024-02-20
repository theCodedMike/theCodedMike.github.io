import{_ as l,a as p}from"./search_in_a_binary_search_tree_2_700-d28eb98e.js";import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as k,d as c,w as a,e as d,a as n,b as s}from"./app-8f575944.js";const m={},v=d('<h2 id="一、题目描述" tabindex="-1"><a class="header-anchor" href="#一、题目描述" aria-hidden="true">#</a> 一、题目描述</h2><p>给定二叉搜索树（BST）的根节点<code>root</code>和一个整数值<code>val</code>。</p><p>你需要在BST中找到节点值等于<code>val</code>的节点。返回以该节点为根的子树。如果节点不存在，则返回<code>null</code>。</p><p><strong>示例 1</strong><br><img src="'+l+'" alt="" loading="lazy"><br> 输入: root = [4, 2, 7, 1, 3], val = 2<br> 输出: [2, 1, 3]</p><p><strong>示例 2</strong><br><img src="'+p+'" alt="" loading="lazy"><br> 输入: root = [4, 2, 7, 1, 3], val = 5<br> 输出: []</p><p><strong>提示</strong></p><ul><li>树中节点数在<code>[1, 5000]</code>范围内</li><li><code>1 &lt;= Node.val &lt;= 10⁷</code></li><li><code>root</code>是二叉搜索树</li><li><code>1 &lt;= val &lt;= 10⁷</code></li></ul><p><strong>相关主题</strong></p><ul><li>树</li><li>二叉搜索树</li><li>二叉树</li></ul><h2 id="二、题解" tabindex="-1"><a class="header-anchor" href="#二、题解" aria-hidden="true">#</a> 二、题解</h2>',10),b=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token attribute attr-name"},"#[derive(Debug, PartialEq, Eq)]"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token type-definition class-name"},"TreeNode"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" val"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" left"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Rc"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"RefCell"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" right"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Rc"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"RefCell"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"impl"),s(),n("span",{class:"token class-name"},"TreeNode"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token attribute attr-name"},"#[inline]"),s(`
    `),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"new"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"Self"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"TreeNode"),s(),n("span",{class:"token punctuation"},"{"),s(`
            val`),n("span",{class:"token punctuation"},","),s(`
            left`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"None"),n("span",{class:"token punctuation"},","),s(`
            right`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"None"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"TreeNode"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" val"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"TreeNode"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"TreeNode"),s(" right"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"="),s(" val"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" val"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" left"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"="),s(" val"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" left"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" right"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h3",{id:"方法-1-递归",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法-1-递归","aria-hidden":"true"},"#"),s(" 方法 1: 递归")],-1),h=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"///"),s(`
`),n("span",{class:"token comment"},"/// 时间复杂度: O(n)"),s(`
`),n("span",{class:"token comment"},"/// 空间复杂度: O(n)"),s(`
`),n("span",{class:"token comment"},"///"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"search_bst"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Rc"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"RefCell"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Rc"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"RefCell"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"SEARCH"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Rc"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"RefCell"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Rc"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"RefCell"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(`
        `),n("span",{class:"token closure-params"},[n("span",{class:"token closure-punctuation punctuation"},"|"),s("root"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token closure-punctuation punctuation"},"|")]),s(),n("span",{class:"token keyword"},"match"),s(" root "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"None"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token class-name"},"None"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token class-name"},"Some"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" curr_val "),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"borrow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"borrow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"let"),s(" right "),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"borrow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

                `),n("span",{class:"token keyword"},"if"),s(" val "),n("span",{class:"token operator"},">"),s(" curr_val "),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token constant"},"SEARCH"),n("span",{class:"token punctuation"},"("),s("right"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(" val "),n("span",{class:"token operator"},"<"),s(" curr_val "),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token constant"},"SEARCH"),n("span",{class:"token punctuation"},"("),s("left"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token class-name"},"Some"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token constant"},"SEARCH"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token class-name"},"BiFunction"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},">")]),s(" search "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("curr "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("val "),n("span",{class:"token operator"},">"),s(" curr"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("search"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("val "),n("span",{class:"token operator"},"<"),s(" curr"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("search"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" curr"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token doc-comment comment"},`/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */`),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"TreeNode"),s(),n("span",{class:"token function"},"searchBST"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("search"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("h3",{id:"方法-2-迭代",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法-2-迭代","aria-hidden":"true"},"#"),s(" 方法 2: 迭代")],-1),g=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"///"),s(`
`),n("span",{class:"token comment"},"/// 时间复杂度: O(n)"),s(`
`),n("span",{class:"token comment"},"/// 空间复杂度: O(1)"),s(`
`),n("span",{class:"token comment"},"///"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"search_bst"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"mut"),s(" root"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Rc"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"RefCell"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"Rc"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"RefCell"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token class-name"},"Some"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(" root "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" curr_val "),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"borrow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"borrow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" right "),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"borrow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(" val "),n("span",{class:"token operator"},">"),s(" curr_val "),n("span",{class:"token punctuation"},"{"),s(`
            root `),n("span",{class:"token operator"},"="),s(" right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(" val "),n("span",{class:"token operator"},"<"),s(" curr_val "),n("span",{class:"token punctuation"},"{"),s(`
            root `),n("span",{class:"token operator"},"="),s(" left"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Some"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token class-name"},"None"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */`),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"TreeNode"),s(),n("span",{class:"token function"},"searchBST"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TreeNode"),s(" root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("val "),n("span",{class:"token operator"},">"),s(" root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            root `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("val "),n("span",{class:"token operator"},"<"),s(" root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            root `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" root"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function T(R,A){const o=i("CodeTabs");return r(),k("div",null,[v,c(o,{id:"63",data:[{id:"Rust节点定义"},{id:"Java节点定义"}]},{title0:a(({value:t,isActive:e})=>[s("Rust节点定义")]),title1:a(({value:t,isActive:e})=>[s("Java节点定义")]),tab0:a(({value:t,isActive:e})=>[b]),tab1:a(({value:t,isActive:e})=>[w]),_:1}),y,c(o,{id:"74",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[h]),tab1:a(({value:t,isActive:e})=>[f]),_:1}),_,c(o,{id:"85",data:[{id:"Rust"},{id:"Java"}]},{title0:a(({value:t,isActive:e})=>[s("Rust")]),title1:a(({value:t,isActive:e})=>[s("Java")]),tab0:a(({value:t,isActive:e})=>[g]),tab1:a(({value:t,isActive:e})=>[N]),_:1})])}const S=u(m,[["render",T],["__file","700_search_in_a_binary_search_tree.html.vue"]]);export{S as default};