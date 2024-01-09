const e=JSON.parse('{"key":"v-6b619f4a","path":"/zh/algorithm/leetcode/binary_tree/104_maximum_depth_of_binary_tree.html","title":"104, 二叉树的最大深度","lang":"zh-CN","frontmatter":{"title":"104, 二叉树的最大深度","icon":"discover","date":"2023-12-21T00:00:00.000Z","order":13,"sticky":true,"category":"binary tree","tag":["easy","binary tree","depth first search","breadth first search"],"description":"一、题目描述 给定一个二叉树root，返回其最大深度。 二叉树的最大深度是指从根节点到最远叶子节点的最长路径上的节点数。 示例 1 输入: root = [3, 9, 20, null, null, 15, 7] 输出: 3 示例 2 输入: root = [1, null, 2] 输出: 2 提示 树中节点的数量在[0, 10⁴]区间内。 -100 &lt;= Node.val &lt;= 100","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://thecodedmike.github.io/algorithm/leetcode/binary_tree/104_maximum_depth_of_binary_tree.html"}],["meta",{"property":"og:url","content":"https://thecodedmike.github.io/zh/algorithm/leetcode/binary_tree/104_maximum_depth_of_binary_tree.html"}],["meta",{"property":"og:site_name","content":"Mike的博客"}],["meta",{"property":"og:title","content":"104, 二叉树的最大深度"}],["meta",{"property":"og:description","content":"一、题目描述 给定一个二叉树root，返回其最大深度。 二叉树的最大深度是指从根节点到最远叶子节点的最长路径上的节点数。 示例 1 输入: root = [3, 9, 20, null, null, 15, 7] 输出: 3 示例 2 输入: root = [1, null, 2] 输出: 2 提示 树中节点的数量在[0, 10⁴]区间内。 -100 &lt;= Node.val &lt;= 100"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-21T11:56:30.000Z"}],["meta",{"property":"article:author","content":"Mike"}],["meta",{"property":"article:tag","content":"easy"}],["meta",{"property":"article:tag","content":"binary tree"}],["meta",{"property":"article:tag","content":"depth first search"}],["meta",{"property":"article:tag","content":"breadth first search"}],["meta",{"property":"article:published_time","content":"2023-12-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-21T11:56:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"104, 二叉树的最大深度\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-21T11:56:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mike\\"}]}"]]},"headers":[{"level":2,"title":"一、题目描述","slug":"一、题目描述","link":"#一、题目描述","children":[]},{"level":2,"title":"二、题解","slug":"二、题解","link":"#二、题解","children":[{"level":3,"title":"方法 1: 深度优先搜索","slug":"方法-1-深度优先搜索","link":"#方法-1-深度优先搜索","children":[]},{"level":3,"title":"方法 2: 广度优先搜索","slug":"方法-2-广度优先搜索","link":"#方法-2-广度优先搜索","children":[]}]}],"git":{"createdTime":1703159790000,"updatedTime":1703159790000,"contributors":[{"name":"mike","email":"lixiaofeng1115@outlook.com","commits":1}]},"readingTime":{"minutes":1.88,"words":565},"filePathRelative":"zh/algorithm/leetcode/binary_tree/104_maximum_depth_of_binary_tree.md","localizedDate":"2023年12月21日","excerpt":"<h2> 一、题目描述</h2>\\n<p>给定一个二叉树<code>root</code>，返回其最大深度。</p>\\n<p>二叉树的<strong>最大深度</strong>是指从根节点到最远叶子节点的最长路径上的节点数。</p>\\n<p><strong>示例 1</strong><br>\\n<br>\\n输入: root = [3, 9, 20, null, null, 15, 7]<br>\\n输出: 3</p>\\n<p><strong>示例 2</strong><br>\\n输入: root = [1, null, 2]<br>\\n输出: 2</p>\\n<p><strong>提示</strong></p>\\n<ul>\\n<li>树中节点的数量在<code>[0, 10⁴]</code>区间内。</li>\\n<li><code>-100 &lt;= Node.val &lt;= 100</code></li>\\n</ul>","autoDesc":true}');export{e as data};