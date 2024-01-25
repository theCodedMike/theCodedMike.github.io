const e=JSON.parse('{"key":"v-32c76ed1","path":"/zh/algorithm/leetcode/binary_tree/559_maximum_depth_of_n_ary_tree.html","title":"559, N叉树的最大深度","lang":"zh-CN","frontmatter":{"title":"559, N叉树的最大深度","icon":"discover","date":"2024-01-25T00:00:00.000Z","order":41,"sticky":true,"category":"binary tree","tag":["easy","tree","depth first search","breadth first search"],"description":"一、题目描述 给定一个N叉树，找到其最大深度。 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。 N叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。 示例 1 输入: root = [1, null, 3, 2, 4, null, 5, 6] 输出: 3 示例 2 输入: root = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14] 输出: 3","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://thecodedmike.github.io/algorithm/leetcode/binary_tree/559_maximum_depth_of_n_ary_tree.html"}],["meta",{"property":"og:url","content":"https://thecodedmike.github.io/zh/algorithm/leetcode/binary_tree/559_maximum_depth_of_n_ary_tree.html"}],["meta",{"property":"og:site_name","content":"Mike的博客"}],["meta",{"property":"og:title","content":"559, N叉树的最大深度"}],["meta",{"property":"og:description","content":"一、题目描述 给定一个N叉树，找到其最大深度。 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。 N叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。 示例 1 输入: root = [1, null, 3, 2, 4, null, 5, 6] 输出: 3 示例 2 输入: root = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14] 输出: 3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-25T10:00:12.000Z"}],["meta",{"property":"article:author","content":"Mike"}],["meta",{"property":"article:tag","content":"easy"}],["meta",{"property":"article:tag","content":"tree"}],["meta",{"property":"article:tag","content":"depth first search"}],["meta",{"property":"article:tag","content":"breadth first search"}],["meta",{"property":"article:published_time","content":"2024-01-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T10:00:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"559, N叉树的最大深度\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T10:00:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mike\\"}]}"]]},"headers":[{"level":2,"title":"一、题目描述","slug":"一、题目描述","link":"#一、题目描述","children":[]},{"level":2,"title":"二、题解","slug":"二、题解","link":"#二、题解","children":[{"level":3,"title":"方法 1: 深度优先搜索","slug":"方法-1-深度优先搜索","link":"#方法-1-深度优先搜索","children":[]},{"level":3,"title":"方法 2: 广度优先搜索","slug":"方法-2-广度优先搜索","link":"#方法-2-广度优先搜索","children":[]}]}],"git":{"createdTime":1706176812000,"updatedTime":1706176812000,"contributors":[{"name":"mike","email":"lixiaofeng1115@outlook.com","commits":1}]},"readingTime":{"minutes":2.72,"words":817},"filePathRelative":"zh/algorithm/leetcode/binary_tree/559_maximum_depth_of_n_ary_tree.md","localizedDate":"2024年1月25日","excerpt":"<h2> 一、题目描述</h2>\\n<p>给定一个<code>N</code>叉树，找到其最大深度。</p>\\n<p>最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。</p>\\n<p><code>N</code>叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。</p>\\n<p><strong>示例 1</strong><br>\\n<br>\\n输入: root = [1, null, 3, 2, 4, null, 5, 6]<br>\\n输出: 3</p>\\n<p><strong>示例 2</strong><br>\\n<br>\\n输入: root = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]<br>\\n输出: 3</p>","autoDesc":true}');export{e as data};
