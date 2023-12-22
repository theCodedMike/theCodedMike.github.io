const t=JSON.parse('{"key":"v-237cbdb6","path":"/zh/algorithm/leetcode/array/904_fruit_into_baskets.html","title":"904, 水果成篮","lang":"zh-CN","frontmatter":{"title":"904, 水果成篮","icon":"discover","date":"2023-10-13T00:00:00.000Z","order":12,"sticky":true,"category":"array","tag":["medium","array","hash table","sliding window"],"description":"一、题目描述 你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组fruits表示，其中fruits[i]是第i棵树上的水果种类。 你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果： 你只有两个篮子，并且每个篮子只能装单一类型的水果。每个篮子能够装的水果总量没有限制。 你可以选择任意一棵树开始采摘，你必须从每棵树（包括开始采摘的树）上恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。 一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://thecodedmike.github.io/algorithm/leetcode/array/904_fruit_into_baskets.html"}],["meta",{"property":"og:url","content":"https://thecodedmike.github.io/zh/algorithm/leetcode/array/904_fruit_into_baskets.html"}],["meta",{"property":"og:site_name","content":"Mike的博客"}],["meta",{"property":"og:title","content":"904, 水果成篮"}],["meta",{"property":"og:description","content":"一、题目描述 你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组fruits表示，其中fruits[i]是第i棵树上的水果种类。 你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果： 你只有两个篮子，并且每个篮子只能装单一类型的水果。每个篮子能够装的水果总量没有限制。 你可以选择任意一棵树开始采摘，你必须从每棵树（包括开始采摘的树）上恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。 一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-13T09:08:00.000Z"}],["meta",{"property":"article:author","content":"Mike"}],["meta",{"property":"article:tag","content":"medium"}],["meta",{"property":"article:tag","content":"array"}],["meta",{"property":"article:tag","content":"hash table"}],["meta",{"property":"article:tag","content":"sliding window"}],["meta",{"property":"article:published_time","content":"2023-10-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-13T09:08:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"904, 水果成篮\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-13T09:08:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mike\\"}]}"]]},"headers":[{"level":2,"title":"一、题目描述","slug":"一、题目描述","link":"#一、题目描述","children":[]},{"level":2,"title":"二、题解","slug":"二、题解","link":"#二、题解","children":[{"level":3,"title":"方法 1: 暴力解法","slug":"方法-1-暴力解法","link":"#方法-1-暴力解法","children":[]},{"level":3,"title":"方法 2: 滑动窗口","slug":"方法-2-滑动窗口","link":"#方法-2-滑动窗口","children":[]}]}],"git":{"createdTime":1697118740000,"updatedTime":1697188080000,"contributors":[{"name":"mike","email":"lixiaofeng1115@outlook.com","commits":2}]},"readingTime":{"minutes":2.48,"words":743},"filePathRelative":"zh/algorithm/leetcode/array/904_fruit_into_baskets.md","localizedDate":"2023年10月13日","excerpt":"<h2> 一、题目描述</h2>\\n<p>你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组fruits表示，其中fruits[i]是第i棵树上的水果种类。</p>\\n<p>你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：</p>\\n<ul>\\n<li>你只有两个篮子，并且每个篮子只能装单一类型的水果。每个篮子能够装的水果总量没有限制。</li>\\n<li>你可以选择任意一棵树开始采摘，你必须从每棵树（包括开始采摘的树）上恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。</li>\\n<li>一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。</li>\\n</ul>","autoDesc":true}');export{t as data};