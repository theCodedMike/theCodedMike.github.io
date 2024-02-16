---
title: Backtracking
icon: discover
date: 2024-01-25
dir:
  order: 8
category: leetcode
tag: backtracking
sticky: false
---

## Backtracking
**Backtracking** is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time (by time, here, is referred to the time elapsed till reaching any level of the search tree).

There are three types of problems in backtracking:
- **Decision Problem**: In this, we search for a feasible solution.
- **Optimization Problem**: In this, we search for the best solution.
- **Enumeration Problem**: In this, we find all feasible solutions.

The backtracking algorithm template is as follows:
```text
void backtracking(params) {
    if (terminate condition) {
        store result;
        return;
    }

    for (elem : elems) {
        process elem;
        backtracking(params); // recursion
        backtracking;
    }
}
```


## Exercise
### Combinations
[77: Combinations](77_combinations.md)
[17: Letter Combinations of a Phone Number](17_letter_combinations_of_a_phone_number.md)
[39: Combination Sum](39_combination_sum.md)
[40: Combination Sum II](40_combination_sum_ii.md)
[216: Combination Sum III](216_combination_sum_iii.md)

### Partitioning
[131: Palindrome Partitioning](131_palindrome_partitioning.md)
[93: Restore IP Addresses](93_restore_ip_addresses.md)

### Subsets
[78: Subsets](78_subsets.md)
[90: Subsets II](90_subsets_ii.md)

### Permutations
[46: Permutations](46_permutations.md)
[47: Permutations II](47_permutations_ii.md)

### Chessboard
[51: N-Queens](51_n_queens.md)
[52: N-Queens II](52_n_queens_ii.md)
[36: Valid Sudoku](36_valid_sudoku.md)
[37: Sudoku Solver]

### Other
[491: Non-decreasing Subsequences]
[332: Reconstruct Itinerary]


## Summary