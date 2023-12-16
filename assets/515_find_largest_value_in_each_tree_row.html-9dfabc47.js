const e=JSON.parse('{"key":"v-771f6d50","path":"/zh/algorithm/leetcode/binary_tree/515_find_largest_value_in_each_tree_row.html","title":"515, 在每个树行中找最大值","lang":"zh-CN","frontmatter":{"title":"515, 在每个树行中找最大值","icon":"discover","date":"2023-12-16T00:00:00.000Z","order":9,"sticky":true,"category":"binary tree","tag":["medium","binary tree","depth first search","breadth first search"],"description":"一、题目描述 给定一棵二叉树的根节点root，请找出该二叉树中每一层的最大值。 示例 1 输入: root = [1, 3, 2, 5, 3, null, 9] 输出: [1, 3, 9] 示例 2 输入: root = [1, 2, 3] 输出: [1, 3] 提示 二叉树的节点个数的范围是[0,10⁴] -2³¹ &lt;= Node.val &lt;= 2³¹ - 1","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://thecodedmike.github.io/algorithm/leetcode/binary_tree/515_find_largest_value_in_each_tree_row.html"}],["meta",{"property":"og:url","content":"https://thecodedmike.github.io/zh/algorithm/leetcode/binary_tree/515_find_largest_value_in_each_tree_row.html"}],["meta",{"property":"og:site_name","content":"Mike的博客"}],["meta",{"property":"og:title","content":"515, 在每个树行中找最大值"}],["meta",{"property":"og:description","content":"一、题目描述 给定一棵二叉树的根节点root，请找出该二叉树中每一层的最大值。 示例 1 输入: root = [1, 3, 2, 5, 3, null, 9] 输出: [1, 3, 9] 示例 2 输入: root = [1, 2, 3] 输出: [1, 3] 提示 二叉树的节点个数的范围是[0,10⁴] -2³¹ &lt;= Node.val &lt;= 2³¹ - 1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-16T13:46:02.000Z"}],["meta",{"property":"article:author","content":"Mike"}],["meta",{"property":"article:tag","content":"medium"}],["meta",{"property":"article:tag","content":"binary tree"}],["meta",{"property":"article:tag","content":"depth first search"}],["meta",{"property":"article:tag","content":"breadth first search"}],["meta",{"property":"article:published_time","content":"2023-12-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-16T13:46:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"515, 在每个树行中找最大值\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-16T13:46:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mike\\"}]}"]]},"headers":[{"level":2,"title":"一、题目描述","slug":"一、题目描述","link":"#一、题目描述","children":[]},{"level":2,"title":"二、题解","slug":"二、题解","link":"#二、题解","children":[{"level":3,"title":"方法 1: 深度优先搜索","slug":"方法-1-深度优先搜索","link":"#方法-1-深度优先搜索","children":[]},{"level":3,"title":"方法 2: 广度优先搜索","slug":"方法-2-广度优先搜索","link":"#方法-2-广度优先搜索","children":[]}]}],"git":{"createdTime":1702734362000,"updatedTime":1702734362000,"contributors":[{"name":"mike","email":"lixiaofeng1115@outlook.com","commits":1}]},"readingTime":{"minutes":3.65,"words":1096},"filePathRelative":"zh/algorithm/leetcode/binary_tree/515_find_largest_value_in_each_tree_row.md","localizedDate":"2023年12月16日","excerpt":"<h2> 一、题目描述</h2>\\n<p>给定一棵二叉树的根节点<code>root</code>，请找出该二叉树中每一层的最大值。</p>\\n<p><strong>示例 1</strong><br>\\n<br>\\n输入: root = [1, 3, 2, 5, 3, null, 9]<br>\\n输出: [1, 3, 9]</p>\\n<p><strong>示例 2</strong><br>\\n输入: root = [1, 2, 3]<br>\\n输出: [1, 3]</p>\\n<p><strong>提示</strong></p>\\n<ul>\\n<li>二叉树的节点个数的范围是<code>[0,10⁴]</code></li>\\n<li><code>-2³¹ &lt;= Node.val &lt;= 2³¹ - 1</code></li>\\n</ul>","autoDesc":true}');export{e as data};
