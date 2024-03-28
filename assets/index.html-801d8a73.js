import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as r,e as i}from"./app-8743b37c.js";const n={},o=i('<h2 id="dynamic-programming" tabindex="-1"><a class="header-anchor" href="#dynamic-programming" aria-hidden="true">#</a> Dynamic Programming</h2><h3 id="what-is-dynamic-programming-dp" tabindex="-1"><a class="header-anchor" href="#what-is-dynamic-programming-dp" aria-hidden="true">#</a> What is Dynamic Programming (DP)?</h3><p><strong>Dynamic Programming (DP)</strong> is a method used in mathematics and computer science to solve complex problems by breaking them down into simpler subproblems. By solving each subproblem only once and storing the results, it avoids redundant computations, leading to more efficient solutions for a wide range of problems.</p><h3 id="how-does-dynamic-programming-dp-work" tabindex="-1"><a class="header-anchor" href="#how-does-dynamic-programming-dp-work" aria-hidden="true">#</a> How Does Dynamic Programming (DP) Work?</h3><ul><li><strong>Identify Subproblems:</strong> Divide the main problem into smaller, independent subproblems.</li><li><strong>Store Solutions:</strong> Solve each subproblem and store the solution in a table or array.</li><li><strong>Build Up Solutions:</strong> Use the stored solutions to build up the solution to the main problem.</li><li><strong>Avoid Redundancy:</strong> By storing solutions, DP ensures that each subproblem is solved only once, reducing computation time.</li></ul><h3 id="when-to-use-dynamic-programming-dp" tabindex="-1"><a class="header-anchor" href="#when-to-use-dynamic-programming-dp" aria-hidden="true">#</a> When to Use Dynamic Programming (DP)?</h3><p>Dynamic programming is an optimization technique used when solving problems that consists of the following characteristics:</p><ol><li><strong>Optimal Substructure:</strong> Optimal substructure means that we combine the optimal results of subproblems to achieve the optimal result of the bigger problem.</li><li><strong>Overlapping Subproblems:</strong> The same subproblems are solved repeatedly in different parts of the problem.</li></ol><h2 id="exercise" tabindex="-1"><a class="header-anchor" href="#exercise" aria-hidden="true">#</a> Exercise</h2><h3 id="fundamental-problems" tabindex="-1"><a class="header-anchor" href="#fundamental-problems" aria-hidden="true">#</a> Fundamental Problems</h3><p><a href="">509: Fibonacci Number</a><br><a href="">70: Climbing Stairs</a><br><a href="">1137: N-th Tribonacci Number</a><br><a href="">746: Min Cost Climbing Stairs</a><br><a href="">740: Delete and Earn</a><br><a href="">198: House Robber</a><br><a href="">343: Integer Break</a></p><h3 id="matrix" tabindex="-1"><a class="header-anchor" href="#matrix" aria-hidden="true">#</a> Matrix</h3><p><a href="">62: Unique Paths</a><br><a href="">64: Minimum Path Sum</a><br><a href="">63: Unique Paths II</a><br><a href="">120: Triangle</a><br><a href="">931: Minimum Falling Path Sum</a><br><a href="">221: Maximal Square</a></p><h3 id="knapsack-problem" tabindex="-1"><a class="header-anchor" href="#knapsack-problem" aria-hidden="true">#</a> Knapsack Problem</h3><p><a href="">416: Partition Equal Subset Sum</a><br><a href="">1049: Last Stone Weight II</a><br><a href="">494: Target Sum</a><br><a href="">474: Ones and Zeroes</a></p><h3 id="knapsack-problem-1" tabindex="-1"><a class="header-anchor" href="#knapsack-problem-1" aria-hidden="true">#</a> Knapsack Problem</h3><p><a href="">518: Coin Change II</a><br><a href="">322: Coin Change</a><br><a href="">279: Perfect Squares</a><br><a href="">377: Combination Sum IV</a><br><a href="">139: Word Break</a></p><h3 id="house-robber" tabindex="-1"><a class="header-anchor" href="#house-robber" aria-hidden="true">#</a> House Robber</h3><p><a href="">213: House Robber II</a><br><a href="">337: House Robber III</a><br><a href="">96: Unique Binary Search Trees</a><br><a href="">95: Unique Binary Search Trees II</a><br><a href="">124: Binary Tree Maximum Path Sum</a></p><h3 id="buy-and-sell-stock" tabindex="-1"><a class="header-anchor" href="#buy-and-sell-stock" aria-hidden="true">#</a> Buy and Sell Stock</h3><p><a href="">121: Best Time to Buy and Sell Stock</a><br><a href="">123: Best Time to Buy and Sell Stock III</a><br><a href="">188: Best Time to Buy and Sell Stock IV</a><br><a href="">309: Best Time to Buy and Sell Stock with Cooldown</a></p><h3 id="subsequence" tabindex="-1"><a class="header-anchor" href="#subsequence" aria-hidden="true">#</a> Subsequence</h3><p><a href="">1143: Longest Common Subsequence</a><br><a href="">1035: Uncrossed Lines</a><br><a href="">300: Longest Increasing Subsequence</a><br><a href="">673: Number of Longest Increasing Subsequence</a><br><a href="">1312: Minimum Insertion Steps to Make a String Palindrome</a><br><a href="">646: Maximum Length of Pair Chain</a><br><a href="">1218: Longest Arithmetic Subsequence of Given Difference</a><br><a href="">1027: Longest Arithmetic Subsequence</a><br><a href="">354: Russian Doll Envelopes</a><br><a href="">1964: Find the Longest Valid Obstacle Course at Each Position</a></p><h3 id="subsequence-1" tabindex="-1"><a class="header-anchor" href="#subsequence-1" aria-hidden="true">#</a> Subsequence</h3><p><a href="">674: Longest Continuous Increasing Subsequence</a><br><a href="">718: Maximum Length of Repeated Subarray</a></p><h3 id="edit-distance" tabindex="-1"><a class="header-anchor" href="#edit-distance" aria-hidden="true">#</a> Edit Distance</h3><p><a href="">392: Is Subsequence</a><br><a href="">115: Distinct Subsequences</a><br><a href="">583: Delete Operation for Two Strings</a><br><a href="">712: Minimum ASCII Delete Sum for Two Strings</a><br><a href="">72: Edit Distance</a></p><h3 id="palindrome" tabindex="-1"><a class="header-anchor" href="#palindrome" aria-hidden="true">#</a> Palindrome</h3><p><a href="">5: Longest Palindromic Substring</a><br><a href="">647: Palindromic Substrings</a><br><a href="">516: Longest Palindromic Subsequence</a></p><h3 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> Other</h3><p><a href="">2140: Solving Questions With Brainpower</a><br><a href="">2466: Count Ways To Build Good Strings</a><br><a href="">91: Decode Ways</a><br><a href="">983: Minimum Cost For Tickets</a><br><a href="">790: Domino and Tromino Tiling</a></p><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h2>',32),t=[o];function s(h,d){return a(),r("div",null,t)}const b=e(n,[["render",s],["__file","index.html.vue"]]);export{b as default};