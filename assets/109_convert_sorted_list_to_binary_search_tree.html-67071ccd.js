const e=JSON.parse('{"key":"v-a56adbda","path":"/zh/algorithm/leetcode/binary_tree/109_convert_sorted_list_to_binary_search_tree.html","title":"109, 将有序列表转换为二叉搜索树","lang":"zh-CN","frontmatter":{"title":"109, 将有序列表转换为二叉搜索树","icon":"discover","date":"2024-01-20T00:00:00.000Z","order":38,"sticky":true,"category":"binary tree","tag":["medium","linked list","binary tree","binary search tree","divide and conquer"],"description":"一、题目描述 给定一个单链表的头节点head，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。 本题中，一个高度平衡二叉树是指一个二叉树每个节点的左右两个子树的高度差不超过1。 示例 1 输入: head = [-10, -3, 0, 5, 9] 输出: [0, -3, 9, -10, null, 5] 解释: 一个可能的答案是[0，-3, 9，-10, null, 5]，它表示所示的高度平衡的二叉搜索树。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://thecodedmike.github.io/algorithm/leetcode/binary_tree/109_convert_sorted_list_to_binary_search_tree.html"}],["meta",{"property":"og:url","content":"https://thecodedmike.github.io/zh/algorithm/leetcode/binary_tree/109_convert_sorted_list_to_binary_search_tree.html"}],["meta",{"property":"og:site_name","content":"Mike的博客"}],["meta",{"property":"og:title","content":"109, 将有序列表转换为二叉搜索树"}],["meta",{"property":"og:description","content":"一、题目描述 给定一个单链表的头节点head，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。 本题中，一个高度平衡二叉树是指一个二叉树每个节点的左右两个子树的高度差不超过1。 示例 1 输入: head = [-10, -3, 0, 5, 9] 输出: [0, -3, 9, -10, null, 5] 解释: 一个可能的答案是[0，-3, 9，-10, null, 5]，它表示所示的高度平衡的二叉搜索树。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-20T13:09:48.000Z"}],["meta",{"property":"article:author","content":"Mike"}],["meta",{"property":"article:tag","content":"medium"}],["meta",{"property":"article:tag","content":"linked list"}],["meta",{"property":"article:tag","content":"binary tree"}],["meta",{"property":"article:tag","content":"binary search tree"}],["meta",{"property":"article:tag","content":"divide and conquer"}],["meta",{"property":"article:published_time","content":"2024-01-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-20T13:09:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"109, 将有序列表转换为二叉搜索树\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-20T13:09:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mike\\"}]}"]]},"headers":[{"level":2,"title":"一、题目描述","slug":"一、题目描述","link":"#一、题目描述","children":[]},{"level":2,"title":"二、题解","slug":"二、题解","link":"#二、题解","children":[{"level":3,"title":"方法 1: 分治","slug":"方法-1-分治","link":"#方法-1-分治","children":[]},{"level":3,"title":"方法 2: 分治 + 中序遍历","slug":"方法-2-分治-中序遍历","link":"#方法-2-分治-中序遍历","children":[]}]}],"git":{"createdTime":1705756188000,"updatedTime":1705756188000,"contributors":[{"name":"mike","email":"lixiaofeng1115@outlook.com","commits":1}]},"readingTime":{"minutes":2.8,"words":841},"filePathRelative":"zh/algorithm/leetcode/binary_tree/109_convert_sorted_list_to_binary_search_tree.md","localizedDate":"2024年1月20日","excerpt":"<h2> 一、题目描述</h2>\\n<p>给定一个单链表的头节点<code>head</code>，其中的元素<strong>按升序排序</strong>，将其转换为高度平衡的二叉搜索树。</p>\\n<p>本题中，一个高度平衡二叉树是指一个二叉树<em>每个节点</em>的左右两个子树的高度差不超过<code>1</code>。</p>\\n<p><strong>示例 1</strong><br>\\n<br>\\n输入: head = [-10, -3, 0, 5, 9]<br>\\n输出: [0, -3, 9, -10, null, 5]<br>\\n解释: 一个可能的答案是[0，-3, 9，-10, null, 5]，它表示所示的高度平衡的二叉搜索树。</p>","autoDesc":true}');export{e as data};
