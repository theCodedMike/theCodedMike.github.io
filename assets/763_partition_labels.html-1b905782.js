const e=JSON.parse('{"key":"v-b9a1ebc6","path":"/zh/algorithm/leetcode/greedy/763_partition_labels.html","title":"763, 划分字母区间","lang":"zh-CN","frontmatter":{"title":"763, 划分字母区间","icon":"discover","date":"2024-03-21T00:00:00.000Z","order":14,"sticky":true,"category":"greedy","tag":["medium","greedy","two pointers","hash table","string"],"description":"一、题目描述 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。 返回一个表示每个字符串片段的长度的列表。 示例 1 输入: s = \\"ababcbacadefegdehijhklij\\" 输出: [9, 7, 8] 解释: 划分结果为\\"ababcbaca\\"、\\"defegde\\"、\\"hijhklij\\"。 每个字母最多出现在一个片段中。 像\\"ababcbacadefegde\\", \\"hijhklij\\"这样的划分是错误的，因为划分的片段数较少。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://thecodedmike.github.io/algorithm/leetcode/greedy/763_partition_labels.html"}],["meta",{"property":"og:url","content":"https://thecodedmike.github.io/zh/algorithm/leetcode/greedy/763_partition_labels.html"}],["meta",{"property":"og:site_name","content":"Mike的博客"}],["meta",{"property":"og:title","content":"763, 划分字母区间"}],["meta",{"property":"og:description","content":"一、题目描述 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。 返回一个表示每个字符串片段的长度的列表。 示例 1 输入: s = \\"ababcbacadefegdehijhklij\\" 输出: [9, 7, 8] 解释: 划分结果为\\"ababcbaca\\"、\\"defegde\\"、\\"hijhklij\\"。 每个字母最多出现在一个片段中。 像\\"ababcbacadefegde\\", \\"hijhklij\\"这样的划分是错误的，因为划分的片段数较少。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-22T02:56:56.000Z"}],["meta",{"property":"article:author","content":"Mike"}],["meta",{"property":"article:tag","content":"medium"}],["meta",{"property":"article:tag","content":"greedy"}],["meta",{"property":"article:tag","content":"two pointers"}],["meta",{"property":"article:tag","content":"hash table"}],["meta",{"property":"article:tag","content":"string"}],["meta",{"property":"article:published_time","content":"2024-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-22T02:56:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"763, 划分字母区间\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-22T02:56:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mike\\"}]}"]]},"headers":[{"level":2,"title":"一、题目描述","slug":"一、题目描述","link":"#一、题目描述","children":[]},{"level":2,"title":"二、题解","slug":"二、题解","link":"#二、题解","children":[{"level":3,"title":"方法 1: 贪心","slug":"方法-1-贪心","link":"#方法-1-贪心","children":[]}]}],"git":{"createdTime":1711076216000,"updatedTime":1711076216000,"contributors":[{"name":"mike","email":"lixiaofeng1115@outlook.com","commits":1}]},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"zh/algorithm/leetcode/greedy/763_partition_labels.md","localizedDate":"2024年3月21日","excerpt":"<h2> 一、题目描述</h2>\\n<p>给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。</p>\\n<p>注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。</p>\\n<p>返回一个表示每个字符串片段的长度的列表。</p>\\n<p><strong>示例 1</strong><br>\\n输入: s = \\"ababcbacadefegdehijhklij\\"<br>\\n输出: [9, 7, 8]<br>\\n解释:<br>\\n划分结果为<code>\\"ababcbaca\\"</code>、<code>\\"defegde\\"</code>、<code>\\"hijhklij\\"</code>。<br>\\n每个字母最多出现在一个片段中。<br>\\n像<code>\\"ababcbacadefegde\\"</code>, <code>\\"hijhklij\\"</code>这样的划分是错误的，因为划分的片段数较少。</p>","autoDesc":true}');export{e as data};