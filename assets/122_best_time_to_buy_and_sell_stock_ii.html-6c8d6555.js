const e=JSON.parse('{"key":"v-1a201ee6","path":"/zh/algorithm/leetcode/greedy/122_best_time_to_buy_and_sell_stock_ii.html","title":"122, 买卖股票的最佳时机II","lang":"zh-CN","frontmatter":{"title":"122, 买卖股票的最佳时机II","icon":"discover","date":"2024-03-05T00:00:00.000Z","order":6,"sticky":true,"category":"greedy","tag":["medium","greedy","array","dynamic programming"],"description":"一、题目描述 给你一个整数数组prices，其中prices[i]表示某支股票第i天的价格。 在每一天，你可以决定是否购买和/或出售股票。你在任何时候最多只能持有一股股票。你也可以先购买，然后在同一天出售。 返回你能获得的最大利润。 示例 1 输入: prices = [7, 1, 5, 3, 6, 4] 输出: 7 解释: 在第2天（股票价格 = 1）的时候买入，在第3天（股票价格 = 5）的时候卖出，这笔交易所能获得利润 = 5 - 1 = 4。随后，在第4天（股票价格 = 3）的时候买入，在第5天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。总利润为4 + 3 = 7。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://thecodedmike.github.io/algorithm/leetcode/greedy/122_best_time_to_buy_and_sell_stock_ii.html"}],["meta",{"property":"og:url","content":"https://thecodedmike.github.io/zh/algorithm/leetcode/greedy/122_best_time_to_buy_and_sell_stock_ii.html"}],["meta",{"property":"og:site_name","content":"Mike的博客"}],["meta",{"property":"og:title","content":"122, 买卖股票的最佳时机II"}],["meta",{"property":"og:description","content":"一、题目描述 给你一个整数数组prices，其中prices[i]表示某支股票第i天的价格。 在每一天，你可以决定是否购买和/或出售股票。你在任何时候最多只能持有一股股票。你也可以先购买，然后在同一天出售。 返回你能获得的最大利润。 示例 1 输入: prices = [7, 1, 5, 3, 6, 4] 输出: 7 解释: 在第2天（股票价格 = 1）的时候买入，在第3天（股票价格 = 5）的时候卖出，这笔交易所能获得利润 = 5 - 1 = 4。随后，在第4天（股票价格 = 3）的时候买入，在第5天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。总利润为4 + 3 = 7。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-05T15:48:39.000Z"}],["meta",{"property":"article:author","content":"Mike"}],["meta",{"property":"article:tag","content":"medium"}],["meta",{"property":"article:tag","content":"greedy"}],["meta",{"property":"article:tag","content":"array"}],["meta",{"property":"article:tag","content":"dynamic programming"}],["meta",{"property":"article:published_time","content":"2024-03-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-05T15:48:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"122, 买卖股票的最佳时机II\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-05T15:48:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mike\\"}]}"]]},"headers":[{"level":2,"title":"一、题目描述","slug":"一、题目描述","link":"#一、题目描述","children":[]},{"level":2,"title":"二、题解","slug":"二、题解","link":"#二、题解","children":[{"level":3,"title":"方法 1: 贪心","slug":"方法-1-贪心","link":"#方法-1-贪心","children":[]},{"level":3,"title":"方法 2: 动态规划","slug":"方法-2-动态规划","link":"#方法-2-动态规划","children":[]}]}],"git":{"createdTime":1709653719000,"updatedTime":1709653719000,"contributors":[{"name":"mike","email":"lixiaofeng1115@outlook.com","commits":1}]},"readingTime":{"minutes":2.01,"words":603},"filePathRelative":"zh/algorithm/leetcode/greedy/122_best_time_to_buy_and_sell_stock_ii.md","localizedDate":"2024年3月5日","excerpt":"<h2> 一、题目描述</h2>\\n<p>给你一个整数数组<code>prices</code>，其中<code>prices[i]</code>表示某支股票第<code>i</code>天的价格。</p>\\n<p>在每一天，你可以决定是否购买和/或出售股票。你在任何时候<strong>最多</strong>只能持有<strong>一股</strong>股票。你也可以先购买，然后在<strong>同一天</strong>出售。</p>\\n<p>返回<em>你能获得的<strong>最大</strong>利润</em>。</p>\\n<p><strong>示例 1</strong><br>\\n输入: prices = [7, 1, 5, 3, 6, 4]<br>\\n输出: 7<br>\\n解释: 在第<code>2</code>天（股票价格 = 1）的时候买入，在第<code>3</code>天（股票价格 = 5）的时候卖出，这笔交易所能获得利润 = <code>5 - 1 = 4</code>。随后，在第<code>4</code>天（股票价格 = 3）的时候买入，在第<code>5</code>天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = <code>6 - 3 = 3</code>。总利润为<code>4 + 3 = 7</code>。</p>","autoDesc":true}');export{e as data};
