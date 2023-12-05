import{_ as c,a as u,b as h,c as b,d as m,e as v,f as p,g as _,h as g,i as f}from"./bfs-c672bb62.js";import{_ as x}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as k,c as y,a as e,b as i,d,w as n,e as t}from"./app-71745f52.js";const A={},E=e("h2",{id:"二叉树",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#二叉树","aria-hidden":"true"},"#"),i(" 二叉树")],-1),N=e("h3",{id:"定义",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#定义","aria-hidden":"true"},"#"),i(" 定义")],-1),q={href:"https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%8F%89%E6%A0%91",target:"_blank",rel:"noopener noreferrer"},z=e("strong",null,"二叉树",-1),B=e("code",null,"左子树",-1),C=e("code",null,"右子树",-1),V=e("br",null,null,-1),w=e("img",{src:c,alt:"binary_tree",loading:"lazy"},null,-1),F=t('<h3 id="在图论中的定义" tabindex="-1"><a class="header-anchor" href="#在图论中的定义" aria-hidden="true">#</a> 在图论中的定义</h3><p>二叉树是一个连通的无环图，并且每一个顶点的度不大于3。有根二叉树还要满足根节点的度不大于2。有了根节点之后，每个顶点定义了唯一的父节点，和最多2个子节点。然而，没有足够的信息来区分左节点和右节点。如果不考虑连通性，允许图中有多个连通分量，这样的结构叫做森林。</p><h3 id="二叉树的类型" tabindex="-1"><a class="header-anchor" href="#二叉树的类型" aria-hidden="true">#</a> 二叉树的类型</h3><ol><li><p>满二叉树：每个节点要么有0个孩子节点要么有2个孩子节点的二叉树，称为<strong>满二叉树</strong>。<br><img src="'+h+'" alt="full binary tree" loading="lazy"></p></li><li><p>完美二叉树：一棵深度为<code>k</code>，且有<code>2^k − 1</code>个节点的二叉树，称为<strong>完美二叉树</strong>。这种树的特点是每一层上的节点数都是最大节点数。<br><img src="'+b+'" alt="perfect binary tree" loading="lazy"></p></li><li><p>完全二叉树：在一颗二叉树中，若除最后一层外的其余层都是满的，并且最后一层要么是满的，要么在右边缺少连续若干节点，则此二叉树为<strong>完全二叉树</strong>。<br><img src="'+m+'" alt="complete binary tree, not full binary tree" loading="lazy"></p></li><li><p>平衡二叉树：每个节点的左右两子树高度差都不超过1的<strong>平衡二叉树</strong>，常见的平衡二叉树如AVL树、红黑树等。<br><img src="'+v+'" alt="AVL" loading="lazy"></p></li><li><p>退化二叉树：许多节点只有1个孩子节点，其行为表现更像是单链表的二叉树。<br><img src="'+p+'" alt="degenerate tree" loading="lazy"></p></li></ol><h3 id="二叉树的性质" tabindex="-1"><a class="header-anchor" href="#二叉树的性质" aria-hidden="true">#</a> 二叉树的性质</h3><ul><li><p>对于高度为<code>h</code>的满二叉树，其节点总数<code>n</code>和<code>h</code>的关系为<code>2h + 1 &lt;= n &lt;= 2^(h+1) - 1</code>。根节点的高度为0。对于一颗完美二叉树，其节点总数为<code>1 + 2 + 4 + … + 2^ℎ = 2^(ℎ+1) − 1</code>。</p></li><li><p>对于有<code>n</code>个节点的完美二叉树，其叶子节点个数为<code>l = (n + 1) / 2</code>。</p></li><li><p>对于任意一颗非空二叉树，其叶子节点个数<code>l</code>与度为2的内部节点个数<code>i2</code>的关系为<code>l = i2 + 1</code>。</p></li><li><p>对于有<code>n</code>个节点的二叉树，其最小的树高为<code>ℎ = log2(n + 1) − 1</code>，此时二叉树表现为完全二叉树。</p></li><li><p>对于有<code>l</code>个叶子节点的二叉树，其高度至少是<code>ℎ = log2(l)</code>。</p></li><li><p>对于一颗节点总数为<code>n</code>、边总数为<code>e</code>的非空二叉树，则节点总数与边的关系为<code>e = n - 1</code>。</p></li><li><p>对于一颗节点总数为<code>n</code>的二叉树，其缺失的孩子节点总数为<code>n + 1</code>。</p></li><li><p>对于有<code>n</code>个节点的完全二叉树，其内部节点的个数为<code>⌊n/2⌋</code>。</p></li></ul><h3 id="二叉树的操作" tabindex="-1"><a class="header-anchor" href="#二叉树的操作" aria-hidden="true">#</a> 二叉树的操作</h3><h4 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h4><ul><li>叶子节点</li><li>内部节点<br><img src="'+_+'" alt="The process of inserting a node into a binary tree" loading="lazy"></li></ul><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4><ul><li>无孩子节点或有1个孩子节点的节点</li><li>有2个孩子节点的节点<br><img src="'+g+'" alt="The process of deleting an internal node in a binary tree" loading="lazy"></li></ul><h4 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h4><h5 id="深度优先遍历-dfs" tabindex="-1"><a class="header-anchor" href="#深度优先遍历-dfs" aria-hidden="true">#</a> 深度优先遍历（DFS）</h5><figure><img src="'+f+'" alt="depth first traversal of a binary tree" tabindex="0" loading="lazy"><figcaption>depth first traversal of a binary tree</figcaption></figure><ul><li>前序遍历(根左右), 红色●表示其访问顺序: F, B, A, D, C, E, G, I, H</li></ul>',15),I=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`procedure pre_order(node)
    if node = null
        return
    visit(node)
    pre_order(node.left)
    pre_order(node.right)
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),D=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`procedure pre_order(node)
    if node = null
        return
    stack ← empty stack
    stack.push(node)
    while not stack.isEmpty()
        node ← stack.pop()
        visit(node)
        // right child is pushed first so that left is processed first
        if node.right ≠ null
            stack.push(node.right)
        if node.left ≠ null
            stack.push(node.left)
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T=e("ul",null,[e("li",null,"中序遍历(左根右), 绿色●表示其访问顺序: A, B, C, D, E, F, G, H, I")],-1),G=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`procedure in_order(node)
    if node = null
        return
    in_order(node.left)
    visit(node)
    in_order(node.right)
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),H=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`procedure in_order(node)
    stack ← empty stack
    while not stack.isEmpty() or node ≠ null
        if node ≠ null
            stack.push(node)
            node ← node.left
        else
            node ← stack.pop()
            visit(node)
            node ← node.right
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("ul",null,[e("li",null,"后序遍历(左右根), 蓝色●表示其访问顺序: A, C, E, D, B, H, I, G, F")],-1),S=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`procedure post_order(node)
    if node = null
        return
    post_order(node.left)
    post_order(node.right)
    visit(node)
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`procedure post_order(node)
    stack ← empty stack
    lastNodeVisited ← null
    while not stack.isEmpty() or node ≠ null
        if node ≠ null
            stack.push(node)
            node ← node.left
        else
            peekNode ← stack.peek()
            // if right child exists and traversing node
            // from left child, then move right
            if peekNode.right ≠ null and lastNodeVisited ≠ peekNode.right
                node ← peekNode.right
            else
                visit(peekNode)
                lastNodeVisited ← stack.pop()
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),J=e("h5",{id:"广度优先遍历-bfs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#广度优先遍历-bfs","aria-hidden":"true"},"#"),i(" 广度优先遍历（BFS）")],-1),K=e("figure",null,[e("img",{src:u,alt:"breadth first search",tabindex:"0",loading:"lazy"}),e("figcaption",null,"breadth first search")],-1),M=e("ul",null,[e("li",null,"层序遍历: F, B, G, A, D, I, C, E, H")],-1),O=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`procedure level_order(node)
    queue ← empty queue
    queue.enqueue(node)
    while not queue.isEmpty()
        node ← queue.dequeue()
        visit(node)
        if node.left ≠ null
            queue.enqueue(node.left)
        if node.right ≠ null
            queue.enqueue(node.right)
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),P=t('<h2 id="习题" tabindex="-1"><a class="header-anchor" href="#习题" aria-hidden="true">#</a> 习题</h2><h3 id="二叉树的遍历方式" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历方式" aria-hidden="true">#</a> 二叉树的遍历方式</h3><p>[144: 二叉树的前序遍历]<br> [145: 二叉树的后序遍历]<br> [94: 二叉树的中序遍历]<br> [102: 二叉树的层序遍历]</p><h3 id="二叉树的属性" tabindex="-1"><a class="header-anchor" href="#二叉树的属性" aria-hidden="true">#</a> 二叉树的属性</h3><p>[101: 对称二叉树]<br> [104: 二叉树的最大深度]<br> [111: 二叉树的最小深度]<br> [222: 完全二叉树的节点个数]<br> [110: 平衡二叉树]<br> [257: 二叉树的所有路径]<br> [404: 左叶子之和]<br> [513: 找树左下角的值]<br> [112: 路径总和]</p><h3 id="二叉树的修改与构造" tabindex="-1"><a class="header-anchor" href="#二叉树的修改与构造" aria-hidden="true">#</a> 二叉树的修改与构造</h3><p>[226: 翻转二叉树]<br> [105: 从中序与先序遍历序列构造二叉树]<br> [106: 从中序与后序遍历序列构造二叉树]<br> [654: 最大二叉树]<br> [617: 合并二叉树]</p><h3 id="二叉搜索树的属性" tabindex="-1"><a class="header-anchor" href="#二叉搜索树的属性" aria-hidden="true">#</a> 二叉搜索树的属性</h3><p>[700: 二叉搜索树中的搜索]<br> [98: 验证二叉搜索树]<br> [530: 二叉搜索树的最小绝对差]<br> [501: 二叉搜索树中的众数]<br> [538: 把二叉搜索树转换为累加树]</p><h3 id="二叉树公共祖先问题" tabindex="-1"><a class="header-anchor" href="#二叉树公共祖先问题" aria-hidden="true">#</a> 二叉树公共祖先问题</h3><p>[236: 二叉树的最近公共祖先]<br> [235: 二叉搜索树的最近公共祖先]</p><h3 id="二叉搜索树的修改与构造" tabindex="-1"><a class="header-anchor" href="#二叉搜索树的修改与构造" aria-hidden="true">#</a> 二叉搜索树的修改与构造</h3><p>[701: 二叉搜索树中的插入操作]<br> [450: 删除二叉搜索树中的节点]<br> [669: 修剪二叉搜索树]<br> [108: 将有序数组转换为二叉搜索树]<br> [109: 将有序列表转换为二叉搜索树]</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>',14);function Q(R,U){const o=r("ExternalLinkIcon"),s=r("CodeTabs");return k(),y("div",null,[E,N,e("p",null,[i("在计算机科学中，"),e("a",q,[z,d(o)]),i("是每个节点最多只有两个分支（即不存在分支度大于2的节点）的树结构。通常分支被称作"),B,i("或"),C,i("。二叉树的分支具有左右次序，不能随意颠倒。"),V,w]),F,d(s,{id:"139",data:[{id:"递归实现"},{id:"迭代实现"}]},{title0:n(({value:a,isActive:l})=>[i("递归实现")]),title1:n(({value:a,isActive:l})=>[i("迭代实现")]),tab0:n(({value:a,isActive:l})=>[I]),tab1:n(({value:a,isActive:l})=>[D]),_:1}),T,d(s,{id:"154",data:[{id:"递归实现"},{id:"迭代实现"}]},{title0:n(({value:a,isActive:l})=>[i("递归实现")]),title1:n(({value:a,isActive:l})=>[i("迭代实现")]),tab0:n(({value:a,isActive:l})=>[G]),tab1:n(({value:a,isActive:l})=>[H]),_:1}),L,d(s,{id:"169",data:[{id:"递归实现"},{id:"迭代实现"}]},{title0:n(({value:a,isActive:l})=>[i("递归实现")]),title1:n(({value:a,isActive:l})=>[i("迭代实现")]),tab0:n(({value:a,isActive:l})=>[S]),tab1:n(({value:a,isActive:l})=>[j]),_:1}),J,K,M,d(s,{id:"190",data:[{id:"迭代实现"}]},{title0:n(({value:a,isActive:l})=>[i("迭代实现")]),tab0:n(({value:a,isActive:l})=>[O]),_:1}),P])}const Z=x(A,[["render",Q],["__file","index.html.vue"]]);export{Z as default};
